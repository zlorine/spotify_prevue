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
		  <p slot="title" class="title"></slot>{{ activeTrack.name }}</p>
		  <p slot="author" class="author"></slot>{{ activeTrack.artists[0].name }}</p>
		  <img slot="cover" class="player-cover" :src="activeTrack.album.images[0].url" />
		  <audio slot="js-player" id="activeSong" class="js-player" :src="activeTrack.preview_url"></audio> 
		  <div slot="close" class="close-modal" @click="playModal">x</div>		
		</app-player> 
	</div>

</template>

<script>
	import Song from './Song.vue';
	import Player from './Player.vue'

	
	export default {
		components: {
			appSong : Song,
			appPlayer: Player
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
				return this.$store.getters.getPlayer
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
				this.$store.dispatch('A_TOGGLE_PLAYER')
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