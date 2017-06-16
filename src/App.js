import React, { Component } from 'react';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import { CountersPage, counterReducer } from './counter';
import { HomePage } from './home';
import { ContactForm, AddressForm, PaymentForm, Summary, reducer as signUpReducer } from './sign_up';
import { Routes } from './constants';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  counters: counterReducer,
  signUp: signUpReducer,
  routing: routerReducer,
  form: formReducer
});

class App extends Component {

  constructor(props) {
    super(props);
    const middleware = [ routerMiddleware(browserHistory) ];
    const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));
    const history = syncHistoryWithStore(browserHistory, store);
    this.state = { store, history };
  }

  render() {
    const { store, history } = this.state;
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/counters" component={CountersPage} />
          <Route path={Routes.SIGN_UP_CONTACT} component={ContactForm} />
          <Route path={Routes.SIGN_UP_ADDRESS} component={AddressForm} />
          <Route path={Routes.SIGN_UP_PAYMENT} component={PaymentForm} />
          <Route path={Routes.SIGN_UP_SUMMARY} component={Summary} />
          <Route path="/" component={HomePage} />
        </Router>
      </Provider>
    );
  }
}

export default App;
