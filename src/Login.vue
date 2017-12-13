<template>
	<!-- <div id="#app"> -->
		<div class="container form-group">
			<button type="button" class="btn btn-warning login" v-on:click="toIndex">㊙️ 🉐</button>
		</div>
	<!-- </div> -->
</template>
<script>
	export default {
		data(){
			return {

			}
		},
		methods: {
			toIndex() {
				let that = this
				setTimeout(function(){
					that.$router.push({
						path: '/'
					})
				}, 100)
			}
		}
	}
</script>
<style lang="less" scoped>
	.container {
		margin: 5% auto;
		width: 30%;
		height: 200px;
		line-height: 200px;
		border: 1px solid #eee;
		text-align: center;
	}
</style>