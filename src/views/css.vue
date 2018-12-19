<template>
	<div class="m20">
	    <Tabs size="small">
	    	<template v-for="(item, index) in componentsList">
	        	<TabPane :label="item">
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
import Umbrella from '@/exercise/css/umbrella'
import Airplane from '@/exercise/css/airplane'
import Balloon from '@/exercise/css/balloon'
import Bezier from '@/exercise/css/bezier'

export default {
	components: {
		Rate,
		Panorama,
		BtnHover,
		Scroll,
		LoadingAnimation,
		Umbrella,
		Airplane,
		Balloon,
		Bezier
	},
    data() {
    	return {
    		componentsList: ['Bezier','Balloon','Airplane','Umbrella','LoadingAnimation','Rate','BtnHover','Panorama'],
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