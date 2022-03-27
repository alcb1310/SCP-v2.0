"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["control-historico"],{

/***/ "./assets/control-historico.js":
/*!*************************************!*\
  !*** ./assets/control-historico.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _pages_control_fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/control-fecha */ "./assets/pages/control-fecha.vue");


new vue__WEBPACK_IMPORTED_MODULE_1__["default"]({
  render: function render(h) {
    return h(_pages_control_fecha__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }
}).$mount('#app');

/***/ }),

/***/ "./assets/helpers/filter.js":
/*!**********************************!*\
  !*** ./assets/helpers/filter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterData": () => (/* binding */ filterData),
/* harmony export */   "filterObra": () => (/* binding */ filterObra)
/* harmony export */ });
/**
 *
 * Busca que no haya nivel mayor al deseado
 *
 * @param {Array} control
 * @param {integer} nivel
 * @returns {Array}
 */
function filterData(control, nivel) {
  var len = control.length;
  var result = new Array();

  for (var i = 0; i < len; i++) {
    if (control[i].nivel <= nivel) {
      result.push(control[i]);
    }
  }

  return result;
}
function filterObra(control, obra) {
  var len = control.length;
  var result = new Array();

  for (var i = 0; i < len; i++) {
    if (control[i].obra.id == obra) {
      result.push(control[i]);
    }
  }

  return result;
}

/***/ }),

/***/ "./assets/helpers/format-price.js":
/*!****************************************!*\
  !*** ./assets/helpers/format-price.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./assets/services/control-actual-service.js":
/*!***************************************************!*\
  !*** ./assets/services/control-actual-service.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchPresupuesto": () => (/* binding */ fetchPresupuesto),
/* harmony export */   "fetchPresupuestoDate": () => (/* binding */ fetchPresupuestoDate)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Esta funcion busca el control presupuestario actual para una determinada obra
 *
 * @param {String} obraIRI
 * @returns {Promise}
 */

function fetchPresupuesto(obraIRI) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/presupuestos', {
    params: {
      obra: obraIRI
    }
  });
}
/**
 *Esta funcion busca el control presupuestario para una determinada fecha
 *
 * @param {Integer} obraId
 * @param {Date} fecha
 * @param {Integer}  nivel
 * @returns {Promise}
 */

function fetchPresupuestoDate(obraId, fecha) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/controls/', {
    params: {
      fecha: fecha
    }
  });
}

/***/ }),

/***/ "./assets/services/obra-service.js":
/*!*****************************************!*\
  !*** ./assets/services/obra-service.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/displayControl.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/displayControl.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_format_price_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/format-price.js */ "./assets/helpers/format-price.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'DisplayControl',
  props: {
    presupuestos: {
      type: Array,
      "default": null
    }
  },
  methods: {
    format: function format(value) {
      return (0,_helpers_format_price_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/pages/control-fecha.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/pages/control-fecha.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _services_control_actual_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/control-actual-service */ "./assets/services/control-actual-service.js");
/* harmony import */ var _services_obra_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/obra-service */ "./assets/services/obra-service.js");
/* harmony import */ var _components_displayControl_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/displayControl.vue */ "./assets/components/displayControl.vue");
/* harmony import */ var _helpers_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helpers/filter */ "./assets/helpers/filter.js");




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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ControlActual',
  components: {
    DisplayControl: _components_displayControl_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      controlActual: null,
      obras: null,
      obraSelected: '',
      error: '',
      fecha: null
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var obraResponse;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_services_obra_service__WEBPACK_IMPORTED_MODULE_4__.fetchObras)();

            case 2:
              obraResponse = _context.sent;
              _this.obras = obraResponse.data['hydra:member'];

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    selectedObra: function selectedObra(event) {
      this.obraSelected = document.getElementById('obra-vue').value;
    },
    buscaDatos: function buscaDatos(event) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var presupuestoResponse, presReduc;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this2.obraSelected) {
                  alert('Seleccione una obra');
                }

                _context2.next = 3;
                return (0,_services_control_actual_service__WEBPACK_IMPORTED_MODULE_3__.fetchPresupuestoDate)(_this2.obraSelected, fecha.value);

              case 3:
                presupuestoResponse = _context2.sent;
                //  console.log(presupuestoResponse);
                presReduc = (0,_helpers_filter__WEBPACK_IMPORTED_MODULE_6__.filterObra)(presupuestoResponse.data['hydra:member'], _this2.obraSelected);
                _this2.controlActual = (0,_helpers_filter__WEBPACK_IMPORTED_MODULE_6__.filterData)(presReduc, document.getElementById('nivel-vue').value);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    filterNivel: function filterNivel() {
      return;
    }
  },
  computed: {
    isValid: function isValid() {
      return !this.error;
    },
    nombreObra: function nombreObra() {
      var e = document.getElementById('obra-vue');
      var text = e.options[e.selectedIndex].text;
      return text;
    }
  }
});

/***/ }),

/***/ "./assets/components/displayControl.vue":
/*!**********************************************!*\
  !*** ./assets/components/displayControl.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayControl_vue_vue_type_template_id_dbc11354___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayControl.vue?vue&type=template&id=dbc11354& */ "./assets/components/displayControl.vue?vue&type=template&id=dbc11354&");
/* harmony import */ var _displayControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayControl.vue?vue&type=script&lang=js& */ "./assets/components/displayControl.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _displayControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _displayControl_vue_vue_type_template_id_dbc11354___WEBPACK_IMPORTED_MODULE_0__.render,
  _displayControl_vue_vue_type_template_id_dbc11354___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/displayControl.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/pages/control-fecha.vue":
/*!****************************************!*\
  !*** ./assets/pages/control-fecha.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _control_fecha_vue_vue_type_template_id_785876f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control-fecha.vue?vue&type=template&id=785876f8& */ "./assets/pages/control-fecha.vue?vue&type=template&id=785876f8&");
/* harmony import */ var _control_fecha_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control-fecha.vue?vue&type=script&lang=js& */ "./assets/pages/control-fecha.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _control_fecha_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _control_fecha_vue_vue_type_template_id_785876f8___WEBPACK_IMPORTED_MODULE_0__.render,
  _control_fecha_vue_vue_type_template_id_785876f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/pages/control-fecha.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/displayControl.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./assets/components/displayControl.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_displayControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./displayControl.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/displayControl.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_displayControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/pages/control-fecha.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./assets/pages/control-fecha.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_control_fecha_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./control-fecha.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/pages/control-fecha.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_control_fecha_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/components/displayControl.vue?vue&type=template&id=dbc11354&":
/*!*****************************************************************************!*\
  !*** ./assets/components/displayControl.vue?vue&type=template&id=dbc11354& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_displayControl_vue_vue_type_template_id_dbc11354___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_displayControl_vue_vue_type_template_id_dbc11354___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_displayControl_vue_vue_type_template_id_dbc11354___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./displayControl.vue?vue&type=template&id=dbc11354& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/displayControl.vue?vue&type=template&id=dbc11354&");


/***/ }),

/***/ "./assets/pages/control-fecha.vue?vue&type=template&id=785876f8&":
/*!***********************************************************************!*\
  !*** ./assets/pages/control-fecha.vue?vue&type=template&id=785876f8& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_control_fecha_vue_vue_type_template_id_785876f8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_control_fecha_vue_vue_type_template_id_785876f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_control_fecha_vue_vue_type_template_id_785876f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./control-fecha.vue?vue&type=template&id=785876f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/pages/control-fecha.vue?vue&type=template&id=785876f8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/displayControl.vue?vue&type=template&id=dbc11354&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/displayControl.vue?vue&type=template&id=dbc11354& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("table", { staticClass: "table table-striped table-hover" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.presupuestos, function (presupuesto) {
          return _c("tr", { key: presupuesto["@id"] }, [
            _c("td", [_vm._v(_vm._s(presupuesto.partida.nombre))]),
            _vm._v(" "),
            _c("td", { attrs: { align: "right" } }, [
              _vm._v(
                "\n          " +
                  _vm._s(
                    presupuesto.cantini ? _vm.format(presupuesto.cantini) : ""
                  ) +
                  "\n        "
              ),
            ]),
            _vm._v(" "),
            _c("td", { attrs: { align: "right" } }, [
              _vm._v(
                "\n          " +
                  _vm._s(
                    presupuesto.costoini ? _vm.format(presupuesto.costoini) : ""
                  ) +
                  "\n        "
              ),
            ]),
            _vm._v(" "),
            _c("td", { attrs: { align: "right" } }, [
              _vm._v(_vm._s(_vm.format(presupuesto.totalini))),
            ]),
            _vm._v(" "),
            _c("td", { attrs: { align: "right" } }, [
              _vm._v(
                "\n          " +
                  _vm._s(
                    presupuesto.rendidocant
                      ? _vm.format(presupuesto.rendidocant)
                      : ""
                  ) +
                  "\n        "
              ),
            ]),
            _vm._v(" "),
            _c("td", { attrs: { align: "right" } }, [
              _vm._v(_vm._s(_vm.format(presupuesto.rendidotot))),
            ]),
            _vm._v(" "),
            _c("td", { attrs: { align: "right" } }, [
              _vm._v(
                "\n          " +
                  _vm._s(
                    presupuesto.porgascan
                      ? _vm.format(presupuesto.porgascan)
                      : ""
                  ) +
                  "\n        "
              ),
            ]),
            _vm._v(" "),
            _c("td", { attrs: { align: "right" } }, [
              _vm._v(
                "\n          " +
                  _vm._s(
                    presupuesto.porgascost
                      ? _vm.format(presupuesto.porgascost)
                      : ""
                  ) +
                  "\n        "
              ),
            ]),
            _vm._v(" "),
            _c("td", { attrs: { align: "right" } }, [
              _vm._v(_vm._s(_vm.format(presupuesto.porgastot))),
            ]),
            _vm._v(" "),
            _c("td", { attrs: { align: "right" } }, [
              _vm._v(_vm._s(_vm.format(presupuesto.presactu))),
            ]),
          ])
        }),
        0
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c(
          "td",
          {
            staticClass: "align-middle",
            attrs: { rowspan: "2", align: "center" },
          },
          [_vm._v("Partida")]
        ),
        _vm._v(" "),
        _c("td", { attrs: { colspan: "3", align: "center" } }, [
          _vm._v("Inicial"),
        ]),
        _vm._v(" "),
        _c("td", { attrs: { colspan: "2", align: "center" } }, [
          _vm._v("Rendido"),
        ]),
        _vm._v(" "),
        _c("td", { attrs: { colspan: "3", align: "center" } }, [
          _vm._v("Por Gastar"),
        ]),
        _vm._v(" "),
        _c(
          "td",
          {
            staticClass: "align-middle",
            attrs: { rowspan: "2", align: "center" },
          },
          [_vm._v("\n          Presupuesto Actualizado\n        ")]
        ),
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", { attrs: { align: "center" } }, [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("td", { attrs: { align: "center" } }, [_vm._v("Unitario")]),
        _vm._v(" "),
        _c("td", { attrs: { align: "center" } }, [_vm._v("Total")]),
        _vm._v(" "),
        _c("td", { attrs: { align: "center" } }, [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("td", { attrs: { align: "center" } }, [_vm._v("Total")]),
        _vm._v(" "),
        _c("td", { attrs: { align: "center" } }, [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("td", { attrs: { align: "center" } }, [_vm._v("Unitario")]),
        _vm._v(" "),
        _c("td", { attrs: { align: "center" } }, [_vm._v("Total")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/pages/control-fecha.vue?vue&type=template&id=785876f8&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/pages/control-fecha.vue?vue&type=template&id=785876f8& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "form-group border shadow p-4" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary float-end mb-2",
          on: {
            click: function ($event) {
              return _vm.buscaDatos($event)
            },
          },
        },
        [_vm._v("\n      Buscar\n    ")]
      ),
      _vm._v(" "),
      _c("form", [
        _c("div", { staticClass: "form-row" }, [
          _c("div", { staticClass: "col" }, [
            _c(
              "label",
              { staticClass: "form-label", attrs: { for: "obra-vue" } },
              [_vm._v("Obra")]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                staticClass: "form-select select2",
                attrs: { name: "obra-vue", id: "obra-vue" },
                on: {
                  change: function ($event) {
                    return _vm.selectedObra($event)
                  },
                },
              },
              [
                _c("option", { attrs: { value: "" } }, [
                  _vm._v("--- Seleccione una obra ---"),
                ]),
                _vm._v(" "),
                _vm._l(_vm.obras, function (obra) {
                  return _c(
                    "option",
                    { key: obra["@id"], domProps: { value: obra.id } },
                    [
                      _vm._v(
                        "\n              " +
                          _vm._s(obra.nombre) +
                          "\n            "
                      ),
                    ]
                  )
                }),
              ],
              2
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col" }, [
            _c(
              "label",
              { staticClass: "form-label", attrs: { for: "fecha" } },
              [_vm._v("Fecha:")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.fecha,
                  expression: "fecha",
                },
              ],
              staticClass: "form-control",
              attrs: { type: "date", name: "fecha", id: "fecha" },
              domProps: { value: _vm.fecha },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.fecha = $event.target.value
                },
              },
            }),
          ]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.isValid,
                  expression: "!isValid",
                },
              ],
              staticClass: "invalid-feedback",
              attrs: { id: "obra-vueFeedback" },
            },
            [_vm._v("\n          " + _vm._s(_vm.error) + "\n        ")]
          ),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _vm.controlActual
      ? _c(
          "div",
          { staticClass: "mt-4 shadow border" },
          [
            _c("div", { staticClass: "pt-4 ps-4" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-9" }, [
                  _c("p", [
                    _vm._v("\n            Obra: "),
                    _c("span", { staticClass: "text text-success" }, [
                      _vm._v(_vm._s(_vm.nombreObra)),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-3" }, [
                  _c("p", [
                    _vm._v("\n            Fecha: "),
                    _c("span", { staticClass: "text text-success" }, [
                      _vm._v(_vm._s(_vm.fecha)),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("display-control", {
              attrs: { presupuestos: _vm.controlActual },
            }),
          ],
          1
        )
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("label", { staticClass: "from-label", attrs: { for: "nivel" } }, [
        _vm._v("Nivel:"),
      ]),
      _vm._v(" "),
      _c(
        "select",
        {
          staticClass: "form-control",
          attrs: { name: "nivel-vue", id: "nivel-vue" },
        },
        [
          _c("option", { attrs: { value: "" } }, [
            _vm._v("--- Seleccione un nivel ---"),
          ]),
          _vm._v(" "),
          _c("option", { attrs: { value: "1" } }, [_vm._v("1")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "2" } }, [_vm._v("2")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "3" } }, [_vm._v("3")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "4" } }, [_vm._v("4")]),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col" }, [
        _c("p", [_vm._v("Control Histórico")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_object_to-string_js-node_-957e3f","vendors-node_modules_vue-loader_lib_runtime_componentNormalizer_js-node_modules_vue_dist_vue_esm_js"], () => (__webpack_exec__("./assets/control-historico.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtQ0FBbUM7QUFDL0M7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQSwwQkFBMEIsb0JBQW9CO0FBQzlDLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBLGlDQUFpQyxrQ0FBa0M7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBLGlDQUFpQyxrQ0FBa0M7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpQ0FBaUM7QUFDeEQsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0JBQW9CO0FBQzNDLG9CQUFvQixvQ0FBb0MsZ0JBQWdCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG9DQUFvQztBQUN2RCxTQUFTO0FBQ1Q7QUFDQSx5QkFBeUIsU0FBUyxhQUFhO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixTQUFTLGNBQWM7QUFDaEQ7QUFDQSx5QkFBeUIsU0FBUyxjQUFjO0FBQ2hEO0FBQ0EseUJBQXlCLFNBQVMsY0FBYztBQUNoRDtBQUNBLHlCQUF5QixTQUFTLGNBQWM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQyxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2wtaGlzdG9yaWNvLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9oZWxwZXJzL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaGVscGVycy9mb3JtYXQtcHJpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NlcnZpY2VzL2NvbnRyb2wtYWN0dWFsLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NlcnZpY2VzL29icmEtc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vYXNzZXRzL2NvbXBvbmVudHMvZGlzcGxheUNvbnRyb2wudnVlIiwid2VicGFjazovLy9hc3NldHMvcGFnZXMvY29udHJvbC1mZWNoYS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvZGlzcGxheUNvbnRyb2wudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9jb250cm9sLWZlY2hhLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9kaXNwbGF5Q29udHJvbC52dWU/NTEwNSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvY29udHJvbC1mZWNoYS52dWU/MDNhNCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9kaXNwbGF5Q29udHJvbC52dWU/MzcxNyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvY29udHJvbC1mZWNoYS52dWU/NmRmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvY29udHJvbC1mZWNoYSc7XG5cbm5ldyBWdWUoe1xuICByZW5kZXI6IChoKSA9PiBoKEFwcCksXG59KS4kbW91bnQoJyNhcHAnKTtcbiIsIi8qKlxuICpcbiAqIEJ1c2NhIHF1ZSBubyBoYXlhIG5pdmVsIG1heW9yIGFsIGRlc2VhZG9cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBjb250cm9sXG4gKiBAcGFyYW0ge2ludGVnZXJ9IG5pdmVsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJEYXRhKGNvbnRyb2wsIG5pdmVsKSB7XG4gIHZhciBsZW4gPSBjb250cm9sLmxlbmd0aDtcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheSgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGNvbnRyb2xbaV0ubml2ZWwgPD0gbml2ZWwpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGNvbnRyb2xbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyT2JyYShjb250cm9sLCBvYnJhKSB7XG4gIHZhciBsZW4gPSBjb250cm9sLmxlbmd0aDtcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheSgpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoY29udHJvbFtpXS5vYnJhLmlkID09IG9icmEpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGNvbnRyb2xbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLyoqXG4gKiBGb3JtYXRzIGEgcHJpY2UgYnV5IGFkZGluZyBhIGRvdCBhbmQgbm9ybWFsaXppbmcgZGVjaW1hbHNcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gcHJpY2VcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChwcmljZSkgPT4ge1xuICAgIHJldHVybiBwcmljZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgIH0pO1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8qKlxuICogRXN0YSBmdW5jaW9uIGJ1c2NhIGVsIGNvbnRyb2wgcHJlc3VwdWVzdGFyaW8gYWN0dWFsIHBhcmEgdW5hIGRldGVybWluYWRhIG9icmFcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gb2JyYUlSSVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFByZXN1cHVlc3RvKG9icmFJUkkpIHtcbiAgcmV0dXJuIGF4aW9zLmdldCgnL2FwaS9wcmVzdXB1ZXN0b3MnLCB7XG4gICAgcGFyYW1zOiB7IG9icmE6IG9icmFJUkkgfSxcbiAgfSk7XG59XG5cbi8qKlxuICpFc3RhIGZ1bmNpb24gYnVzY2EgZWwgY29udHJvbCBwcmVzdXB1ZXN0YXJpbyBwYXJhIHVuYSBkZXRlcm1pbmFkYSBmZWNoYVxuICpcbiAqIEBwYXJhbSB7SW50ZWdlcn0gb2JyYUlkXG4gKiBAcGFyYW0ge0RhdGV9IGZlY2hhXG4gKiBAcGFyYW0ge0ludGVnZXJ9ICBuaXZlbFxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFByZXN1cHVlc3RvRGF0ZShvYnJhSWQsIGZlY2hhKSB7XG4gIHJldHVybiBheGlvcy5nZXQoJy9hcGkvY29udHJvbHMvJywge1xuICAgIHBhcmFtczoge1xuICAgICAgZmVjaGEsXG4gICAgfSxcbiAgfSk7XG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hPYnJhcygpIHtcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvYXBpL29icmFzJywge1xuICAgICAgICBwYXJhbXM6IHsgYWN0aXZvOiB0cnVlIH0sXG4gICAgfSk7XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclwiPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIHJvd3NwYW49XCIyXCIgYWxpZ249XCJjZW50ZXJcIiBjbGFzcz1cImFsaWduLW1pZGRsZVwiPlBhcnRpZGE8L3RkPlxuICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiM1wiIGFsaWduPVwiY2VudGVyXCI+SW5pY2lhbDwvdGQ+XG4gICAgICAgICAgPHRkIGNvbHNwYW49XCIyXCIgYWxpZ249XCJjZW50ZXJcIj5SZW5kaWRvPC90ZD5cbiAgICAgICAgICA8dGQgY29sc3Bhbj1cIjNcIiBhbGlnbj1cImNlbnRlclwiPlBvciBHYXN0YXI8L3RkPlxuICAgICAgICAgIDx0ZCByb3dzcGFuPVwiMlwiIGFsaWduPVwiY2VudGVyXCIgY2xhc3M9XCJhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgIFByZXN1cHVlc3RvIEFjdHVhbGl6YWRvXG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPkNhbnRpZGFkPC90ZD5cbiAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5Vbml0YXJpbzwvdGQ+XG4gICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+VG90YWw8L3RkPlxuICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPkNhbnRpZGFkPC90ZD5cbiAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5Ub3RhbDwvdGQ+XG4gICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+Q2FudGlkYWQ8L3RkPlxuICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPlVuaXRhcmlvPC90ZD5cbiAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5Ub3RhbDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5PlxuICAgICAgICA8dHIgdi1mb3I9XCJwcmVzdXB1ZXN0byBpbiBwcmVzdXB1ZXN0b3NcIiA6a2V5PVwicHJlc3VwdWVzdG9bJ0BpZCddXCI+XG4gICAgICAgICAgPHRkPnt7IHByZXN1cHVlc3RvLnBhcnRpZGEubm9tYnJlIH19PC90ZD5cbiAgICAgICAgICA8dGQgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAge3sgcHJlc3VwdWVzdG8uY2FudGluaSA/IGZvcm1hdChwcmVzdXB1ZXN0by5jYW50aW5pKSA6ICcnIH19XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAge3sgcHJlc3VwdWVzdG8uY29zdG9pbmkgPyBmb3JtYXQocHJlc3VwdWVzdG8uY29zdG9pbmkpIDogJycgfX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBhbGlnbj1cInJpZ2h0XCI+e3sgZm9ybWF0KHByZXN1cHVlc3RvLnRvdGFsaW5pKSB9fTwvdGQ+XG4gICAgICAgICAgPHRkIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgIHt7IHByZXN1cHVlc3RvLnJlbmRpZG9jYW50ID8gZm9ybWF0KHByZXN1cHVlc3RvLnJlbmRpZG9jYW50KSA6ICcnIH19XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgYWxpZ249XCJyaWdodFwiPnt7IGZvcm1hdChwcmVzdXB1ZXN0by5yZW5kaWRvdG90KSB9fTwvdGQ+XG4gICAgICAgICAgPHRkIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgIHt7IHByZXN1cHVlc3RvLnBvcmdhc2NhbiA/IGZvcm1hdChwcmVzdXB1ZXN0by5wb3JnYXNjYW4pIDogJycgfX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICB7eyBwcmVzdXB1ZXN0by5wb3JnYXNjb3N0ID8gZm9ybWF0KHByZXN1cHVlc3RvLnBvcmdhc2Nvc3QpIDogJycgfX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBhbGlnbj1cInJpZ2h0XCI+e3sgZm9ybWF0KHByZXN1cHVlc3RvLnBvcmdhc3RvdCkgfX08L3RkPlxuICAgICAgICAgIDx0ZCBhbGlnbj1cInJpZ2h0XCI+e3sgZm9ybWF0KHByZXN1cHVlc3RvLnByZXNhY3R1KSB9fTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBmb3JtYXRQcmljZSBmcm9tICdAL2hlbHBlcnMvZm9ybWF0LXByaWNlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnRGlzcGxheUNvbnRyb2wnLFxuICBwcm9wczoge1xuICAgIHByZXN1cHVlc3Rvczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgIHJldHVybiBmb3JtYXRQcmljZSh2YWx1ZSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBib3JkZXIgc2hhZG93IHAtNFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBmbG9hdC1lbmQgbWItMlwiXG4gICAgICAgIEBjbGljaz1cImJ1c2NhRGF0b3MoJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICAgIEJ1c2NhclxuICAgICAgPC9idXR0b24+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm9icmEtdnVlXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+T2JyYTwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIG5hbWU9XCJvYnJhLXZ1ZVwiXG4gICAgICAgICAgICAgIGlkPVwib2JyYS12dWVcIlxuICAgICAgICAgICAgICBAY2hhbmdlPVwic2VsZWN0ZWRPYnJhKCRldmVudClcIlxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tc2VsZWN0IHNlbGVjdDJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS0tIFNlbGVjY2lvbmUgdW5hIG9icmEgLS0tPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJvYnJhIGluIG9icmFzXCIgOmtleT1cIm9icmFbJ0BpZCddXCIgOnZhbHVlPVwib2JyYS5pZFwiPlxuICAgICAgICAgICAgICAgIHt7IG9icmEubm9tYnJlIH19XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZlY2hhXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+RmVjaGE6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJmZWNoYVwiXG4gICAgICAgICAgICAgIGlkPVwiZmVjaGFcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiZmVjaGFcIlxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuaXZlbFwiIGNsYXNzPVwiZnJvbS1sYWJlbFwiPk5pdmVsOjwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJuaXZlbC12dWVcIiBpZD1cIm5pdmVsLXZ1ZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLS0gU2VsZWNjaW9uZSB1biBuaXZlbCAtLS08L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjM8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGlkPVwib2JyYS12dWVGZWVkYmFja1wiIHYtc2hvdz1cIiFpc1ZhbGlkXCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICB7eyBlcnJvciB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibXQtNCBzaGFkb3cgYm9yZGVyXCIgdi1pZj1cImNvbnRyb2xBY3R1YWxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwdC00IHBzLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgIDxwPkNvbnRyb2wgSGlzdCZvYWN1dGU7cmljbzwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTlcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBPYnJhOiA8c3BhbiBjbGFzcz1cInRleHQgdGV4dC1zdWNjZXNzXCI+e3sgbm9tYnJlT2JyYSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBGZWNoYTogPHNwYW4gY2xhc3M9XCJ0ZXh0IHRleHQtc3VjY2Vzc1wiPnt7IGZlY2hhIH19PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpc3BsYXktY29udHJvbCA6cHJlc3VwdWVzdG9zPVwiY29udHJvbEFjdHVhbFwiIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGZldGNoUHJlc3VwdWVzdG9EYXRlIH0gZnJvbSAnQC9zZXJ2aWNlcy9jb250cm9sLWFjdHVhbC1zZXJ2aWNlJztcbmltcG9ydCB7IGZldGNoT2JyYXMgfSBmcm9tICdAL3NlcnZpY2VzL29icmEtc2VydmljZSc7XG5pbXBvcnQgRGlzcGxheUNvbnRyb2wgZnJvbSAnQC9jb21wb25lbnRzL2Rpc3BsYXlDb250cm9sLnZ1ZSc7XG5pbXBvcnQgeyBmaWx0ZXJPYnJhLCBmaWx0ZXJEYXRhIH0gZnJvbSAnQC9oZWxwZXJzL2ZpbHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0NvbnRyb2xBY3R1YWwnLFxuICBjb21wb25lbnRzOiB7XG4gICAgRGlzcGxheUNvbnRyb2wsXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRyb2xBY3R1YWw6IG51bGwsXG4gICAgICBvYnJhczogbnVsbCxcbiAgICAgIG9icmFTZWxlY3RlZDogJycsXG4gICAgICBlcnJvcjogJycsXG4gICAgICBmZWNoYTogbnVsbCxcbiAgICB9O1xuICB9LFxuICBhc3luYyBjcmVhdGVkKCkge1xuICAgIGNvbnN0IG9icmFSZXNwb25zZSA9IGF3YWl0IGZldGNoT2JyYXMoKTtcblxuICAgIHRoaXMub2JyYXMgPSBvYnJhUmVzcG9uc2UuZGF0YVsnaHlkcmE6bWVtYmVyJ107XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzZWxlY3RlZE9icmEoZXZlbnQpIHtcbiAgICAgIHRoaXMub2JyYVNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29icmEtdnVlJykudmFsdWU7XG4gICAgfSxcblxuICAgIGFzeW5jIGJ1c2NhRGF0b3MoZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5vYnJhU2VsZWN0ZWQpIHtcbiAgICAgICAgYWxlcnQoJ1NlbGVjY2lvbmUgdW5hIG9icmEnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJlc3VwdWVzdG9SZXNwb25zZSA9IGF3YWl0IGZldGNoUHJlc3VwdWVzdG9EYXRlKFxuICAgICAgICB0aGlzLm9icmFTZWxlY3RlZCxcbiAgICAgICAgZmVjaGEudmFsdWVcbiAgICAgICk7XG5cbiAgICAgIC8vICBjb25zb2xlLmxvZyhwcmVzdXB1ZXN0b1Jlc3BvbnNlKTtcblxuICAgICAgY29uc3QgcHJlc1JlZHVjID0gZmlsdGVyT2JyYShcbiAgICAgICAgcHJlc3VwdWVzdG9SZXNwb25zZS5kYXRhWydoeWRyYTptZW1iZXInXSxcbiAgICAgICAgdGhpcy5vYnJhU2VsZWN0ZWRcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuY29udHJvbEFjdHVhbCA9IGZpbHRlckRhdGEoXG4gICAgICAgIHByZXNSZWR1YyxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25pdmVsLXZ1ZScpLnZhbHVlXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBmaWx0ZXJOaXZlbCgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9LFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGlzVmFsaWQoKSB7XG4gICAgICByZXR1cm4gIXRoaXMuZXJyb3I7XG4gICAgfSxcbiAgICBub21icmVPYnJhKCkge1xuICAgICAgdmFyIGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2JyYS12dWUnKTtcbiAgICAgIHZhciB0ZXh0ID0gZS5vcHRpb25zW2Uuc2VsZWN0ZWRJbmRleF0udGV4dDtcbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2Rpc3BsYXlDb250cm9sLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kYmMxMTM1NCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9kaXNwbGF5Q29udHJvbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Rpc3BsYXlDb250cm9sLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2FuZHJlc2NvdXJ0L1B1YmxpYy9HSVQvaHRtbC9TQ1AtdjIuMC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdkYmMxMTM1NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkYmMxMTM1NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkYmMxMTM1NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZGlzcGxheUNvbnRyb2wudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRiYzExMzU0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2RiYzExMzU0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvY29tcG9uZW50cy9kaXNwbGF5Q29udHJvbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NvbnRyb2wtZmVjaGEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc4NTg3NmY4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NvbnRyb2wtZmVjaGEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jb250cm9sLWZlY2hhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2FuZHJlc2NvdXJ0L1B1YmxpYy9HSVQvaHRtbC9TQ1AtdjIuMC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3ODU4NzZmOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3ODU4NzZmOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3ODU4NzZmOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY29udHJvbC1mZWNoYS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Nzg1ODc2ZjgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzg1ODc2ZjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9wYWdlcy9jb250cm9sLWZlY2hhLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kaXNwbGF5Q29udHJvbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kaXNwbGF5Q29udHJvbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udHJvbC1mZWNoYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250cm9sLWZlY2hhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclwiIH0sIFtcbiAgICAgIF92bS5fbSgwKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICBfdm0uX2woX3ZtLnByZXN1cHVlc3RvcywgZnVuY3Rpb24gKHByZXN1cHVlc3RvKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IHByZXN1cHVlc3RvW1wiQGlkXCJdIH0sIFtcbiAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJlc3VwdWVzdG8ucGFydGlkYS5ub21icmUpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJyaWdodFwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICBwcmVzdXB1ZXN0by5jYW50aW5pID8gX3ZtLmZvcm1hdChwcmVzdXB1ZXN0by5jYW50aW5pKSA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwicmlnaHRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgcHJlc3VwdWVzdG8uY29zdG9pbmkgPyBfdm0uZm9ybWF0KHByZXN1cHVlc3RvLmNvc3RvaW5pKSA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwicmlnaHRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZm9ybWF0KHByZXN1cHVlc3RvLnRvdGFsaW5pKSkpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcInJpZ2h0XCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgIHByZXN1cHVlc3RvLnJlbmRpZG9jYW50XG4gICAgICAgICAgICAgICAgICAgICAgPyBfdm0uZm9ybWF0KHByZXN1cHVlc3RvLnJlbmRpZG9jYW50KVxuICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJyaWdodFwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5mb3JtYXQocHJlc3VwdWVzdG8ucmVuZGlkb3RvdCkpKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJyaWdodFwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICBwcmVzdXB1ZXN0by5wb3JnYXNjYW5cbiAgICAgICAgICAgICAgICAgICAgICA/IF92bS5mb3JtYXQocHJlc3VwdWVzdG8ucG9yZ2FzY2FuKVxuICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJyaWdodFwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICBwcmVzdXB1ZXN0by5wb3JnYXNjb3N0XG4gICAgICAgICAgICAgICAgICAgICAgPyBfdm0uZm9ybWF0KHByZXN1cHVlc3RvLnBvcmdhc2Nvc3QpXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcInJpZ2h0XCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmZvcm1hdChwcmVzdXB1ZXN0by5wb3JnYXN0b3QpKSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwicmlnaHRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZm9ybWF0KHByZXN1cHVlc3RvLnByZXNhY3R1KSkpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSlcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgICksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFsaWduLW1pZGRsZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgcm93c3BhbjogXCIyXCIsIGFsaWduOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiUGFydGlkYVwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiM1wiLCBhbGlnbjogXCJjZW50ZXJcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJJbmljaWFsXCIpLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiMlwiLCBhbGlnbjogXCJjZW50ZXJcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJSZW5kaWRvXCIpLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiM1wiLCBhbGlnbjogXCJjZW50ZXJcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJQb3IgR2FzdGFyXCIpLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFsaWduLW1pZGRsZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgcm93c3BhbjogXCIyXCIsIGFsaWduOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgIFByZXN1cHVlc3RvIEFjdHVhbGl6YWRvXFxuICAgICAgICBcIildXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSwgW192bS5fdihcIkNhbnRpZGFkXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9IH0sIFtfdm0uX3YoXCJVbml0YXJpb1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbX3ZtLl92KFwiVG90YWxcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSwgW192bS5fdihcIkNhbnRpZGFkXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9IH0sIFtfdm0uX3YoXCJUb3RhbFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbX3ZtLl92KFwiQ2FudGlkYWRcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSwgW192bS5fdihcIlVuaXRhcmlvXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9IH0sIFtfdm0uX3YoXCJUb3RhbFwiKV0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBib3JkZXIgc2hhZG93IHAtNFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LWVuZCBtYi0yXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uYnVzY2FEYXRvcygkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBCdXNjYXJcXG4gICAgXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImZvcm1cIiwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tcm93XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWxhYmVsXCIsIGF0dHJzOiB7IGZvcjogXCJvYnJhLXZ1ZVwiIH0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIk9icmFcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1zZWxlY3Qgc2VsZWN0MlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwib2JyYS12dWVcIiwgaWQ6IFwib2JyYS12dWVcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3RlZE9icmEoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIi0tLSBTZWxlY2Npb25lIHVuYSBvYnJhIC0tLVwiKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0ub2JyYXMsIGZ1bmN0aW9uIChvYnJhKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiBvYnJhW1wiQGlkXCJdLCBkb21Qcm9wczogeyB2YWx1ZTogb2JyYS5pZCB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Mob2JyYS5ub21icmUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWxhYmVsXCIsIGF0dHJzOiB7IGZvcjogXCJmZWNoYVwiIH0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkZlY2hhOlwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmVjaGEsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZlY2hhXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZGF0ZVwiLCBuYW1lOiBcImZlY2hhXCIsIGlkOiBcImZlY2hhXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mZWNoYSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uZmVjaGEgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uaXNWYWxpZCxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIWlzVmFsaWRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnZhbGlkLWZlZWRiYWNrXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIm9icmEtdnVlRmVlZGJhY2tcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmVycm9yKSArIFwiXFxuICAgICAgICBcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5jb250cm9sQWN0dWFsXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC00IHNoYWRvdyBib3JkZXJcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHQtNCBwcy00XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBPYnJhOiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQgdGV4dC1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLm5vbWJyZU9icmEpKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBGZWNoYTogXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0IHRleHQtc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5mZWNoYSkpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGlzcGxheS1jb250cm9sXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcHJlc3VwdWVzdG9zOiBfdm0uY29udHJvbEFjdHVhbCB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LCBbXG4gICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZnJvbS1sYWJlbFwiLCBhdHRyczogeyBmb3I6IFwibml2ZWxcIiB9IH0sIFtcbiAgICAgICAgX3ZtLl92KFwiTml2ZWw6XCIpLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICBhdHRyczogeyBuYW1lOiBcIm5pdmVsLXZ1ZVwiLCBpZDogXCJuaXZlbC12dWVcIiB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIi0tLSBTZWxlY2Npb25lIHVuIG5pdmVsIC0tLVwiKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMVwiIH0gfSwgW192bS5fdihcIjFcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMlwiIH0gfSwgW192bS5fdihcIjJcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiM1wiIH0gfSwgW192bS5fdihcIjNcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiNFwiIH0gfSwgW192bS5fdihcIjRcIildKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJDb250cm9sIEhpc3TDs3JpY29cIildKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJuYW1lcyI6WyJWdWUiLCJBcHAiLCJyZW5kZXIiLCJoIiwiJG1vdW50IiwiZmlsdGVyRGF0YSIsImNvbnRyb2wiLCJuaXZlbCIsImxlbiIsImxlbmd0aCIsInJlc3VsdCIsIkFycmF5IiwiaSIsInB1c2giLCJmaWx0ZXJPYnJhIiwib2JyYSIsImlkIiwicHJpY2UiLCJ0b0xvY2FsZVN0cmluZyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsImF4aW9zIiwiZmV0Y2hQcmVzdXB1ZXN0byIsIm9icmFJUkkiLCJnZXQiLCJwYXJhbXMiLCJmZXRjaFByZXN1cHVlc3RvRGF0ZSIsIm9icmFJZCIsImZlY2hhIiwiZmV0Y2hPYnJhcyIsImFjdGl2byIsIm5hbWUiLCJwcm9wcyIsInByZXN1cHVlc3RvcyIsInR5cGUiLCJtZXRob2RzIiwiZm9ybWF0IiwidmFsdWUiLCJjb21wb25lbnRzIiwiRGlzcGxheUNvbnRyb2wiLCJkYXRhIiwiY29udHJvbEFjdHVhbCIsIm9icmFzIiwib2JyYVNlbGVjdGVkIiwiZXJyb3IiLCJjcmVhdGVkIiwib2JyYVJlc3BvbnNlIiwic2VsZWN0ZWRPYnJhIiwiZXZlbnQiLCJidXNjYURhdG9zIiwiYWxlcnQiLCJwcmVzdXB1ZXN0b1Jlc3BvbnNlIiwicHJlc1JlZHVjIiwiZG9jdW1lbnQiLCJmaWx0ZXJOaXZlbCIsImNvbXB1dGVkIiwiaXNWYWxpZCIsIm5vbWJyZU9icmEiXSwic291cmNlUm9vdCI6IiJ9