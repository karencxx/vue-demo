<template>
	<section>
		<div class="panorama"></div>
	</section>
</template>
<style lang="less" scoped>
	.panorama {
		width: 300px;
		height: 300px;
		background-image: url('../assets/demo.png');
		background-size: auto 100%; /*图片等高于容器的高,且水平方向自动,即最左边贴着容器左侧*/
		cursor: pointer;
		animation: panorama 8s linear infinite alternate;
		animation-play-state: paused;
	}

	.panorama:hover, .panorama:focus {
		animation-play-state: running;
	}

	@keyframes panorama {
		to {
			background-position: 100% 0;
		}
	}
</style>