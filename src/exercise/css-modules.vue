<template>
	<div>
		<p :class="a.red">css modules</p>
		<p class="bg777">css modules 全局</p>
		<p :class="b.bg">css modules</p>
		<div class="center">
			<p class="p1">使用translate x/y定位中心</p>
			<p>使用translate x/y定位中心</p>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		created() {
			console.log(this.primaryColor)
		}
	}
</script>
<style module="a">
	/* CSS Modules对CSS中的class类都做了处理，使用对象来保存原class和定制处理后的class的对应关系 */
	/* 经过这样类名定制处理后，class名基本就是唯一的，大大降低了项目中样式覆盖的几率 */
	/* 只会转换class名相关样式 */
	/* 注入标识符 b */
	.bg777 {
		background: lightblue; 
	}
	:global(.bg777) {
		background: #777;
	}
	.red {
		/* 继承 组合class */
		/* 必须位于其他规则之前 */
		/* composes: classNameA classNameB; */
		/* composes: className from "./style.css"; */
		/* composes: globalClassName from global; */
		composes: bg777; 
		composes: bg777 colorGreen from '../../style.css' bg777 from global;
		color: red;
	}

	/* :export 把css变量输出到js中 */
	:export {
		primaryColor: #000;
	}
</style>
<style module="b">
	/* 注入标识符 b */
	.bg {
		background: #999;
	}
</style>
<style lang="less" scoped>
	.center {
		position: relative;
		height: 50vh;
		border: 1px solid;
		p {
			position: absolute;
			left: 50%;
			top: 50%;
			&.p1 {
				transform: translateX(-50%) translateY(-50%);
			}
		}
	}
</style>