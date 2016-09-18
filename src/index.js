import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Router, Route, browserHistory} from 'react-router'
import {routerReducer, routerMiddleware} from 'react-router-redux'

import logger from './utils/logger';
import loginReducer from './reducers/loginReducer';

import Main from './layout/Main';
import Global from './layout/Global';
import Clean from './layout/Clean';
import Login from './pages/Login';
import Profile from './pages/Profile';

const middleware = routerMiddleware(browserHistory);

const store = createStore(combineReducers({
		loginReducer,
		routing: routerReducer
	}), applyMiddleware(logger, middleware)
);

ReactDOM.render(<Provider store={store}>
		<Router history={browserHistory }>
			<Route component={ Global }>
				<Route component={Clean}>
					<Route path="login" component={Login} />
				</Route>
				<Route component={Main}>
					<Route path="*" component={Profile} />
				</Route>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
