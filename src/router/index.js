import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Ordenes from '../views/Ordenes.vue'
import Error from '../views/Error.vue'
import DetailOrder from '../views/DetailOrder.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },

  {
    path: '/Ordenes',
    name: 'Ordenes',
    component: Ordenes
  },

  {
    path: '/DetailOrder/:order',
    name: 'DetailOrder',
    component: DetailOrder
  },

  {
    path: '*',
    name: 'Error',
    component: Error
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
