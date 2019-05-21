import {all, fork} from 'redux-saga/effects';

import {
	watchNetworks,
	watchStations,
} from '../modules/App/bikesSagas';

export default function* rootSaga() {
	yield all([
		fork(watchNetworks),
		fork(watchStations),
	]);
}
