import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import agodaYCS from '../components/agoda-ycs'
import appDashboard from '../components/app-dashboard'
import reviews from '../components/reviews'

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    if (to.path !== '/') {
      return {
        x: 0,
        y: 0
      }
    } else {
      return savedPosition
    }
  },
  routes: [{
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/agoda-ycs',
      component: agodaYCS
    },
    {
      path: '/reviews',
      component: reviews
    },
    {
      path: '/app-dashboard',
      component: appDashboard
    }
  ]
})

// When the user scrolls the page, show progress bar
window.onscroll = function () {
  myFunction()
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}