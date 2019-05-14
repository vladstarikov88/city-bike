import {connect} from 'react-redux';

import App from '../App';

import {
	getIsNetworksPreloading, 
	getisStationsPreloading,
	getNetworks,
} from '../selectors/bikes';
import {changeisNetworksPreloading, requestNetworks} from '../actions/bikes';

const mapStateToProps = (state) => ({
	networks: getNetworks(state),
	isNetworksPreloading: getIsNetworksPreloading(state),
	isStationsPreloading: getisStationsPreloading(state)
})

const mapDispatchToProps = (dispatch) => ({
	changePreloading: (value) => dispatch(changeisNetworksPreloading(value)),
	requestNetworks: () => dispatch(requestNetworks())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
