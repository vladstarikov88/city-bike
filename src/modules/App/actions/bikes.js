import {createAction} from 'redux-actions';
import {REQUEST_BIKES_SUCCESS} from '../constants/bikesConstants';

export const changeIsPreloading = createAction(
	REQUEST_BIKES_SUCCESS,
	(value) => (value)
);