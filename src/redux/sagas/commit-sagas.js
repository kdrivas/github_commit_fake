import {
	put,
	call,
	takeEvery,
	takeLatest
} from 'redux-saga/effects'

import {
	GET_COMMITS,
	GET_COMMITS_REQUESTED,
	SET_CURRENT_PAGE,
	SET_CURRENT_PAGE_REQUESTED
} from '../actions/commit-action'

import {
	getAllCommits
} from '../api/commit-api'

import getInfoCommit from './../../utils/transform/getInfoCommit'

function* getCommits({payload}) {
	const data = yield call(getAllCommits, payload.branch, payload.page)
	const commits = getInfoCommit(data, payload.branch, payload.page)
	console.log('dentro de saga', commits)
	yield put({type: GET_COMMITS, payload: commits})
}

function* setCurrentPage({payload}) {
	yield put({type: SET_CURRENT_PAGE, payload})
}

export default function* commitSaga(){
	yield takeEvery(GET_COMMITS_REQUESTED, getCommits)
	yield takeLatest(SET_CURRENT_PAGE_REQUESTED, setCurrentPage)
}