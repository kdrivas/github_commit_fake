import { spawn } from 'redux-saga/effects'

import branchSaga from './branch-sagas'
import commitSaga from './commit-sagas'

export default function* rootSaga() {
	yield spawn(branchSaga)
	yield spawn(commitSaga)
}