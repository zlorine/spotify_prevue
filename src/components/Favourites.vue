<template>
  <div>
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
      this.$store.dispatch('A_TOGGLE_FAVS')
      next();
    } 
  }


</script>

<style>

</style>