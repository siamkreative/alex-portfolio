<template>
    <nav class="navbar navbar-expand-md fixed-top" id="top">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="btn btn-text" data-scroll href="#work">Work <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="btn btn-text" data-scroll href="#about">About</a>
        </li>
      </ul>
      <!-- Conditional navigation logic -->
      <router-link v-if="this.$route.path !== '/'" to="/" class="logo nav-link d-none d-sm-block" :style="logoStyle">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon" width="100" height="60">
          <use xlink:href="#logo"></use>
        </svg>      
      </router-link>
      <a v-else class="logo nav-link d-none d-sm-block" data-scroll="scroll" href="#top" :style="logoStyle">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon" width="100" height="60">
          <use xlink:href="#logo"></use>
        </svg>
      </a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="btn btn-outline" data-scroll href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      logoStyle: null
    }
  },
  methods: {
    positionLogo: function() {
      let logoWidth = document.querySelector('.logo').offsetWidth
      return this.logoStyle = `position: absolute; left: 50%; margin-left: -${(logoWidth / 2)}px`
    }
  },  
  mounted (){
    this.positionLogo()
  }
}
</script>