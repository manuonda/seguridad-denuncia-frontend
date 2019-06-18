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

/*
jQuery.extend(true, jQuery.fn.datetimepicker.defaults, {
  icons: {
    time: 'far fa-clock',
    date: 'far fa-calendar',
    up: 'fas fa-arrow-up',
    down: 'fas fa-arrow-down',
    previous: 'fas fa-chevron-left',
    next: 'fas fa-chevron-right',
    today: 'fas fa-calendar-check',
    clear: 'far fa-trash-alt',
    close: 'far fa-times-circle'
  }
});
*/
const enrutador = new VueRouter({
   routes : routes,
   mode: 'history'
});

new Vue({
  el: '#app',
  router : enrutador,
  render: h => h(App)
})
