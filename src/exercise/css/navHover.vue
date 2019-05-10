<template>
	<section>
		<div class="nav">
			<ul>
				<li>home</li>
				<li>products</li>
			</ul>
		</div>
		<nav class="button">
			<ul>
				<li><span>services</span></li>
				<li><span>contact</span></li>
			</ul>
		</nav>
		<nav class="bubble">
			<ul>
				<li>home1
					<!-- 4个小气泡 -->
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</li>
				<li>home2
					<!-- 4个小气泡 -->
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</li>
			</ul>
		</nav>
	</section>
</template>
<style lang="less" scoped>
.body {
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 33vh;
}
ul {
	list-style-type: none;
}
.bubble {
	.body();
	background: black;
	ul {
		margin: 0;
		padding: 0;
		li {
			--c:  goldenrod;
			color: var(--c);
			font-size: 16px;
			border: 0.3em solid var(--c);
			border-radius: 0.5em;
			width: 12em;
			height: 3em;
			text-transform: uppercase;
			font-weight: bold;
			font-family: sans-serif;
			letter-spacing: 0.1em;
			text-align: center;
			line-height: 3em;
			position: relative;
			overflow: hidden;
			z-index: 1;
			transition: 0.5s;
			margin: 1em;
			&:hover {
				color: black;
				span {/* 悬停效果 */
					transform: translateY(0) scale(2);
				}
			}
			/* 按钮下画出气泡 */
			span {
				position: absolute;
				width: 25%;
				height: 100%;
				background-color: var(--c);
				transform: translateY(150%);
				border-radius: 50%;
				left: calc((var(--n) - 1) * 25%);
				transition: 0.5s;
				transition-delay: calc((var(--n) - 1) * 0.1s);
				z-index: -1;/* 处理层级关系 */
				/* 并排摆放 */
				&:nth-child(1) {
					--n: 1;
				}
				&:nth-child(2) {
					--n: 2;
				}
				&:nth-child(3) {
					--n: 3;
				}
				&:nth-child(4) {
					--n: 4;
				}
			}
		}
	}
}
.button {
	.body();
	background: #333;
	ul {
		padding: 0;
		transform: translateX(16px);
		li {
			width: 8em;
			height: 2em;
			font-size: 25px;
			color: orange;
			position: relative;
			margin-top: 0.8em;
			box-sizing: border-box;
			border-left: 2px solid;
			/* 增加悬停效果，右移展示3条竖线 */
			&:hover span {
				transform: translateX(4px);
			}
			/* 画2条竖线 */
			&::before, &::after {
				content: '';
				position: absolute;
				width: inherit;
				border-left: 2px solid;
				z-index: -1;
			}
			/* 高度依次降低 */
			&::before {
				height: 80%;
				top: 10%;
				left: -8px;
				filter: brightness(0.8);/* 颜色渐变，增加层次感 */
			}
			&::after {
				height: 60%;
				top: 20%;
				left: -14px;
				filter: brightness(0.6);/* 颜色渐变，增加层次感 */
			}
			span {
				position: relative;
				box-sizing: border-box;
				width: inherit;
				height: 120%;/* 比父级要高一些 */
				top: -10%;
				background: #333;
				font-family: sans-serif;
				text-transform: capitalize;
				display: flex;
				align-items: center;
				justify-content: center;
				border: 2px solid;
				transform: translateX(-16px);
				transition: 0.3s;
			}
		}
	}
}
.nav {
	background: linear-gradient(deepskyblue, navy);
	ul {
		padding: 0;
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
}

</style>