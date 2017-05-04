<template>
  <div>
    <app-grid></app-grid>
  </div>
</template>

<script>

  import Search from './Search.vue'; 
  import Grid from './Grid.vue';

  export default {
    data: function() {
      return {

      }
    },
    components: {
      appSearch: Search,
      appGrid: Grid
    },
	beforeRouteEnter: function(to, from, next) {
		// here I would like to access the store and dispatch A_TOGGLE_FAVS but I can't access it (yet)
  	}
  }


</script>

<style>

</style>