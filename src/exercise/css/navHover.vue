<template>
	<section>
		<ul>
			<li>home</li>
			<li>products</li>
			<li>services</li>
			<li>contact</li>
		</ul>
	</section>
</template>
<style lang="less" scoped>
section {
	margin: 0;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(deepskyblue, navy);
}
ul {
	padding: 0;
	list-style-type: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	li {
		color: #ddd;
		font-size: 25px;
		font-family: sans-serif;
		/* 转大写 */
		/* capitalize 首字母大写 */
		text-transform: uppercase;
		position: relative;
		transition: 0.3s;
		cursor: pointer;
		overflow: hidden;
		margin: 0.5em;
		&:hover {
			color: #fff;
			&::before {
				left: 100%;/* 悬停时左侧方块移到文字所在位置 */
			}
			&::after {
				left: 0%;/* 悬停时右侧下划线移动文字所在位置 */
			}
		}
		/* 左侧增加一个滑块 */
		&::before {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			background: tomato;
			left: -100%;
			transition: 0.4s ease-out;
		}
		/* 右侧增加一条下划线 */
		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 0.2em;
			background: tomato;
			bottom: 0;
			left: 100%;
			transition: 0.3s 0.3s ease-out;/* 动画延迟至方块动画快结束才执行 */
		}
	}
}

</style>