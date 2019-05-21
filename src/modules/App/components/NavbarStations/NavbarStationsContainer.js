import {connect} from 'react-redux';

import NavbarStations from './NavbarStations';

import {getStations} from './stationsSelectors';
import {
  setNetworkId,
} from './stationsActions';

const mapStateToProps = state => ({
  stations: getStations(state)
})

const mapActionToProps = dispatch => ({
  setNetworkId: id => dispatch(setNetworkId(id)),
})

export default connect(mapStateToProps, mapActionToProps)(NavbarStations);
