export const storePayload = actionCreator => (state = null, action) => {
  if(actionCreator.type === action.type) {
    return action.payload;
  }
  return state;
};
