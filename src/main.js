import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ScrollAnimation from './directivas/scrollanimation'
import VueGeolocation from 'vue-browser-geolocation';
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBBs7yoI4HlyOFHfcd_Tk7uXSPL6Cf8Gzs",
    libraries: "places" //necessary for places input
  }
});
Vue.use(VueGeolocation);
Vue.component('pagination', require('laravel-vue-pagination'));
Vue.directive('scrollanimation', ScrollAnimation);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



