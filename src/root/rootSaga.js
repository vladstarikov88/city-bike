import {all, fork} from 'redux-saga/effects';

import {
	watchNetworks,
	watchStations,
} from '../modules/App/sagas/bikesSaga';

export default function* rootSaga() {
	yield all([
		fork(watchNetworks),
		fork(watchStations),
	]);
}
