<template>
  <div>
    <app-search @searchString="searchSong"></app-search>
    <app-grid :tracks="tracks"></app-grid>
  </div>
</template>

<script>

  import Search from './Search.vue'; 
  import Grid from './Grid.vue';
  import axios from 'axios';


  export default {
    data: function() {
      return {
        tracks: [

        ],
        errors: [

        ]
      }
    },
    components: {
      appSearch: Search,
      appGrid: Grid
    },
    methods: {
      searchSong(string) {
        axios.get('https://api.spotify.com/v1/search?type=track&q=' + string)
          .then(response => {
            this.tracks = response.data.tracks.items
          })
          .catch(e => {
            console.log(e)
            this.errors.push(e)
        })

      },

      displayTracks(tracks) {

      }
      
    }
  }


</script>

<style>

</style>