<template>
  <div>
    <div class="form-group">
      <label for="obra-vue">Obra</label>
      <select
        name="obra-vue"
        id="obra-vue"
        @change="selectedObra($event)"
        class="form-select select2"
      >
        <option value="">--- Seleccione una obra ---</option>
        <option v-for="obra in obras" :key="obra['@id']" :value="obra['@id']">
          {{ obra.nombre }}
        </option>
      </select>
      <div id="obra-vueFeedback" v-show="!isValid" class="invalid-feedback">
        {{ error }}
      </div>
      <button class="btn btn-success float-end m-4" @click="buscaDatos($event)">
        Buscar
      </button>
    </div>

    <display-control :presupuestos="controlActual" />
  </div>
</template>

<script>
import { fetchPresupuesto } from '@/services/control-actual-service';
import { fetchObras } from '@/services/obra-service';
import displayControl from '../components/displayControl.vue';

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
      console.log(event.target.value);
      this.obraSelected = document.getElementById('obra-vue').value;
    },

    async buscaDatos(event) {
      console.log(this.obraSelected);
      if (!this.obraSelected) {
        alert('Seleccione una obra');
      }

      const presupuestoResponse = await fetchPresupuesto(this.obraSelected);

      this.controlActual = presupuestoResponse.data['hydra:member'];
      console.log(this.controlActual);
    },
  },
  computed: {
    isValid() {
      return !this.error;
    },
  },
};
</script>
