<template>
	<div class="body">
		<b>特指度</b>度量的是CSS选择器识别元素的精确性。为选取元素，不同类型的选择器常组合在一起，计算<b>特指度</b>时需要分析这些选择器，除通用选择器*。
		为(a,b,c,d)中的各个变量赋予相应的数值，就能得到<b>特指度</b>。
		如果用style属性去应用样式 a=1 否则 a=0 <br>
		b为ID选择器的数量 <br>
		c为类选择器、属性选择器和伪类的数量 <br>
		d为类型选择器和伪元素的数量 <br>
		最左侧的选择器<b>特指度</b>最高。如果最左侧变量的两个值相等，需比较右侧紧挨着的变量的值。
		<b>用!important声明覆盖级联样式</b>
		css只有块级注释 <br>
		从右向左匹配选择器 <br>
		<v-global></v-global>	
	</div>
</template>
<script>
	
</script>
<style lang="less" scoped>
	.body {
		text-align: justify;
		padding: 20px;
	}
</style>