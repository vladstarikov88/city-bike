import {connect} from 'react-redux';

import Navbar from '../Navbar';

import {getStations} from '../selectors/stations';

const mapStateToProps = (state) => ({
  stations: getStations(state)
})

export default connect(mapStateToProps)(Navbar);
