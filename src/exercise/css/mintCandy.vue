<!-- 薄荷糖动画 -->
<template>
	<section>
		<div class="spinner"></div>
	</section>
</template>
<style lang="less" scoped>
section {
	margin: 0;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: silver;
	/* 设置透视景深 */
	perspective: 400px;
}
.spinner {
	width: 50vmin;
	height: 50vmin;
	position: relative;
	/* 增加容器沿x轴旋转的动画效果，动画时长为子动画时长的2倍 */
	animation: wobble calc(1.5s*2) ease-in-out infinite;
	/* 使子元素在3D空间上运动 */
	/* flat 在平面上运动 */
	transform-style: preserve-3d;
}
@keyframes wobble {
	0%, 100% { /* rotate以一个定点旋转而不变形的变换 */
		transform: rotateX(15deg) rotateY(60deg);
	}
	50% {
		transform: rotateX(60deg) rotateY(-60deg) rotate(180deg);
	}
}
.spinner {
	/* 用伪元素画一个黑圆环一个白圆环,after覆盖在before上 */
	&::before, &::after {
		content: '';
		position: absolute;
		box-sizing: border-box;
		width: inherit;
		height: inherit;
		border: 12.5vmin solid;
		border-radius: 50%;
		border-color: #333;
		animation: spin 1.5s ease-in-out infinite reverse;
	}
	&::after {
		border-color: white;
		animation-delay: calc(1.5s / 2 * -1); /* 延迟白环动画，时长为总动画的一半 */
	}
}
/* 让圆环在z轴上运动 */
@keyframes spin {
	0%, 100% {
		/* 在z轴距离较大时稍稍倾斜 */
		transform: translateZ(10vmin) rotateX(25deg); 
	}
	33% {
		transform: translateZ(-10vmin) scale(0.4);/* 增加缩放效果 */
	}
	66% {
		transform: translateZ(-10vmin);
	}
}
</style>