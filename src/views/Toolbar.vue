<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite"
      class="glyphicon"
      :class="activeNote.favorite? 'glyphicon-star' : 'glyphicon-star-empty'"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
  	...mapActions(['addNote', 'deleteNote', 'toggleFavorite'])
  },
  computed: {
  	...mapGetters(['activeNote'])
  }
}
</script>

<style lang="less" scoped>
	#toolbar {
	    float: left;
	    width: 8%;
	    height: 100%;
	    display: inline-block;
	    padding-top: 6%;
	    background: #30414D;
	    color: #E0EEEE;
	    i {
	    	display: block;
	    	height: 40px;
	    	font-size: 32px;
	    	text-align: center;
	    	margin-bottom: 20%;
	    	cursor: pointer;
  			opacity: 0.8;
  			transition: opacity 0.5s ease;
  			&:hover {
  				opacity: 1;
  			}
        &.glyphicon-star {
          color: #ffd400;
        }
	    }
	}
</style>