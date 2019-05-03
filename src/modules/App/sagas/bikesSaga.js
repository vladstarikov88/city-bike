import {takeLatest, call, put} from 'redux-saga/effects';

import {REQUEST_BIKES} from '../constants/bikesConstants';
import {
	changeIsPreloading,
	requestBikesSucces
} from '../actions/bikes';

function* bikesSaga() {
	try {
		const response = yield call(fetch, 'https://api.citybik.es/v2/networks/norisbike-nurnberg');
		const responseBody = yield response.json();

		yield put(requestBikesSucces(responseBody))

	} catch (error) {
		console.log(error)
	} finally {
		yield put(changeIsPreloading(false));
	}
}

export default function* watchBikes() {
	yield takeLatest(REQUEST_BIKES, bikesSaga)
}
