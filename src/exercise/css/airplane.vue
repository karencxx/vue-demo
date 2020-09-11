<!-- 飞机舷窗toggle -->
<!-- 善于利用box-shadow -->
<template>
	<section>
		<input type="checkbox" class="toggle">
		<figure class="window">
			<div class="curtain"></div>
			<!-- <div class="clouds">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div> -->
			<div class="snow">

			</div>
		</figure>
	</section>
</template>
<style lang="less" scoped>
section {
	margin: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: skyblue;
}
:root {
	--font-size: 5px;
}
.toggle {
	position: absolute;
	/* 隐藏checkbox */
	filter: opacity(0);
	width: 20em;
	height: 30em;
	font-size: var(--font-size);
	cursor: pointer;
	z-index: 3;
}
/* 舷窗 */
.window {
	position: relative;
	box-sizing: border-box;
	width: 20em;
	height: 30em;
	font-size: var(--font-size);
	background-color: #d9d9d9;
	border-radius: 5em;
	/* 阴影画厚窗框 */
	box-shadow: 
		inset 0 0 8em rgba(0, 0, 0, 0.2),
		0 0 0 0.4em #808080,
		0 0 0 4em whitesmoke,
		0 0 0 4.4em #808080,
		0 2em 4em 4em rgba(0, 0, 0, 0.1);
	overflow: hidden;
}
/* 小窗户 */
/* 窗口尺寸一样,但不触底,设置top:-5% */
.window .curtain {
	position: absolute;
	width: inherit;
	height: inherit;
	background-color: whitesmoke;
	top: -5%;
	border-radius: 5em;
	box-shadow: 
		0 0 0 0.4em #808080,
		0 0 3em rgba(0, 0, 0, 0.4);
	transition: 0.5s ease-in-out;
	z-index: 2;
}
/* 舷窗打开时,小窗户向上移动 */
.toggle:checked ~ .window .curtain {
	top: -90%;
}
.window {
	.curtain::before, .curtain::after {
		content: '';
		position: absolute;
		border-radius: 0.4em;
	}
	/* 小窗户上的把手 */
	.curtain::before {
		width: 40%;
		height: 0.8em;
		background-color: #808080;
		left: 30%;
		bottom: 1.6em;
	}
	/* 小窗户上的指示灯 */
	/* 关闭时亮红色光 */
	.curtain::after {
		width: 1.6em;
		height: 0.8em;
		bottom: 1.6em;
		background-image: radial-gradient(orange, orangered);
		left: calc((100% - 1.6em) / 2);
		border-radius: 0.4em;
	}
}
/* 舷窗打开时亮绿色光 */
.toggle:checked ~ .window .curtain::after {
	background-image: radial-gradient(lightgreen, limegreen);
}
.window {
	/* 云朵容器 */
	.clouds {
		position: relative;
		width: 15em;
		height: 25em;
		background-color: deepskyblue;
		left: calc((100% - 15em) / 2);
		top: calc((100% - 25em) / 2);
		border-radius: 7em;
		box-shadow: 0 0 0 0.4em #808080;
		overflow: hidden;
		/* 云朵元素 */
		span {
			position: absolute;
			width: 10em;
			height: 4em;
			background-color: #fff;
			top: 20%;
			border-radius: 4em;
			/* 增加云朵飘动的效果 */
			// animation: move 4s linear infinite;
		}
	}
	/* 雪花容器 */
	.snow {
		display: grid;
		height: 100%;
    	width: 100%;
		background-size: 2em 2em;
        background-image: 
            linear-gradient(to bottom, transparent 95%, pink 95%),
            linear-gradient(to right, transparent 95%, pink 95%),
            linear-gradient(to top, transparent 95%, pink 95%),
            linear-gradient(to left, transparent 95%, pink 95%);
        background-repeat: repeat, repeat, repeat-x, repeat-y;
	}
}
@keyframes move {
	/* 如果设为0,则只在0%的位置一直叠加,没有缓冲时间 */
	from {
		left: -150%;
	}
	/* 设置超出一些,避免还没到达边界就消失了 */
	to {
		left: 150%;
	}
}
/* 画2个突起的圆弧,两个小圆瓣 */
.clouds span::before,
.clouds span::after {
	content: '';
	position: absolute;
	width: 4em;
	height: 4em;
	background-color: #fff;
	border-radius: 50%;
}
.clouds span::before {
	top: -2em;
	left: 2em;
}
.clouds span::after {
	top: -1em;
	right: 1em;
}
/* 增加点变化 */
.clouds {
	span:nth-child(2) {
		top: 40%;
		animation-delay: -1s;
	}
	span:nth-child(3) {
		top: 60%;
		animation-delay: -0.5s;
	}
	span:nth-child(4) {
		top: 20%;
		transform: scale(2);
		animation-delay: -1.5s;
	}
	span:nth-child(5) {
		top: 50%;
		transform: scale(1.5);
		animation-delay: -3s;
	}
}

</style>