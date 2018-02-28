<template>
	<div>
		<button @click="tryCopy" class="btn">点击复制</button>
		<div class="form-group row">
			步长:
			<input type="number" class="form-control inp m15-r" v-model="step">
			<Button type="success" size="small" @click="minus"><Icon type="minus" size="28"></Icon></Button>
			<input type="number" class="form-control inp" v-model="num">
			<Button type="success" size="small" @click="plus"><Icon type="plus" size="28"></Icon></Button>
		</div>

		<div class="form-group">
			rate
			<div class="icon">
				<!-- <div class="star-five"></div> -->
			</div>
		</div>
		<div class="form-group row">
			split
			<input type="text" style="width: 400px;" v-model.trim="str" @keyup.enter="getArray" maxlength="100">
			<Button type="info" size="small" @click="getArray">查看</Button>
			<br>
			{{strSplit1}}<br>
			{{strSplit2}}<br>
			{{strSplit3}}
		</div>
		<div class="form-group bg-clip">
			background-clip  设置元素的背景（背景图片或颜色）是否延伸到边框下面。
			<p class="border-box">border-box</p>
			<p class="padding-box">padding-box</p>
			<p class="content-box">content-box</p>
			<p class="text">text</p>
		</div>
		<div class="form-group">
			<ul><li></li></ul>
			<p>fff1</p>	
			<p>fff2</p>	
			<p>fff3</p>	
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				copyContent: '我是要复制的内容',
				num: 1,
				step: 3,
				str: null,
				strSplit1: null,
				strSplit2: null,
				strSplit3: null
			}
		},
		created() {
			// this.tryCopy()
		},
		methods: {
			tryCopy() {
				const faker = document.createElement('textarea');
				// faker.style.visibility = 'none';
				faker.style.position = 'fixed';
				faker.style.top = 0;
				faker.style.left = 0;

				// faker.style.zIndex = -9999;
				faker.setAttribute('readonly', '');
				faker.value = this.copyContent;

				document.body.appendChild(faker);

				faker.focus();
				faker.select();
				console.log('in try copy func-----')
				try {
					document.execCommand('copy');
					console.log('拷贝成功!')
				} catch (err) {
					console.log('不支持=====');
				} finally {
					// document.body.removeChild(faker);
				}
			},
			minus() {
				if(this.num > 1){
					this.num-=Number(this.step);
				}
			},
			plus() {
				// if(this.num < 10){
					this.num+=Number(this.step);
				// }
			},
			getArray() {
				if(this.str){
					this.strSplit1 = this.str.split(/;|；/)
					this.strSplit2 = this.strSplit1.map(v => v.trim());//去首尾空格
					this.strSplit3 = this.strSplit2.filter((val) => val);
				}
			}
		}
	}
</script>
<style lang="less" scoped>
	@import url(http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);
	.inp {
		display: inline-block;
		width: 5%;
	}
	.m15-r {
		margin-right: 15px;
	}
	.icon:before {
		content:  '\f005';
		font-family: FontAwesome;
	}
	.star-five {
		width: 0;
		height: 0;
		color: red;
		margin: 50px 0;
		position: relative;
		display: block;
		border-left: 100px solid transparent;
		border-right: 100px solid transparent;
		border-bottom: 100px solid red;
		transform: rotate(35deg);
	}
	.star-five:before {
		width: 0;
		height: 0;
		border-left: 30px solid transparent;
		border-right: 30px solid transparent;
		border-bottom: 80px solid red;
		position: absolute;
		top: -45px;
		left: -65px;
		color: white;
		display: block;
		content: "";
		transform: rotate(-35deg);
	}
	.star-five:after {
		width: 0;
		height: 0;
		display: block;
		position: absolute;
		color: red;
		top: 3px;
		left: -105px;
		border-left: 100px solid transparent;
		border-right: 100px solid transparent;
		border-bottom: 70px solid red;
		content: "";
		transform: rotate(-70deg);
	}
	div.bg-clip{
		p {
			width: 300px;
			border: 4px #9E9E9E;
			border-style: double;
			margin: 1em 0;
			padding: 1.4em;
			background: linear-gradient(60deg, #607D8B, yellow, #607D8B, yellow, #607D8B);
			font: 900 1.2em sans-serif;
			text-decoration: underline;
			&.border-box {
				background-clip: border-box;
			}
			&.padding-box {
				background-clip: padding-box;
			}
			&.content-box {
				background-clip: content-box;
			}
			&.text {
				background-clip: text;
				-webkit-background-clip: text;
				color: rgba(0, 0, 0, .2);
			}
		}
	}
	ul+p {
		color: red;
	}
	ul~p{
		color: green;
	}
</style>
