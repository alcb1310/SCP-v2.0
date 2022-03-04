<script>
import { Line } from 'vue-chartjs';

export default {
  name: 'LineGraph',
  extends: Line,
  data() {
    return {
      myChart: null,
    };
  },
  props: ['chartdata', 'options'],
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
