<template>
    <div>
        <FlashMessage></FlashMessage>
        <h4 v-if="!isEdit">Nueva Factura</h4>
        <h4 v-else>Editar Factura</h4>

        <p v-if="errors.length" style="color: red">
            <ul style="list-style-type: none">
                <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
            </ul>
        </p>

        <form class="form-group form-control">
            <div class="form-group row">
                <div class="col-sm-1 col-form-label">
                    <label for="obra-vue" class="form-label">Obra</label>
                </div>
                <div class="col-sm-11">
                    <select
                        name="obra"
                        id="obra-vue"
                        class="select form-select"
                        v-model="facturaInfo.obra.id"
                        @change="fetchAllPartidas"
                    >
                        <option value="0">--- Seleccione una obra ---</option>
                        <option
                            v-for="obra in obras"
                            :key="obra.id"
                            :value="obra.id"
                        >
                            {{ obra.nombre }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-1 col-form-label">
                    <label for="proveedor-vue" class="form-label"
                        >Proveedor</label
                    >
                </div>
                <div class="col-sm-11">
                    <select
                        name="proveedor"
                        id="proveedor-vue"
                        class="select form-select"
                        v-model="facturaInfo.proveedor.id"
                    >
                        <option value="0">
                            --- Seleccione un proveedor ---
                        </option>
                        <option
                            v-for="proveedor in proveedores"
                            :key="proveedor.id"
                            :value="proveedor.id"
                        >
                            {{ proveedor.nombre }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-1 col-form-label">
                    <label for="numero-vue" class="form-label"
                        >N&uacute;mero</label
                    >
                </div>
                <div class="col-sm-11">
                    <input
                        type="text"
                        name="numero"
                        id="numero-vue"
                        v-model="facturaInfo.numero"
                        class="form-control"
                    />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-1 col-form-label">
                    <label for="fecha-vue" class="form-label">Fecha</label>
                </div>
                <div class="col-sm-11">
                    <input
                        type="date"
                        name="fecha"
                        id="fecha-vue"
                        class="form-control"
                        v-model="facturaInfo.fecha"
                    />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-1 col-form-label">
                    <label for="total-vue">Total</label>
                </div>
                <div class="col-sm-11">
                    <input
                        type="text"
                        name="total"
                        id="total-vue"
                        :value="totalFormated"
                        class="form-control"
                        disabled
                    />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-2 offset-sm-10">
                    <button
                        type="submit"
                        class="btn btn-primary"
                        @click="grabaFactura($event)"
                    >
                        Grabar
                    </button>
                    <a href="/factura" class="btn btn-secondary">Regresar</a>
                </div>
            </div>
        </form>
        <detalle-factura
            :detalles="facturaInfo.detalleFacturas"
            :factura="facturaInfo.id"
            :enabled="enabledDetalle"
            :obraId="facturaInfo.obra.id"
            :partidas="partidas"
            @detalle-grabado="fetchAllDetalles"
        />
    </div>
</template>

<script>
import { fetchFactura } from '@/services/factura-service';
import { fetchObras } from '@/services/obra-service';
import { fetchProveedores } from '@/services/proveedor-service';
import formatPrice from '@/helpers/format-price';
import formatDate from '@/helpers/format-date';
import DetalleFactura from '@/components/detalleFactura';
import { newFactura, editaFactura } from '@/services/factura-service';
import { getPartidas } from '@/services/partida-service';

export default {
    name: 'Factura',
    components: {
        DetalleFactura,
    },
    data() {
        return {
            isEdit: false,
            facturaData: null,
            total: 0,
            partidas: null,
            facturaInfo: {
                id: 0,
                numero: '',
                fecha: null,
                obra: {
                    id: 0,
                },
                proveedor: {
                    id: 0,
                },
                detalleFacturas: null,
                total: 0,
            },
            obras: null,
            proveedores: null,
            enabledDetalle: false,
            errors: [],
        };
    },
    computed: {
        totalFormated() {
            return formatPrice(this.facturaInfo.total);
        },
        dateFormated() {
            if (this.facturaInfo.fecha) {
                const formattedValue = formatDate(this.facturaInfo.fecha);
                return formatDate(formattedValue);
            }
        },
    },
    async created() {
        this.isEdit = window.isEdit;
        this.facturaData = window.facturaData;
        const fetchedObra = await fetchObras();
        this.obras = fetchedObra.data['hydra:member'];
        const fetchProveedoresInitial = await fetchProveedores();
        this.proveedores = fetchProveedoresInitial.data['hydra:member'];
        this.fetchAllDetalles();
    },

    methods: {
        async fetchAllDetalles() {
            if (this.facturaData) {
                const fetchedData = await fetchFactura(this.facturaData);
                this.facturaInfo = fetchedData.data['hydra:member'][0];

                this.facturaInfo.fecha = this.dateFormated;
                this.enabledDetalle = true;
            }

            this.fetchAllPartidas();
        },
        async fetchAllPartidas() {
            if (this.facturaInfo.obra.id) {
                const uri = '/get/partidas/' + this.facturaInfo.obra.id;
                const fetchedPartidas = await getPartidas(uri);
                this.partidas = fetchedPartidas.data;
            }
        },
        validateForm() {
            this.errors = []
            let hasErrors = false;
            const selectedObra = document.querySelector('#obra-vue').value;
            const selectedProveedor =document.querySelector('#proveedor-vue').value
            if (selectedObra == 0){
                this.errors.push('Seleccione una obra')
                hasErrors = true
            }
            if(selectedProveedor == 0){
                this.errors.push('Seleccione un proveedor')
                hasErrors = true
            }
            if (this.facturaInfo.numero === ''){
                this.errors.push('Ingrese el número de factura')
                hasErrors = true
            }
            if (!isNaN(this.facturaInfo.fecha)){
                this.errors.push('Seleccione la fecha de pago de la factura')
                hasErrors = true
            }
            return hasErrors;
        },
        grabaFactura(event) {
            event.preventDefault();
            if (this.validateForm()) {
                return;
            }
            const obra = this.facturaInfo.obra.id;
            const proveedor = this.facturaInfo.proveedor.id;
            const fecha = this.facturaInfo.fecha;
            const numero = this.facturaInfo.numero;
            const obraIRI = '/api/obras/' + obra;
            const proveedorIRI = '/api/proveedors/' + proveedor;
            if (!this.isEdit) {
                newFactura(
                    obraIRI,
                    proveedorIRI,
                    numero,
                    fecha,
                    this.facturaInfo.total
                )
                    .then((response) => {
                        this.enabledDetalle = true;
                        this.isEdit = true;
                        this.flashMessage.success({
                            title: 'Exito',
                            message: 'Factura creada correctamente!',
                            time: 2000,
                        });
                    })
                    .catch((error) => {
                        console.error(error, HttpStatus.getStatusText);
                    });
            } else {
                editaFactura(
                    this.facturaInfo['@id'],
                    obraIRI,
                    proveedorIRI,
                    numero,
                    fecha,
                    this.facturaInfo.total
                ).then((response) => {
                    console.log('exito');
                    this.flashMessage.success({
                        title: 'Exito',
                        message: 'Factura actualizada correctamente!',
                        time: 2000,
                    });
                });
            }
        },
    },
};
</script>
