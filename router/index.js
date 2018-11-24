import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import agodaConnect from '../components/agoda-connect'
import enterpriseUI from '../components/enterprise-ui'
import dashboard from '../components/dashboard'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if (to.path !== '/') {
      return {
        x: 0,
        y: 0
      }
    } else {
      return savedPosition
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/agoda-connect',
      component: agodaConnect
    },
    {
      path: '/enterprise-ui',
      component: enterpriseUI
    },
    {
      path: '/dashboard',
      component: dashboard
    }
  ]
})
