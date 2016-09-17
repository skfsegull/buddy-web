import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import loginReducer from './reducers/loginReducer';

import Main from './layout/Main';
import Login from './pages/Login';

const store = createStore(
  combineReducers({
    loginReducer,
    routing: routerReducer
  })
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(<Provider store={store}>
	<Router history={history}>
      <Route path="/" component={Main}>
        <Route path="login" component={Login}/>
      </Route>
    </Router>
	</Provider>,
  document.getElementById('root')
);
