  <template>
  <div id="app">
    <nav class="navbar navbar-expand-md fixed-top" id="top">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="btn" data-scroll href="#work">Work <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="btn" data-scroll href="#about">About</a>
        </li>
      </ul>
      <a class="logo nav-link mx-auto d-none d-sm-block" data-scroll href="#top">
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
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>  
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!'
    }
  }
}
</script>