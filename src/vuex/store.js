import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as format from '../utils/dateFormat'

Vue.use(Vuex)

//the root, initial state object
const state = {
	notes: [],
	activeNote: {},
	count: 0
}

//define the possible mutations that can be applied to our state
const mutations = {
	ADD_NOTE(state){
		const newNote = {
			text: 'Get a new note!',
			favorite: false,
			createTime: format.formatNow()
		}
		state.notes.push(newNote)
		state.activeNote = newNote
	},

	EDIT_NOTE(state,text){
		state.activeNote.text = text
	},

	EDIT_CONTENT(state, text){
		state.activeNote.content = text
		console.log(text, '======')
		console.log(state.activeNote.content.length)
	},

	DELETE_NOTE(state){
		state.notes = state.notes.filter(note => note != state.activeNote)
		if(state.notes[0]){
			state.activeNote = state.notes[0]
		}
	},

	TOGGLE_FAVORITE(state){
		state.activeNote.favorite = !state.activeNote.favorite
	},

	SET_ACTIVE_NOTE(state,note){
		state.activeNote = note
	}

}

const getters = {
  notes: state => state.notes,
  activeNote: state => state.activeNote,
  activeNoteText: state => state.activeNote.text,
  activeNoteContent: state => state.activeNote.content,
  createTime: state => state.activeNote.createTime,
  count: state => state.notes.length
}

//create the Vuex instance by combining the state and mutations objects
//then export the Vuex store for use by our components
export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})