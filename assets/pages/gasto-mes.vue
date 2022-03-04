<template>
  <div class="p-4 m-4">
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="obra" class="form-label">Obra:</label>
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
      </div>
    </div>
    <div class="mt-3 float-end">
      <button class="btn btn-primary" @click="getData">Buscar</button>
      <a href="/" class="btn btn-primary">Regresar</a>
    </div>

    <div class="row row-cols-1 m-4 p-4 border border-2 border-dark">
      <div class="col">
        <line-graph v-if="showGraph" />
      </div>
    </div>
  </div>
</template>

<script>
import LineGraph from '@/components/lineGraph.vue';
import { fetchObras } from '@/services/obra-service';

export default {
  name: 'GastadoPorMes',
  components: {
    LineGraph,
  },
  data() {
    return {
      obras: null,
      obraSelected: '',
      showGraph: false,
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
    getData() {
      if (!this.obraSelected) {
        alert('Seleccione una obra');
        this.showGraph = false;
        return;
      }
      console.log('click');
    },
  },
};
</script>
