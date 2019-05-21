import {connect} from 'react-redux';

import App from './App';

import {
	getIsNetworksPreloading, 
	getNetworks,
	hasStations,
	hasStationId,
} from './bikesSelectors';
import {changeisNetworksPreloading, requestNetworks} from './bikesActions';

const mapStateToProps = (state) => ({
	networks: getNetworks(state),
	hasStations: hasStations(state),
	hasStationId: hasStationId(state),
	isNetworksPreloading: getIsNetworksPreloading(state),
})

const mapDispatchToProps = (dispatch) => ({
	changePreloading: (value) => dispatch(changeisNetworksPreloading(value)),
	requestNetworks: () => dispatch(requestNetworks())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
