<template>
	<div class="container">
		<Left :callback="getInfo"></Left>
		<Button type="ghost" @click="copy" class="pull-right copy-btn">复制</Button>
		<Right :reqData="obj" :data="tpl"></Right>
		<textarea ref="forCopy" class="copy-textarea" readonly="readonly"></textarea>
	</div>
</template>
<script>
	import Left from '@/code/leftChild'
	import Right from '@/code/rightChild'
	import { generate } from '@/mixins/code-generate'

	export default {
		components: {
			Left,
			Right
		},
		mixins: [generate],
		data(){
			return {
				obj: null,
				tpl: null
			}
		},
		methods: {
			getInfo(data) {
				this.obj = data;
				this.tpl = this.genHtml(this.obj);
			},
			copy() {
				const faker = this.$refs.forCopy;
				faker.value = this.tpl;
				faker.select();

				try {
					document.execCommand('Copy');
				} catch(err) {
					console.log('浏览器不支持');
				} finally {

				}
			}
		}
	}


</script>
<style lang="less" scoped>
	.container {
		margin: 3%;
		text-align: justify;
	}
	.copy-textarea {
		opacity: 0;
		position: fixed;
		bottom: 0;
		z-index: -999;
	}
	.copy-btn {
		position: absolute;
    	top: 8%;
    	right: 6%;
	}
</style>