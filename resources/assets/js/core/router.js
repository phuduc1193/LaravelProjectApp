import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginPage from '@/views/Login'
import RegisterPage from '@/views/Register'
import NotFoundPage from '@/views/NotFound'
import UnauthorizedPage from '@/views/Unauthorized'
import Layout from '@/views/Layout/Layout.vue'

import DashboardComponent from '@/components/Dashboard'

Vue.use(VueRouter)

export default new VueRouter({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
      path: '/login',
      component: LoginPage,
      hidden: true
    },
    {
      path: '/register',
      component: RegisterPage,
      hidden: true
    },
    {
      path: '/404',
      component: NotFoundPage,
      hidden: true
    },
    {
      path: '/401',
      component: UnauthorizedPage,
      hidden: true
    },
    {
      path: '',
      component: Layout,
      redirect: 'dashboard',
      children: [{
        path: 'dashboard',
        component: DashboardComponent,
        name: 'dashboard',
        meta: {
          title: 'dashboard',
          icon: 'fa fa-tachometer',
          noCache: true
        }
      }]
    },
    {
      path: '*',
      redirect: '/404',
      hidden: true
    }
  ]
})