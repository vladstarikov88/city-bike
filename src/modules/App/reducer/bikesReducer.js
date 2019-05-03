import {handleActions} from 'redux-actions';

import {
	REQUEST_BIKES_SUCCESS,
	CHANGE_IS_PRELOADING,
} from '../constants/bikesConstants';

const initialState = {
	isPreloading: true,
	stations: [],
	company: {
		name: '',
		city: '',
		country: '',
	}
};

export default handleActions({
	[REQUEST_BIKES_SUCCESS]: function(state, action){
		const {stations, company, location} = action.payload.network;
		
		return ({
			...state,
			stations: stations,
			company: {
				name: company[0],
				city: location.city,
				country: location.country,
			},
		})
	},
	[CHANGE_IS_PRELOADING]: (state, action) => ({
		...state,
		isPreloading: action.payload,
	}),
}, initialState);
