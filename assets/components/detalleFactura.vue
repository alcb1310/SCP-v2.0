<template>
    <div class="mt-3">
        <div class="row">
            <div class="col-sm-2 offset-sm-10">
                <button
                    class="btn btn-primary mb-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    :disabled="buttonDisabled"
                >
                    Agregar Detalle
                </button>
            </div>
        </div>
        <table v-if="detalles" class="table table-striped table-hover">
            <thead>
                <tr>
                    <td align="center">C&oacute;digo</td>
                    <td align="center">Partida</td>
                    <td align="center">Cantidad</td>
                    <td align="center">Unitario</td>
                    <td align="center">Total</td>
                    <td>&nbsp;</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="detalle in detalles" :key="detalle['@id']">
                    <td>{{ detalle.partida.codigo }}</td>
                    <td>{{ detalle.partida.nombre }}</td>
                    <td align="right">{{ format(detalle.cantidad) }}</td>
                    <td align="right">{{ format(detalle.unitario) }}</td>
                    <td align="right">{{ format(detalle.total) }}</td>
                    <td align="center">
                        <a :href="url(factura, detalle.partida.id)">
                            <span class="fa-solid fa-trash-can"></span>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>

        <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
        >
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Detalle Facturas</h5>
                    </div>
                    <div class="modal-body">
                        <p v-if="errors.length" style="color: red">
                            <ul style="list-style-type: none">
                                <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
                            </ul>
                        </p>
                        <div class="form-group row">
                            <div class="col-sm-3 col-form-label">
                                <label for="partida-vue" class="form-label"
                                    >Partidas</label
                                >
                            </div>
                            <div class="col-sm-8">
                                <select
                                    name="partida"
                                    id="partida-vue"
                                    class="form-select select2"
                                >
                                    <option value="">
                                        --- Seleccione una partida ---
                                    </option>
                                    <option
                                        v-for="partidainvue in partidas"
                                        :key="partidainvue.id"
                                        :value="partidainvue.id"
                                    >
                                        {{ partidainvue.nombre }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row mt-2">
                            <div class="col-sm-3 col-form-label">
                                <label for="cantidad-vue">Cantidad</label>
                            </div>
                            <div class="col-sm-8">
                                <input
                                    type="text"
                                    name="cantidad"
                                    id="cantidad-vue"
                                    class="form-control"
                                    v-model="cantidad"
                                    @change="calculaTotal"
                                />
                            </div>
                        </div>
                        <div class="form-group row mt-2">
                            <div class="col-sm-3 col-form-label">
                                <label for="unitario-vue">Unitario</label>
                            </div>
                            <div class="col-sm-8">
                                <input
                                    type="text"
                                    name="unitario"
                                    id="unitario-vue"
                                    class="form-control"
                                    v-model="unitario"
                                    @change="calculaTotal"
                                />
                            </div>
                        </div>
                        <div class="form-group row mt-2">
                            <div class="col-sm-3 col-form-label">
                                <label for="total-vue">Total</label>
                            </div>
                            <div class="col-sm-8">
                                <input
                                    type="text"
                                    name="total"
                                    id="total-modal-vue"
                                    class="form-control"
                                    v-model="total"
                                    disabled
                                />
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-primary"
                            @click="grabaDetalle"
                        >
                            Grabar
                        </button>
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import formatPrice from '@/helpers/format-price';
import { grabaDetalleFactura } from '@/services/detalle-factura-service';

export default {
    name: 'DetalleFactura',
    data() {
        return {
            cantidad: 0,
            unitario: 0,
            total: 0,
            errors: [],
        };
    },
    props: {
        detalles: {
            type: Array,
            default: null,
        },
        partidas: {
            type: Array,
            default: null,
        },
        factura: {
            type: Number,
            required: true,
        },
        enabled: {
            type: Boolean,
            required: true,
        },
        obraId: {
            type: Number,
            required: true,
        },
    },
    methods: {
        calculaTotal() {
            this.errors = [];
            if (isNaN(this.cantidad) || this.cantidad === '') {
                this.cantidad = 0;
                this.errors.push('Cantidad debe ser numérica');
                return;
            }
            if (isNaN(this.unitario) || this.unitario === '') {
                this.unitario = 0;
                this.errors.push('Precio unitario debe ser numérico');
                return;
            }
            this.total = this.cantidad * this.unitario;
        },
        url(factura, partida) {
            return '/detalle/factura/delete/' + factura + '/' + partida;
        },
        format(value) {
            const formattedValue = formatPrice(value);
            return formattedValue;
        },
        isNotANumber(val) {
            return isNaN(val) ? true : false;
        },
        validateFields(){
            let hasErrors = false
            this.errors = []
            const partidaSelected =
                document.getElementById('partida-vue').value;
            if (partidaSelected === ''){
                this.errors.push('Seleccione una partida');
                hasErrors = true
            }
            if (this.cantidad === 0 ){
                this.errors.push('Cantidad no puede ser 0')
                hasErrors = true
            }
            if (this.unitario === 0){
                this.errors.push('Precio unitario no puede ser 0')
                hasErrors = true
            }
            return hasErrors
        },
        async grabaDetalle() {
             if (this.validateFields()){
                 return
             }
            const partidaSelected =
                document.getElementById('partida-vue').value;
            this.cantidad * this.unitario;
            const response = await grabaDetalleFactura(
                this.factura,
                partidaSelected,
                this.cantidad,
                this.unitario,
                this.total
            );
            this.$emit('detalle-grabado');
            this.cantidad = 0;
            this.unitario = 0;
            this.total = 0;
            document.getElementById('partida-vue').value = '';
        },
    },
    computed: {
        buttonDisabled() {
            return !this.enabled;
        },
    },
};
</script>
