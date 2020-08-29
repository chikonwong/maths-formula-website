import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Router Views
import Home from '@/views/Home.vue/';
import EstimationAndError from '@/views/formula/EstimationAndError'
import Percentage from '@/views/formula/Percentage'

export default new VueRouter({
  routes: [{
      path: '/',
      component: Home

    },
    {
      path: '/EstimationAndError',
      component: EstimationAndError

    },
    {
      path: '/Percentage',
      component: Percentage
    }
  ],
  mode: 'history'
})