import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({

	state : {
		tracks: [{
			name: 'Test Song',
			artists: [
				{
					name: 'The Regaz'
				}
			],
			album: {
				images: [
					{
						url: './static/img/logo.d380651.png'
					}
				]
			}
		},
		{
			name: '2 Title 2',
			artists: [
				{
					name: 'The Regaz'
				}
			],
			album: {
				images: [
					{
						url: './static/img/logo.d380651.png'
					}
				]
			}
		}],
		favourites: [],
		activeTrack: {},
		showFavs: false,
		player: false
	},

 	mutations : {
		SET_LIST: (state, { list }) => {
	      	state.tracks = list
	    },

		ADD_TO_FAVS: state => {
			state.favourites.push(state.activeTrack.track)
		},

		REMOVE_FROM_FAVS: state => {
			state.favourites = state.favourites.filter(function (track) {
				return track != activeTrack
			})
			activeTrack = {}
		},

		SET_ACTIVE_TRACK: (state, track) => {
			state.activeTrack = track
		},

		SET_NO_ACTIVE_TRACK: (state, track) => {
			state.activeTrack = {}
		},

		EMPTY_TRACKS: state => {
			state.tracks.length = 0
		},

		TOGGLE_FAVS: state => {
			state.showFavs = !state.showFavs
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

		DEACTIVE_TRACK: function ({commit}, track) {
			commit('SET_NO_ACTIVE_TRACK', {track: track});
		},

		FAV_TRACK: function (context) {
			// didnt' manage to do this with ES2015 argument destructuring - to refactor
			if(context.state.favourites.indexOf(context.state.activeTrack) == -1 ){
				context.commit('ADD_TO_FAVS')
			} else {
				context.commit('REMOVE_FROM_FAVS')
			}
		},

		A_TOGGLE_FAVS: function ({commit}) {
			commit('TOGGLE_FAVS')
		}


	},

	getters: {
		getTracks: state => {
			return state.tracks
		},
		activeTrack: state => {
			return state.activeTrack
		},
		getFavs: state => {
			return state.favourites
		},
		getShow: state => {
			return state.showFavs
		},
		getPlayer: state => {
			return state.player
		}
	}


});

export default store

