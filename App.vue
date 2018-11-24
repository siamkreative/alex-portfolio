<template>
  <div id="app">
    <appNavbar></appNavbar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <appFooter></appFooter>
  </div>  
</template>

<script>
import appNavbar from './components/partials/navbar'
import appFooter from './components/partials/footer'

export default {
  name: 'app',
  components: {
    appNavbar,
    appFooter
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!'
    }
  }
}
</script>