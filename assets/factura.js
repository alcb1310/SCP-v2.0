import Vue from 'vue';
import App from './pages/factura';
import FlashMessage from '@smartweb/vue-flash-message';

Vue.use(FlashMessage);

new Vue({
    render: (h) => h(App),
}).$mount('#app');
