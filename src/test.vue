<template>
	<div>
		<ul @click="click3">
			<li @click="click2"><a href="#" @click="click1">111</a></li>
		</ul>
		<textarea v-model="text" cols="30" rows="10"></textarea>
	</div>
</template>
<script>
export default {
	data() {
		return {
			text: ''
		}
	},
	methods: {
		click1() {
			console.log('click a')
		},
		click2() {
			console.log('click li bubble')
		},
		click3() {
			console.log('click ul bubble')

		}
	}
}	
</script>
<style lang="less" scoped>
	ul, li, a {
		border: 1px solid #000;
	}
</style>