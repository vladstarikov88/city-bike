import {connect} from 'react-redux';

import App from '../components/App/App';

import {getIsPreloading} from '../selectors/bikes';
import {changeIsPreloading} from '../actions/bikes';

const mapStateToProps = (state) => ({
	isPreloading: getIsPreloading(state)
})

const mapDispatchToProps = (dispatch) => ({
	changePreloading: (value) => dispatch(changeIsPreloading(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
