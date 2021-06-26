import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/drone/:id',
    name: 'One Drone Information',
    component: () => import('../views/OneDrone.vue'),
  },
  { path: '/404', name: 'Page Not Found', component: () => import('../views/NotFound.vue') },
  { path: '*', redirect: '/404' },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
