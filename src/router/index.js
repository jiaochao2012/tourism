import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/attractions',
    name: 'Attractions',
    component: () => import('../views/attractions/AttractionList.vue')
  },
  {
    path: '/attractions/:id',
    name: 'AttractionDetail',
    component: () => import('../views/attractions/AttractionDetail.vue')
  },
  {
    path: '/strategies',
    name: 'StrategyList',
    component: () => import('../views/StrategyList.vue')
  },
  {
    path: '/strategies/:id',
    name: 'StrategyDetail',
    component: () => import('../views/StrategyDetail.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/error/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router 