import {handleActions} from 'redux-actions';

import {
	REQUEST_NETWORKS_SUCCESS,
	REQUEST_STATIONS_SUCCESS,
	CHANGE_IS_NETWORKS_PRELOADING,
	CHANGE_IS_STATIONS_PRELOADING,
} from '../constants/bikesConstants';

import {
	SET_NETWORK_ID,
} from '../components/NavbarNetworks/constants/navbarConstants'

const initialState = {
	isNetworksPreloading: true,
	isStationsPreloading: true,
	networks: [],
	stations: [],
	// company: {
	// 	name: '',
	// 	city: '',
	// 	country: '',
	// },
	// selectedStation: null,
};

export default handleActions({
	[REQUEST_NETWORKS_SUCCESS]: (state, action) => {
		const {networks} = action.payload;
		
		return ({
			...state,
			networks: networks,
		})
	},
	[REQUEST_STATIONS_SUCCESS]: (state, action) => {
		const {stations} = action.payload;

		return ({
			...state, 
			stations: stations,
		})
	},	
	[SET_NETWORK_ID]: (state, action) => {
		return ({
			...state, 
			selectedStationId: action.payload,
		})
	},
	[CHANGE_IS_NETWORKS_PRELOADING]: (state, action) => ({
		...state,
		isNetworksPreloading: action.payload,
	}),
	[CHANGE_IS_STATIONS_PRELOADING]: (state, action) => ({
		...state,
		isStationsPreloading: action.payload,
	}),
}, initialState);
