<template>
    <div>
        <div class="row">
            <div class="col-sm-8 offset-sm-2">
                <div class="form-groupborder shadow p-4">
                    <form>
                        <div class="row">
                            <div class="col-sm-1 col-form-label">
                                <label for="obra-vue" class="form-label"
                                    >Obra</label
                                >
                            </div>
                            <div class="col-sm-11">
                                <select
                                    name="obra-vue"
                                    id="obra-vue"
                                    @change="selectedObra($event)"
                                    class="form-select select2"
                                >
                                    <option value="">
                                        --- Seleccione una obra ---
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
                            <div class="col-sm-1 col-form-label">
                                <label for="fecha" class="form-label"
                                    >Fecha:</label
                                >
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
                            <div class="col-sm-1 col-form-label">
                                <label for="nivel" class="from-label"
                                    >Nivel:</label
                                >
                            </div>
                            <div class="col-sm-5">
                                <select
                                    name="nivel-vue"
                                    id="nivel-vue"
                                    class="form-select"
                                    v-model="nivel"
                                >
                                    <option value="">
                                        --- Seleccione un nivel ---
                                    </option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col"></div>
                            <div
                                id="obra-vueFeedback"
                                v-show="!isValid"
                                class="invalid-feedback"
                            >
                                {{ error }}
                            </div>
                        </div>
                    </form>
                    <div class="row mt-3">
                        <div class="col-sm-4 offset-sm-8">
                            <button
                                class="btn btn-primary"
                                @click="buscaDatos($event)"
                            >
                                Buscar
                            </button>
                            <a
                                :href="downloadLink"
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
        <div class="mt-4 shadow border" v-if="controlActual">
            <div class="pt-4 ps-4">
                <div class="row">
                    <div class="col">
                        <p>Control Hist&oacute;rico</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-9">
                        <p>
                            Obra:
                            <span class="text text-success">{{
                                nombreObra
                            }}</span>
                        </p>
                    </div>
                    <div class="col-3">
                        <p>
                            Fecha:
                            <span class="text text-success">{{ fecha }}</span>
                        </p>
                    </div>
                </div>
            </div>
            <display-control :presupuestos="controlActual" />
        </div>
    </div>
</template>

<script>
import { fetchPresupuestoDate } from '@/services/control-actual-service';
import { fetchObras } from '@/services/obra-service';
import DisplayControl from '@/components/displayControl.vue';
import { filterObra, filterData } from '@/helpers/filter';

export default {
    name: 'ControlActual',
    components: {
        DisplayControl,
    },
    data() {
        return {
            controlActual: null,
            obras: null,
            obraSelected: '',
            error: '',
            fecha: null,
            nivel: '',
        };
    },
    async created() {
        const obraResponse = await fetchObras();

        this.obras = obraResponse.data['hydra:member'];
    },
    methods: {
        selectedObra(event) {
            this.obraSelected = document.getElementById('obra-vue').value;
        },

        async buscaDatos(event) {
            if (!this.obraSelected) {
                alert('Seleccione una obra');
            }

            const presupuestoResponse = await fetchPresupuestoDate(
                this.obraSelected,
                fecha.value
            );

            //  console.log(presupuestoResponse);

            const presReduc = filterObra(
                presupuestoResponse.data['hydra:member'],
                this.obraSelected
            );

            this.controlActual = filterData(
                presReduc,
                document.getElementById('nivel-vue').value
            );
        },

        filterNivel() {
            return;
        },
    },
    computed: {
        downloadLink() {
            if (this.obraSelected === '') {
                return '#';
            }
            if (this.fecha === '') {
                return '#';
            }
            if (this.nivel === '') {
                return '#';
            }
            const url =
                '/exports/excel/control/' +
                this.obraSelected +
                '/' +
                this.fecha +
                '/' +
                this.nivel;
            return url;
        },
        isValid() {
            return !this.error;
        },
        nombreObra() {
            var e = document.getElementById('obra-vue');
            var text = e.options[e.selectedIndex].text;
            return text;
        },
    },
};
</script>
