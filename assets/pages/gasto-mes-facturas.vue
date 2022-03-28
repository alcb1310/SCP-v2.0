<template>
    <div>
        <div class="row">
            <div class="col-sm-8 offset-sm-2">
                <h3>Gastado en el Mes</h3>
                <div class="form-group shadow border p-4">
                    <div class="row">
                        <div class="col-sm-1 form-label col-form-label">
                            <label for="obra" class="form-label">Obra</label>
                        </div>
                        <div class="col-sm-11">
                            <select
                                name="obra"
                                id="obra-vue"
                                class="select form-select"
                                v-model.number="selectedObra"
                            >
                                <option value="0">
                                    --- Seleccione una Obra ---
                                </option>
                                <option
                                    v-for="obra in obras"
                                    :key="obra['@id']"
                                    :value="obra.id"
                                >
                                    {{ obra.nombre }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-1 form-label col-form-label">
                            <label for="fecha" class="form-label">Fecha</label>
                        </div>
                        <div class="col-sm-5">
                            <input
                                type="date"
                                name="fecha"
                                id="fecha"
                                v-model="fecha"
                                class="form-control"
                            />
                        </div>
                        <div class="col-sm-1 form-label col-form-label">
                            <label for="nivel" class="form-label">Nivel</label>
                        </div>
                        <div class="col-sm-5">
                            <select
                                name="nivel"
                                id="nivel-vue"
                                class="select form-select"
                                v-model.number="selectedNivel"
                            >
                                <option value="0">
                                    --- Seleccione un nivel ---
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 offset-sm-8">
                            <button
                                class="btn btn-primary"
                                @click="buscaPartidas"
                            >
                                Buscar
                            </button>
                            <a
                                :href="url"
                                class="btn btn-success"
                                id="js-export-excel"
                            >
                                <span class="fa-solid fa-file-excel"></span>
                            </a>
                            <a href="/" class="btn btn-secondary">Regresar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <table v-if="partidas" class="table table-striped table-hover mt-4">
            <thead>
                <tr>
                    <td align="center">C&oacute;digo</td>
                    <td align="center">Nombre</td>
                    <td align="center">Total</td>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="partida in partidas"
                    :key="partida.codigo"
                    @click="openModal(partida.codigo)"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    <td>{{ partida.codigo }}</td>
                    <td>{{ partida.nombre }}</td>
                    <td align="right">
                        {{ parseFloat(partida.total).toFixed(2) }}
                    </td>
                </tr>
            </tbody>
        </table>
        <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
        >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Detalle Facturas</h5>
                    </div>
                    <div class="modal-body">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <td align="center">C&oacute;digo</td>
                                    <td align="center">Nombre</td>
                                    <td align="center">Proveedor</td>
                                    <td align="center">Fecha</td>
                                    <td align="center">Factura</td>
                                    <td align="center">Total</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(factura, key) in facturas"
                                    :key="key"
                                >
                                    <td>{{ factura.partidacod }}</td>
                                    <td>{{ factura.partidanombre }}</td>
                                    <td>{{ factura.proveedornombre }}</td>
                                    <td>
                                        {{ factura.fecha }}
                                    </td>
                                    <td>{{ factura.numero }}</td>
                                    <td align="right">
                                        {{
                                            parseFloat(factura.total).toFixed(2)
                                        }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                            @click="closeModal()"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchObras } from '@/services/obra-service';
import moment from 'moment';

import {
    fetchReporteGastadoMes,
    fetchFacturasGastadoMes,
} from '@/services/reportes-service';

export default {
    name: 'GastoMes',
    data() {
        return {
            fecha: null,
            selectedNivel: null,
            obras: null,
            selectedObra: null,
            partidas: null,
            facturas: null,
        };
    },
    computed: {
        url() {
            if (this.selectedObra === 0 || this.selectedObra === '') {
                return '#';
            }
            if (this.selectedNivel === 0 || this.selectedNivel === '') {
                return '#';
            }
            if (this.fecha === null || this.fecha === '') {
                return '#';
            }
            return `/exports/excel/gasto-mes/${this.selectedObra}/${this.fecha}/${this.selectedNivel}`;
        },
    },
    async created() {
        const obraResponse = await fetchObras();

        this.obras = obraResponse.data['hydra:member'];
    },
    methods: {
        async buscaPartidas() {
            const partidasFetched = await fetchReporteGastadoMes(
                this.selectedObra,
                this.fecha,
                this.selectedNivel
            );
            this.partidas = partidasFetched.data;
        },
        async openModal(partida) {
            const facturasFetched = await fetchFacturasGastadoMes(
                this.selectedObra,
                this.fecha,
                partida
            );
            this.facturas = facturasFetched.data;
            this.facturas.forEach((factura) => {
                const date = moment(factura.fecha.date).format('YYYY-MM-DD');
                factura.fecha = date;
            });
        },
        closeModal() {
            this.facturas = null;
        },
    },
};
</script>
