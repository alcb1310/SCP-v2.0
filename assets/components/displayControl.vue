<template>
  <div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <td rowspan="2" align="center" class="align-middle">Partida</td>
          <td colspan="3" align="center">Inicial</td>
          <td colspan="2" align="center">Rendido</td>
          <td colspan="3" align="center">Por Gastar</td>
          <td rowspan="2" align="center" class="align-middle">
            Presupuesto Actualizado
          </td>
        </tr>
        <tr>
          <td align="center">Cantidad</td>
          <td align="center">Unitario</td>
          <td align="center">Total</td>
          <td align="center">Cantidad</td>
          <td align="center">Total</td>
          <td align="center">Cantidad</td>
          <td align="center">Unitario</td>
          <td align="center">Total</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="presupuesto in presupuestos" :key="presupuesto['@id']">
          <td>{{ presupuesto.partida.nombre }}</td>
          <td align="right">
            {{ presupuesto.cantini ? format(presupuesto.cantini) : '' }}
          </td>
          <td align="right">
            {{ presupuesto.costoini ? format(presupuesto.costoini) : '' }}
          </td>
          <td align="right">{{ format(presupuesto.totalini) }}</td>
          <td align="right">
            {{ presupuesto.rendidocant ? format(presupuesto.rendidocant) : '' }}
          </td>
          <td align="right">{{ format(presupuesto.rendidotot) }}</td>
          <td align="right">
            {{ presupuesto.porgascan ? format(presupuesto.porgascan) : '' }}
          </td>
          <td align="right">
            {{ presupuesto.porgascost ? format(presupuesto.porgascost) : '' }}
          </td>
          <td align="right">{{ format(presupuesto.porgastot) }}</td>
          <td align="right">{{ format(presupuesto.presactu) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import formatPrice from '@/helpers/format-price.js';

export default {
  name: 'DisplayControl',
  props: {
    presupuestos: {
      type: Array,
      default: null,
    },
  },
  methods: {
    format(value) {
      return formatPrice(value);
    },
  },
};
</script>
