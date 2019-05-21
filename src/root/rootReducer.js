import {combineReducers} from 'redux';

import bikesReducer from '../modules/App/bikesReducers';

const rootReducer = () => combineReducers({
	bikes: bikesReducer,
});

export default rootReducer;
