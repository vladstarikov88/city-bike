import {connect} from 'react-redux';

import NavbarStations from '../NavbarStations';

import {getStations} from '../selectors/stations';
import {
  setNetworkId,
} from '../actions/stations';

const mapStateToProps = state => ({
  stations: getStations(state)
})

const mapActionToProps = dispatch => ({
  setNetworkId: id => dispatch(setNetworkId(id)),
})

export default connect(mapStateToProps, mapActionToProps)(NavbarStations);
