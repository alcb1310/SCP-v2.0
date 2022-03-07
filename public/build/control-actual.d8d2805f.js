"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[202],{2882:(t,r,e)=>{var n=e(538),a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("div",{staticClass:"form-group border shadow p-4"},[e("button",{staticClass:"btn btn-primary float-end mb-2",on:{click:function(r){return t.buscaDatos(r)}}},[t._v("\n      Buscar\n    ")]),t._v(" "),e("label",{attrs:{for:"obra-vue"}},[t._v("Obra")]),t._v(" "),e("select",{staticClass:"form-select select2",attrs:{name:"obra-vue",id:"obra-vue"},on:{change:function(r){return t.selectedObra(r)}}},[e("option",{attrs:{value:""}},[t._v("--- Seleccione una obra ---")]),t._v(" "),t._l(t.obras,(function(r){return e("option",{key:r["@id"],domProps:{value:r["@id"]}},[t._v("\n        "+t._s(r.nombre)+"\n      ")])}))],2),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isValid,expression:"!isValid"}],staticClass:"invalid-feedback",attrs:{id:"obra-vueFeedback"}},[t._v("\n      "+t._s(t.error)+"\n    ")]),t._v(" "),e("label",{staticClass:"from-label",attrs:{for:"nivel"}},[t._v("Nivel:")]),t._v(" "),t._m(0)]),t._v(" "),t.controlActual?e("div",{staticClass:"mt-4 shadow border"},[e("display-control",{attrs:{presupuestos:t.controlActual}})],1):t._e()])};a._withStripped=!0;e(1539),e(8674),e(5666);var o=e(9854),s=e(5009),i=e(6771),l=e(6715);function c(t,r,e,n,a,o,s){try{var i=t[o](s),l=i.value}catch(t){return void e(t)}i.done?r(l):Promise.resolve(l).then(n,a)}function u(t){return function(){var r=this,e=arguments;return new Promise((function(n,a){var o=t.apply(r,e);function s(t){c(o,n,a,s,i,"next",t)}function i(t){c(o,n,a,s,i,"throw",t)}s(void 0)}))}}const v={name:"ControlActual",components:{displayControl:i.Z},data:function(){return{controlActual:null,obras:null,obraSelected:"",error:""}},created:function(){var t=this;return u(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,s.r)();case 2:e=r.sent,t.obras=e.data["hydra:member"];case 4:case"end":return r.stop()}}),r)})))()},methods:{selectedObra:function(t){this.obraSelected=document.getElementById("obra-vue").value},buscaDatos:function(t){var r=this;return u(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(r.obraSelected),r.obraSelected||alert("Seleccione una obra"),e=document.getElementById("nivel-vue").value,t.next=5,(0,o.V)(r.obraSelected);case 5:n=t.sent,r.controlActual=(0,l.c)(n.data["hydra:member"],e);case 7:case"end":return t.stop()}}),t)})))()}},computed:{isValid:function(){return!this.error}}};var d=(0,e(1900).Z)(v,a,[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("select",{staticClass:"form-control",attrs:{name:"nivel-vue",id:"nivel-vue"}},[e("option",{attrs:{value:""}},[t._v("--- Seleccione un nivel ---")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("1")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("2")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("3")]),t._v(" "),e("option",{attrs:{value:"4"}},[t._v("4")])])}],!1,null,null,null);d.options.__file="assets/pages/control-actual.vue";const _=d.exports;new n.Z({render:function(t){return t(_)}}).$mount("#app")},6715:(t,r,e)=>{function n(t,r){for(var e=t.length,n=new Array,a=0;a<e;a++)t[a].nivel<=r&&n.push(t[a]);return n}function a(t,r){for(var e=t.length,n=new Array,a=0;a<e;a++)t[a].obra.id==r&&n.push(t[a]);return n}e.d(r,{c:()=>n,S:()=>a})},6475:(t,r,e)=>{e.d(r,{Z:()=>n});const n=function(t){return t.toLocaleString("en-US",{maximumFractionDigits:2,minimumFractionDigits:2})}},9854:(t,r,e)=>{e.d(r,{V:()=>o,B:()=>s});var n=e(9669),a=e.n(n);function o(t){return a().get("/api/presupuestos",{params:{obra:t}})}function s(t,r){return a().get("/api/controls/",{params:{fecha:r}})}},5009:(t,r,e)=>{e.d(r,{r:()=>o});var n=e(9669),a=e.n(n);function o(){return a().get("/api/obras",{params:{activo:!0}})}},6771:(t,r,e)=>{e.d(r,{Z:()=>i});var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("table",{staticClass:"table table-striped table-hover"},[t._m(0),t._v(" "),e("tbody",t._l(t.presupuestos,(function(r){return e("tr",{key:r["@id"]},[e("td",[t._v(t._s(r.partida.nombre))]),t._v(" "),e("td",{attrs:{align:"right"}},[t._v("\n          "+t._s(r.cantini?t.format(r.cantini):"")+"\n        ")]),t._v(" "),e("td",{attrs:{align:"right"}},[t._v("\n          "+t._s(r.costoini?t.format(r.costoini):"")+"\n        ")]),t._v(" "),e("td",{attrs:{align:"right"}},[t._v(t._s(t.format(r.totalini)))]),t._v(" "),e("td",{attrs:{align:"right"}},[t._v("\n          "+t._s(r.rendidocant?t.format(r.rendidocant):"")+"\n        ")]),t._v(" "),e("td",{attrs:{align:"right"}},[t._v(t._s(t.format(r.rendidotot)))]),t._v(" "),e("td",{attrs:{align:"right"}},[t._v("\n          "+t._s(r.porgascan?t.format(r.porgascan):"")+"\n        ")]),t._v(" "),e("td",{attrs:{align:"right"}},[t._v("\n          "+t._s(r.porgascost?t.format(r.porgascost):"")+"\n        ")]),t._v(" "),e("td",{attrs:{align:"right"}},[t._v(t._s(t.format(r.porgastot)))]),t._v(" "),e("td",{attrs:{align:"right"}},[t._v(t._s(t.format(r.presactu)))])])})),0)])])};n._withStripped=!0;var a=e(6475);const o={name:"DisplayControl",props:{presupuestos:{type:Array,default:null}},methods:{format:function(t){return(0,a.Z)(t)}}};var s=(0,e(1900).Z)(o,n,[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("thead",[e("tr",[e("td",{staticClass:"align-middle",attrs:{rowspan:"2",align:"center"}},[t._v("Partida")]),t._v(" "),e("td",{attrs:{colspan:"3",align:"center"}},[t._v("Inicial")]),t._v(" "),e("td",{attrs:{colspan:"2",align:"center"}},[t._v("Rendido")]),t._v(" "),e("td",{attrs:{colspan:"3",align:"center"}},[t._v("Por Gastar")]),t._v(" "),e("td",{staticClass:"align-middle",attrs:{rowspan:"2",align:"center"}},[t._v("\n          Presupuesto Actualizado\n        ")])]),t._v(" "),e("tr",[e("td",{attrs:{align:"center"}},[t._v("Cantidad")]),t._v(" "),e("td",{attrs:{align:"center"}},[t._v("Unitario")]),t._v(" "),e("td",{attrs:{align:"center"}},[t._v("Total")]),t._v(" "),e("td",{attrs:{align:"center"}},[t._v("Cantidad")]),t._v(" "),e("td",{attrs:{align:"center"}},[t._v("Total")]),t._v(" "),e("td",{attrs:{align:"center"}},[t._v("Cantidad")]),t._v(" "),e("td",{attrs:{align:"center"}},[t._v("Unitario")]),t._v(" "),e("td",{attrs:{align:"center"}},[t._v("Total")])])])}],!1,null,null,null);s.options.__file="assets/components/displayControl.vue";const i=s.exports}},t=>{t.O(0,[714,239],(()=>{return r=2882,t(t.s=r);var r}));t.O()}]);