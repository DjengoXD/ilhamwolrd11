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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/product',
    name: 'product',
    component:() => import('../views/product.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component:() => import('../views/contact.vue')
  },
  {
    path: '/newarival',
    name: 'newarival',
    component:() => import('../views/newarival.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
