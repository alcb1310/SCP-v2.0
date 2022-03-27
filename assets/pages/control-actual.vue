<template>
    <div>
        <div class="row">
            <div class="col-sm-8 offset-sm-2">
                <div class="form-group border shadow p-4">
                    <div class="row">
                        <div class="col-sm-2 offset-sm-10">
                            <button
                                class="btn btn-primary float-end mb-2"
                                @click="buscaDatos($event)"
                            >
                                Buscar
                            </button>
                        </div>
                    </div>
                    <div class="form-group row p-2">
                        <div class="col-sm-1">
                            <label
                                for="obra-vue"
                                class="form-label col-form-label"
                            >
                                Obra
                            </label>
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
                                    :value="obra['@id']"
                                >
                                    {{ obra.nombre }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row p-2">
                        <div class="col-sm-1">
                            <label for="nivel" class="from-label">Nivel:</label>
                        </div>
                        <div class="col-sm-11">
                            <select
                                name="nivel-vue"
                                id="nivel-vue"
                                class="form-control"
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
                    <div
                        id="obra-vueFeedback"
                        v-show="!isValid"
                        class="invalid-feedback"
                    >
                        {{ error }}
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="mt-4 shadow border" v-if="controlActual">
                    <display-control :presupuestos="controlActual" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchPresupuesto } from '@/services/control-actual-service';
import { fetchObras } from '@/services/obra-service';
import displayControl from '@/components/displayControl.vue';
import { filterData } from '@/helpers/filter';

export default {
    name: 'ControlActual',
    components: {
        displayControl,
    },
    data() {
        return {
            controlActual: null,
            obras: null,
            obraSelected: '',
            error: '',
        };
    },
    async created() {
        const obraResponse = await fetchObras();

        // console.log(obraResponse.data['hydra:member']);
        this.obras = obraResponse.data['hydra:member'];
    },
    methods: {
        selectedObra(event) {
            this.obraSelected = document.getElementById('obra-vue').value;
        },

        async buscaDatos(event) {
            console.log(this.obraSelected);
            if (!this.obraSelected) {
                alert('Seleccione una obra');
            }

            const nivel = document.getElementById('nivel-vue').value;
            const presupuestoResponse = await fetchPresupuesto(
                this.obraSelected
            );

            this.controlActual = filterData(
                presupuestoResponse.data['hydra:member'],
                nivel
            );
        },
    },
    computed: {
        isValid() {
            return !this.error;
        },
    },
};
</script>
