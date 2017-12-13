<template>
	<div class="content-wrapper">
		<toolbar></toolbar>
    	<notes-list></notes-list>
    	<editor></editor>
	</div>
</template>
<script>
	import Toolbar from '@/views/Toolbar'
	import NotesList from '@/views/NotesList'
	import Editor from '@/views/Editor'

	export default {
		components: {
			Toolbar,
			NotesList,
			Editor
		},
		data(){
			return {

			}
		}
	}
</script>
<style lang="less" scoped>
	.content-wrapper {
		height: 100%;
	}
</style>