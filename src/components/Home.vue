<template>
  <div>
    <app-search @searchString="searchSong"></app-search>
    <app-grid></app-grid>
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
    },
    methods: {
      searchSong(string) {
        this.$store.dispatch('SEARCH_TRACKS', string)
      }
      
    }
  }


</script>

<style>

</style>