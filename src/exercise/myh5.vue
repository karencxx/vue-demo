<template>
	<div>
		<section ref="scroll">
			<div class="first" v-if="first">
				<p>第一次两行</p>
				<p>哈哈哈fff</p>
			</div>
			<div class="second" v-else>
				<p>就一行</p>
			</div>
		</section>
		<div class="scroll"></div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				first: true,
				scrollTop: 0
			}
		},
		mounted() {

		},
		methods: {
			
		}
	}
</script>
<style lang="less" scoped>
	.scroll {
		height: 800px;
	}
	.first, .second {
		padding: 10px;
		border: 1px solid #eee;
	}
	.second {
		transition-timing-function: ease-in-out;
		transition: 0.6s;
		transform: translateX(10%);
		position: fixed;
		top: 0;
	}
</style>