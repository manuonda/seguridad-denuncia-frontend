import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes';

require('./plugins/index');

Vue.use(VueRouter);

const enrutador = new VueRouter({
   routes : routes,
   mode: 'history'
});

new Vue({
  el: '#app',
  router : enrutador,
  render: h => h(App)
})
