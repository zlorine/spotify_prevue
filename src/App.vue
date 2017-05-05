<template>
    <router-view></router-view>
  </div>
</template>

<script>

  import Home from './components/Home.vue';
  import Favourites from './components/Favourites.vue';
  import store from './store';
  
  export default {
    name: 'app',
    components: {
      appHome: Home 
    },
    beforeRouteEnter: function(to, from, next) {
      console.log('fottiti')
        this.$store.dispatch('A_TOGGLE_FAVS')
          next(console.log('fottiti'));
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

  h1, h2, h3, h4, h5, p, li, button, input {
    font-family: 'Comfortaa';
  }

  h1 {
    color: #222;
  }

  p, li, a {
    color: #d2d2d2;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  .top-row {
    padding-bottom: 1vh;
    margin-bottom: 5vh;
    display: flex;
    justify-content: space-around;
  }

  .static-title {
    padding-top: 10px;
  }

@media screen and (max-width: 63.99em) {

  .top-row {
    display: block;

  }
}

</style>
