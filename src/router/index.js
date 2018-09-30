import Vue from 'vue'
import Router from 'vue-router'
import Nearby from '@/components/Nearby'
import Peers from '@/components/Peers'
import Report from '@/components/Report'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Nearby',
      component: Nearby
    },
    {
      path: '/peers',
      name: 'Peers',
      component: Peers
    },
    {
      path: '/report',
      name: 'Police Report',
      component: Report
    }
  ]
})
