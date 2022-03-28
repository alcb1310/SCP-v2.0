<template>
    <div>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th rowspan="2" align="center">C&oacute;digo</th>
                    <th rowspan="2" align="center">Partida</th>
                    <th colspan="3" align="center">Inicial</th>
                    <th colspan="2" align="center">Rendido</th>
                    <th colspan="3" align="center">Por Gastar</th>
                    <th rowspan="2" align="center" class="align-middle">
                        Presupuesto Actualizado
                    </th>
                </tr>
                <tr>
                    <th align="center">Cantidad</th>
                    <th align="center">Unitario</th>
                    <th align="center">Total</th>
                    <th align="center">Cantidad</th>
                    <th align="center">Total</th>
                    <th align="center">Cantidad</th>
                    <th align="center">Unitario</th>
                    <th align="center">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="presupuesto in presupuestos"
                    :key="presupuesto['@id']"
                >
                    <td>{{ presupuesto.partida.codigo }}</td>
                    <td>{{ presupuesto.partida.nombre }}</td>
                    <td align="right">
                        {{
                            presupuesto.cantini
                                ? format(presupuesto.cantini)
                                : ''
                        }}
                    </td>
                    <td align="right">
                        {{
                            presupuesto.costoini
                                ? format(presupuesto.costoini)
                                : ''
                        }}
                    </td>
                    <td align="right">{{ format(presupuesto.totalini) }}</td>
                    <td align="right">
                        {{
                            presupuesto.rendidocant
                                ? format(presupuesto.rendidocant)
                                : ''
                        }}
                    </td>
                    <td align="right">{{ format(presupuesto.rendidotot) }}</td>
                    <td align="right">
                        {{
                            presupuesto.porgascan
                                ? format(presupuesto.porgascan)
                                : ''
                        }}
                    </td>
                    <td align="right">
                        {{
                            presupuesto.porgascost
                                ? format(presupuesto.porgascost)
                                : ''
                        }}
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
