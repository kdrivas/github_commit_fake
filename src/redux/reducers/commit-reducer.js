import { 
	GET_COMMITS,
	SET_LOADING
} from '../actions/commit-action'

// Define your state here
const initialState = {
	loading: false,
	commit: {}
}

export default(state = initialState, {type, payload}) => {
	switch(type) {
		case SET_LOADING:
			return {
				...state,
				loading: true
			}
		case GET_COMMITS:
			return {
				...state,
				branch: payload,
				loading: false
			}
		default:
			return state
	}
}
