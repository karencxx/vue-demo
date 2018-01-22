<template>
	<div id="notes-list">
		<div id="list-header">
			<h2> Notes | karen  <span class="count-header">{{notes.length}}篇</span></h2>
			<div>{{activeNoteContent}}</div>
			<div class="btn-group btn-group-justified" role="group">
				<!-- All Notes button -->
				<div class="btn-group" role="group">
					<button class="btn btn-default" 
							type="button" 
							@click="show = 'all'"
							:class="{active: show === 'all'}">All Notes</button>
				</div>
				<!-- Favorites Button -->
				<div class="btn-group" role="group">
					<button class="btn btn-default"
							type="button"
							@click="show = 'favorites'"
							:class="{active: show === 'favorites'}">Favorites</button>
				</div>
			</div>
		</div>

		<!-- render notes in a list -->
		<div class="container">
			<div class="list-group">
				<a v-for="note in filteredNotes"
				   class="list-group-item" 
				   href="#"
				   :class="{active: activeNote === note}"
				   v-on:click="updateActiveNote(note)">
					<h4 class="list-group=item-heading">{{note.text.trim().substring(0, 30)}}</h4>   
					<h6 class="">于{{createTime}}创建</h6>	
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'

export default {
	data() {
		return {
			show: 'all'
		}
	},
	computed: {
		...mapGetters(['notes', 'activeNote', 'createTime', 'count', 'activeNoteContent']),
		filteredNotes() {
			if(this.show === 'all') {
				return this.notes
			}else if(this.show === 'favorites') {
				return this.notes.filter(note => note.favorite)
			}
		}
	},
	methods: {
		...mapActions(['updateActiveNote'])
	}
}

</script>

<style lang="less" scoped>
	#notes-list {
		display: inline-block;
		width: 26%;
		height: 100%;
    	float: left;
    	background-color: #F5F5F5;
		#list-header {
			height: 100px;
		}
    	.container {
    		width: 100%;
    		/*height: calc(100% - 100px);*/
    		/*max-height: calc(100% - 100px);*/
    		overflow: auto;
    		padding: 0;
    	}
	}

	.btn-group-justified {
		width: 80%;
		margin: 0 auto;
	}
	
	.list-group {
		overflow-y: auto;
		max-height: 510px;
		margin-bottom: 0;
	}
	
	.list-group-item {
		border-radius: 0;
		border: none;
		padding: 4px 6px;
		min-height: 47px;
		border-bottom: 2px solid #f5f5f5;
	}

	button.btn {
		outline: none !important;
	}

	.count-header {
		margin-left: 42px;
		font-size: 18px;
	}

	.h1, .h2, .h3, h1, h2, h3 {
		margin-top: 20px;
		margin-bottom: 10px;
	}

</style>