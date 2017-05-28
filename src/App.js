import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Layout } from './layout';
import { Counter, counterReducer } from './counter';

const reducer = combineReducers({
  counters: counterReducer
});

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Layout>
          <Counter id="counter-1" />
          <Counter id="counter-2" />
          <Counter id="counter-3" />
          <Counter id="counter-4" />
          <Counter id="counter-5" />
          <Counter id="counter-6" />
        </Layout>
      </Provider>
    );
  }
}

export default App;
