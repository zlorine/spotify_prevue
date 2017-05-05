<template>
    <div id="app">
      <div class="row top-row"  @click="deActive">
         <div class="large-2 medium-12 small-12 columns"><img class="large-12 medium-4 small-5" src="../assets/logo.png"></div>
         <div class="large-6 medium-12 columns static-title"><h1>PreVue Favourites</h1></div>
      </div>
        <div class="row top-row">
            <p><a href="/"><i class="fa fa-home-o fa-2x"></i> Go to Search Page</a></p>
        </div>
      <app-grid></app-grid>
    </div>
</template>

<script>

  import Search from './Search.vue'; 
  import Grid from './Grid.vue';
  import store from '../store';

  export default {
    data: function() {
      return {

      }
    },
    components: {
      appSearch: Search,
      appGrid: Grid
    },
    beforeRouteLeave: function(to, from, next) {
      this.$store.dispatch('A_TOGGLE_FAVS');
      this.deActive();
      next()
    },
    methods: {
      deActive() {
      this.$store.dispatch('DEACTIVE_TRACK')
      }
    } 
  }

// fix router link back

</script>

<style>

</style>
