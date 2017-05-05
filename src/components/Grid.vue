<template>
	
	<div class="row">
		<app-song v-for="(song, index) in songs" @click.native="makeActive(index)" :id="index" :class="{active: activeTrack === song}">		
			<h5 slot="artist">{{ song.artists[0].name }}</h5>
			<h4 slot="name">{{ song.name }}</h4>
			<img slot="img" :src="song.album.images[0].url" /> 
			<div class="bts" slot="bts" v-if="activeTrack === song">
				<i class="fa fa-play" aria-hidden="true" @click="playModal"></i>
				<i class="fa fa-star-o"  aria-hidden="true" @click="addToFavs" @keydown="selectMe"></i>
			</div>
		</app-song>
		<app-player v-if="player">
		  <p class="title"><slot name="title"></slot></p>
		  <p class="author"><slot name="author"></slot></p>
		  <img class="player-cover" src="">
		  <audio class="js-player" src=""></audio>			
		</app-player> 
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
				if (this.$store.getters.getShow === false){
					return this.$store.getters.getTracks
				} else {
					return this.$store.getters.getFavs
				}
			},
			activeTrack() {
				return this.$store.getters.activeTrack.track		
			},
			player() {
				return this.$store.getters.player
			}
		},
		methods: {
			makeActive(index) {
				var track = this.$store.getters.getTracks[index]
				this.$store.dispatch('ACTIVE_TRACK', track)
			},
			addToFavs(e) {
				this.$store.dispatch('FAV_TRACK')
			},
			playModal() {

			},
			selectMe(e) {

			}
		}

	}

</script>

<style scoped>

.row {
	margin-top: 5vh;
}

</style>