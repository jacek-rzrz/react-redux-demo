import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Layout } from './layout';
import { Counter, counterReducer } from './counter';

const store = createStore(counterReducer,
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
