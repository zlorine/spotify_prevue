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

		FAV_TRACK: state => {
			state.activeTrack.favourite = !state.activeTrack.favourite
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
			axios.get('https://api.spotify.com/v1/search?type=track&q=' + string)
	          .then(response => {
	            commit('SET_LIST', {list: response.data.tracks.items})
	          })
	          .catch(e => {
	            console.log(e)
	        })
			}
	}


});

export default store