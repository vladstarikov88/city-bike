import {connect} from 'react-redux';

import App from '../components/App/App';

import {getIsPreloading, getStations} from '../selectors/bikes';
import {changeIsPreloading, requestBikes} from '../actions/bikes';

const mapStateToProps = (state) => ({
	stations: getStations(state),
	isPreloading: getIsPreloading(state)
})

const mapDispatchToProps = (dispatch) => ({
	changePreloading: (value) => dispatch(changeIsPreloading(value)),
	requestBikes: () => dispatch(requestBikes())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
