<template>
	
	<div class="row">
		<app-song v-for="song in songs">
			<h5 slot="artist">{{ song.artists[0].name }}</h5>
			<h4 slot="name">{{ song.name }}</h4>
			<!-- <img slot="img" v-attr="src:song.albums.images[0]" />  -->
		</app-song> 
	</div>

</template>

<script>
	import Song from './Song.vue';
	
	export default {
		components: {
			appSong : Song
		},
		computed: {
			songs() {
				return this.$store.getters.getTracks
			}
		}
	}

</script>

<style>

</style>