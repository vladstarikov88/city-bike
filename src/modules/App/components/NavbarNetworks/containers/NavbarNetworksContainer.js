import {connect} from 'react-redux';

import NavbarNetworks from '../NavbarNetworks';

import {getNetworks} from '../selectors/networks';
import {
  setNetworkId,
  requestStations,
} from '../actions/network';

const mapStateToProps = state => ({
  networks: getNetworks(state)
})

const mapActionToProps = dispatch => ({
  setNetworkId: id => dispatch(setNetworkId(id)),
  requestStations: id => dispatch(requestStations(id))
})

export default connect(mapStateToProps, mapActionToProps)(NavbarNetworks);
