<template>
	<div>
		<template v-for="(item, key) in newsListShow">
			{{item}}
		</template>	
	</div>
</template>
<script>
	import api from '@/axios/api'
	export default {
		data() {
			return {
				newsListShow: []
			}
		},
		created() {
			console.log(api,'api')
			this.setNewsApi();
		},
		methods: {
			setNewsApi: function() {
				api.JH_news('/news/index', 'type=top&key=123456')
					.then(res => {
						this.newsListShow = res.articles;
					})
			}
		}
	}
</script>
<style></style>