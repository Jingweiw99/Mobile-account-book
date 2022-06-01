import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '@/views/Money.vue'
import Labels from '@/views/Labels.vue'
import Statistics from '@/views/Statistics.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  //默认路由，重定向到money
  {
    path:'/',
    redirect:'/money'
  },
  {
    path:'/money',
    component:Money

  },
  {
    path:'/labels',
    component:Labels
    
  },
  {
    path:'/statistics',
    component:Statistics
    
  },
]

const router = new VueRouter({
  routes
})

export default router
