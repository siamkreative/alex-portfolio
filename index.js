import './scss/main.scss'
import SmoothScroll from 'smooth-scroll'
import Vue from 'vue'
import router from './router'
import App from './App.vue'

// Vue application
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})

// Smooth scroll
const scroll = new SmoothScroll('[data-scroll]', {
  header: '#top'
})

// Copyright info
console.log('Built with love by YOSA https://yosadigital.com')
