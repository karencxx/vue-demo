<template>
	<div>
		<section class="toolbar">
			<template>
			    <Select v-model="fSize" class="font-select">
			    	<template v-for="(item,index) in fontList">
			        	<Option :value="item" :key="index">{{item}}</Option>
			    	</template>
			    </Select>
				<ColorPicker v-model="fColor" recommend />
			</template>
		</section>
		<section class="content">
			<span class="txt" :style="{fontSize: fSize+'px',color: fColor}">abcd双城故事</span>
		</section>
		
	</div>
</template>
<script>
	export default {
		data(){
			return {
				fSize: '14',
				fontList: ['12','14','16','18','20','22','24','26','28','30','32','36','48','64'],
                fColor: '',
			}
		},
		methods: {
			adjustFont() {
				// this.fSize = '15px'
			}
		}
	}
</script>
<style lang="less" scoped>
	.toolbar {
		border-bottom: 1px solid #eee;
		width: 40%;
		margin: 0 auto;
		margin-top: 15%;
		font-size: 26px;
		height: 46px;
		line-height: 46px;
	}
	.font-select {
		width: 50px;
	}
	.txt {
		font-size: 12px;
	}
</style>