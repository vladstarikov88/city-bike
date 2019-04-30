import {handleActions} from 'redux-actions';

import {
	REQUEST_BIKES_SUCCESS
} from '../constants/bikesConstants';

const initialState = {
	isPreloading: true,
};

export default handleActions({
	[REQUEST_BIKES_SUCCESS]: state => ({
		isPreloading: false,
	}),
}, initialState);
