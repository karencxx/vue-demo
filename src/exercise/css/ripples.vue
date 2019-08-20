<template>
  <div class="wrap">
    <div class="ripples-container">
      	<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
    </div>
  </div>
</template>
<style lang="less" scoped>
div.wrap {
	margin: 0;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #000;
}

.ripples-container {
	font-size: 10px;
	width: 30em;
	height: 30em;
	display: grid;
	/* 用单位 fr 来定义网格轨道大小的弹性系数 */
	grid-template-columns: repeat(3, 1fr);
	transform: rotate(-135deg);
	animation: animate-rotate 10s infinite;
	span {
		position: relative;
		&::before, &::after {
			content: '';
			position: absolute;
			box-sizing: border-box;
			border-style: none solid solid none;
			animation: 1.6s linear infinite;
			animation-name: animate-border-width, animate-border-color, animate-scale;
		}
		/* after慢半拍 */
		&::after {
			animation-delay: -0.8s;
		}

	}
}

@keyframes animate-rotate {
	0%, 23% {
		transform: rotate(calc(-135deg + 90deg*0));
	}
	25%, 47% {
		transform: rotate(calc(-135deg + 90deg*1));
	}
	50%, 73% {
		transform: rotate(calc(-135deg + 90deg*2));
	}
	75%, 97% {
		transform: rotate(calc(-135deg + 90deg*3));
	}
	100% {
		transform: rotate(calc(-135deg + 90deg*4));
	}
}
/* 增加子元素边框宽度变化的动画 */
@keyframes animate-border-width {
	0%, 100% {
		border-width: 0.1rem;
	}
	25% {
		border-width: 1.5em;
	}
}
/* 增加子元素边框色变化的动画 */
@keyframes animate-border-color {
	0%, 25% {
		border-color: tomato;
	}
	50%, 75% {
		border-color: gold;
	}
	100% {
		border-color: #000;
	}
}
/* 增加子元素尺寸由小到大变化的动画 */
@keyframes animate-scale {
	from {
		width: 1%;
		height: 1%;
	}
	to {
		width: 100%;
		height: 100%;
	}
} 

</style>
