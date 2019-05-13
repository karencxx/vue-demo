<template>
	<div>
		<p :class="a.red">css modules</p>
		<p class="bg777">css modules 全局</p>
		<p :class="b.bg">css modules</p>
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