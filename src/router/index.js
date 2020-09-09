import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Router Views
import Home from '@/views/Home.vue/';


export default new VueRouter({
  routes: [{
      path: '/',
      component: Home

    },
  
  ],
  mode: 'history'
})