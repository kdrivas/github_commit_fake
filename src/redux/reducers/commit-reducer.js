import { 
	GET_COMMITS,
	SET_CURRENT_PAGE
} from '../actions/commit-action'

// Define your state here
const initialState = {
	commits: {},
	currentPage: 1,
}

export default(state = initialState, {type, payload}) => {
	switch(type) {
		case GET_COMMITS:
			console.log('dentro de reducer payload', payload)
			const commitData = payload
			const newCommit = {...commitData, ...state.commits}
			console.log('dentro del reducer newCommit', newCommit)
			return {
				...state,
				commits: newCommit,
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: payload
			}
		default:
			return state
	}
}
