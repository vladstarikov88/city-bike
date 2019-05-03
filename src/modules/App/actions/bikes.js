import {createAction} from 'redux-actions';
import {
	REQUEST_BIKES,
	REQUEST_BIKES_SUCCESS,
	CHANGE_IS_PRELOADING,
} from '../constants/bikesConstants';

export const requestBikesSucces = createAction( 
	REQUEST_BIKES_SUCCESS,
	data => data
);

export const changeIsPreloading = createAction(
	CHANGE_IS_PRELOADING,
	status => status
)

export const requestBikes = createAction(REQUEST_BIKES);
