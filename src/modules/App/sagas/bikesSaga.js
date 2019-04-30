import {takeLatest, call} from 'redux-saga/effects';

function* bikesSaga() {
	yield call(console.log('success'));
}

export default function* watchBikes() {
	yield takeLatest('BIKES/REQUEST', bikesSaga)
}
