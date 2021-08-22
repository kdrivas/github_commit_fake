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
			const commitData = payload
			const newCommit = {...commitData, ...state.commits}
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
