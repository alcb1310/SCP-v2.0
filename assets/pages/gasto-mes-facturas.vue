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
                    <td>&nbsp;</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="partida in partidas" :key="partida.codigo">
                    <td>{{ partida.codigo }}</td>
                    <td>{{ partida.nombre }}</td>
                    <td align="right">
                        {{ parseFloat(partida.total).toFixed(2) }}
                    </td>
                    <td align="center">
                        <a
                            class="btn btn-link"
                            @click="openModal(partida.codigo)"
                        >
                            <span class="fa-solid fa-magnifying-glass"></span>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
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
        openModal(event) {
            console.log(event);
        },
    },
};
</script>
