<template>
	 <div class="w-modal">	
	  <div class="widget">
	  <slot name="close"></slot>
		<div class="header">
			<div class="btn-play" @click="playPreVue"></div>
			<div class="metadata">
			  <slot name="title"></slot>
			  <slot name="author"></slot>			 
			</div>
		</div>
		<div class="cover"> 
		<slot name="cover"></slot>
		</div>
		<slot name="js-player"></slot>
	  </div>
		<slot></slot>
	 </div>
</template>

<script>
export default {
  methods: {
    playPreVue() {
      var song = document.getElementById("activeSong");
      song.play();
    }
  }
}

</script>

<style scoped>

/* AUDIOPLAYER - styles taken from a different project */
p {
	color: #222;
}

.w-modal {
  position: absolute;
  z-index: 9999;
  margin: auto;;
  background-color: white;
  height: 50vh;
  width: 50vw;
  top: 25vh;
  left: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px #d6d6d6;
  border-radius: 30px;
  -webkit-box-shadow: 0px 0px 20px 100px rgba(0,0,0,0.4);
  box-shadow: 0px 0px 20px 100px rgba(0,0,0,0.4);
}

.close-modal {
    width: 36px;
    height: 36px;
    font-weight: bold;
    padding: 8px;
    position: absolute;
    right: 10px;
    top: 20px;
    z-index: 9999999;
    color: #222;
    border-radius: 30px;
    border: solid 1px #222;
}

.widget {
  width: 300px;
  margin: 10px auto 0;
  border-radius: 5px;
  overflow: hidden;
  display: block;
  position: relative;
}

.header {
  height: 78px;
  background-color: #ccc;
  position: relative;
  font-size: 12px;
}

.btn-play {
  margin: 9px;
  width: 60px;
  height: 60px;
  float: left;
  border-radius: 50px;
  border: 1px solid #3c3c3c;
  user-select: none;
  -webkit-user-select: none;
}

.btn-play:after {
  content: ' ';
  position: relative;
  display: block;
  width: 0px;
  height: 0px;
  margin-left: 50%;
  margin-top: 50%;
  left: -10px;
  top: -18px;
  border-top: 18px solid transparent;
  border-bottom: 18px solid transparent;
  border-left: 30px solid #3c3c3c;
}


.btn-paused:after {
  border-left: 10px solid #3c3c3c;
  border-right: 10px solid;
}

.btn-play:hover {
  cursor: pointer;
  border-color: #666;
}

.btn-play:hover:after {
  border-left-color: #666;
}

.btn-play:active:after {
  border-left-color: #000;
}

.btn-play.playing:before, .btn-play.playing:after {
  width: 9px;
  height: 36px;
  background-color: #3c3c3c;
  position: absolute;
  content: "";
  top: 22px;
  left: 27px;
  border: 0;
  margin: 0;
}

.btn-play.playing:after {
  left: 43px;
}

.btn-play.playing:hover:before, .btn-play.playing:hover:after {
  background-color: #666;
}

.btn-play.playing:active:before, .btn-play.playing:active:after {
  background-color: #000;
}

.btn-play.disabled {
  border-color: #888;
}

.btn-play.disabled:hover {
  cursor: auto;
}

.btn-play.disabled:after {
  border-left-color: #888;
}

.metadata {
  display: inline-block;
  padding: 10px;
  width: calc(100% - 100px);
}

.title, .author {
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  line-height: 1.4em;
  height: 1.4em;
  font-size: 14px;
  font-weight: bold;
}

.author {
  font-weight: normal;
}

.seekbar {
  margin-top: 5px;
  width: 100%;
}

.cover {
  height: 300px;
  position: relative;
}

.cover img {
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  left: 0;
  border: 0;
}

audio {
  display: none;
}

</style>