<template>
	<div>
		<p :class="a.red">css modules</p>
		<p class="bg777">css modules 全局</p>
		<p :class="b.bg">css modules</p>
		<div class="center">
			<p class="p1">使用transla tex/y定位中心</p>
			<p>使用transla tex/y定位中心</p>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		created() {
			console.log(this.$style)
		}
	}
</script>
<style module="a">
	/* 注入标识符 b */
	.bg777 {
		background: lightblue; 
	}
	:global(.bg777) {
		background: #000;
	}
	.red {
		composes: bg777;
		color: red;
	}
</style>
<style module="b">
	/* 注入标识符 b */
	.bg {
		background: #999;
	}
</style>
<style lang="less" scoped>
	.center {
		position: relative;
		height: 50vh;
		border: 1px solid;
		p {
			position: absolute;
			left: 50%;
			top: 50%;
			&.p1 {
				transform: translateX(-50%) translateY(-50%);
			}
		}
	}
</style>