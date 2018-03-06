<template>
	<div class="content-wrapper">
		<sidebar></sidebar>
    	<notes-list></notes-list>
    	<editor></editor>
	</div>
</template>
<script>
	import Sidebar from '@/components/Sidebar'
	import NotesList from '@/components/NotesList'
	import Editor from '@/components/Editor'

	export default {
		components: {
			Sidebar,
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
	.h1, .h2, .h3, h1, h2, h3 {
		margin-top: 20px;
		margin-bottom: 10px;
	}
</style>