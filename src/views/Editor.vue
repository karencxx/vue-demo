<template>
	<div id="note-editor">
		<textarea :value="activeNoteText" 
				  @input="editNote" 
				  class="form-control"></textarea>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'

	export default {
		methods: {
			...mapActions(['editNote'])
		},
		computed: {
			...mapGetters(['activeNoteText'])
		}
	}

</script>

<style lang="less" scoped>
	#note-editor {
		margin-left: 34%;
		height: 100%; 
		textarea {
			height: 100%;
			border-color: #fff;
			resize: none;
			outline: none !important;
		}
	}
</style>