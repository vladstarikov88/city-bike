import {createAction} from 'redux-actions';
import {
	SET_NETWORK_ID,
	REQUEST_STATIONS,
} from '../constants/navbarConstants';

export const setNetworkId = createAction(
	SET_NETWORK_ID,
	id => id
)

export const requestStations = createAction(
	REQUEST_STATIONS,
	id => id
);
