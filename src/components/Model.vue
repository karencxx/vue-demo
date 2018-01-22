<template>
	<div>
		<Child></Child>
		<input type="text" v-focus>
	</div>
</template>
<script>
	import Child from '@/components/Child'
	import { toggle } from '@/mixins/toggle'

	export default {
		name: 'modal',
		mixins: [toggle],
		components: { //子组件
			Child
		},
		mounted() {
			console.log('this mixin!')
		},
		// directives: {
		// 	focus: {
		// 		//指定的定义
		// 		inserterd: function(el) {
		// 			el.focus()
		// 		}
		// 	}
		// }
	}
</script>
