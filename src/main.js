import Vue from 'vue'
import App from './App.vue'

// Router
import VueRouter from 'vue-router'
import { router } from './router'

// Bootstrp Vue
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue Use
Vue.use(BootstrapVue)
Vue.use(VueRouter)

// Vue Config
Vue.config.productionTip = false

// Vuec
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
