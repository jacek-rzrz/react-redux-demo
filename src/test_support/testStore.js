import { createStore, combineReducers } from 'redux';

export const testStore = storeStructure => {

  const reducer = combineReducers(Object.keys(storeStructure).reduce(
    (cum, key) => {
      const value = storeStructure[key];
      const subreducer = typeof value === 'function' ? value : () => value;
      cum[key] = subreducer;
      return cum;
    },
    {
      _actions: (state=[], action) => [...state, action]
    }
  ));

  const store = createStore(reducer);
  return {
    dispatch: store.dispatch.bind(store),
    getState: store.getState.bind(store),
    subscribe: store.subscribe.bind(store),
    getActions: () => store.getState()._actions
  };
};
