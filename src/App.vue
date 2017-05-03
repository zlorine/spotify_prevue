<template>
  <div id="app">
      <div class="row top-row">
         <div class="large-2 medium-12 small-12 columns"><img class="large-12 medium-4 small-5" src="./assets/logo.png"></div>
         <div class="large-10 medium-12 columns static-title"><h1>PreVue Spotify Songs</h1></div>
      </div>
    <router-view></router-view>
  </div>
</template>

<script>

  import Home from './components/Home.vue';

  export default {
    name: 'app',
    components: {
      appHome: Home 
    }
  }

</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Comfortaa');

  #app {
    font-family: 'Comfortaa', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  body {
    padding: 20px;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Comfortaa';
  }

  h1 {
    color: #d2d2d2;
  }

  p, li {
    font-family: 'Comfortaa';
    color: #222;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .top-row {
    padding-bottom: 1vh;
    margin-bottom: 5vh;
  }

  .static-title {
    padding-top: 10px;
  }

</style>
