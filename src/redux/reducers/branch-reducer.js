import { 
	GET_BRANCHES,
	SET_LOADING,
	SET_CURRENT_BRANCH
} from '../actions/branch-action'

// Define your state here
const initialState = {
	loading: false,
	branch: [],
	current_branch: null
}

export default(state = initialState, {type, payload}) => {
	switch(type) {
		case SET_LOADING:
			return {
				...state,
				loading: true
			}
		case GET_BRANCHES:
			return {
				...state,
				branch: payload,
				loading: false
			}
		case SET_CURRENT_BRANCH:
			return {
				...state,
				current_branch: payload
			}
		default:
			return state
	}
}
