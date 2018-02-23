<template>
	<div>
		<button @click="tryCopy" class="btn">点击复制</button>

	</div>
</template>
<script>
	export default {
		data(){
			return {
				copyContent: '我是要复制的内容'
			}
		},
		created() {
			// this.tryCopy()
		},
		methods: {
			tryCopy() {
				const faker = document.createElement('textarea');
				// faker.style.visibility = 'none';
				faker.style.position = 'fixed';
				faker.style.top = 0;
				faker.style.left = 0;

				// faker.style.zIndex = -9999;
				faker.setAttribute('readonly', '');
				faker.value = this.copyContent;

				document.body.appendChild(faker);

				faker.focus();
				faker.select();
				console.log('in try copy func-----')
				try {
					document.execCommand('copy');
					console.log('拷贝成功!')
				} catch (err) {
					console.log('不支持=====');
				} finally {
					// document.body.removeChild(faker);
				}
			}
		}
	}
</script>
