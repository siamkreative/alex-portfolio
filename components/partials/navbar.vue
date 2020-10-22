<template>
  <!-- Homepage navigation -->
  <nav class="navbar navbar-expand-md" id="top" v-if="this.$route.path == '/'">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active"></li>
    </ul>
    <router-link
      to="/"
      class="logo nav-link d-none d-sm-block"
      :style="logoStyle"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="icon"
        width="100"
        height="60"
        aria-labelledby="svgLogoID"
      >
        <use xlink:href="#logo"></use>
        <title id="svgLogoID">fanden.design logo</title>
      </svg>
    </router-link>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="btn btn-outline" data-scroll href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
  <!-- Portfolio page navigation -->

  <nav class="navbar navbar-expand-md fixed-top" id="top" v-else>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/" class="btn btn-text-org">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="icon"
            width="1em"
            height="1em"
          >
            <use xlink:href="#icon_back"></use>
          </svg>
          Go back
        </router-link>
      </li>
    </ul>
    <router-link
      to="/"
      class="logo nav-link d-none d-sm-block"
      :style="logoStyle"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="icon"
        width="100"
        height="60"
      >
        <use xlink:href="#logo"></use>
      </svg>
    </router-link>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="btn btn-outline" data-scroll href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      logoStyle: null,
    };
  },
  methods: {
    positionLogo: function() {
      let logoWidth = document.querySelector(".logo").offsetWidth;
      return (this.logoStyle = `position: absolute; left: 50%; margin-left: -${logoWidth /
        2}px`);
    },
  },
  mounted() {
    this.positionLogo();
  },
};
</script>
