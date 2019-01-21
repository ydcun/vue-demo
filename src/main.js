import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bus from './lib'
import 


Vue.config.productionTip = false
Vue.prototype.$bus = bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
