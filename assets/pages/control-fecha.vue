<template>
  <div>
    <div class="form-group border shadow p-4">
      <button
        class="btn btn-primary float-end mb-2"
        @click="buscaDatos($event)"
      >
        Buscar
      </button>
      <form>
        <div class="form-row">
          <div class="col">
            <label for="obra-vue" class="form-label">Obra</label>
            <select
              name="obra-vue"
              id="obra-vue"
              @change="selectedObra($event)"
              class="form-select select2"
            >
              <option value="">--- Seleccione una obra ---</option>
              <option v-for="obra in obras" :key="obra['@id']" :value="obra.id">
                {{ obra.nombre }}
              </option>
            </select>
          </div>
          <div class="col">
            <label for="fecha" class="form-label">Fecha:</label>
            <input
              type="date"
              name="fecha"
              id="fecha"
              v-model="fecha"
              class="form-control"
            />
          </div>
          <div class="col">
            <label for="nivel" class="from-label">Nivel:</label>
            <select name="nivel-vue" id="nivel-vue" class="form-control">
              <option value="">--- Seleccione un nivel ---</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div id="obra-vueFeedback" v-show="!isValid" class="invalid-feedback">
            {{ error }}
          </div>
        </div>
      </form>
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
              Obra: <span class="text text-success">{{ nombreObra }}</span>
            </p>
          </div>
          <div class="col-3">
            <p>
              Fecha: <span class="text text-success">{{ fecha }}</span>
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
