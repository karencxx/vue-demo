<template>
	<section>
		<div class="loader">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</section>
</template>
<style lang="less" scoped>
section {
	margin: 0;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(to right, silver, teal);
}
.loader {
	/* 定义外圈轨道的直径，基准 */
	--diameter: 8em;
	/* 定义容器尺寸，宽为高的2倍 */
	--width: calc(var(--diameter) * 2);
	/* 线粗细的变量 */
	--stroke-width: calc(var(--diameter) / 40);
	/* 原点直径变量 */
	--dot-diameter: calc(var(--diameter) / 10);
	width: var(--width);
	height: var(--diameter);
	position: relative;
	color: #fff;
	/* 隐藏容器外内容 */
	overflow: hidden;   
	border: 1px solid;
}
/* 共有属性 */
.loader::before,
.loader::after {
	content: '';
	position: absolute;
	bottom: 0;
}
/* 底部轨道 */
.loader::before {
	width: inherit;
	height: var(--stroke-width);
	background-color: currentcolor;
}
/* 中部圆形轨道 */
.loader::after {
	box-sizing: border-box;
	width: var(--diameter);
	height: var(--diameter);
	border: var(--stroke-width) solid;
	border-radius: 50%;
	left: 25%;
}
.loader span {
	position: absolute;
	width: var(--dot-diameter);
	height: var(--dot-diameter);
	background-color: currentcolor;
	border-radius: 50%;
	bottom: var(--stroke-width);
	left: calc(var(--stroke-width) * -1);
	/* 原点增加沿圆形轨道旋转的动画, 内嵌在原型轨道 */
	/* run 移动动画 rotating 旋转动画 */
	animation: run 2s linear infinite, rotating 2s linear infinite;
	/* 改变旋转的中心点 */
	/* 公式：R-2r-b */
	--vertical-center: calc((var(--diameter) / 2 - var(--stroke-width) - var(--dot-diameter)) * -1);
	transform-origin: 50% var(--vertical-center);
}
/* 为另外2个原点设置动画延时 */
.loader span:nth-child(2) {
	color: #000;
	animation-delay: 0.075s;
}
.loader span:nth-child(3) {
	color: #777;
	animation-delay: 0.15s;
}
.loader span:nth-child(1) {
	color: red;
	animation-delay: 0.225s;
}

@keyframes run {
	0% {
		left: calc(var(--dot-diameter) * -1);
	}
	10%, 60% {
		left: calc((var(--width) - var(--dot-diameter)) / 2);
	}
	70%, 100% {
		left: var(--width);
	}
}
@keyframes rotating {
	0%, 10% {
		transform: rotate(0deg);
	}
	60%, 100% {
		transform: rotate(-1turn);
	}
}
</style>