import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({

	state = {
		tracks: [],
		favourites: [],
		activeTrack: {}
	},

 	mutations = {
		ADD_TRACKS (state) {
			const newTrack = {
				title: '',
				artist: '',
				url: '',
				favourite: false
			}
			state.tracks.push(newTrack)
			state.activeTrack(tracks[0])
		}

		FAV_TRACK (state) {
			state.activeTrack.favourite = !state.activeTrack.favourite
		}

		SET_ACTIVE_TRACK (state, track) {
			state.activeTrack = track
		}

		EMPTY_TRACKS (state) {
			state.tracks.length = 0
		}
	},

	actions = {

	}


});

export default store