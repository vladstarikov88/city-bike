import {all, fork} from 'redux-saga/effects';

import bikesSaga from '../modules/App/sagas/bikesSaga';

export default function* rootSaga() {
	yield all([
		fork(bikesSaga),
	]);
}
