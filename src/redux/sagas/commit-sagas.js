import {
	put,
	call,
	takeEvery
} from 'redux-saga/effects'

import {
	SET_LOADING,
	GET_COMMITS,
	GET_COMMITS_REQUESTED,

} from '../actions/commit-action'

import {
	getAllCommits
} from '../api/commit-api'

function* getCommits() {
	yield put({type: SET_LOADING})
	const data = yield call(getAllCommits)
	yield put({type: GET_COMMITS, payload: data})
}

export default function* commitSaga(){
	yield takeEvery(GET_COMMITS_REQUESTED, getCommits)
}