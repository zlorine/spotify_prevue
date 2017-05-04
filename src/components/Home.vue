<template>
  <div>
    <app-search></app-search>
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
    }     
  }


</script>

<style>

</style>