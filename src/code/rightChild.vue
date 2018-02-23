<template>
	<div>
		<section class="right">
			<div>{{data}}</div>
		</section>
	</div>
</template>
<script>
	export default {
		props: ["data", "reqData"],
		data() {
			return {

			}
		},
		methods: {

		}
	}
	
</script>
<style lang="less" scoped>
	.right {
		float: right;
		width: 45%;
		font-size: 14px;
		margin-top: 4%;
	}
</style>