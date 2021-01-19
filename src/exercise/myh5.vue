<template>
	<div>
		<section ref="scroll">
			<div class="first" v-if="first">
				<p>第一次两行</p>
				<p>哈哈哈fff</p>
			</div>
			<div class="second" v-else>
				<p>就一行</p>
			</div>
		</section>
		<div class="scroll"></div>

		<div @click="clickToConsole">
			<ul class="color_list" @click.stop="clickToCurColor">
				<li>red</li>
				<li>orange</li>
				<li>yellow</li>
				<li>green</li>
				<li>blue</li>
			</ul>
			<div class="box">box</div>
		</div>

		<div @click="clickToConsole">
			<em>If you click on <code>EM</code>, the handler on <code>DIV</code> runs.</em>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				first: true,
				scrollTop: 0
			}
		},
		mounted() {

		},
		methods: {
			clickToCurColor (e) {
				console.log('111111')
				// return false
				e.target = e.currentTarget
				let nodeName = e.target.nodeName.toLowerCase()
				e.preventDefault();
				e.stopPropagation();
				
				if(nodeName === 'li'){
					document.querySelector('.box').style.backgroundColor = e.target.innerHTML
				}
			},
			clickToConsole (e) {
				console.log('222222')
			}
		}
	}
</script>
<style lang="less" scoped>
	.scroll {
		height: 800px;
	}
	.first, .second {
		padding: 10px;
		border: 1px solid #eee;
	}
	.second {
		transition-timing-function: ease-in-out;
		transition: 0.6s;
		transform: translateX(10%);
		position: fixed;
		top: 0;
	}

	.color_list {
		display: flex;

		li {
			width: 100px;
			height: 100px;
			list-style: none;
			text-align: center;
			line-height: 100px;
			color: #fff;

			&:nth-of-type(1) {
				background-color: red;
			}
			&:nth-of-type(2) {
				background-color: orange;
			}
			&:nth-of-type(3) {
				background-color: yellow;
			}
			&:nth-of-type(4) {
				background-color: green;
			}
			&:nth-of-type(5) {
				background-color: blue;
			}
		}
	}

	.box {
		width: 500px;
		height: 100px;
		background: #ccc;
		line-height: 150px;
		text-align: center;
	}
</style>