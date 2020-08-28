import Vue from 'vue'
import App from './App.vue'

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

// Router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// Router Views
import Home from './views/Home';
import Estimation_and_Error_Formula from './views/Estimation_and_Error_Formula'
import Percentage_Formula from './views/Percentage_Formula'

const router = new VueRouter({
  routes: [{
      path: '/',
      component: Home

    },
    {
      path: '/Estimation_and_Error_Formula',
      component: Estimation_and_Error_Formula

    },
    {
      path: '/Percentage_Formula',
      component: Percentage_Formula
    }
  ],
  mode: 'history'
})

// Vue Config
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')