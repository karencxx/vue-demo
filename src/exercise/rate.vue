<template>
	<div>
		<div class="rating">
			<input type="radio" id="star1" name="rating" value="1"/>
			<label for="star1"></label>
			<input type="radio" id="star2" name="rating" value="2"/>
			<label for="star2"></label>
			<input type="radio" id="star3" name="rating" value="3"/>
			<label for="star3"></label>
			<input type="radio" id="star4" name="rating" value="4"/>
			<label for="star4"></label>
			<input type="radio" id="star5" name="rating" value="5"/>
			<label for="star5"></label>
		</div>

		<div class="rating2">
			<input type="radio" id="star15" name="rating2" value="5" v-model="score2"/>
			<label for="star15"></label>
			<input type="radio" id="star14" name="rating2" value="4.5" v-model="score2"/>
			<label for="star14" class="half"></label>

			<input type="radio" id="star13" name="rating2" value="4" v-model="score2"/>
			<label for="star13"></label>
			<input type="radio" id="star12" name="rating2" value="3.5" v-model="score2"/>
			<label for="star12" class="half"></label>

			<input type="radio" id="star11" name="rating2" value="3" v-model="score2"/>
			<label for="star11"></label>
			<input type="radio" id="star10" name="rating2" value="2.5" v-model="score2"/>
			<label for="star10" class="half"></label>

			<input type="radio" id="star9" name="rating2" value="2" v-model="score2"/>
			<label for="star9"></label>
			<input type="radio" id="star8" name="rating2" value="1.5" v-model="score2"/>
			<label for="star8" class="half"></label>

			<input type="radio" id="star7" name="rating2" value="1" v-model="score2"/>
			<label for="star7"></label>
			<input type="radio" id="star6" name="rating2" value="0.5" v-model="score2"/>
			<label for="star6" class="half"></label>
		</div>
		<div class="form-group pull-left">
			评分：<span>{{score2}}</span>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				score2: 0
			}
		}
	}
</script>
<style lang="less" scoped>
	@import url(http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);
	.rating, .rating2 {
		font-size: 0;
		display: table;
	}
	.rating > input, .rating2 > input {
		position: absolute;
		clip: rect(0 0 0 0);/*隐藏*/
	}
	.rating > label, .rating2 > label {
		color: #ddd;
		float: right;
		&:before {
			padding: 5px;
			font-size: 24px;
			line-height: 1em;
			display: inline-block;
			content: '\f005';
			font-family: FontAwesome;
		}
		&.half:before {
			content: '\f089';
			position: absolute;
			padding-right: 0;
		}
	}
	.rating > input:checked ~ label,
		.rating:not(:checked) > label:hover,
		.rating:not(:checked) > lable:hover ~ label {
		color: #FFD700;
	}
	.rating > input:checked ~ label,
		.rating > label:hover ~ input:checked ~ label,
		.rating > input:checked ~ label:hover ~ label {
		opacity: 0.5;
	}
	.rating2 > input:checked ~label,
		.rating2 > label:hover,
		.rating2 > label:hover ~ label {
		color: #FFD700;
	}
</style>