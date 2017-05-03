<template>
	<!-- <app-song v-for="(track, index) in tracks">{{ track }}</app-song> -->
</template>

<script>
	import Song from './Song.vue';
	
	export default {
		props: ['tracks'],
		components: {
			appSong : Song
		},
		methods: {
			
		}
	}

</script>

<style>

</style>