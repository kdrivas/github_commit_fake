import { 
	GET_BRANCHES,
	SET_CURRENT_BRANCH
} from '../actions/branch-action'

// Define your state here
const initialState = {
	branches: [],
	currentBranch: 0
}

export default(state = initialState, {type, payload}) => {
	switch(type) {
		case GET_BRANCHES:
			return {
				...state,
				branches: payload,
			}
		case SET_CURRENT_BRANCH:
			return {
				...state,
				currentBranch: payload
			}
		
		default:
			return state
	}
}
