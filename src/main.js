import Vue from 'vue'
import App from './App.vue'
import router from './router'
import style from '../public/css/style.css'
Vue.config.productionTip = false
import $ from './assets/js/jquery1.42.min.js'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
