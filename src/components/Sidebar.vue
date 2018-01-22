<template>
  <div id="toolbar" :class="{'narrow':!showbar}">
    <!-- <div class="avatar">
        <Avatar icon="person" />
    </div> -->
    <i class="glyphicon glyphicon-tree-deciduous"></i>
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite"
      class="glyphicon"
      :class="activeNote.favorite? 'glyphicon-heart' : 'glyphicon-heart-empty'"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
    <!-- <template v-if="activeNote.favorite">
      <a @click="toggleFavorite"><Icon type="ios-heart" @click="toggleFavorite"></Icon></a>
    </template>
    <template v-else>
      <a @click="toggleFavorite"><Icon type="ios-heart-outline"></Icon></a>
    </template> -->
    <a class="float-chevron" v-on:click="toggleBar" v-if="showbar"><i class="glyphicon glyphicon-chevron-left"></i></a>
    <a class="float-chevron right" v-on:click="toggleBar" v-else><i class="glyphicon glyphicon-chevron-right"></i></a>
    <router-link to="/toolbar">home</router-link>
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
      margin-left: -6%;
  }
	#toolbar {
	    float: left;
	    width: 6%;
	    height: 100%;
	    display: inline-block;
	    padding-top: 3%;
	    background: #30414D;
	    color: #E0EEEE;
      position: relative;
      transition: margin-left 0.8s ease;
      .avatar {
        margin: 18% 0;
      }
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
        &.glyphicon-heart, &.ivu-icon-ios-heart {
          color: #ff3b00;
        }
        &.ivu-icon-ios-heart-outline {
          color: #fff;
        }

      }
      .float-chevron {
        position: absolute;
        right: -12%;
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
            right: -28%;
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