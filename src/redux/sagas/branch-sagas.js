import {
	put,
	call,
	takeEvery,
	takeLatest
} from 'redux-saga/effects'

import {
	GET_BRANCHES,
	GET_BRANCHES_REQUESTED,
	SET_CURRENT_BRANCH,
	SET_CURRENT_BRANCH_REQUESTED
} from '../actions/branch-action'

import {
	getAllBranches
} from '../api/branch-api'

function* getBranches() {
	const data = yield call(getAllBranches)
	yield put({type: GET_BRANCHES, payload: data})
}

function* setCurrentBranchIndex({ payload }) {
	yield put({type: SET_CURRENT_BRANCH, payload})
}

export default function* branchSaga(){
	yield takeEvery(GET_BRANCHES_REQUESTED, getBranches)
	yield takeLatest(SET_CURRENT_BRANCH_REQUESTED, setCurrentBranchIndex)
}