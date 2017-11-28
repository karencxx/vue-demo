function makeAction(type, ...args) {
	return ({ commit }, ...args) => commit(type, ...args)
}

export const addNote = ({ commit }) => {
	commit('ADD_NOTE')
}

export const editNote = ({ commit }, e) => {
	commit('EDIT_NOTE', e.target.value)
}

export const deleteNote = makeAction('DELETE_NOTE')

export const updateActiveNote = ({ commit }, note) => {
	commit('SET_ACTIVE_NOTE', note)
}

export const toggleFavorite = makeAction('TOGGLE_FAVORITE')