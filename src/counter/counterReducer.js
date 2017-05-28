import { increment, decrement } from '.';

export const counterReducer = (state=0, action) => {
  switch (action.type) {
    case increment.type:
      return state + 1;
    case decrement.type:
      return Math.max(0, state - 1);
    default:
      return state;
  }
};
