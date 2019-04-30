import React from 'react';
import ReactDOM from 'react-dom';
import './root/index.css';
import App from './modules/App/containers/AppContainer';
import * as serviceWorker from './root/serviceWorker';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';

import rootSaga from './root/rootSaga';
import rootReducer from './root/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer(),
	composeWithDevTools(
		applyMiddleware(
			sagaMiddleware,
		),
	),
)

sagaMiddleware.run(rootSaga);

ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('root'));

serviceWorker.unregister();
