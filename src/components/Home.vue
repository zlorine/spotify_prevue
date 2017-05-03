<template>
  <div>
    <app-search @searchString="searchSong"></app-search>
    <app-grid></app-grid>
  </div>
</template>

<script>

  import Search from './Search.vue'; 
  import Grid from './Grid.vue';

  export default {
    data: function() {
      return {
        tracks: [

        ]
      }
    },
    components: {
      appSearch: Search,
      appGrid: Grid
    },
    methods: {
      searchSong(string) {
        var xhr = new XMLHttpRequest();
          xhr.open('GET', 'https://api.spotify.com/v1/search?type=track&q=' + string);
          xhr.onload = function() {
              if (xhr.status === 200) {
                  console.log('request successful')
              }
              else {
                  alert('Request failed.  Returned status of ' + xhr.status);
              }
          };
          xhr.send();
          displayTracks(xhr.response)
      },
      displayTracks(tracks) {
        debugger;
      }
    }
  }


</script>

<style>

</style>