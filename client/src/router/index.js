import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/components/dashboard'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
