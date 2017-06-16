import React, { Component } from 'react';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { CountersPage, counterReducer } from './counter';
import { HomePage } from './home';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  counters: counterReducer,
  routing: routerReducer
});

const middleware = [ routerMiddleware(browserHistory) ];
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));

const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/counters" component={CountersPage} />
          <Route path="/" component={HomePage} />
        </Router>
      </Provider>
    );
  }
}

export default App;
