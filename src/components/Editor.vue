<template>
	<div id="note-editor">
		<input type="text" @input="editNote" maxlength="20" class="title-inp" :value="activeNoteText">
		<textarea :value="activeNoteContent" 
				  @input="editContent" 
				  class="form-control"></textarea>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'

	export default {
		methods: {
			...mapActions(['editNote', 'editContent'])
		},
		computed: {
			...mapGetters(['activeNoteText', 'activeNoteContent'])
		}
	}

</script>

<style lang="less" scoped>
	#note-editor {
		margin-left: 32%;
		height: 100%; 
		textarea {
			height: 88%;
			border-color: #fff;
			resize: none;
			outline: none !important;
		}
	}
	.title-inp {
		width: 80%;
	    border: none;
	    outline: none;
	    text-align: center;
	    height: 46px;
	    font-size: 18px;
	}

</style>