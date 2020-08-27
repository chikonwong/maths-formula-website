import Vue from 'vue'
import App from './App.vue'


// Bootstrp Vue
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


//Router
import VueRouter from 'vue-router'
import Home from './views/Home';

const router = new VueRouter({
  routes:[
  {
    path:'/home',component : Home
  }
  ],

  mode:'history'
})



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
