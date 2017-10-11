import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/components/dashboard'
import detailQuestion from '@/components/detailQuestion'

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
      path: '/questions/:id',
      name: 'question',
      component: detailQuestion,
      props: true
    }
  ]
})
