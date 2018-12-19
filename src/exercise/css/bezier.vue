<template>
  <section>
    <div class="animation" :class="name"></div>
    <div class="bottom" :class="name"><span>{{count}}</span></div>
    <Button type="ghost" @click="add">+1</Button>
  </section>
</template>
<script>
export default {
	data() {
		return {
			count: 0,
			name: ''
		}
	},
	methods: {
		add() {
			this.count++;
		}
	},
	watch: {
		"count": function(val) {
			if(val > 0) {
				this.name = 'active';
				setTimeout(() => {
					this.name = '';
				}, 700)
			}
		}
	}
}
</script>
<style lang="less" scoped>
.bottom {
  position: fixed;
  right: 12px;
  bottom: 180px;
  width: 50px;
  height: 50px;
  background: url('../../assets/tip.png') no-repeat center;
  background-size: cover;
  /* animation: blow-up 0.6s alternate;
  animation-delay: 1s;
  animation-iteration-count: 1; */
  &.active {
    animation: blow-up 0.5s alternate;
    animation-delay: 0.6s;
    animation-iteration-count: 1;
    /* animation-fill-mode: forwards; */
  }
  span {
  	position: absolute;
  	left: 0;
  	background: red;
  	color: #fff;
  	border-radius: 10px;
  	text-align: center;
  	min-width: 20px;
  }
}

@keyframes blow-up {
  from {
    transform: scale(1.3, 1.3);
  }
}

.animation {
  position: absolute;
  bottom: 455px;
  left: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ed3;
  &.active {
  	left: 320px;
  	bottom: 200px;
  	transition: left 0.6s linear, bottom 0.6s cubic-bezier(.51, -0.66, .54, .07);
  }
}

</style>
