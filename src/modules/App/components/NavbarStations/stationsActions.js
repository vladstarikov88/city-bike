import {createAction} from 'redux-actions';
import {
	SET_NETWORK_ID,
} from './navbarConstants';

export const setNetworkId = createAction(
	SET_NETWORK_ID,
	id => id
)
