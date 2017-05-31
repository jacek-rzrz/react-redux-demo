export const mergePayload = actionCreator => (state = {}, action) => {
  if(actionCreator.type === action.type) {
    return { ...state, ...action.payload };
  }
  return state;
};
