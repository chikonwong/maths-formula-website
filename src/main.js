import Vue from 'vue'
import App from './App.vue'


// Bootstrp Vue
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


//Router
import VueRouter from 'vue-router'
// import Home from './views/Home';
import Estimation_and_Error_Formula from './views/Estimation_and_Error_Formula'
import Percentage_Formula from './views/Percentage_Formula'

//MathsJax
import VueMathjax from 'vue-mathjax'

const router = new VueRouter({
  routes:[
  {
   path:'/Estimation_and_Error_Formula', component :Estimation_and_Error_Formula
    
    },
  {
    path:'/Percentage_Formula', component :Percentage_Formula
  }
  ],
  


  mode:'history'
})



// Vue Use
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueMathjax)



// Vue Config
Vue.config.productionTip = false

// Vuec
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
