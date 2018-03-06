<template>
	<div class="content-wrapper">
		<template v-for="(item,k) in list">
			<Card>
				<div>
					<router-link :to="item.path">{{item.alias || item.name}}</router-link>
				</div>
			</Card>
			<template v-if="(k+1)%num==0"><br></template>
		</template>
	</div>
</template>
<script>
	import router from '@/router'

	export default {
		data() {
			return {
				list: [],
				num: Math.floor(Math.random()*9+1), //1-10之间的数
			}
		},
		created() {
			this.list = router.options.routes;
			console.log(this.num, 'num')
		} 
	}

</script>
<style lang="less" scoped>
	.content-wrapper {
		margin: 40px 20px;
	}
	.ivu-card {
		display: inline-block;
		width: auto;
		margin: 10px;
	}
</style>