import {takeLatest, call, put} from 'redux-saga/effects';

import {
	REQUEST_NETWORKS,
	// REQUEST_STATIONS,
} from '../constants/bikesConstants';

import {
	changeisNetworksPreloading,
	requestNetworksSucces,
	changeisStationsPreloading,
	requestStationsSucces
} from '../actions/bikes';

import {
	REQUEST_STATIONS
} from '../components/NavbarNetworks/constants/navbarConstants'

function* networksSaga() {
	try {
		const response = yield call(fetch, 'https://api.citybik.es/v2/networks/');
		const responseBody = yield response.json();

		yield put(requestNetworksSucces(responseBody))
	} catch (error) {
		console.log(error)
	} finally {
		yield put(changeisNetworksPreloading(false));
	}
}

function* stationsSaga(data) {
	try {
		const response = yield call(fetch, 
			`https://api.citybik.es/v2/networks/${data.payload}`
		);
		const responseBody = yield response.json();
		const stations = yield responseBody.network;

		yield put(requestStationsSucces(stations))
	} catch (error) {
		console.log(error)
	} finally {
		yield put(changeisStationsPreloading(false));
	}
}

export function* watchNetworks() {
	yield takeLatest(REQUEST_NETWORKS, networksSaga)
}

export function* watchStations() {
	yield takeLatest(REQUEST_STATIONS, stationsSaga)
}
