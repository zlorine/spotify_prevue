<template>
	<div class="large-3 medium-4 small-12 columns">
		<div class="song">
			<slot name="artist"></slot>
			<slot name="name"></slot>
			<slot name="img"></slot>
			<slot name="bts"></slot>
		</div>
	</div>
</template>

<style scoped>

img {
	width: 100%;
	height: auto;
}

h4 {
	font-weight: bold;
}

.song {
	height: 500px;
	padding: 2vh;
	border: solid 1px #d6d6d6;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 5vh;
	overflow: hidden;
	position: relative;
}

div.active > div {
	-moz-box-shadow: inset 0 0 10px rgba(122, 122, 122, 0.65);
	-webkit-box-shadow: inset 0 0 10px rgba(122, 122, 122, 0.65);
}

.bts {
	position: absolute;
	bottom: 2vh;
	left: 2vh;
	width: calc(100% - 4vh);
	color: #d6d6d6;
	background-color: white;
	height: 20%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	-webkit-box-shadow: 0px -10px 2px 2px rgba(255,255,255,255);
	box-shadow: 0px -10px 2px 2px rgba(255,255,255,255);
	font-size: 3rem;
	padding: 1rem;
}


@media screen and (max-width: 60em) {

	.song {
		height: 400px;
	}

}

@media screen and (max-width: 40em) {

	.song {
		height: auto
	}

}

</style>