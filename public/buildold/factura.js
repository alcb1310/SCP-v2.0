(self["webpackChunk"] = self["webpackChunk"] || []).push([["factura"],{

/***/ "./assets/factura.js":
/*!***************************!*\
  !*** ./assets/factura.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _pages_factura__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/factura */ "./assets/pages/factura.vue");
/* harmony import */ var _smartweb_vue_flash_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smartweb/vue-flash-message */ "./node_modules/@smartweb/vue-flash-message/build/vue-flash-msg.common.js");
/* harmony import */ var _smartweb_vue_flash_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smartweb_vue_flash_message__WEBPACK_IMPORTED_MODULE_1__);



vue__WEBPACK_IMPORTED_MODULE_2__["default"].use((_smartweb_vue_flash_message__WEBPACK_IMPORTED_MODULE_1___default()));
new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
  render: function render(h) {
    return h(_pages_factura__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }
}).$mount('#app');

/***/ }),

/***/ "./assets/helpers/format-date.js":
/*!***************************************!*\
  !*** ./assets/helpers/format-date.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (date) {
  var x = moment__WEBPACK_IMPORTED_MODULE_0___default()(date).add(5, 'h').format('yyyy-MM-DD');
  return x;
});

/***/ }),

/***/ "./assets/helpers/format-price.js":
/*!****************************************!*\
  !*** ./assets/helpers/format-price.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Formats a price buy adding a dot and normalizing decimals
 *
 * @param {number} price
 * @returns {string}
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (price) {
  return price.toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  });
});

/***/ }),

/***/ "./assets/services/detalle-factura-service.js":
/*!****************************************************!*\
  !*** ./assets/services/detalle-factura-service.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "grabaDetalleFactura": () => (/* binding */ grabaDetalleFactura)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function grabaDetalleFactura(factura, partida, cantidad, unitario, total) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: 'post',
    url: '/graba/detallefactura',
    params: {
      factura: factura,
      partida: partida,
      cantidad: cantidad,
      unitario: unitario,
      total: total
    }
  });
}

/***/ }),

/***/ "./assets/services/factura-service.js":
/*!********************************************!*\
  !*** ./assets/services/factura-service.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchFactura": () => (/* binding */ fetchFactura),
/* harmony export */   "newFactura": () => (/* binding */ newFactura),
/* harmony export */   "editaFactura": () => (/* binding */ editaFactura)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function fetchFactura(id) {
  var url = '/api/facturas';
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
    params: {
      id: id
    }
  });
}
function newFactura(obra, proveedor, numero, fecha, total) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/facturas', {
    obra: obra,
    proveedor: proveedor,
    numero: numero,
    fecha: fecha,
    total: total
  });
}
function editaFactura(iri, obra, proveedor, numero, fecha, total) {
  console.log(iri, obra, proveedor, numero, fecha, total);
  return axios__WEBPACK_IMPORTED_MODULE_0___default().put(iri, {
    obra: obra,
    proveedor: proveedor,
    numero: numero,
    fecha: fecha,
    total: total
  });
}

/***/ }),

/***/ "./assets/services/obra-service.js":
/*!*****************************************!*\
  !*** ./assets/services/obra-service.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchObras": () => (/* binding */ fetchObras)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function fetchObras() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/obras', {
    params: {
      activo: true
    }
  });
}

/***/ }),

/***/ "./assets/services/partida-service.js":
/*!********************************************!*\
  !*** ./assets/services/partida-service.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPartidas": () => (/* binding */ getPartidas)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function getPartidas(uri) {
  var response = axios__WEBPACK_IMPORTED_MODULE_0___default().get(uri);
  return response;
}

/***/ }),

/***/ "./assets/services/proveedor-service.js":
/*!**********************************************!*\
  !*** ./assets/services/proveedor-service.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchProveedor": () => (/* binding */ fetchProveedor),
/* harmony export */   "fetchProveedores": () => (/* binding */ fetchProveedores)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Obtiene toda la informacion de un proveedor
 *
 * @param {String} provIRI
 * @returns {Array}
 */

function fetchProveedor(provIRI) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get(provIRI);
}
function fetchProveedores() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/proveedors');
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/detalleFactura.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/detalleFactura.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_format_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/format-price */ "./assets/helpers/format-price.js");
/* harmony import */ var _services_detalle_factura_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/detalle-factura-service */ "./assets/services/detalle-factura-service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DetalleFactura',
  data: function data() {
    return {
      cantidad: 0,
      unitario: 0,
      total: 0,
      errors: []
    };
  },
  props: {
    detalles: {
      type: Array,
      "default": null
    },
    partidas: {
      type: Array,
      "default": null
    },
    factura: {
      type: Number,
      required: true
    },
    enabled: {
      type: Boolean,
      required: true
    },
    obraId: {
      type: Number,
      required: true
    }
  },
  methods: {
    calculaTotal: function calculaTotal() {
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
    url: function url(factura, partida) {
      return '/detalle/factura/delete/' + factura + '/' + partida;
    },
    format: function format(value) {
      var formattedValue = (0,_helpers_format_price__WEBPACK_IMPORTED_MODULE_4__["default"])(value);
      return formattedValue;
    },
    isNotANumber: function isNotANumber(val) {
      return isNaN(val) ? true : false;
    },
    validateFields: function validateFields() {
      var hasErrors = false;
      this.errors = [];
      var partidaSelected = document.getElementById('partida-vue').value;

      if (partidaSelected === '') {
        this.errors.push('Seleccione una partida');
        hasErrors = true;
      }

      if (this.cantidad === 0) {
        this.errors.push('Cantidad no puede ser 0');
        hasErrors = true;
      }

      if (this.unitario === 0) {
        this.errors.push('Precio unitario no puede ser 0');
        hasErrors = true;
      }

      return hasErrors;
    },
    grabaDetalle: function grabaDetalle() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var partidaSelected, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.validateFields()) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                partidaSelected = document.getElementById('partida-vue').value;
                _this.cantidad * _this.unitario;
                _context.next = 6;
                return (0,_services_detalle_factura_service__WEBPACK_IMPORTED_MODULE_5__.grabaDetalleFactura)(_this.factura, partidaSelected, _this.cantidad, _this.unitario, _this.total);

              case 6:
                response = _context.sent;

                _this.$emit('detalle-grabado');

                _this.cantidad = 0;
                _this.unitario = 0;
                _this.total = 0;
                document.getElementById('partida-vue').value = '';

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  computed: {
    buttonDisabled: function buttonDisabled() {
      return !this.enabled;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/pages/factura.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/pages/factura.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_factura_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/factura-service */ "./assets/services/factura-service.js");
/* harmony import */ var _services_obra_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/obra-service */ "./assets/services/obra-service.js");
/* harmony import */ var _services_proveedor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/proveedor-service */ "./assets/services/proveedor-service.js");
/* harmony import */ var _helpers_format_price__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helpers/format-price */ "./assets/helpers/format-price.js");
/* harmony import */ var _helpers_format_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/helpers/format-date */ "./assets/helpers/format-date.js");
/* harmony import */ var _components_detalleFactura__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/detalleFactura */ "./assets/components/detalleFactura.vue");
/* harmony import */ var _services_partida_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/services/partida-service */ "./assets/services/partida-service.js");




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Factura',
  components: {
    DetalleFactura: _components_detalleFactura__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
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
          id: 0
        },
        proveedor: {
          id: 0
        },
        detalleFacturas: null,
        total: 0
      },
      obras: null,
      proveedores: null,
      enabledDetalle: false,
      errors: []
    };
  },
  computed: {
    totalFormated: function totalFormated() {
      return (0,_helpers_format_price__WEBPACK_IMPORTED_MODULE_6__["default"])(this.facturaInfo.total);
    },
    dateFormated: function dateFormated() {
      if (this.facturaInfo.fecha) {
        var formattedValue = (0,_helpers_format_date__WEBPACK_IMPORTED_MODULE_7__["default"])(this.facturaInfo.fecha);
        return (0,_helpers_format_date__WEBPACK_IMPORTED_MODULE_7__["default"])(formattedValue);
      }
    }
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var fetchedObra, fetchProveedoresInitial;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.isEdit = window.isEdit;
              _this.facturaData = window.facturaData;
              _context.next = 4;
              return (0,_services_obra_service__WEBPACK_IMPORTED_MODULE_4__.fetchObras)();

            case 4:
              fetchedObra = _context.sent;
              _this.obras = fetchedObra.data['hydra:member'];
              _context.next = 8;
              return (0,_services_proveedor_service__WEBPACK_IMPORTED_MODULE_5__.fetchProveedores)();

            case 8:
              fetchProveedoresInitial = _context.sent;
              _this.proveedores = fetchProveedoresInitial.data['hydra:member'];

              _this.fetchAllDetalles();

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    fetchAllDetalles: function fetchAllDetalles() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var fetchedData;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this2.facturaData) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 3;
                return (0,_services_factura_service__WEBPACK_IMPORTED_MODULE_3__.fetchFactura)(_this2.facturaData);

              case 3:
                fetchedData = _context2.sent;
                _this2.facturaInfo = fetchedData.data['hydra:member'][0];
                _this2.facturaInfo.fecha = _this2.dateFormated;
                _this2.enabledDetalle = true;

              case 7:
                _this2.fetchAllPartidas();

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    fetchAllPartidas: function fetchAllPartidas() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var uri, fetchedPartidas;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!_this3.facturaInfo.obra.id) {
                  _context3.next = 6;
                  break;
                }

                uri = '/get/partidas/' + _this3.facturaInfo.obra.id;
                _context3.next = 4;
                return (0,_services_partida_service__WEBPACK_IMPORTED_MODULE_9__.getPartidas)(uri);

              case 4:
                fetchedPartidas = _context3.sent;
                _this3.partidas = fetchedPartidas.data;

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    validateForm: function validateForm() {
      this.errors = [];
      var hasErrors = false;
      var selectedObra = document.querySelector('#obra-vue').value;
      var selectedProveedor = document.querySelector('#proveedor-vue').value;

      if (selectedObra == 0) {
        this.errors.push('Seleccione una obra');
        hasErrors = true;
      }

      if (selectedProveedor == 0) {
        this.errors.push('Seleccione un proveedor');
        hasErrors = true;
      }

      if (this.facturaInfo.numero === '') {
        this.errors.push('Ingrese el número de factura');
        hasErrors = true;
      }

      if (!isNaN(this.facturaInfo.fecha)) {
        this.errors.push('Seleccione la fecha de pago de la factura');
        hasErrors = true;
      }

      return hasErrors;
    },
    grabaFactura: function grabaFactura(event) {
      var _this4 = this;

      event.preventDefault();

      if (this.validateForm()) {
        return;
      }

      var obra = this.facturaInfo.obra.id;
      var proveedor = this.facturaInfo.proveedor.id;
      var fecha = this.facturaInfo.fecha;
      var numero = this.facturaInfo.numero;
      var obraIRI = '/api/obras/' + obra;
      var proveedorIRI = '/api/proveedors/' + proveedor;

      if (!this.isEdit) {
        (0,_services_factura_service__WEBPACK_IMPORTED_MODULE_3__.newFactura)(obraIRI, proveedorIRI, numero, fecha, this.facturaInfo.total).then(function (response) {
          _this4.enabledDetalle = true;
          _this4.isEdit = true;

          _this4.flashMessage.success({
            title: 'Exito',
            message: 'Factura creada correctamente!',
            time: 2000,
            position: 'top right'
          });
        })["catch"](function (error) {
          console.error(error, HttpStatus.getStatusText);
        });
      } else {
        (0,_services_factura_service__WEBPACK_IMPORTED_MODULE_3__.editaFactura)(this.facturaInfo['@id'], obraIRI, proveedorIRI, numero, fecha, this.facturaInfo.total).then(function (response) {
          console.log('exito');

          _this4.flashMessage.success({
            title: 'Exito',
            message: 'Factura actualizada correctamente!',
            time: 2000,
            position: 'top right'
          });
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./assets/components/detalleFactura.vue":
/*!**********************************************!*\
  !*** ./assets/components/detalleFactura.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _detalleFactura_vue_vue_type_template_id_39de5b1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalleFactura.vue?vue&type=template&id=39de5b1c& */ "./assets/components/detalleFactura.vue?vue&type=template&id=39de5b1c&");
/* harmony import */ var _detalleFactura_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalleFactura.vue?vue&type=script&lang=js& */ "./assets/components/detalleFactura.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detalleFactura_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detalleFactura_vue_vue_type_template_id_39de5b1c___WEBPACK_IMPORTED_MODULE_0__.render,
  _detalleFactura_vue_vue_type_template_id_39de5b1c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/detalleFactura.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/pages/factura.vue":
/*!**********************************!*\
  !*** ./assets/pages/factura.vue ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factura_vue_vue_type_template_id_664b0aaf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factura.vue?vue&type=template&id=664b0aaf& */ "./assets/pages/factura.vue?vue&type=template&id=664b0aaf&");
/* harmony import */ var _factura_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factura.vue?vue&type=script&lang=js& */ "./assets/pages/factura.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _factura_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _factura_vue_vue_type_template_id_664b0aaf___WEBPACK_IMPORTED_MODULE_0__.render,
  _factura_vue_vue_type_template_id_664b0aaf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/pages/factura.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/detalleFactura.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./assets/components/detalleFactura.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detalleFactura_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detalleFactura.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/detalleFactura.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detalleFactura_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/pages/factura.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./assets/pages/factura.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_factura_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./factura.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/pages/factura.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_factura_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/components/detalleFactura.vue?vue&type=template&id=39de5b1c&":
/*!*****************************************************************************!*\
  !*** ./assets/components/detalleFactura.vue?vue&type=template&id=39de5b1c& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detalleFactura_vue_vue_type_template_id_39de5b1c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detalleFactura_vue_vue_type_template_id_39de5b1c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detalleFactura_vue_vue_type_template_id_39de5b1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detalleFactura.vue?vue&type=template&id=39de5b1c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/detalleFactura.vue?vue&type=template&id=39de5b1c&");


/***/ }),

/***/ "./assets/pages/factura.vue?vue&type=template&id=664b0aaf&":
/*!*****************************************************************!*\
  !*** ./assets/pages/factura.vue?vue&type=template&id=664b0aaf& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_factura_vue_vue_type_template_id_664b0aaf___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_factura_vue_vue_type_template_id_664b0aaf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_factura_vue_vue_type_template_id_664b0aaf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./factura.vue?vue&type=template&id=664b0aaf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/pages/factura.vue?vue&type=template&id=664b0aaf&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/detalleFactura.vue?vue&type=template&id=39de5b1c&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/detalleFactura.vue?vue&type=template&id=39de5b1c& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mt-3" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-2 offset-sm-10" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary mb-3",
            attrs: {
              "data-bs-toggle": "modal",
              "data-bs-target": "#exampleModal",
              disabled: _vm.buttonDisabled,
            },
          },
          [_vm._v("\n                Agregar Detalle\n            ")]
        ),
      ]),
    ]),
    _vm._v(" "),
    _vm.detalles
      ? _c("table", { staticClass: "table table-striped table-hover" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.detalles, function (detalle) {
              return _c("tr", { key: detalle["@id"] }, [
                _c("td", [_vm._v(_vm._s(detalle.partida.codigo))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(detalle.partida.nombre))]),
                _vm._v(" "),
                _c("td", { attrs: { align: "right" } }, [
                  _vm._v(_vm._s(_vm.format(detalle.cantidad))),
                ]),
                _vm._v(" "),
                _c("td", { attrs: { align: "right" } }, [
                  _vm._v(_vm._s(_vm.format(detalle.unitario))),
                ]),
                _vm._v(" "),
                _c("td", { attrs: { align: "right" } }, [
                  _vm._v(_vm._s(_vm.format(detalle.total))),
                ]),
                _vm._v(" "),
                _c("td", { attrs: { align: "center" } }, [
                  _c(
                    "a",
                    {
                      attrs: { href: _vm.url(_vm.factura, detalle.partida.id) },
                    },
                    [_c("span", { staticClass: "fa-solid fa-trash-can" })]
                  ),
                ]),
              ])
            }),
            0
          ),
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "exampleModal",
          tabindex: "-1",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true",
          "data-bs-backdrop": "static",
          "data-bs-keyboard": "false",
        },
      },
      [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _vm.errors.length
                ? _c("p", { staticStyle: { color: "red" } }, [
                    _c(
                      "ul",
                      { staticStyle: { "list-style-type": "none" } },
                      _vm._l(_vm.errors, function (error, key) {
                        return _c("li", { key: key }, [_vm._v(_vm._s(error))])
                      }),
                      0
                    ),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-8" }, [
                  _c(
                    "select",
                    {
                      staticClass: "form-select select2",
                      attrs: { name: "partida", id: "partida-vue" },
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v(
                          "\n                                    --- Seleccione una partida ---\n                                "
                        ),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.partidas, function (partidainvue) {
                        return _c(
                          "option",
                          {
                            key: partidainvue.id,
                            domProps: { value: partidainvue.id },
                          },
                          [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(partidainvue.nombre) +
                                "\n                                "
                            ),
                          ]
                        )
                      }),
                    ],
                    2
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row mt-2" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-8" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.cantidad,
                        expression: "cantidad",
                        modifiers: { number: true },
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "cantidad",
                      id: "cantidad-vue",
                    },
                    domProps: { value: _vm.cantidad },
                    on: {
                      change: _vm.calculaTotal,
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.cantidad = _vm._n($event.target.value)
                      },
                      blur: function ($event) {
                        return _vm.$forceUpdate()
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row mt-2" }, [
                _vm._m(4),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-8" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number.trim",
                        value: _vm.unitario,
                        expression: "unitario",
                        modifiers: { number: true, trim: true },
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "unitario",
                      id: "unitario-vue",
                    },
                    domProps: { value: _vm.unitario },
                    on: {
                      change: _vm.calculaTotal,
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.unitario = _vm._n($event.target.value.trim())
                      },
                      blur: function ($event) {
                        return _vm.$forceUpdate()
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row mt-2" }, [
                _vm._m(5),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-8" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.total,
                        expression: "total",
                        modifiers: { number: true },
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "total",
                      id: "total-modal-vue",
                      disabled: "",
                    },
                    domProps: { value: _vm.total },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.total = _vm._n($event.target.value)
                      },
                      blur: function ($event) {
                        return _vm.$forceUpdate()
                      },
                    },
                  }),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button" },
                  on: { click: _vm.grabaDetalle },
                },
                [
                  _vm._v(
                    "\n                        Grabar\n                    "
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button", "data-bs-dismiss": "modal" },
                },
                [
                  _vm._v(
                    "\n                        Cerrar\n                    "
                  ),
                ]
              ),
            ]),
          ]),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { align: "center" } }, [_vm._v("Código")]),
        _vm._v(" "),
        _c("th", { attrs: { align: "center" } }, [_vm._v("Partida")]),
        _vm._v(" "),
        _c("th", { attrs: { align: "center" } }, [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("th", { attrs: { align: "center" } }, [_vm._v("Unitario")]),
        _vm._v(" "),
        _c("th", { attrs: { align: "center" } }, [_vm._v("Total")]),
        _vm._v(" "),
        _c("th", [_vm._v(" ")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Detalle Facturas")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 col-form-label" }, [
      _c(
        "label",
        { staticClass: "form-label", attrs: { for: "partida-vue" } },
        [_vm._v("Partidas")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 col-form-label" }, [
      _c("label", { attrs: { for: "cantidad-vue" } }, [_vm._v("Cantidad")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 col-form-label" }, [
      _c("label", { attrs: { for: "unitario-vue" } }, [_vm._v("Unitario")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 col-form-label" }, [
      _c("label", { attrs: { for: "total-vue" } }, [_vm._v("Total")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/pages/factura.vue?vue&type=template&id=664b0aaf&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/pages/factura.vue?vue&type=template&id=664b0aaf& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("FlashMessage"),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-8 offset-sm-2 mb-3" }, [
          !_vm.isEdit
            ? _c("h4", [_vm._v("Nueva Factura")])
            : _c("h4", [_vm._v("Editar Factura")]),
        ]),
      ]),
      _vm._v(" "),
      _vm.errors.length
        ? _c("p", { staticStyle: { color: "red" } }, [
            _c(
              "ul",
              { staticStyle: { "list-style-type": "none" } },
              _vm._l(_vm.errors, function (error, key) {
                return _c("li", { key: key }, [_vm._v(_vm._s(error))])
              }),
              0
            ),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "row mt-1" }, [
        _c("div", { staticClass: "col-sm-8 offset-sm-2 " }, [
          _c(
            "form",
            { staticClass: "form-group form-control border shadow p-4" },
            [
              _c("div", { staticClass: "form-group row" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-10" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.facturaInfo.obra.id,
                          expression: "facturaInfo.obra.id",
                        },
                      ],
                      staticClass: "select form-select",
                      attrs: { name: "obra", id: "obra-vue" },
                      on: {
                        change: [
                          function ($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function (o) {
                                return o.selected
                              })
                              .map(function (o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.facturaInfo.obra,
                              "id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                          _vm.fetchAllPartidas,
                        ],
                      },
                    },
                    [
                      _c("option", { attrs: { value: "0" } }, [
                        _vm._v("--- Seleccione una obra ---"),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.obras, function (obra) {
                        return _c(
                          "option",
                          { key: obra.id, domProps: { value: obra.id } },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(obra.nombre) +
                                "\n                            "
                            ),
                          ]
                        )
                      }),
                    ],
                    2
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-10" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.facturaInfo.proveedor.id,
                          expression: "facturaInfo.proveedor.id",
                        },
                      ],
                      staticClass: "select form-select",
                      attrs: { name: "proveedor", id: "proveedor-vue" },
                      on: {
                        change: function ($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function (o) {
                              return o.selected
                            })
                            .map(function (o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.facturaInfo.proveedor,
                            "id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "0" } }, [
                        _vm._v(
                          "\n                                --- Seleccione un proveedor ---\n                            "
                        ),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.proveedores, function (proveedor) {
                        return _c(
                          "option",
                          {
                            key: proveedor.id,
                            domProps: { value: proveedor.id },
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(proveedor.nombre) +
                                "\n                            "
                            ),
                          ]
                        )
                      }),
                    ],
                    2
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-10" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.facturaInfo.numero,
                        expression: "facturaInfo.numero",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "numero", id: "numero-vue" },
                    domProps: { value: _vm.facturaInfo.numero },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.facturaInfo, "numero", $event.target.value)
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.facturaInfo.fecha,
                        expression: "facturaInfo.fecha",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "date", name: "fecha", id: "fecha-vue" },
                    domProps: { value: _vm.facturaInfo.fecha },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.facturaInfo, "fecha", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _vm._m(4),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "total",
                      id: "total-vue",
                      disabled: "",
                    },
                    domProps: { value: _vm.totalFormated },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-3" }, [
                _c("div", { staticClass: "col-sm-3 offset-sm-9" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" },
                      on: {
                        click: function ($event) {
                          return _vm.grabaFactura($event)
                        },
                      },
                    },
                    [
                      _vm._v(
                        "\n                            Grabar\n                        "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { href: "/factura" },
                    },
                    [_vm._v("Regresar")]
                  ),
                ]),
              ]),
            ]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("detalle-factura", {
        attrs: {
          detalles: _vm.facturaInfo.detalleFacturas,
          factura: _vm.facturaInfo.id,
          enabled: _vm.enabledDetalle,
          obraId: _vm.facturaInfo.obra.id,
          partidas: _vm.partidas,
        },
        on: { "detalle-grabado": _vm.fetchAllDetalles },
      }),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 col-form-label" }, [
      _c("label", { staticClass: "form-label", attrs: { for: "obra-vue" } }, [
        _vm._v("Obra"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 col-form-label" }, [
      _c(
        "label",
        { staticClass: "form-label", attrs: { for: "proveedor-vue" } },
        [_vm._v("Proveedor")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 col-form-label" }, [
      _c("label", { staticClass: "form-label", attrs: { for: "numero-vue" } }, [
        _vm._v("Número"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 col-form-label" }, [
      _c("label", { staticClass: "form-label", attrs: { for: "fecha-vue" } }, [
        _vm._v("Fecha"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-2 col-form-label" }, [
      _c("label", { attrs: { for: "total-vue" } }, [_vm._v("Total")]),
    ])
  },
]
render._withStripped = true



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_object_to-string_js-node_-957e3f","vendors-node_modules_vue-loader_lib_runtime_componentNormalizer_js-node_modules_vue_dist_vue_esm_js","vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-248d90","vendors-node_modules_smartweb_vue-flash-message_build_vue-flash-msg_common_js-node_modules_co-6dce2b"], () => (__webpack_exec__("./assets/factura.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0F4RDs7QUFDQTtBQUNBeUQsMEJBREE7QUFFQUMseURBRkE7QUFHQUMsc0JBSEE7QUFJQUM7QUFKQTtBQU1BLFNBZkE7QUFnQkE7QUFDQTtBQTVGQTtBQW5EQTs7Ozs7Ozs7OztBQ2xKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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RCxvQkFBb0Isb0NBQW9DLG1CQUFtQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0NBQXdDO0FBQy9EO0FBQ0E7QUFDQSxVQUFVLG9DQUFvQyx3QkFBd0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdDQUF3QztBQUMvRCxvQkFBb0Isb0NBQW9DLHFCQUFxQjtBQUM3RTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0NBQXdDO0FBQy9ELG9CQUFvQixvQ0FBb0Msb0JBQW9CO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3Q0FBd0M7QUFDL0Qsb0JBQW9CLFNBQVMsb0JBQW9CO0FBQ2pEO0FBQ0EsR0FBRztBQUNIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvZmFjdHVyYS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaGVscGVycy9mb3JtYXQtZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaGVscGVycy9mb3JtYXQtcHJpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NlcnZpY2VzL2RldGFsbGUtZmFjdHVyYS1zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zZXJ2aWNlcy9mYWN0dXJhLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NlcnZpY2VzL29icmEtc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2VydmljZXMvcGFydGlkYS1zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zZXJ2aWNlcy9wcm92ZWVkb3Itc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vYXNzZXRzL2NvbXBvbmVudHMvZGV0YWxsZUZhY3R1cmEudnVlIiwid2VicGFjazovLy9hc3NldHMvcGFnZXMvZmFjdHVyYS52dWUiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyZXNjb3VydC9QdWJsaWMvR0lUL2h0bWwvU0NQLXYyLjAvbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGV8c3luY3wvXlxcLlxcLy4qJC8iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvZGV0YWxsZUZhY3R1cmEudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9mYWN0dXJhLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9kZXRhbGxlRmFjdHVyYS52dWU/MTFjYiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvZmFjdHVyYS52dWU/NTQ0MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9kZXRhbGxlRmFjdHVyYS52dWU/OTE4MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvZmFjdHVyYS52dWU/OWU1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvZmFjdHVyYSc7XG5pbXBvcnQgRmxhc2hNZXNzYWdlIGZyb20gJ0BzbWFydHdlYi92dWUtZmxhc2gtbWVzc2FnZSc7XG5cblZ1ZS51c2UoRmxhc2hNZXNzYWdlKTtcblxubmV3IFZ1ZSh7XG4gICAgcmVuZGVyOiAoaCkgPT4gaChBcHApLFxufSkuJG1vdW50KCcjYXBwJyk7XG4iLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IChkYXRlKSA9PiB7XG4gICAgY29uc3QgeCA9IG1vbWVudChkYXRlKS5hZGQoNSwgJ2gnKS5mb3JtYXQoJ3l5eXktTU0tREQnKTtcbiAgICByZXR1cm4geDtcbn07XG4iLCIvKipcbiAqIEZvcm1hdHMgYSBwcmljZSBidXkgYWRkaW5nIGEgZG90IGFuZCBub3JtYWxpemluZyBkZWNpbWFsc1xuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBwcmljZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKHByaWNlKSA9PiB7XG4gICAgcmV0dXJuIHByaWNlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdyYWJhRGV0YWxsZUZhY3R1cmEoXG4gICAgZmFjdHVyYSxcbiAgICBwYXJ0aWRhLFxuICAgIGNhbnRpZGFkLFxuICAgIHVuaXRhcmlvLFxuICAgIHRvdGFsXG4pIHtcbiAgICByZXR1cm4gYXhpb3Moe1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgdXJsOiAnL2dyYWJhL2RldGFsbGVmYWN0dXJhJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBmYWN0dXJhLFxuICAgICAgICAgICAgcGFydGlkYSxcbiAgICAgICAgICAgIGNhbnRpZGFkLFxuICAgICAgICAgICAgdW5pdGFyaW8sXG4gICAgICAgICAgICB0b3RhbCxcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEZhY3R1cmEoaWQpIHtcbiAgICBjb25zdCB1cmwgPSAnL2FwaS9mYWN0dXJhcyc7XG4gICAgcmV0dXJuIGF4aW9zLmdldCh1cmwsIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0ZhY3R1cmEob2JyYSwgcHJvdmVlZG9yLCBudW1lcm8sIGZlY2hhLCB0b3RhbCkge1xuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2ZhY3R1cmFzJywge1xuICAgICAgICBvYnJhLFxuICAgICAgICBwcm92ZWVkb3IsXG4gICAgICAgIG51bWVybyxcbiAgICAgICAgZmVjaGEsXG4gICAgICAgIHRvdGFsLFxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdGFGYWN0dXJhKGlyaSwgb2JyYSwgcHJvdmVlZG9yLCBudW1lcm8sIGZlY2hhLCB0b3RhbCkge1xuICAgIGNvbnNvbGUubG9nKGlyaSwgb2JyYSwgcHJvdmVlZG9yLCBudW1lcm8sIGZlY2hhLCB0b3RhbCk7XG4gICAgcmV0dXJuIGF4aW9zLnB1dChpcmksIHtcbiAgICAgICAgb2JyYSxcbiAgICAgICAgcHJvdmVlZG9yLFxuICAgICAgICBudW1lcm8sXG4gICAgICAgIGZlY2hhLFxuICAgICAgICB0b3RhbCxcbiAgICB9KTtcbn1cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaE9icmFzKCkge1xuICAgIHJldHVybiBheGlvcy5nZXQoJy9hcGkvb2JyYXMnLCB7XG4gICAgICAgIHBhcmFtczogeyBhY3Rpdm86IHRydWUgfSxcbiAgICB9KTtcbn1cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJ0aWRhcyh1cmkpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF4aW9zLmdldCh1cmkpO1xuICAgIHJldHVybiByZXNwb25zZTtcbn1cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8qKlxuICogT2J0aWVuZSB0b2RhIGxhIGluZm9ybWFjaW9uIGRlIHVuIHByb3ZlZWRvclxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm92SVJJXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFByb3ZlZWRvcihwcm92SVJJKSB7XG4gICAgcmV0dXJuIGF4aW9zLmdldChwcm92SVJJKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUHJvdmVlZG9yZXMoKSB7XG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL2FwaS9wcm92ZWVkb3JzJyk7XG59XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm10LTNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIG9mZnNldC1zbS0xMFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbWItM1wiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNleGFtcGxlTW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJidXR0b25EaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBBZ3JlZ2FyIERldGFsbGVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHRhYmxlIHYtaWY9XCJkZXRhbGxlc1wiIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclwiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGFsaWduPVwiY2VudGVyXCI+QyZvYWN1dGU7ZGlnbzwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBhbGlnbj1cImNlbnRlclwiPlBhcnRpZGE8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggYWxpZ249XCJjZW50ZXJcIj5DYW50aWRhZDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBhbGlnbj1cImNlbnRlclwiPlVuaXRhcmlvPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGFsaWduPVwiY2VudGVyXCI+VG90YWw8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+Jm5ic3A7PC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCJkZXRhbGxlIGluIGRldGFsbGVzXCIgOmtleT1cImRldGFsbGVbJ0BpZCddXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57eyBkZXRhbGxlLnBhcnRpZGEuY29kaWdvIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7IGRldGFsbGUucGFydGlkYS5ub21icmUgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJyaWdodFwiPnt7IGZvcm1hdChkZXRhbGxlLmNhbnRpZGFkKSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cInJpZ2h0XCI+e3sgZm9ybWF0KGRldGFsbGUudW5pdGFyaW8pIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwicmlnaHRcIj57eyBmb3JtYXQoZGV0YWxsZS50b3RhbCkgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwidXJsKGZhY3R1cmEsIGRldGFsbGUucGFydGlkYS5pZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoLWNhblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cIm1vZGFsIGZhZGVcIlxuICAgICAgICAgICAgaWQ9XCJleGFtcGxlTW9kYWxcIlxuICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgZGF0YS1icy1iYWNrZHJvcD1cInN0YXRpY1wiXG4gICAgICAgICAgICBkYXRhLWJzLWtleWJvYXJkPVwiZmFsc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5EZXRhbGxlIEZhY3R1cmFzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwiZXJyb3JzLmxlbmd0aFwiIHN0eWxlPVwiY29sb3I6IHJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT1cImxpc3Qtc3R5bGUtdHlwZTogbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCIoZXJyb3IsIGtleSkgaW4gZXJyb3JzXCIgOmtleT1cImtleVwiPnt7IGVycm9yIH19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIGNvbC1mb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXJ0aWRhLXZ1ZVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+UGFydGlkYXM8L2xhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhcnRpZGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXJ0aWRhLXZ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tc2VsZWN0IHNlbGVjdDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS0tIFNlbGVjY2lvbmUgdW5hIHBhcnRpZGEgLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cInBhcnRpZGFpbnZ1ZSBpbiBwYXJ0aWRhc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cInBhcnRpZGFpbnZ1ZS5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwicGFydGlkYWludnVlLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwYXJ0aWRhaW52dWUubm9tYnJlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvdyBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIGNvbC1mb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjYW50aWRhZC12dWVcIj5DYW50aWRhZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNhbnRpZGFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2FudGlkYWQtdnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWwubnVtYmVyPVwiY2FudGlkYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cImNhbGN1bGFUb3RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvdyBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIGNvbC1mb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1bml0YXJpby12dWVcIj5Vbml0YXJpbzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVuaXRhcmlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidW5pdGFyaW8tdnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWwubnVtYmVyLnRyaW09XCJ1bml0YXJpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwiY2FsY3VsYVRvdGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93IG10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRvdGFsLXZ1ZVwiPlRvdGFsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG90YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b3RhbC1tb2RhbC12dWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbC5udW1iZXI9XCJ0b3RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdyYWJhRGV0YWxsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR3JhYmFyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2VycmFyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGZvcm1hdFByaWNlIGZyb20gJ0AvaGVscGVycy9mb3JtYXQtcHJpY2UnO1xuaW1wb3J0IHsgZ3JhYmFEZXRhbGxlRmFjdHVyYSB9IGZyb20gJ0Avc2VydmljZXMvZGV0YWxsZS1mYWN0dXJhLXNlcnZpY2UnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ0RldGFsbGVGYWN0dXJhJyxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2FudGlkYWQ6IDAsXG4gICAgICAgICAgICB1bml0YXJpbzogMCxcbiAgICAgICAgICAgIHRvdGFsOiAwLFxuICAgICAgICAgICAgZXJyb3JzOiBbXSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIGRldGFsbGVzOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHBhcnRpZGFzOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIGZhY3R1cmE6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBlbmFibGVkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIG9icmFJZDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNhbGN1bGFUb3RhbCgpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICAgICAgICBpZiAoaXNOYU4odGhpcy5jYW50aWRhZCkgfHwgdGhpcy5jYW50aWRhZCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnRpZGFkID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdDYW50aWRhZCBkZWJlIHNlciBudW3DqXJpY2EnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNOYU4odGhpcy51bml0YXJpbykgfHwgdGhpcy51bml0YXJpbyA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuaXRhcmlvID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdQcmVjaW8gdW5pdGFyaW8gZGViZSBzZXIgbnVtw6lyaWNvJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50b3RhbCA9IHRoaXMuY2FudGlkYWQgKiB0aGlzLnVuaXRhcmlvO1xuICAgICAgICB9LFxuICAgICAgICB1cmwoZmFjdHVyYSwgcGFydGlkYSkge1xuICAgICAgICAgICAgcmV0dXJuICcvZGV0YWxsZS9mYWN0dXJhL2RlbGV0ZS8nICsgZmFjdHVyYSArICcvJyArIHBhcnRpZGE7XG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdCh2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkVmFsdWUgPSBmb3JtYXRQcmljZSh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0dGVkVmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGlzTm90QU51bWJlcih2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBpc05hTih2YWwpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICB2YWxpZGF0ZUZpZWxkcygpe1xuICAgICAgICAgICAgbGV0IGhhc0Vycm9ycyA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmVycm9ycyA9IFtdXG4gICAgICAgICAgICBjb25zdCBwYXJ0aWRhU2VsZWN0ZWQgPVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJ0aWRhLXZ1ZScpLnZhbHVlO1xuICAgICAgICAgICAgaWYgKHBhcnRpZGFTZWxlY3RlZCA9PT0gJycpe1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ1NlbGVjY2lvbmUgdW5hIHBhcnRpZGEnKTtcbiAgICAgICAgICAgICAgICBoYXNFcnJvcnMgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jYW50aWRhZCA9PT0gMCApe1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ0NhbnRpZGFkIG5vIHB1ZWRlIHNlciAwJylcbiAgICAgICAgICAgICAgICBoYXNFcnJvcnMgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy51bml0YXJpbyA9PT0gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCgnUHJlY2lvIHVuaXRhcmlvIG5vIHB1ZWRlIHNlciAwJylcbiAgICAgICAgICAgICAgICBoYXNFcnJvcnMgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGFzRXJyb3JzXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGdyYWJhRGV0YWxsZSgpIHtcbiAgICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZUZpZWxkcygpKXtcbiAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFydGlkYVNlbGVjdGVkID1cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFydGlkYS12dWUnKS52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuY2FudGlkYWQgKiB0aGlzLnVuaXRhcmlvO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBncmFiYURldGFsbGVGYWN0dXJhKFxuICAgICAgICAgICAgICAgIHRoaXMuZmFjdHVyYSxcbiAgICAgICAgICAgICAgICBwYXJ0aWRhU2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgdGhpcy5jYW50aWRhZCxcbiAgICAgICAgICAgICAgICB0aGlzLnVuaXRhcmlvLFxuICAgICAgICAgICAgICAgIHRoaXMudG90YWxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdkZXRhbGxlLWdyYWJhZG8nKTtcbiAgICAgICAgICAgIHRoaXMuY2FudGlkYWQgPSAwO1xuICAgICAgICAgICAgdGhpcy51bml0YXJpbyA9IDA7XG4gICAgICAgICAgICB0aGlzLnRvdGFsID0gMDtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJ0aWRhLXZ1ZScpLnZhbHVlID0gJyc7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBidXR0b25EaXNhYmxlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5lbmFibGVkO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPEZsYXNoTWVzc2FnZT48L0ZsYXNoTWVzc2FnZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS04IG9mZnNldC1zbS0yIG1iLTNcIj5cbiAgICAgICAgICAgICAgICA8aDQgdi1pZj1cIiFpc0VkaXRcIj5OdWV2YSBGYWN0dXJhPC9oND5cbiAgICAgICAgICAgICAgICA8aDQgdi1lbHNlPkVkaXRhciBGYWN0dXJhPC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cCB2LWlmPVwiZXJyb3JzLmxlbmd0aFwiIHN0eWxlPVwiY29sb3I6IHJlZFwiPlxuICAgICAgICAgICAgPHVsIHN0eWxlPVwibGlzdC1zdHlsZS10eXBlOiBub25lXCI+XG4gICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiKGVycm9yLCBrZXkpIGluIGVycm9yc1wiIDprZXk9XCJrZXlcIj57eyBlcnJvciB9fTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtMVwiPiAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS04IG9mZnNldC1zbS0yIFwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1ncm91cCBmb3JtLWNvbnRyb2wgYm9yZGVyIHNoYWRvdyBwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwib2JyYS12dWVcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5PYnJhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm9icmFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm9icmEtdnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3QgZm9ybS1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmFjdHVyYUluZm8ub2JyYS5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJmZXRjaEFsbFBhcnRpZGFzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+LS0tIFNlbGVjY2lvbmUgdW5hIG9icmEgLS0tPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwib2JyYSBpbiBvYnJhc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwib2JyYS5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJvYnJhLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgb2JyYS5ub21icmUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByb3ZlZWRvci12dWVcIiBjbGFzcz1cImZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+UHJvdmVlZG9yPC9sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb3ZlZWRvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJvdmVlZG9yLXZ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2VsZWN0IGZvcm0tc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZhY3R1cmFJbmZvLnByb3ZlZWRvci5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS0tIFNlbGVjY2lvbmUgdW4gcHJvdmVlZG9yIC0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJwcm92ZWVkb3IgaW4gcHJvdmVlZG9yZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cInByb3ZlZWRvci5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJwcm92ZWVkb3IuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm92ZWVkb3Iubm9tYnJlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJudW1lcm8tdnVlXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPk4mdWFjdXRlO21lcm88L2xhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm51bWVyb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibnVtZXJvLXZ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmYWN0dXJhSW5mby5udW1lcm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmVjaGEtdnVlXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+RmVjaGE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmVjaGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZlY2hhLXZ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZhY3R1cmFJbmZvLmZlY2hhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidG90YWwtdnVlXCI+VG90YWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG90YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvdGFsLXZ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cInRvdGFsRm9ybWF0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTMgb2Zmc2V0LXNtLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdyYWJhRmFjdHVyYSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdyYWJhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZmFjdHVyYVwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj5SZWdyZXNhcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkZXRhbGxlLWZhY3R1cmFcbiAgICAgICAgICAgIDpkZXRhbGxlcz1cImZhY3R1cmFJbmZvLmRldGFsbGVGYWN0dXJhc1wiXG4gICAgICAgICAgICA6ZmFjdHVyYT1cImZhY3R1cmFJbmZvLmlkXCJcbiAgICAgICAgICAgIDplbmFibGVkPVwiZW5hYmxlZERldGFsbGVcIlxuICAgICAgICAgICAgOm9icmFJZD1cImZhY3R1cmFJbmZvLm9icmEuaWRcIlxuICAgICAgICAgICAgOnBhcnRpZGFzPVwicGFydGlkYXNcIlxuICAgICAgICAgICAgQGRldGFsbGUtZ3JhYmFkbz1cImZldGNoQWxsRGV0YWxsZXNcIlxuICAgICAgICAvPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGZldGNoRmFjdHVyYSB9IGZyb20gJ0Avc2VydmljZXMvZmFjdHVyYS1zZXJ2aWNlJztcbmltcG9ydCB7IGZldGNoT2JyYXMgfSBmcm9tICdAL3NlcnZpY2VzL29icmEtc2VydmljZSc7XG5pbXBvcnQgeyBmZXRjaFByb3ZlZWRvcmVzIH0gZnJvbSAnQC9zZXJ2aWNlcy9wcm92ZWVkb3Itc2VydmljZSc7XG5pbXBvcnQgZm9ybWF0UHJpY2UgZnJvbSAnQC9oZWxwZXJzL2Zvcm1hdC1wcmljZSc7XG5pbXBvcnQgZm9ybWF0RGF0ZSBmcm9tICdAL2hlbHBlcnMvZm9ybWF0LWRhdGUnO1xuaW1wb3J0IERldGFsbGVGYWN0dXJhIGZyb20gJ0AvY29tcG9uZW50cy9kZXRhbGxlRmFjdHVyYSc7XG5pbXBvcnQgeyBuZXdGYWN0dXJhLCBlZGl0YUZhY3R1cmEgfSBmcm9tICdAL3NlcnZpY2VzL2ZhY3R1cmEtc2VydmljZSc7XG5pbXBvcnQgeyBnZXRQYXJ0aWRhcyB9IGZyb20gJ0Avc2VydmljZXMvcGFydGlkYS1zZXJ2aWNlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdGYWN0dXJhJyxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIERldGFsbGVGYWN0dXJhLFxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzRWRpdDogZmFsc2UsXG4gICAgICAgICAgICBmYWN0dXJhRGF0YTogbnVsbCxcbiAgICAgICAgICAgIHRvdGFsOiAwLFxuICAgICAgICAgICAgcGFydGlkYXM6IG51bGwsXG4gICAgICAgICAgICBmYWN0dXJhSW5mbzoge1xuICAgICAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgICAgIG51bWVybzogJycsXG4gICAgICAgICAgICAgICAgZmVjaGE6IG51bGwsXG4gICAgICAgICAgICAgICAgb2JyYToge1xuICAgICAgICAgICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByb3ZlZWRvcjoge1xuICAgICAgICAgICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRldGFsbGVGYWN0dXJhczogbnVsbCxcbiAgICAgICAgICAgICAgICB0b3RhbDogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvYnJhczogbnVsbCxcbiAgICAgICAgICAgIHByb3ZlZWRvcmVzOiBudWxsLFxuICAgICAgICAgICAgZW5hYmxlZERldGFsbGU6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3JzOiBbXSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHRvdGFsRm9ybWF0ZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0UHJpY2UodGhpcy5mYWN0dXJhSW5mby50b3RhbCk7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGVGb3JtYXRlZCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZhY3R1cmFJbmZvLmZlY2hhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkVmFsdWUgPSBmb3JtYXREYXRlKHRoaXMuZmFjdHVyYUluZm8uZmVjaGEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtYXREYXRlKGZvcm1hdHRlZFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGFzeW5jIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMuaXNFZGl0ID0gd2luZG93LmlzRWRpdDtcbiAgICAgICAgdGhpcy5mYWN0dXJhRGF0YSA9IHdpbmRvdy5mYWN0dXJhRGF0YTtcbiAgICAgICAgY29uc3QgZmV0Y2hlZE9icmEgPSBhd2FpdCBmZXRjaE9icmFzKCk7XG4gICAgICAgIHRoaXMub2JyYXMgPSBmZXRjaGVkT2JyYS5kYXRhWydoeWRyYTptZW1iZXInXTtcbiAgICAgICAgY29uc3QgZmV0Y2hQcm92ZWVkb3Jlc0luaXRpYWwgPSBhd2FpdCBmZXRjaFByb3ZlZWRvcmVzKCk7XG4gICAgICAgIHRoaXMucHJvdmVlZG9yZXMgPSBmZXRjaFByb3ZlZWRvcmVzSW5pdGlhbC5kYXRhWydoeWRyYTptZW1iZXInXTtcbiAgICAgICAgdGhpcy5mZXRjaEFsbERldGFsbGVzKCk7XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYXN5bmMgZmV0Y2hBbGxEZXRhbGxlcygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZhY3R1cmFEYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmV0Y2hlZERhdGEgPSBhd2FpdCBmZXRjaEZhY3R1cmEodGhpcy5mYWN0dXJhRGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWN0dXJhSW5mbyA9IGZldGNoZWREYXRhLmRhdGFbJ2h5ZHJhOm1lbWJlciddWzBdO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5mYWN0dXJhSW5mby5mZWNoYSA9IHRoaXMuZGF0ZUZvcm1hdGVkO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlZERldGFsbGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmZldGNoQWxsUGFydGlkYXMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgZmV0Y2hBbGxQYXJ0aWRhcygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZhY3R1cmFJbmZvLm9icmEuaWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmkgPSAnL2dldC9wYXJ0aWRhcy8nICsgdGhpcy5mYWN0dXJhSW5mby5vYnJhLmlkO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZldGNoZWRQYXJ0aWRhcyA9IGF3YWl0IGdldFBhcnRpZGFzKHVyaSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWRhcyA9IGZldGNoZWRQYXJ0aWRhcy5kYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB2YWxpZGF0ZUZvcm0oKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9ycyA9IFtdXG4gICAgICAgICAgICBsZXQgaGFzRXJyb3JzID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE9icmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb2JyYS12dWUnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvdmVlZG9yID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvdmVlZG9yLXZ1ZScpLnZhbHVlXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRPYnJhID09IDApe1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ1NlbGVjY2lvbmUgdW5hIG9icmEnKVxuICAgICAgICAgICAgICAgIGhhc0Vycm9ycyA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHNlbGVjdGVkUHJvdmVlZG9yID09IDApe1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ1NlbGVjY2lvbmUgdW4gcHJvdmVlZG9yJylcbiAgICAgICAgICAgICAgICBoYXNFcnJvcnMgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mYWN0dXJhSW5mby5udW1lcm8gPT09ICcnKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdJbmdyZXNlIGVsIG7Dum1lcm8gZGUgZmFjdHVyYScpXG4gICAgICAgICAgICAgICAgaGFzRXJyb3JzID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc05hTih0aGlzLmZhY3R1cmFJbmZvLmZlY2hhKSl7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCgnU2VsZWNjaW9uZSBsYSBmZWNoYSBkZSBwYWdvIGRlIGxhIGZhY3R1cmEnKVxuICAgICAgICAgICAgICAgIGhhc0Vycm9ycyA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoYXNFcnJvcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGdyYWJhRmFjdHVyYShldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgb2JyYSA9IHRoaXMuZmFjdHVyYUluZm8ub2JyYS5pZDtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZlZWRvciA9IHRoaXMuZmFjdHVyYUluZm8ucHJvdmVlZG9yLmlkO1xuICAgICAgICAgICAgY29uc3QgZmVjaGEgPSB0aGlzLmZhY3R1cmFJbmZvLmZlY2hhO1xuICAgICAgICAgICAgY29uc3QgbnVtZXJvID0gdGhpcy5mYWN0dXJhSW5mby5udW1lcm87XG4gICAgICAgICAgICBjb25zdCBvYnJhSVJJID0gJy9hcGkvb2JyYXMvJyArIG9icmE7XG4gICAgICAgICAgICBjb25zdCBwcm92ZWVkb3JJUkkgPSAnL2FwaS9wcm92ZWVkb3JzLycgKyBwcm92ZWVkb3I7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNFZGl0KSB7XG4gICAgICAgICAgICAgICAgbmV3RmFjdHVyYShcbiAgICAgICAgICAgICAgICAgICAgb2JyYUlSSSxcbiAgICAgICAgICAgICAgICAgICAgcHJvdmVlZG9ySVJJLFxuICAgICAgICAgICAgICAgICAgICBudW1lcm8sXG4gICAgICAgICAgICAgICAgICAgIGZlY2hhLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZhY3R1cmFJbmZvLnRvdGFsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlZERldGFsbGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0VkaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGFzaE1lc3NhZ2Uuc3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdFeGl0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0ZhY3R1cmEgY3JlYWRhIGNvcnJlY3RhbWVudGUhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiAyMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wIHJpZ2h0J1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IsIEh0dHBTdGF0dXMuZ2V0U3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlZGl0YUZhY3R1cmEoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFjdHVyYUluZm9bJ0BpZCddLFxuICAgICAgICAgICAgICAgICAgICBvYnJhSVJJLFxuICAgICAgICAgICAgICAgICAgICBwcm92ZWVkb3JJUkksXG4gICAgICAgICAgICAgICAgICAgIG51bWVybyxcbiAgICAgICAgICAgICAgICAgICAgZmVjaGEsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFjdHVyYUluZm8udG90YWxcbiAgICAgICAgICAgICAgICApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdleGl0bycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZsYXNoTWVzc2FnZS5zdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRXhpdG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0ZhY3R1cmEgYWN0dWFsaXphZGEgY29ycmVjdGFtZW50ZSEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogMjAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wIHJpZ2h0J1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxufTtcbjwvc2NyaXB0PlxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYWYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXItZHouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXItbHlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItbWEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYm1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm4tYmRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLWJkLmpzXCIsXG5cdFwiLi9ibi1iZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4tYmQuanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taW4uanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1zZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tc2cuanNcIixcblx0XCIuL2VuLXNnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1zZy5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLW14XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1teC5qc1wiLFxuXHRcIi4vZXMtbXguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLW14LmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maWwuanNcIixcblx0XCIuL2ZpbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmlsLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1kZXZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWRldmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1kZXZhLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9vYy1sbmNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL29jLWxuYy5qc1wiLFxuXHRcIi4vb2MtbG5jLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ay5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtbW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLW1vLmpzXCIsXG5cdFwiLi96aC1tby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtbW8uanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2RldGFsbGVGYWN0dXJhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zOWRlNWIxYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9kZXRhbGxlRmFjdHVyYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2RldGFsbGVGYWN0dXJhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2FuZHJlc2NvdXJ0L1B1YmxpYy9HSVQvaHRtbC9TQ1AtdjIuMC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczOWRlNWIxYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczOWRlNWIxYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczOWRlNWIxYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZGV0YWxsZUZhY3R1cmEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM5ZGU1YjFjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM5ZGU1YjFjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvY29tcG9uZW50cy9kZXRhbGxlRmFjdHVyYS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2ZhY3R1cmEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY2NGIwYWFmJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZhY3R1cmEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mYWN0dXJhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2FuZHJlc2NvdXJ0L1B1YmxpYy9HSVQvaHRtbC9TQ1AtdjIuMC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NjRiMGFhZicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NjRiMGFhZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NjRiMGFhZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZmFjdHVyYS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjY0YjBhYWYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjY0YjBhYWYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9wYWdlcy9mYWN0dXJhLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kZXRhbGxlRmFjdHVyYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kZXRhbGxlRmFjdHVyYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmFjdHVyYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mYWN0dXJhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTIgb2Zmc2V0LXNtLTEwXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBtYi0zXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImRhdGEtYnMtdG9nZ2xlXCI6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgXCJkYXRhLWJzLXRhcmdldFwiOiBcIiNleGFtcGxlTW9kYWxcIixcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5idXR0b25EaXNhYmxlZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIEFncmVnYXIgRGV0YWxsZVxcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLmRldGFsbGVzXG4gICAgICA/IF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCIgfSwgW1xuICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5kZXRhbGxlcywgZnVuY3Rpb24gKGRldGFsbGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IGRldGFsbGVbXCJAaWRcIl0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoZGV0YWxsZS5wYXJ0aWRhLmNvZGlnbykpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGRldGFsbGUucGFydGlkYS5ub21icmUpKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcInJpZ2h0XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5mb3JtYXQoZGV0YWxsZS5jYW50aWRhZCkpKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJyaWdodFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZm9ybWF0KGRldGFsbGUudW5pdGFyaW8pKSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwicmlnaHRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmZvcm1hdChkZXRhbGxlLnRvdGFsKSkpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogX3ZtLnVybChfdm0uZmFjdHVyYSwgZGV0YWxsZS5wYXJ0aWRhLmlkKSB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEtc29saWQgZmEtdHJhc2gtY2FuXCIgfSldXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKSxcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsIGZhZGVcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBpZDogXCJleGFtcGxlTW9kYWxcIixcbiAgICAgICAgICB0YWJpbmRleDogXCItMVwiLFxuICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwiZXhhbXBsZU1vZGFsTGFiZWxcIixcbiAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgICAgIFwiZGF0YS1icy1iYWNrZHJvcFwiOiBcInN0YXRpY1wiLFxuICAgICAgICAgIFwiZGF0YS1icy1rZXlib2FyZFwiOiBcImZhbHNlXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uZXJyb3JzLmxlbmd0aFxuICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmVkXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IFwibGlzdC1zdHlsZS10eXBlXCI6IFwibm9uZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmVycm9ycywgZnVuY3Rpb24gKGVycm9yLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImxpXCIsIHsga2V5OiBrZXkgfSwgW192bS5fdihfdm0uX3MoZXJyb3IpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLThcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tc2VsZWN0IHNlbGVjdDJcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcInBhcnRpZGFcIiwgaWQ6IFwicGFydGlkYS12dWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLS0gU2VsZWNjaW9uZSB1bmEgcGFydGlkYSAtLS1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wYXJ0aWRhcywgZnVuY3Rpb24gKHBhcnRpZGFpbnZ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBwYXJ0aWRhaW52dWUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IHBhcnRpZGFpbnZ1ZS5pZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhwYXJ0aWRhaW52dWUubm9tYnJlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3cgbXQtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS04XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWwubnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNhbnRpZGFkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjYW50aWRhZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzOiB7IG51bWJlcjogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY2FudGlkYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJjYW50aWRhZC12dWVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jYW50aWRhZCB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogX3ZtLmNhbGN1bGFUb3RhbCxcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNhbnRpZGFkID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBibHVyOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvdyBtdC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLThcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbC5udW1iZXIudHJpbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51bml0YXJpbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidW5pdGFyaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyczogeyBudW1iZXI6IHRydWUsIHRyaW06IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInVuaXRhcmlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidW5pdGFyaW8tdnVlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udW5pdGFyaW8gfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IF92bS5jYWxjdWxhVG90YWwsXG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS51bml0YXJpbyA9IF92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlLnRyaW0oKSlcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGJsdXI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGZvcmNlVXBkYXRlKClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93IG10LTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDUpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tOFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsLm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50b3RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidG90YWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyczogeyBudW1iZXI6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRvdGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidG90YWwtbW9kYWwtdnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udG90YWwgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvdGFsID0gX3ZtLl9uKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBibHVyOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9vdGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5ncmFiYURldGFsbGUgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBHcmFiYXJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNlY29uZGFyeVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgXCJkYXRhLWJzLWRpc21pc3NcIjogXCJtb2RhbFwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgQ2VycmFyXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdXG4gICAgKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbX3ZtLl92KFwiQ8OzZGlnb1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbX3ZtLl92KFwiUGFydGlkYVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbX3ZtLl92KFwiQ2FudGlkYWRcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSwgW192bS5fdihcIlVuaXRhcmlvXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9IH0sIFtfdm0uX3YoXCJUb3RhbFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLCoFwiKV0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCIgfSwgW192bS5fdihcIkRldGFsbGUgRmFjdHVyYXNcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1sYWJlbFwiLCBhdHRyczogeyBmb3I6IFwicGFydGlkYS12dWVcIiB9IH0sXG4gICAgICAgIFtfdm0uX3YoXCJQYXJ0aWRhc1wiKV1cbiAgICAgICksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIiB9LCBbXG4gICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcImNhbnRpZGFkLXZ1ZVwiIH0gfSwgW192bS5fdihcIkNhbnRpZGFkXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIiB9LCBbXG4gICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInVuaXRhcmlvLXZ1ZVwiIH0gfSwgW192bS5fdihcIlVuaXRhcmlvXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIiB9LCBbXG4gICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInRvdGFsLXZ1ZVwiIH0gfSwgW192bS5fdihcIlRvdGFsXCIpXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcIkZsYXNoTWVzc2FnZVwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tOCBvZmZzZXQtc20tMiBtYi0zXCIgfSwgW1xuICAgICAgICAgICFfdm0uaXNFZGl0XG4gICAgICAgICAgICA/IF9jKFwiaDRcIiwgW192bS5fdihcIk51ZXZhIEZhY3R1cmFcIildKVxuICAgICAgICAgICAgOiBfYyhcImg0XCIsIFtfdm0uX3YoXCJFZGl0YXIgRmFjdHVyYVwiKV0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5lcnJvcnMubGVuZ3RoXG4gICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmVkXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IFwibGlzdC1zdHlsZS10eXBlXCI6IFwibm9uZVwiIH0gfSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5lcnJvcnMsIGZ1bmN0aW9uIChlcnJvciwga2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgeyBrZXk6IGtleSB9LCBbX3ZtLl92KF92bS5fcyhlcnJvcikpXSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC0xXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS04IG9mZnNldC1zbS0yIFwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIGZvcm0tY29udHJvbCBib3JkZXIgc2hhZG93IHAtNFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mYWN0dXJhSW5mby5vYnJhLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZhY3R1cmFJbmZvLm9icmEuaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZWxlY3QgZm9ybS1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcIm9icmFcIiwgaWQ6IFwib2JyYS12dWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZhY3R1cmFJbmZvLm9icmEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mZXRjaEFsbFBhcnRpZGFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCItLS0gU2VsZWNjaW9uZSB1bmEgb2JyYSAtLS1cIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLm9icmFzLCBmdW5jdGlvbiAob2JyYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogb2JyYS5pZCwgZG9tUHJvcHM6IHsgdmFsdWU6IG9icmEuaWQgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKG9icmEubm9tYnJlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0xMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZhY3R1cmFJbmZvLnByb3ZlZWRvci5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmYWN0dXJhSW5mby5wcm92ZWVkb3IuaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZWxlY3QgZm9ybS1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcInByb3ZlZWRvclwiLCBpZDogXCJwcm92ZWVkb3ItdnVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZhY3R1cmFJbmZvLnByb3ZlZWRvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLS0gU2VsZWNjaW9uZSB1biBwcm92ZWVkb3IgLS0tXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wcm92ZWVkb3JlcywgZnVuY3Rpb24gKHByb3ZlZWRvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBwcm92ZWVkb3IuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IHByb3ZlZWRvci5pZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb3ZlZWRvci5ub21icmUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTEwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmFjdHVyYUluZm8ubnVtZXJvLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmYWN0dXJhSW5mby5udW1lcm9cIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwibnVtZXJvXCIsIGlkOiBcIm51bWVyby12dWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZhY3R1cmFJbmZvLm51bWVybyB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZmFjdHVyYUluZm8sIFwibnVtZXJvXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS00XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmFjdHVyYUluZm8uZmVjaGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZhY3R1cmFJbmZvLmZlY2hhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZGF0ZVwiLCBuYW1lOiBcImZlY2hhXCIsIGlkOiBcImZlY2hhLXZ1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZmFjdHVyYUluZm8uZmVjaGEgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZhY3R1cmFJbmZvLCBcImZlY2hhXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDQpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tNFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRvdGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidG90YWwtdnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udG90YWxGb3JtYXRlZCB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC0zXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTMgb2Zmc2V0LXNtLTlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5ncmFiYUZhY3R1cmEoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR3JhYmFyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc2Vjb25kYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIvZmFjdHVyYVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSZWdyZXNhclwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkZXRhbGxlLWZhY3R1cmFcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGRldGFsbGVzOiBfdm0uZmFjdHVyYUluZm8uZGV0YWxsZUZhY3R1cmFzLFxuICAgICAgICAgIGZhY3R1cmE6IF92bS5mYWN0dXJhSW5mby5pZCxcbiAgICAgICAgICBlbmFibGVkOiBfdm0uZW5hYmxlZERldGFsbGUsXG4gICAgICAgICAgb2JyYUlkOiBfdm0uZmFjdHVyYUluZm8ub2JyYS5pZCxcbiAgICAgICAgICBwYXJ0aWRhczogX3ZtLnBhcnRpZGFzLFxuICAgICAgICB9LFxuICAgICAgICBvbjogeyBcImRldGFsbGUtZ3JhYmFkb1wiOiBfdm0uZmV0Y2hBbGxEZXRhbGxlcyB9LFxuICAgICAgfSksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsXCIgfSwgW1xuICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tbGFiZWxcIiwgYXR0cnM6IHsgZm9yOiBcIm9icmEtdnVlXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIk9icmFcIiksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1sYWJlbFwiLCBhdHRyczogeyBmb3I6IFwicHJvdmVlZG9yLXZ1ZVwiIH0gfSxcbiAgICAgICAgW192bS5fdihcIlByb3ZlZWRvclwiKV1cbiAgICAgICksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWxcIiB9LCBbXG4gICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1sYWJlbFwiLCBhdHRyczogeyBmb3I6IFwibnVtZXJvLXZ1ZVwiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCJOw7ptZXJvXCIpLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWxcIiB9LCBbXG4gICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1sYWJlbFwiLCBhdHRyczogeyBmb3I6IFwiZmVjaGEtdnVlXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIkZlY2hhXCIpLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWxcIiB9LCBbXG4gICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInRvdGFsLXZ1ZVwiIH0gfSwgW192bS5fdihcIlRvdGFsXCIpXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm5hbWVzIjpbIlZ1ZSIsIkFwcCIsIkZsYXNoTWVzc2FnZSIsInVzZSIsInJlbmRlciIsImgiLCIkbW91bnQiLCJtb21lbnQiLCJkYXRlIiwieCIsImFkZCIsImZvcm1hdCIsInByaWNlIiwidG9Mb2NhbGVTdHJpbmciLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJheGlvcyIsImdyYWJhRGV0YWxsZUZhY3R1cmEiLCJmYWN0dXJhIiwicGFydGlkYSIsImNhbnRpZGFkIiwidW5pdGFyaW8iLCJ0b3RhbCIsIm1ldGhvZCIsInVybCIsInBhcmFtcyIsImZldGNoRmFjdHVyYSIsImlkIiwiZ2V0IiwibmV3RmFjdHVyYSIsIm9icmEiLCJwcm92ZWVkb3IiLCJudW1lcm8iLCJmZWNoYSIsInBvc3QiLCJlZGl0YUZhY3R1cmEiLCJpcmkiLCJjb25zb2xlIiwibG9nIiwicHV0IiwiZmV0Y2hPYnJhcyIsImFjdGl2byIsImdldFBhcnRpZGFzIiwidXJpIiwicmVzcG9uc2UiLCJmZXRjaFByb3ZlZWRvciIsInByb3ZJUkkiLCJmZXRjaFByb3ZlZWRvcmVzIiwibmFtZSIsImRhdGEiLCJlcnJvcnMiLCJwcm9wcyIsImRldGFsbGVzIiwidHlwZSIsInBhcnRpZGFzIiwicmVxdWlyZWQiLCJlbmFibGVkIiwib2JyYUlkIiwibWV0aG9kcyIsImNhbGN1bGFUb3RhbCIsInZhbHVlIiwiaXNOb3RBTnVtYmVyIiwidmFsIiwidmFsaWRhdGVGaWVsZHMiLCJkb2N1bWVudCIsImhhc0Vycm9ycyIsImdyYWJhRGV0YWxsZSIsInBhcnRpZGFTZWxlY3RlZCIsImNvbXB1dGVkIiwiYnV0dG9uRGlzYWJsZWQiLCJjb21wb25lbnRzIiwiRGV0YWxsZUZhY3R1cmEiLCJpc0VkaXQiLCJmYWN0dXJhRGF0YSIsImZhY3R1cmFJbmZvIiwiZGV0YWxsZUZhY3R1cmFzIiwib2JyYXMiLCJwcm92ZWVkb3JlcyIsImVuYWJsZWREZXRhbGxlIiwidG90YWxGb3JtYXRlZCIsImRhdGVGb3JtYXRlZCIsImNyZWF0ZWQiLCJmZXRjaGVkT2JyYSIsImZldGNoUHJvdmVlZG9yZXNJbml0aWFsIiwiZmV0Y2hBbGxEZXRhbGxlcyIsImZldGNoZWREYXRhIiwiZmV0Y2hBbGxQYXJ0aWRhcyIsImZldGNoZWRQYXJ0aWRhcyIsInZhbGlkYXRlRm9ybSIsImdyYWJhRmFjdHVyYSIsImV2ZW50Iiwib2JyYUlSSSIsInByb3ZlZWRvcklSSSIsInRoZW4iLCJ0aXRsZSIsIm1lc3NhZ2UiLCJ0aW1lIiwicG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9