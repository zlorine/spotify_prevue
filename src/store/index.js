import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({

	state : {
		tracks: [],
		favourites: [],
		activeTrack: {}
	},

 	mutations : {
		SET_LIST: (state, { list }) => {
	      	state.tracks = list
	    },

		ADD_TO_FAVS: state => {
			state.favourites.push(activeTrack)
		},

		REMOVE_FROM_FAVS: state => {
			state.favourites.$remove(state.activeTrack)
			activeTrack = {}
		},

		SET_ACTIVE_TRACK: (state, track) => {
			state.activeTrack = track
		},

		EMPTY_TRACKS: state => {
			state.tracks.length = 0
		}
	},

	actions : {
		SEARCH_TRACKS: function ({commit}, string) {
			commit('EMPTY_TRACKS');
			axios.get('https://api.spotify.com/v1/search?type=track&q=' + string)
	          .then(response => {
	            commit('SET_LIST', {list: response.data.tracks.items})
	          })
	          .catch(e => {
	            console.log(e)
	        })
		},

		ACTIVE_TRACK: function ({commit}, track) {
			commit('SET_ACTIVE_TRACK', {track: track});
		},

		FAV_TRACK: function ({commit}) {
			if(state.favourites.indexOf(state.activeTrack) != -1 ){
				commit('ADD_TO_FAVS')
			} else {
				commit('REMOVE_FROM_FAVS')
			}
		},


	},

	getters: {
		getTracks: state => {
			return state.tracks
		},
		activeTrack: state => {
			return state.activeTrack
		}
	}


});

export default store

