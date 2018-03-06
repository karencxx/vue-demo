<template>
	<div>
		<button class="btn" @mousemove="move" ref="btn">
			<span>Button</span>
		</button>
	</div>
</template>
<script>
	export default {
		data(){
			return {

			}
		},
		created() {
		},
		methods: {
			move(e) {
				const btn = this.$refs.btn;

				const x = e.pageX - btn.offsetLeft;
				const y = e.pageY - btn.offsetTop;

				console.log(x,y,'x-y')
				btn.style.setProperty('--x', x + 'px');
				btn.style.setProperty('--y', y + 'px');

			}
		},
		mounted() {
		}
	}

</script>
<style lang="less" scoped>
	.btn {
		margin-top: 20px;
		position: relative;
		background-image: linear-gradient(135deg,#667eea 0%,#764ba2 100%);
		padding: 14px 50px;
		border-radius: 4px;
		border: none;
		color: #fff;
		cursor: pointer;
		outline: none;
		overflow: hidden;
		box-shadow: 0 14px 30px rgba(0,0,0,0.15);
		font-family: 'Lato', sans-serif;
		font-size: 16px;
		text-transform: uppercase;
		letter-spacing: 2px;
		&::before {
			--size: 0;
			content: '';
			position: absolute;
			left: var(--x);
			top: var(--y);
			width: var(--size);
			height: var(--size);
			background: radial-gradient(circle closest-side, #a3b1f1, transparent);
			transform: translate(-50%, -50%);
			transition: width .2s ease, height .2s ease;	
		}
		&:hover::before {
			--size: 200px;
		}
		span {
			position: relative;
		}
	}
</style>