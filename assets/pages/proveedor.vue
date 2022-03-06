<template>
  <div class="mt-6 border shadow">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <td>Obra</td>
          <td>Fecha</td>
          <td>N&uacute;mero</td>
          <td>Total</td>
          <td colspan="3">Detalle</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(factura, key) in facturas" :key="key">
          <td>{{ factura.obra.nombre }}</td>
          <td>{{ dateFormat(factura.fecha) }}</td>
          <!-- <td>{{ factura.fecha }}</td> -->
          <td>{{ factura.numero }}</td>
          <td align="right">{{ format(factura.total) }}</td>
          <td colspan="3">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <td>C&oacute;digo</td>
                  <td>Partida</td>
                  <td>Total</td>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(detalle, idx) in factura.detalleFacturas"
                  :key="idx"
                >
                  <td>{{ detalle.partida.codigo }}</td>
                  <td>{{ detalle.partida.nombre }}</td>
                  <td align="right">{{ format(detalle.total) }}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { fetchProveedor } from '@/services/proveedor-service';
import formatDate from '@/helpers/format-date';
import formatPrice from '@/helpers/format-price.js';

export default {
  name: 'Proveedor',
  data() {
    return {
      facturas: null,
      proveedores: null,
      proveedorIRI: window.proveedorId,
    };
  },
  async created() {
    this.proveedores = await fetchProveedor(this.proveedorIRI);

    this.facturas = this.proveedores.data.facturas;
  },
  methods: {
    format(value) {
      return formatPrice(value);
    },
    dateFormat(date) {
      return formatDate(date);
    },
  },
};
</script>
