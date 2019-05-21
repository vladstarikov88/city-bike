import {connect} from 'react-redux';

import NavbarNetworks from './NavbarNetworks';

import {getNetworks} from './networksSelectors';
import {
  setNetworkId,
  requestStations,
} from './networkActions';

const mapStateToProps = state => ({
  networks: getNetworks(state)
})

const mapActionToProps = dispatch => ({
  setNetworkId: id => dispatch(setNetworkId(id)),
  requestStations: id => dispatch(requestStations(id))
})

export default connect(mapStateToProps, mapActionToProps)(NavbarNetworks);
