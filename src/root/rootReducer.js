import {combineReducers} from 'redux';

import bikesReducer from '../modules/App/reducer/bikesReducer';

const rootReducer = () => combineReducers({
	bikes: bikesReducer,
});

export default rootReducer;
