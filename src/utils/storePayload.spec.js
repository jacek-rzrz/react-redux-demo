import { storePayload, actionCreatorFactory } from '.';

describe('storePayload', () => {

  const actionCreator = actionCreatorFactory('TEST_ACTION');
  const reducer = storePayload(actionCreator);

  it('initializes with null state', () => {
    const initialState = reducer(undefined, { type: 'INIT' });
    expect(initialState).toBeNull();
  });

  describe('when a relevant action is dispatched', () => {

    it('replaces the state', () => {
      const action = actionCreator({ x: 1 });
      const state = reducer({ y: 1 }, action);

      expect(state).toEqual({ x: 1 });
    });

  });

});
