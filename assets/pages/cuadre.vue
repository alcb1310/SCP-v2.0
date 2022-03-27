<template>
    <div>
        <div class="row">
            <div class="col-sm-8 offset-sm-2">
                <h3>Cuadre</h3>
                <div class="form-group border shadow p-4">
                    <div class="row">
                        <div class="col-sm-1 form-label col-form-label">
                            <label for="obra-vue">Obra</label>
                        </div>
                        <div class="col-sm-11">
                            <select
                                id="obra-vue"
                                class="form-select"
                                v-model="obraSelected"
                            >
                                <option value="">
                                    --- Seleccione una obra ---
                                </option>
                                <option
                                    v-for="obra in obras"
                                    :key="obra.id"
                                    :value="obra.id"
                                >
                                    {{ obra.nombre }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-1 form-label col-form-label">
                            <label for="fecha">Fecha</label>
                        </div>
                        <div class="col-sm-11">
                            <input
                                type="date"
                                id="fecha"
                                class="form-control"
                                v-model="fechaSelected"
                            />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-4 offset-sm-8">
                            <button
                                class="btn btn-primary"
                                @click="buscaCuadre"
                            >
                                Buscar
                            </button>
                            <a
                                :href="url"
                                class="btn btn-primary"
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
        <div class="row" v-if="reporteData">
            <div class="col">
                <table class="table table-striped table-hover caption-top">
                    <caption>
                        <p>Facturas del mes:</p>
                        <p>
                            Total:
                            {{ formattedPrice(totalPagado) }}
                        </p>
                    </caption>
                    <thead>
                        <tr>
                            <th align="center">Proveedor</th>
                            <th align="center">N&uacute;mero</th>
                            <th align="center">Fecha</th>
                            <th align="center">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(data, index) in reporteData" :key="index">
                            <td>{{ data.proveedor }}</td>
                            <td>{{ data.numero }}</td>
                            <td>{{ formattedDate(data.fecha) }}</td>
                            <td align="right">
                                {{ formattedPrice(data.total) }}
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3" align="right">Total</td>
                            <td align="right">
                                {{ formattedPrice(totalPagado) }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchObras } from '@/services/obra-service';
import { fetchCuadre } from '@/services/factura-service';
import formatDate from '@/helpers/format-date';
import formatPrice from '@/helpers/format-price';

export default {
    name: 'Cuadre',
    data() {
        return {
            obras: null,
            obraSelected: '',
            fechaSelected: '',
            reporteData: null,
        };
    },
    async created() {
        const obrasFetched = await fetchObras();
        this.obras = obrasFetched.data['hydra:member'];
    },
    computed: {
        url() {
            if (this.obraSelected === '') {
                return '#';
            }
            if (this.fechaSelected === '') {
                return '#';
            }

            return `/exports/excel/cuadre/${this.obraSelected}/${this.fechaSelected}`;
        },
        totalPagado() {
            let total = 0;
            for (let i = 0; i < this.reporteData.length; i++) {
                total += this.reporteData[i].total;
            }
            return total;
        },
    },
    methods: {
        formattedDate(date) {
            return formatDate(date.date);
        },
        formattedPrice(price) {
            return formatPrice(price);
        },
        async buscaCuadre() {
            const cuadreFetched = await fetchCuadre(
                this.obraSelected,
                this.fechaSelected
            );
            this.reporteData = cuadreFetched.data;
        },
    },
};
</script>
