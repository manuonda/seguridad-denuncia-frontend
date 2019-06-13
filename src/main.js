import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter   from 'vue-router';
import VueScrollTo from 'vue-scrollto';
import { routes } from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueScrollTo);

const enrutador = new VueRouter({
   routes : routes,
   mode: 'history'
});

new Vue({
  el: '#app',
  router : enrutador,
  render: h => h(App)
})
