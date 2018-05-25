<template>
  <div>
    <div>
      <!-- <template v-for="(item, key) in barrageList">
				<p>{{item}}</p>
			</template>	 -->
      <!-- https://github.com/jinht/Marquee -->
      <span class="barrage" :class="showTxt ? 'in' : 'out'">{{showTxt}}</span>
      <Carousel v-model="first" autoplay loop dots="none">
        <CarouselItem v-for="(item, index) in carouselList">
          <div class="demo-carousel">{{index}}</div>
        </CarouselItem>
      </Carousel>
      <div class="carousel-section">
	      <div class="carousel-wrapper" :style="{'margin-top': top}">
		      <template v-for="(item, index) in carouselList">
		        <div class="my-carousel" @click="onClick">
		        	{{index}}-{{item.name}}-{{item.from}}
		        	<Button type="ghost" @click="ho" class="pull-right">复制</Button>
		    	</div>
		      </template>
	      </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/axios/api'
export default {
  data() {
    return {
      newsListShow: [],
      barrageList: [],
      showTxt: '',
      carouselList: [],
      first: 0,
      curIndex: 0,
      top: 0
    }
  },
  created() {
    console.log(api, 'api')
    // this.setNewsApi();
    this.setBarrageData();
    this.setCarouselListData();
    this.autoCarousel();
  },
  methods: {
    setNewsApi: function() {
      api.JH_news('/news/index', 'type=top&key=123456')
        .then(res => {
          this.newsListShow = res.articles;
        })
    },
    setBarrageData() {
      api.JH_news('/barrage/get', '')
        .then(res => {
          this.barrageList = res.list;
          this.showDiffTxt();
        })
    },
    setCarouselListData() {
      api.JH_news('/carousel/get', '')
        .then(res => {
          this.carouselList = res.list;
        })
    },
    showDiffTxt() {
      let that = this;
      setInterval(function() {
        setTimeout(function() {
          that.showTxt = '';
        }, 2000)
        let s = Math.floor(Math.random() * 50);
        that.showTxt = that.barrageList[s];
      }, 5000)
    },
    autoCarousel() {
    	let that = this;
    	setInterval(function() {
    		if(that.curIndex == that.carouselList.length-1) {
    			that.curIndex = 0;
    		}else {
    			that.curIndex++;
    		}
    		that.top = `-${that.curIndex*40}px`
    	}, 10000); 
    },
    onClick() {
    	console.log('in')
    },
    ho() {
    	console.log('jo')
    }
  }
}

</script>
<style lang="less" scoped>
.barrage {
  position: absolute;
  left: 0.11rem;
  top: 4.3rem;
  z-index: 900;
  padding: 0.02rem 0;
  background: rgba(255, 255, 255, 0.9);
  color: #222;
  border-radius: 0.15rem;
  font-size: 16px;
  line-height: 0.14rem;
  opacity: 0;
  box-shadow: 1px 1px 3px #ccc;
  &.in {
    animation: in 0.5s linear 0s 1 none;
    animation-fill-mode: forwards;
  }
  &.out {
    animation: out 0.5s linear 0s 1 none;
    animation-fill-mode: forwards;
  }
}

@-webkit-keyframes in {
  from {
    transform: transLateY(0.1rem);
    opacity: 0;
  }
  to {
    transform: transLateY(0);
    opacity: 1;
  }
}

@-webkit-keyframes out {
  from {
    transform: transLateY(0);
    opacity: 1;
  }
  to {
    transform: transLateY(-0.1rem);
    opacity: 0;
  }
}

.ivu-carousel {
  height: 200px;
}

.my-carousel {
  height: 40px;
  line-height: 40px;
}

.carousel-section {
	height: 40px;
    border: 1px solid;
    overflow: hidden;
}

.carousel-wrapper {
	transition: margin-top 0.8s ease;
}

</style>
