import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxThink from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Signin from './components/auth/signin';
import SignOut from './components/auth/signout';
import SignUp from './components/auth/signup';
import Feature from './components/feature';
import RequireAuth from './components/auth/require_auth';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThink)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
// If there is a token, consider rge user signed in
if (token) {
  //we need to update application state
  store.dispatch({ type: AUTH_USER });
}


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="signin" component={Signin} />
          <Route path="signout" component={SignOut} />
          <Route path="signup" component={SignUp} />
          <Route path="feature" component={RequireAuth(Feature)} />
        </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
