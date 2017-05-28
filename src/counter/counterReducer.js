import {
  increment,
  decrement,
} from '.';

export const counterReducer = (state={}, action) => {

  const add = delta => {
    const key = action.payload;
    const value = state[key] || 0;
    const newValue = Math.max(0, value + delta);
    return {
      ...state,
      [key]: newValue
    };
  };

  switch (action.type) {
    case increment.type:
      return add(1);
    case decrement.type:
      return add(-1);
    default:
      return state;
  }
};
