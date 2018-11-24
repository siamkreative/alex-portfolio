<template>
    <nav class="navbar navbar-expand-md fixed-top" id="top">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="btn btn-text" data-scroll href="#work">Work <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="btn btn-text" data-scroll href="#about">About</a>
        </li>
      </ul>
      <!-- Conditional navigation logic -->
      <router-link v-if="this.$route.path !== '/'" to="/" class="logo nav-link mx-auto d-none d-sm-block">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon" width="100" height="60">
          <use xlink:href="#logo"></use>
        </svg>      
      </router-link>
      <a v-else class="logo nav-link mx-auto d-none d-sm-block" data-scroll="scroll" href="#top">
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
  name: 'navbar'
}
</script>