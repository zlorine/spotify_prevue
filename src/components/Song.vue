<template>
	<div class="large-3 medium-4 small-12 song columns">
		<slot name="artist"></slot>
		<slot name="name"></slot>
		<slot name="img"></slot>
	</div>
</template>

<script>


</script>

<style scoped>
img {
	width: 100%;
	height: auto;
}
.song {
	height: 500px;
	padding: 10px;
	margin: 1px;
	border: solid 1px #d6d6d6;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

h4 {
	font-weight: bold;
}
</style>