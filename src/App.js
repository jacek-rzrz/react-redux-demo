import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Layout } from './layout';
import { Counter, counterReducer } from './counter';

const reducer = combineReducers({
  counter: counterReducer
});

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Layout>
          <Counter />
        </Layout>
      </Provider>
    );
  }
}

export default App;
