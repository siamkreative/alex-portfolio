import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import agodaConnect from '../components/agoda-connect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/agoda-connect',
      component: agodaConnect
    }
  ]
})