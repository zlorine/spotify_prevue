<template>
	<!-- <app-song v-for="song in songs">{{ song.name }}</app-song> -->
</template>

<script>
	import Song from './Song.vue';
	
	export default {
		components: {
			appSong : Song
		},
		computed: {
			songs() {
				return this.$store.state.tracks
			}
		}
	}

</script>

<style>

</style>