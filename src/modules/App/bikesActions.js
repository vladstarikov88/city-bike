import {createAction} from 'redux-actions';
import {
	REQUEST_NETWORKS,
	REQUEST_NETWORKS_SUCCESS,
	CHANGE_IS_NETWORKS_PRELOADING,

	REQUEST_STATIONS,
	REQUEST_STATIONS_SUCCESS,
	CHANGE_IS_STATIONS_PRELOADING,
} from './bikesConstants';

export const requestNetworks = createAction(REQUEST_NETWORKS);

export const requestNetworksSucces = createAction( 
	REQUEST_NETWORKS_SUCCESS,
	data => data
);

export const changeisNetworksPreloading = createAction(
	CHANGE_IS_NETWORKS_PRELOADING,
	status => status
)



export const requestStations = createAction(REQUEST_STATIONS);

export const requestStationsSucces = createAction( 
	REQUEST_STATIONS_SUCCESS,
	data => data
);

export const changeisStationsPreloading = createAction(
	CHANGE_IS_STATIONS_PRELOADING,
	status => status
)
