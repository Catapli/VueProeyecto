import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ScrollAnimation from './directivas/scrollanimation'

Vue.component('pagination', require('laravel-vue-pagination'));
Vue.directive('scrollanimation', ScrollAnimation);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



