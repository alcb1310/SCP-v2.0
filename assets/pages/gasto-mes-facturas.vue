<template>
    <div>
        <label for="obra" class="form-label">Obra</label>
        <select
            name="obra"
            id="obra-vue"
            class="select form-select"
            @change="selectObra"
        >
            <option value="">--- Seleccione una Obra ---</option>
            <option v-for="obra in obras" :key="obra['@id']" :value="obra.id">
                {{ obra.nombre }}
            </option>
        </select>

        <label for="fecha" class="form-label">Fecha</label>
        <input
            type="date"
            name="fecha"
            id="fecha"
            v-model="fecha"
            class="form-control"
        />

        <label for="nivel" class="form-label">Nivel</label>
        <select
            name="nivel"
            id="nivel-vue"
            class="select form-select"
            @change="selectNivel"
        >
            <option value="">--- Seleccione un nivel ---</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>

        <button
            class="btn btn-primary float-end mt-3 mb-4"
            @click="buscaPartidas"
        >
            Buscar
        </button>
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
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Detalle Facturas</h5>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
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
import { fetchReporteGastadoMes } from '@/services/reportes-service';

export default {
    name: 'GastoMes',
    data() {
        return {
            fecha: null,
            selectedNivel: null,
            obras: null,
            selectedObra: null,
            partidas: null,
            partidaSelected: null,
        };
    },
    async created() {
        const obraResponse = await fetchObras();

        this.obras = obraResponse.data['hydra:member'];
    },
    methods: {
        selectNivel() {
            this.selectedNivel = document.getElementById('nivel-vue').value;
        },
        selectObra() {
            this.selectedObra = document.getElementById('obra-vue').value;
        },
        async buscaPartidas() {
            const partidasFetched = await fetchReporteGastadoMes(
                this.selectedObra,
                this.fecha,
                this.selectedNivel
            );
            this.partidas = partidasFetched.data;
        },
        openModal(partida) {
            this.partidaSelected = partida;
        },
        closeModal() {
            this.partidaSelected = null;
        },
    },
};
</script>
