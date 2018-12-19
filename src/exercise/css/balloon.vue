<template>
	<section>
		<div class="balloon">
			<div class="envelope">
				<span></span>
				<span></span>
			</div>
			<div class="basket">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
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
	background: linear-gradient(deepskyblue, skyblue, lightblue 20%);
}
.balloon {
	width: 12em;
	height: 19em;
	font-size: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* 增加微微浮动的动画效果 */
	animation: drift 2s infinite alternate;
}
@keyframes drift {
	to {
		transform: translateY(-5%);
	}
}
/* envelope 伞盖 */
/* 形状为上端球体,下端为圆锥体 */
/* 在二维平面上,可分解为三角形和圆 */
.envelope {
	position: relative;
	width: inherit;
	height: 16em;
	overflow: hidden;/* 隐藏容器外的部分,削掉三角形最下面的角 */
	/* 这里画上半部分的圆 */
	span {
		position: absolute;
		width: inherit;
		height: 12em;
		border-radius: 50%;
		color: orange;
		background-color: currentcolor;
		left: 0;
		/* 画出下端等腰三角形 */
		&::before {
			content: '';
			position: absolute;
			width: 0;
			height: 0;
			border-width: 10em 5.5em 0 5.5em;
			border-style: solid;
			border-color: currentcolor transparent transparent transparent;
			left: calc(50% - 5.5em);
			top: 8.45em;
		}
		/* 使第2个span变形、变色,使伞盖形成竖条纹的花纹 */
		&:nth-child(2) {
			transform: scaleX(0.4);
			filter: brightness(0.85) contrast(1.4);
		}
	}
}
/* basket 吊篮 */
.basket {
	position: relative;
	width: 2em;
	height: 3em;
	&::before, &::after {
		content: '';
		position: absolute;
	}
	/* 画篮子 */
	&::before {
		width: inherit;
		height: 1.6em;
		background-color: peru;
		bottom: 0;
		left: 0;
		border-radius: 0 0 0.5em 0.5em;
	}
	/* 画篮子的顶边 */
	&::after {
		width: 105%;
		height: 0.3em;
		background-color: saddlebrown;
		left: calc((100% - 105%) / 2);
		top: 1.3em;
		border-radius: 0.3em;
	}
	/* 用span代替四根缆绳,设为竖细线 */
	span {
		position: absolute;
		width: 0.1em;
		height: 1.5em;
		background-color: burlywood;
		/* 定位,并倾斜不同角度 */
		left: calc((var(--n) - 1) * 0.6em);
		transform-origin: bottom;
		transform: rotate(calc(var(--r) * 7deg));
		&:nth-child(1) {
			--n: 1;
			--r: -2;
		}
		&:nth-child(2) {
			--n: 2;
			--r: -1;
		}
		&:nth-child(3) {
			--n: 3;
			--r: 1;
		}
		&:nth-child(4) {
			--n: 4;
			--r: 2;
		}
	}
}

</style>