<template>
    <nav class="navbar navbar-expand-md fixed-top" id="top">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" data-scroll href="#work">Work <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-scroll href="#about">About</a>
        </li>
      </ul>
      <!-- Below does not work because does not get updated on route change -->
      <router-link v-if="innerPage" to="/">Go to home</router-link>
      <a v-else class="logo nav-link mx-auto d-none d-sm-block" data-scroll="scroll" href="#top">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon" width="100" height="60">
          <use xlink:href="#logo"></use>
        </svg>
      </a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link btn btn-outline-primary" data-scroll href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      innerPage: false
    }
  },
  mounted (){
    if (this.$route.path !== '/') {
      console.log('This is not the index page')
      this.innerPage == true 
    }
  },  
  watch:{
    $route (to, from){
      if (to.path !== '/') {
        console.log('This is not the index page')
        this.innerPage == true 
      }
    }
  }
}
</script>