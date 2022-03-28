"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["control-actual"],{

/***/ "./assets/control-actual.js":
/*!**********************************!*\
  !*** ./assets/control-actual.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _pages_control_actual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/control-actual */ "./assets/pages/control-actual.vue");


new vue__WEBPACK_IMPORTED_MODULE_1__["default"]({
  render: function render(h) {
    return h(_pages_control_actual__WEBPACK_IMPORTED_MODULE_0__["default"]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/pages/control-actual.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/pages/control-actual.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ControlActual',
  components: {
    displayControl: _components_displayControl_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      controlActual: null,
      obras: null,
      obraSelected: '',
      error: ''
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
              // console.log(obraResponse.data['hydra:member']);
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
        var nivel, presupuestoResponse;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(_this2.obraSelected);

                if (!_this2.obraSelected) {
                  alert('Seleccione una obra');
                }

                nivel = document.getElementById('nivel-vue').value;
                _context2.next = 5;
                return (0,_services_control_actual_service__WEBPACK_IMPORTED_MODULE_3__.fetchPresupuesto)(_this2.obraSelected);

              case 5:
                presupuestoResponse = _context2.sent;
                _this2.controlActual = (0,_helpers_filter__WEBPACK_IMPORTED_MODULE_6__.filterData)(presupuestoResponse.data['hydra:member'], nivel);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  computed: {
    isValid: function isValid() {
      return !this.error;
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

/***/ "./assets/pages/control-actual.vue":
/*!*****************************************!*\
  !*** ./assets/pages/control-actual.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _control_actual_vue_vue_type_template_id_619ab217___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control-actual.vue?vue&type=template&id=619ab217& */ "./assets/pages/control-actual.vue?vue&type=template&id=619ab217&");
/* harmony import */ var _control_actual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control-actual.vue?vue&type=script&lang=js& */ "./assets/pages/control-actual.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _control_actual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _control_actual_vue_vue_type_template_id_619ab217___WEBPACK_IMPORTED_MODULE_0__.render,
  _control_actual_vue_vue_type_template_id_619ab217___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/pages/control-actual.vue"
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

/***/ "./assets/pages/control-actual.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./assets/pages/control-actual.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_control_actual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./control-actual.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/pages/control-actual.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_control_actual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./assets/pages/control-actual.vue?vue&type=template&id=619ab217&":
/*!************************************************************************!*\
  !*** ./assets/pages/control-actual.vue?vue&type=template&id=619ab217& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_control_actual_vue_vue_type_template_id_619ab217___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_control_actual_vue_vue_type_template_id_619ab217___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_control_actual_vue_vue_type_template_id_619ab217___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./control-actual.vue?vue&type=template&id=619ab217& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/pages/control-actual.vue?vue&type=template&id=619ab217&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/pages/control-actual.vue?vue&type=template&id=619ab217&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/pages/control-actual.vue?vue&type=template&id=619ab217& ***!
  \***************************************************************************************************************************************************************************************************************/
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
      _c("label", { attrs: { for: "obra-vue" } }, [_vm._v("Obra")]),
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
              { key: obra["@id"], domProps: { value: obra["@id"] } },
              [_vm._v("\n        " + _vm._s(obra.nombre) + "\n      ")]
            )
          }),
        ],
        2
      ),
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
        [_vm._v("\n      " + _vm._s(_vm.error) + "\n    ")]
      ),
      _vm._v(" "),
      _c("label", { staticClass: "from-label", attrs: { for: "nivel" } }, [
        _vm._v("Nivel:"),
      ]),
      _vm._v(" "),
      _vm._m(0),
    ]),
    _vm._v(" "),
    _vm.controlActual
      ? _c(
          "div",
          { staticClass: "mt-4 shadow border" },
          [
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
    return _c(
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
    )
  },
]
render._withStripped = true



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_object_to-string_js-node_-957e3f","vendors-node_modules_vue-loader_lib_runtime_componentNormalizer_js-node_modules_vue_dist_vue_esm_js"], () => (__webpack_exec__("./assets/control-actual.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Li9hc3NldHMvaGVscGVycy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2hlbHBlcnMvZm9ybWF0LXByaWNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zZXJ2aWNlcy9jb250cm9sLWFjdHVhbC1zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zZXJ2aWNlcy9vYnJhLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9jb21wb25lbnRzL2Rpc3BsYXlDb250cm9sLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL3BhZ2VzL2NvbnRyb2wtYWN0dWFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9kaXNwbGF5Q29udHJvbC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL2NvbnRyb2wtYWN0dWFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9kaXNwbGF5Q29udHJvbC52dWU/NTEwNSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvY29udHJvbC1hY3R1YWwudnVlPzk4NjMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvZGlzcGxheUNvbnRyb2wudnVlPzM3MTciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL2NvbnRyb2wtYWN0dWFsLnZ1ZT83MTA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9jb250cm9sLWFjdHVhbCc7XG5cbm5ldyBWdWUoe1xuICByZW5kZXI6IChoKSA9PiBoKEFwcCksXG59KS4kbW91bnQoJyNhcHAnKTtcbiIsIi8qKlxuICpcbiAqIEJ1c2NhIHF1ZSBubyBoYXlhIG5pdmVsIG1heW9yIGFsIGRlc2VhZG9cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBjb250cm9sXG4gKiBAcGFyYW0ge2ludGVnZXJ9IG5pdmVsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJEYXRhKGNvbnRyb2wsIG5pdmVsKSB7XG4gIHZhciBsZW4gPSBjb250cm9sLmxlbmd0aDtcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheSgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGNvbnRyb2xbaV0ubml2ZWwgPD0gbml2ZWwpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGNvbnRyb2xbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyT2JyYShjb250cm9sLCBvYnJhKSB7XG4gIHZhciBsZW4gPSBjb250cm9sLmxlbmd0aDtcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheSgpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoY29udHJvbFtpXS5vYnJhLmlkID09IG9icmEpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGNvbnRyb2xbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLyoqXG4gKiBGb3JtYXRzIGEgcHJpY2UgYnV5IGFkZGluZyBhIGRvdCBhbmQgbm9ybWFsaXppbmcgZGVjaW1hbHNcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gcHJpY2VcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChwcmljZSkgPT4ge1xuICAgIHJldHVybiBwcmljZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgIH0pO1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8qKlxuICogRXN0YSBmdW5jaW9uIGJ1c2NhIGVsIGNvbnRyb2wgcHJlc3VwdWVzdGFyaW8gYWN0dWFsIHBhcmEgdW5hIGRldGVybWluYWRhIG9icmFcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gb2JyYUlSSVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFByZXN1cHVlc3RvKG9icmFJUkkpIHtcbiAgcmV0dXJuIGF4aW9zLmdldCgnL2FwaS9wcmVzdXB1ZXN0b3MnLCB7XG4gICAgcGFyYW1zOiB7IG9icmE6IG9icmFJUkkgfSxcbiAgfSk7XG59XG5cbi8qKlxuICpFc3RhIGZ1bmNpb24gYnVzY2EgZWwgY29udHJvbCBwcmVzdXB1ZXN0YXJpbyBwYXJhIHVuYSBkZXRlcm1pbmFkYSBmZWNoYVxuICpcbiAqIEBwYXJhbSB7SW50ZWdlcn0gb2JyYUlkXG4gKiBAcGFyYW0ge0RhdGV9IGZlY2hhXG4gKiBAcGFyYW0ge0ludGVnZXJ9ICBuaXZlbFxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFByZXN1cHVlc3RvRGF0ZShvYnJhSWQsIGZlY2hhKSB7XG4gIHJldHVybiBheGlvcy5nZXQoJy9hcGkvY29udHJvbHMvJywge1xuICAgIHBhcmFtczoge1xuICAgICAgZmVjaGEsXG4gICAgfSxcbiAgfSk7XG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hPYnJhcygpIHtcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvYXBpL29icmFzJywge1xuICAgICAgICBwYXJhbXM6IHsgYWN0aXZvOiB0cnVlIH0sXG4gICAgfSk7XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclwiPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIHJvd3NwYW49XCIyXCIgYWxpZ249XCJjZW50ZXJcIiBjbGFzcz1cImFsaWduLW1pZGRsZVwiPlBhcnRpZGE8L3RkPlxuICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiM1wiIGFsaWduPVwiY2VudGVyXCI+SW5pY2lhbDwvdGQ+XG4gICAgICAgICAgPHRkIGNvbHNwYW49XCIyXCIgYWxpZ249XCJjZW50ZXJcIj5SZW5kaWRvPC90ZD5cbiAgICAgICAgICA8dGQgY29sc3Bhbj1cIjNcIiBhbGlnbj1cImNlbnRlclwiPlBvciBHYXN0YXI8L3RkPlxuICAgICAgICAgIDx0ZCByb3dzcGFuPVwiMlwiIGFsaWduPVwiY2VudGVyXCIgY2xhc3M9XCJhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgIFByZXN1cHVlc3RvIEFjdHVhbGl6YWRvXG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPkNhbnRpZGFkPC90ZD5cbiAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5Vbml0YXJpbzwvdGQ+XG4gICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+VG90YWw8L3RkPlxuICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPkNhbnRpZGFkPC90ZD5cbiAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5Ub3RhbDwvdGQ+XG4gICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+Q2FudGlkYWQ8L3RkPlxuICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPlVuaXRhcmlvPC90ZD5cbiAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5Ub3RhbDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5PlxuICAgICAgICA8dHIgdi1mb3I9XCJwcmVzdXB1ZXN0byBpbiBwcmVzdXB1ZXN0b3NcIiA6a2V5PVwicHJlc3VwdWVzdG9bJ0BpZCddXCI+XG4gICAgICAgICAgPHRkPnt7IHByZXN1cHVlc3RvLnBhcnRpZGEubm9tYnJlIH19PC90ZD5cbiAgICAgICAgICA8dGQgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAge3sgcHJlc3VwdWVzdG8uY2FudGluaSA/IGZvcm1hdChwcmVzdXB1ZXN0by5jYW50aW5pKSA6ICcnIH19XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAge3sgcHJlc3VwdWVzdG8uY29zdG9pbmkgPyBmb3JtYXQocHJlc3VwdWVzdG8uY29zdG9pbmkpIDogJycgfX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBhbGlnbj1cInJpZ2h0XCI+e3sgZm9ybWF0KHByZXN1cHVlc3RvLnRvdGFsaW5pKSB9fTwvdGQ+XG4gICAgICAgICAgPHRkIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgIHt7IHByZXN1cHVlc3RvLnJlbmRpZG9jYW50ID8gZm9ybWF0KHByZXN1cHVlc3RvLnJlbmRpZG9jYW50KSA6ICcnIH19XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgYWxpZ249XCJyaWdodFwiPnt7IGZvcm1hdChwcmVzdXB1ZXN0by5yZW5kaWRvdG90KSB9fTwvdGQ+XG4gICAgICAgICAgPHRkIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgIHt7IHByZXN1cHVlc3RvLnBvcmdhc2NhbiA/IGZvcm1hdChwcmVzdXB1ZXN0by5wb3JnYXNjYW4pIDogJycgfX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICB7eyBwcmVzdXB1ZXN0by5wb3JnYXNjb3N0ID8gZm9ybWF0KHByZXN1cHVlc3RvLnBvcmdhc2Nvc3QpIDogJycgfX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBhbGlnbj1cInJpZ2h0XCI+e3sgZm9ybWF0KHByZXN1cHVlc3RvLnBvcmdhc3RvdCkgfX08L3RkPlxuICAgICAgICAgIDx0ZCBhbGlnbj1cInJpZ2h0XCI+e3sgZm9ybWF0KHByZXN1cHVlc3RvLnByZXNhY3R1KSB9fTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBmb3JtYXRQcmljZSBmcm9tICdAL2hlbHBlcnMvZm9ybWF0LXByaWNlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnRGlzcGxheUNvbnRyb2wnLFxuICBwcm9wczoge1xuICAgIHByZXN1cHVlc3Rvczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgIHJldHVybiBmb3JtYXRQcmljZSh2YWx1ZSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBib3JkZXIgc2hhZG93IHAtNFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBmbG9hdC1lbmQgbWItMlwiXG4gICAgICAgIEBjbGljaz1cImJ1c2NhRGF0b3MoJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICAgIEJ1c2NhclxuICAgICAgPC9idXR0b24+XG4gICAgICA8bGFiZWwgZm9yPVwib2JyYS12dWVcIj5PYnJhPC9sYWJlbD5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgbmFtZT1cIm9icmEtdnVlXCJcbiAgICAgICAgaWQ9XCJvYnJhLXZ1ZVwiXG4gICAgICAgIEBjaGFuZ2U9XCJzZWxlY3RlZE9icmEoJGV2ZW50KVwiXG4gICAgICAgIGNsYXNzPVwiZm9ybS1zZWxlY3Qgc2VsZWN0MlwiXG4gICAgICA+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLS0gU2VsZWNjaW9uZSB1bmEgb2JyYSAtLS08L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2LWZvcj1cIm9icmEgaW4gb2JyYXNcIiA6a2V5PVwib2JyYVsnQGlkJ11cIiA6dmFsdWU9XCJvYnJhWydAaWQnXVwiPlxuICAgICAgICAgIHt7IG9icmEubm9tYnJlIH19XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8ZGl2IGlkPVwib2JyYS12dWVGZWVkYmFja1wiIHYtc2hvdz1cIiFpc1ZhbGlkXCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgIHt7IGVycm9yIH19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxsYWJlbCBmb3I9XCJuaXZlbFwiIGNsYXNzPVwiZnJvbS1sYWJlbFwiPk5pdmVsOjwvbGFiZWw+XG4gICAgICA8c2VsZWN0IG5hbWU9XCJuaXZlbC12dWVcIiBpZD1cIm5pdmVsLXZ1ZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLS0gU2VsZWNjaW9uZSB1biBuaXZlbCAtLS08L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjM8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibXQtNCBzaGFkb3cgYm9yZGVyXCIgdi1pZj1cImNvbnRyb2xBY3R1YWxcIj5cbiAgICAgIDxkaXNwbGF5LWNvbnRyb2wgOnByZXN1cHVlc3Rvcz1cImNvbnRyb2xBY3R1YWxcIiAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBmZXRjaFByZXN1cHVlc3RvIH0gZnJvbSAnQC9zZXJ2aWNlcy9jb250cm9sLWFjdHVhbC1zZXJ2aWNlJztcbmltcG9ydCB7IGZldGNoT2JyYXMgfSBmcm9tICdAL3NlcnZpY2VzL29icmEtc2VydmljZSc7XG5pbXBvcnQgZGlzcGxheUNvbnRyb2wgZnJvbSAnQC9jb21wb25lbnRzL2Rpc3BsYXlDb250cm9sLnZ1ZSc7XG5pbXBvcnQgeyBmaWx0ZXJEYXRhIH0gZnJvbSAnQC9oZWxwZXJzL2ZpbHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0NvbnRyb2xBY3R1YWwnLFxuICBjb21wb25lbnRzOiB7XG4gICAgZGlzcGxheUNvbnRyb2wsXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRyb2xBY3R1YWw6IG51bGwsXG4gICAgICBvYnJhczogbnVsbCxcbiAgICAgIG9icmFTZWxlY3RlZDogJycsXG4gICAgICBlcnJvcjogJycsXG4gICAgfTtcbiAgfSxcbiAgYXN5bmMgY3JlYXRlZCgpIHtcbiAgICBjb25zdCBvYnJhUmVzcG9uc2UgPSBhd2FpdCBmZXRjaE9icmFzKCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhvYnJhUmVzcG9uc2UuZGF0YVsnaHlkcmE6bWVtYmVyJ10pO1xuICAgIHRoaXMub2JyYXMgPSBvYnJhUmVzcG9uc2UuZGF0YVsnaHlkcmE6bWVtYmVyJ107XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzZWxlY3RlZE9icmEoZXZlbnQpIHtcbiAgICAgIHRoaXMub2JyYVNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29icmEtdnVlJykudmFsdWU7XG4gICAgfSxcblxuICAgIGFzeW5jIGJ1c2NhRGF0b3MoZXZlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JyYVNlbGVjdGVkKTtcbiAgICAgIGlmICghdGhpcy5vYnJhU2VsZWN0ZWQpIHtcbiAgICAgICAgYWxlcnQoJ1NlbGVjY2lvbmUgdW5hIG9icmEnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgbml2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbml2ZWwtdnVlJykudmFsdWU7XG4gICAgICBjb25zdCBwcmVzdXB1ZXN0b1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2hQcmVzdXB1ZXN0byh0aGlzLm9icmFTZWxlY3RlZCk7XG5cbiAgICAgIHRoaXMuY29udHJvbEFjdHVhbCA9IGZpbHRlckRhdGEoXG4gICAgICAgIHByZXN1cHVlc3RvUmVzcG9uc2UuZGF0YVsnaHlkcmE6bWVtYmVyJ10sXG4gICAgICAgIG5pdmVsXG4gICAgICApO1xuICAgIH0sXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgIHJldHVybiAhdGhpcy5lcnJvcjtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9kaXNwbGF5Q29udHJvbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGJjMTEzNTQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZGlzcGxheUNvbnRyb2wudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9kaXNwbGF5Q29udHJvbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9hbmRyZXNjb3VydC9QdWJsaWMvR0lUL2h0bWwvU0NQLXYyLjAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZGJjMTEzNTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZGJjMTEzNTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZGJjMTEzNTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2Rpc3BsYXlDb250cm9sLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kYmMxMTM1NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkYmMxMTM1NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2NvbXBvbmVudHMvZGlzcGxheUNvbnRyb2wudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jb250cm9sLWFjdHVhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjE5YWIyMTcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY29udHJvbC1hY3R1YWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jb250cm9sLWFjdHVhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9hbmRyZXNjb3VydC9QdWJsaWMvR0lUL2h0bWwvU0NQLXYyLjAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjE5YWIyMTcnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjE5YWIyMTcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjE5YWIyMTcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NvbnRyb2wtYWN0dWFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MTlhYjIxNyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MTlhYjIxNycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3BhZ2VzL2NvbnRyb2wtYWN0dWFsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kaXNwbGF5Q29udHJvbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kaXNwbGF5Q29udHJvbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udHJvbC1hY3R1YWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udHJvbC1hY3R1YWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCIgfSwgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInRib2R5XCIsXG4gICAgICAgIF92bS5fbChfdm0ucHJlc3VwdWVzdG9zLCBmdW5jdGlvbiAocHJlc3VwdWVzdG8pIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogcHJlc3VwdWVzdG9bXCJAaWRcIl0gfSwgW1xuICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcmVzdXB1ZXN0by5wYXJ0aWRhLm5vbWJyZSkpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcInJpZ2h0XCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgIHByZXN1cHVlc3RvLmNhbnRpbmkgPyBfdm0uZm9ybWF0KHByZXN1cHVlc3RvLmNhbnRpbmkpIDogXCJcIlxuICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJyaWdodFwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICBwcmVzdXB1ZXN0by5jb3N0b2luaSA/IF92bS5mb3JtYXQocHJlc3VwdWVzdG8uY29zdG9pbmkpIDogXCJcIlxuICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJyaWdodFwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5mb3JtYXQocHJlc3VwdWVzdG8udG90YWxpbmkpKSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwicmlnaHRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgcHJlc3VwdWVzdG8ucmVuZGlkb2NhbnRcbiAgICAgICAgICAgICAgICAgICAgICA/IF92bS5mb3JtYXQocHJlc3VwdWVzdG8ucmVuZGlkb2NhbnQpXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcInJpZ2h0XCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmZvcm1hdChwcmVzdXB1ZXN0by5yZW5kaWRvdG90KSkpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcInJpZ2h0XCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgIHByZXN1cHVlc3RvLnBvcmdhc2NhblxuICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLmZvcm1hdChwcmVzdXB1ZXN0by5wb3JnYXNjYW4pXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcInJpZ2h0XCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgIHByZXN1cHVlc3RvLnBvcmdhc2Nvc3RcbiAgICAgICAgICAgICAgICAgICAgICA/IF92bS5mb3JtYXQocHJlc3VwdWVzdG8ucG9yZ2FzY29zdClcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwicmlnaHRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZm9ybWF0KHByZXN1cHVlc3RvLnBvcmdhc3RvdCkpKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJyaWdodFwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5mb3JtYXQocHJlc3VwdWVzdG8ucHJlc2FjdHUpKSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWxpZ24tbWlkZGxlXCIsXG4gICAgICAgICAgICBhdHRyczogeyByb3dzcGFuOiBcIjJcIiwgYWxpZ246IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJQYXJ0aWRhXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCIzXCIsIGFsaWduOiBcImNlbnRlclwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIkluaWNpYWxcIiksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCIyXCIsIGFsaWduOiBcImNlbnRlclwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIlJlbmRpZG9cIiksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCIzXCIsIGFsaWduOiBcImNlbnRlclwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIlBvciBHYXN0YXJcIiksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWxpZ24tbWlkZGxlXCIsXG4gICAgICAgICAgICBhdHRyczogeyByb3dzcGFuOiBcIjJcIiwgYWxpZ246IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgUHJlc3VwdWVzdG8gQWN0dWFsaXphZG9cXG4gICAgICAgIFwiKV1cbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbX3ZtLl92KFwiQ2FudGlkYWRcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSwgW192bS5fdihcIlVuaXRhcmlvXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9IH0sIFtfdm0uX3YoXCJUb3RhbFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbX3ZtLl92KFwiQ2FudGlkYWRcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSwgW192bS5fdihcIlRvdGFsXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9IH0sIFtfdm0uX3YoXCJDYW50aWRhZFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LCBbX3ZtLl92KFwiVW5pdGFyaW9cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSwgW192bS5fdihcIlRvdGFsXCIpXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIGJvcmRlciBzaGFkb3cgcC00XCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgZmxvYXQtZW5kIG1iLTJcIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5idXNjYURhdG9zKCRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIlxcbiAgICAgIEJ1c2NhclxcbiAgICBcIildXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwib2JyYS12dWVcIiB9IH0sIFtfdm0uX3YoXCJPYnJhXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLXNlbGVjdCBzZWxlY3QyXCIsXG4gICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJvYnJhLXZ1ZVwiLCBpZDogXCJvYnJhLXZ1ZVwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdGVkT2JyYSgkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiLS0tIFNlbGVjY2lvbmUgdW5hIG9icmEgLS0tXCIpLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS5vYnJhcywgZnVuY3Rpb24gKG9icmEpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgeyBrZXk6IG9icmFbXCJAaWRcIl0sIGRvbVByb3BzOiB7IHZhbHVlOiBvYnJhW1wiQGlkXCJdIH0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3Mob2JyYS5ub21icmUpICsgXCJcXG4gICAgICBcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICB2YWx1ZTogIV92bS5pc1ZhbGlkLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFpc1ZhbGlkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFja1wiLFxuICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIm9icmEtdnVlRmVlZGJhY2tcIiB9LFxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3MoX3ZtLmVycm9yKSArIFwiXFxuICAgIFwiKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImZyb20tbGFiZWxcIiwgYXR0cnM6IHsgZm9yOiBcIm5pdmVsXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIk5pdmVsOlwiKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgwKSxcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5jb250cm9sQWN0dWFsXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC00IHNoYWRvdyBib3JkZXJcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGlzcGxheS1jb250cm9sXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcHJlc3VwdWVzdG9zOiBfdm0uY29udHJvbEFjdHVhbCB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcInNlbGVjdFwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJuaXZlbC12dWVcIiwgaWQ6IFwibml2ZWwtdnVlXCIgfSxcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiLS0tIFNlbGVjY2lvbmUgdW4gbml2ZWwgLS0tXCIpLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIxXCIgfSB9LCBbX3ZtLl92KFwiMVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjJcIiB9IH0sIFtfdm0uX3YoXCIyXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiM1wiIH0gfSwgW192bS5fdihcIjNcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCI0XCIgfSB9LCBbX3ZtLl92KFwiNFwiKV0pLFxuICAgICAgXVxuICAgIClcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm5hbWVzIjpbIlZ1ZSIsIkFwcCIsInJlbmRlciIsImgiLCIkbW91bnQiLCJmaWx0ZXJEYXRhIiwiY29udHJvbCIsIm5pdmVsIiwibGVuIiwibGVuZ3RoIiwicmVzdWx0IiwiQXJyYXkiLCJpIiwicHVzaCIsImZpbHRlck9icmEiLCJvYnJhIiwiaWQiLCJwcmljZSIsInRvTG9jYWxlU3RyaW5nIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwiYXhpb3MiLCJmZXRjaFByZXN1cHVlc3RvIiwib2JyYUlSSSIsImdldCIsInBhcmFtcyIsImZldGNoUHJlc3VwdWVzdG9EYXRlIiwib2JyYUlkIiwiZmVjaGEiLCJmZXRjaE9icmFzIiwiYWN0aXZvIiwibmFtZSIsInByb3BzIiwicHJlc3VwdWVzdG9zIiwidHlwZSIsIm1ldGhvZHMiLCJmb3JtYXQiLCJ2YWx1ZSIsImNvbXBvbmVudHMiLCJkaXNwbGF5Q29udHJvbCIsImRhdGEiLCJjb250cm9sQWN0dWFsIiwib2JyYXMiLCJvYnJhU2VsZWN0ZWQiLCJlcnJvciIsImNyZWF0ZWQiLCJvYnJhUmVzcG9uc2UiLCJzZWxlY3RlZE9icmEiLCJldmVudCIsImJ1c2NhRGF0b3MiLCJjb25zb2xlIiwiYWxlcnQiLCJkb2N1bWVudCIsInByZXN1cHVlc3RvUmVzcG9uc2UiLCJjb21wdXRlZCIsImlzVmFsaWQiXSwic291cmNlUm9vdCI6IiJ9