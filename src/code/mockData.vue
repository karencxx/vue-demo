<template>
	<div>
		<Button type="ghost" @click="createData">生成</Button>
		<div>{{data}}</div>
	</div>
</template>
<script>
	import api from '@/axios/api'
	export default {
		data() {
			return {
				data: null
			}
		},
		created() {

		},
		methods: {
			setBarrageData() {
		      let that = this;
		      api.JH_news('/barrage/get', 'post')
		        .then(res => {
		          this.data = res.list;
		        })
		    },
		    createData() {
		    	this.setBarrageData();
		    }
		}
	}
</script>
