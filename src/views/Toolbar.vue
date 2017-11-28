<template>
  <div id="toolbar" :class="{'narrow':!showbar}">
    <i class="glyphicon glyphicon-grain"></i>
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite"
      class="glyphicon"
      :class="activeNote.favorite? 'glyphicon-heart' : 'glyphicon-heart-empty'"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>

    <a class="float-chevron" v-on:click="toggleBar" v-if="showbar"><i class="glyphicon glyphicon-chevron-left"></i></a>
    <a class="float-chevron right" v-on:click="toggleBar" v-else><i class="glyphicon glyphicon-chevron-right"></i></a>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data(){
    return {
      showbar: true
    }
  },
  methods: {
  	...mapActions(['addNote', 'deleteNote', 'toggleFavorite']),
    toggleBar(){
      this.showbar = !this.showbar
    }
  },
  computed: {
  	...mapGetters(['activeNote'])
  }
}
</script>

<style lang="less" scoped>
  .narrow {
      margin-left: -8%;
      transition: margin-left 0.8s ease;
  }
	#toolbar {
	    float: left;
	    width: 8%;
	    height: 100%;
	    display: inline-block;
	    padding-top: 6%;
	    background: #30414D;
	    color: #E0EEEE;
      position: relative;
	    i {
	    	display: block;
	    	height: 40px;
	    	font-size: 32px;
	    	text-align: center;
	    	margin-bottom: 20%;
	    	cursor: pointer;
  			opacity: 0.7;
  			transition: opacity 0.5s ease;
  			&:hover {
  				opacity: 1;
  			}
        &.glyphicon-heart {
          color: #ff3b00;
        }

      }
      .float-chevron {
        position: absolute;
        right: -6%;
        top: 48%;
        opacity: .6;
        border: 1px solid #d1dbe5;
        border-radius: 4px;
        background-color: #fff;
        overflow: hidden;
        color: #000;
        z-index: 1024;
        width: 25px;
        &.right {
            right: -24%;
          }
        &:hover {
          text-decoration: none;
          opacity: .8;
        }
        i {
          font-size: 14px;
          height: 40px;
          line-height: 40px;
        }
      }
	}
</style>