import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginComponent from '../views/Login'

Vue.use(VueRouter)

export default new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/login', component: LoginComponent, hidden: true }
  ]
})