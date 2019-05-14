import {connect} from 'react-redux';

import Content from '../Content';
import { getStation } from '../selectors/station';

const mapStateToProps = state => ({
  selectedStation: getStation(state)
})

export default connect(mapStateToProps)(Content);
