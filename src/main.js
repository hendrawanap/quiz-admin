import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/scss/bootstrap.scss'

Vue.config.productionTip = false
Vue.prototype.$apiAddress = process.env.VUE_APP_API_ADDRESS;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
