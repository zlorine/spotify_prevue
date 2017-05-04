<template>
	
	<div class="row">
		<app-song v-for="(song, index) in songs" @click.native="makeActive(index)" :id="index" :class="{active: activeTrack === song}">
			<h5 slot="artist">{{ song.artists[0].name }}</h5>
			<h4 slot="name">{{ song.name }}</h4>
			<img slot="img" :src="song.album.images[0].url" /> 
			<div class="bts" slot="bts" v-if="activeTrack === song">
				<i class="fa fa-play" aria-hidden="true" @click="playModal"></i>
				<i class="fa fa-star-o" aria-hidden="true" @click="addToFavs"></i>
			</div>
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
			},
			activeTrack() {
				return this.$store.getters.activeTrack.track		
			}
		},
		methods: {
			makeActive(index) {
				var track = this.$store.getters.getTracks[index]
				this.$store.dispatch('ACTIVE_TRACK', track)
			},
			addToFavs() {
				this.$store.dispatch('FAV_TRACK')
			},
			playModal() {

			}
		},

	}

</script>

<style scoped>

.row {
	margin-top: 5vh;
}

</style>