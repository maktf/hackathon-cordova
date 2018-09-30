import Vue from 'vue'
import Router from 'vue-router'
import Nearby from '@/components/Nearby'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Nearby',
      component: Nearby
    }
  ]
})
