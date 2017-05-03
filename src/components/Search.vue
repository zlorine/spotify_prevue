<template>
	
	<div class="forms-holder">
		<div class="medium-6">
			<input type="text" placeholder="Introduce a song title" v-model="song">
			<button class="button expanded" @click.prevent="searchSong">Search!</button>
		</div>
	</div>

</template>

<script>

	export default {
		data: function() {
			return {
				song: ''
			}
		},
		methods: {
			searchSong() {
				this.$emit('searchString', this.song),
				this.song = ''
			}
		}
	}

</script>

<style scoped>
	.forms-holder {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.button {
		background-color: #d2d2d2;
		color: #222;
	}
</style>