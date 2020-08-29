import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import i18n from './i18n/index'

// Bootstrp Vue
import {
  BootstrapVue
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

// MathsJax
import VueMathjax from 'vue-mathjax'
Vue.use(VueMathjax)

// Vue Config
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')