import Vue from "../node_modules/vue/dist/vue.min.js";
import VueRouter from 'vue-router';
import router from './Router';

Vue.use(VueRouter);
Vue.config.debug = true;

const app = new Vue({
    router
}).$mount('#app');
