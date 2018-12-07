<template>
	<div>
		<div class="loading" data-splitting>LOADING</div>
		<p>这里用splitting.js 获取--char-index去做动画中的计算</p>
	</div>
</template>
<script>
	import Splitting from "splitting";
	import "splitting/dist/splitting.css";
	import "splitting/dist/splitting-cells.css";
	export default {
		data() {
			return {

			}
		},
		mounted() {
			Splitting();
		}
	}
</script>
<style lang="less">
@import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,700.css");
@import url('https://fonts.googleapis.com/css?family=Oswald:700.css');
html { 
  height: 100%; 
  background: #1A2A3A;  
  color: #FFF; 
}
body {
  font-family: Roboto, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  min-height:100%;
}

.loading {
  font-family: Oswald, sans-serif;
  font-size: 4em;
  text-shadow: 0px 0px 10px rgba(0,0,0,.3);
}
   

.loading .char {
  animation: jump 2.8s linear infinite;
  animation-delay: calc( 1s + (var(--char-index) + 1 ) * .4s  );
  animation-timing-function: ease-in-out;
  transform-origin: 50% 100%;
}

@keyframes jump {
	5% {
		transform: scale(1.2,0.8);
	}
	12%, 13% {
		transform: translateY(-1em) scale(1,1.001);
	}
	17% {
		transform: translateY(0) scale(1,0.999);
	}
	22% {
		transform: translateY(0) scale(1.2,0.9);
	}
	23% {
		transform: translateY(-1px) scale(1.1,1);
	}
	25% {
		transform: translateY(0) scale(1,1);
	}
}
</style>