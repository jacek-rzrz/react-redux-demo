import { counterReducer } from './counterReducer';

describe('counterReducer', () => {

  it('initializes with 0', () => {
    const initialState = counterReducer(undefined, { type: '@INIT' });
    expect(initialState).toBe(0);
  });

  describe('on increment action', () => {
    it('increments the state value', () => {
      const state = counterReducer(5, { type: 'COUNTER_INCREMENT' });
      expect(state).toBe(6);
    });
  });

  describe('on decrement action', () => {
    it('decrements the state value', () => {
      const state = counterReducer(4, { type: 'COUNTER_DECREMENT' });
      expect(state).toBe(3);
    });

    describe('when state is 0', () => {
      it('state remains 0', () => {
          const state = counterReducer(0, { type: 'COUNTER_DECREMENT' });
          expect(state).toBe(0);
      });
    });
  });

});
