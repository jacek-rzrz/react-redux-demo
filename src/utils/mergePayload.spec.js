import { mergePayload, actionCreatorFactory } from '.';

describe('mergePayload', () => {

  const actionCreator = actionCreatorFactory('TEST_ACTION');
  const reducer = mergePayload(actionCreator);

  it('initializes with empty state', () => {
    const initialState = reducer(undefined, { type: 'INIT' });
    expect(initialState).toEqual({});
  });

  describe('when a relevant action is dispatched', () => {

    it('merges in the payload', () => {
      const action = actionCreator({ x: 1 });
      const state = reducer({ y: 1 }, action);

      expect(state).toEqual({ x: 1, y: 1 });
    });

  });

});
