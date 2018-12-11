<template>
	<div class="m20">
	    <Tabs size="small">
	    	<template v-for="(item, index) in componentsList">
	        	<TabPane :label="item" class="m20">
	        		<component :is="item"></component>
	        	</TabPane>
	    	</template>
	    </Tabs>
	</div>
</template>
<script>
import Rate from '@/exercise/css/rate'
import Scroll from '@/exercise/css/scroll'
import Panorama from '@/exercise/css/panorama'
import BtnHover from '@/exercise/css/btnHover'
import LoadingAnimation from '@/exercise/css/loadingAnimation'
export default {
	components: {
		Rate,
		Panorama,
		BtnHover,
		Scroll,
		LoadingAnimation
	},
    data() {
    	return {
    		componentsList: ['LoadingAnimation','Rate','BtnHover','Panorama'],
    	}
    }
}
</script>
<style lang="less" scoped>
.m20 {
	margin: 20px;
}
.m20-tb {
	margin: 20px 0;
}
</style>