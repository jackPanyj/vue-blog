import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import 'tools/filters'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
