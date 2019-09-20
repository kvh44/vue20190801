import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import jquery from 'jquery'

Vue.use(jquery)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

import '../public/css/style.css'
import '../public/css/bootstrap.min.css'
import '../public/css/animate.css'
import '../public/font-awesome/css/font-awesome.css'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
