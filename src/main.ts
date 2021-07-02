/* eslint-disable import/order */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'

Vue.use(BootstrapVue)

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  Vue.config.productionTip = false
} else {
  Vue.config.productionTip = true
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
