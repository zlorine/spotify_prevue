<template>
  <div>
      <div id="app">
        <div class="row top-row">
           <div class="large-2 medium-12 small-12 columns"><img class="large-12 medium-4 small-5" src="../assets/logo.png"></div>
           <div class="large-6 medium-12 columns static-title"><h1>PreVue Spotify Songs</h1></div>
        </div>
        <div class="row top-row">
          <p><router-link to="favourites"><i class="fa fa-star-o fa-2x"></i> Go to favourites</router-link></p>
        </div>
        <app-search></app-search>
        <app-grid></app-grid>
      </div>
  </div>
</template>

<script>

  import Search from './Search.vue'; 
  import Grid from './Grid.vue';
  import axios from 'axios';

  export default {
    data: function() {
      return {

      }
    },
    components: {
      appSearch: Search,
      appGrid: Grid
    }     
  }


</script>

<style>

</style>