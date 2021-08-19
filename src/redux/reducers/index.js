import { combineReducers } from "redux";
import branch from './branch-reducer';
import commit from './commit-reducer';

export default combineReducers({
	branch,
	commit
})