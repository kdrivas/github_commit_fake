import {
	put,
	call,
	takeEvery
} from 'redux-saga/effects'

import {
	SET_LOADING,
	GET_BRANCHES,
	GET_BRANCHES_REQUESTED
} from '../actions/branch-action'

import {
	getAllBranches
} from '../api/branch-api'

function* getBranches({payload}) {
	yield put({type: SET_LOADING})
	const data = yield call(getAllBranches, payload)
	yield put({type: GET_BRANCHES, payload: data})
}

export default function* branchSaga(){
	yield takeEvery(GET_BRANCHES_REQUESTED, getBranches)
}