<template>
	<section>
		<input type="checkbox" class="toggle">
		<figure class="umbrella">
			<!-- canopy 棚 这里指伞盖 -->
			<div class="canopy"></div>
			<!-- shift 轴 伞柄 -->
			<div class="shaft"></div>
		</figure>
	</section>
</template>
<style lang="less" scoped>
/* 居中 */
section {
	margin: 0;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(skyblue, lightblue);
}
:root {
	--font-size: 6px;
}
/* checkbox 控件 */
/* 与雨伞一样大，置于雨伞图层上层 */
.toggle {
	position: absolute;
	filter: opacity(0);
	width: 25em;
	height: 26em;
	font-size: var(--font-size);
	cursor: pointer;
	z-index: 2;
}
/* 设置共有属性 */
.umbrella *::before, 
.umbrella *::after {
	content: '';
	position: absolute;
}
/* 设置缓动效果 */
.umbrella, 
.umbrella .canopy, 
.umbrella .canopy::after {
	transition: 0.4s cubic-bezier(0.5, -0.25, 0.5, 1.25);
}
.umbrella {
	position: absolute;
	width: 25em;
	height: 26em;
	font-size: var(--font-size);
	transform: rotate(-30deg);
}
/* 打开伞时回正 */
.toggle:checked ~ .umbrella {
	transform: rotate(0deg);
}
/* 伞盖尺寸 */
.umbrella .canopy {
	position: absolute;
	width: inherit;
	height: 5.5em;
	top: 2.5em;
	/* 合上伞盖 */
	/* 水平方向上压缩，垂直方向向上拉伸 */
	transform-origin: top;
	transform: scale(0.08, 4);
}
/* 恢复伞盖 */
.toggle:checked ~ .umbrella .canopy {
	transform: scale(1, 1);
}
/* 伞盖上半部分 */
/* 先画一个半圆 然后垂直方向压缩 */
.umbrella .canopy::before {
	left: 0;
	width: inherit;
	height: 12.5em;
	background: rgb(100, 100, 100);
	border-radius: 12.5em 12.5em 0 0;
	transform: scaleY(0.4);
	top: -4em;
}
/* 伞盖下半部分阴影 */
.umbrella .canopy::after { 
	left: 0;
	width: inherit;
	height: 1.5em;
	background-color: #333;
	top: 4em;
	border-radius: 50%;
	/* 收起时无阴影 */
	transform: scaleY(0);
}
/* 伞打开后展示阴影 */
.toggle:checked ~ .umbrella .canopy::after {
	transform: scaleY(1);
}
/* 伞柄的长杆 */
.umbrella .shaft {
	position: absolute;
	width: 0.8em;
	height: 18em;
	background-color: rgba(100, 100, 100, 0.7);
	top: 5.5em;
	left: calc((100% - 0.8em) / 2);/* 基本定位 */
}
/* 伞杆顶部的尖头，也是先画一个半圆，然后水平方向压缩 */
.umbrella .shaft::before {
	width: 6em;
	height: 3em;
	background-color: rgba(100, 100, 100, 0.7);
	left: calc((100% - 6em) / 2);/* 调整好位置 */
	top: -5.5em;
	border-radius: 6em 6em 0 0;
	transform: scaleX(0.1);
}
/* 伞钩形把手 */
.umbrella .shaft::after {
	box-sizing: border-box;
	width: 4em;
	height: 2.5em;
	border: 1em solid #333;
	top: 100%;
	left: calc(50% - 4em + 1em /2);
	border-radius: 0 0 2.5em 2.5em;
	border-top: none;
}
</style>