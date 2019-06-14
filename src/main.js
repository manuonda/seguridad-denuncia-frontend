import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter   from 'vue-router';
import VueScrollTo from 'vue-scrollto';
import { routes } from './routes';
import BootstrapVue from 'bootstrap-vue';

// app.js
/*
import 'bootstrap/dist/css/bootstrap.css'*/
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueScrollTo);
Vue.use(BootstrapVue);


const enrutador = new VueRouter({
   routes : routes,
   mode: 'history'
});

new Vue({
  el: '#app',
  router : enrutador,
  render: h => h(App)
})
