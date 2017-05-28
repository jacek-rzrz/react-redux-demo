import { counterReducer } from './counterReducer';

describe('counterReducer', () => {

  it('initializes with {}', () => {
    const initialState = counterReducer(undefined, { type: '@INIT' });
    expect(initialState).toEqual({});
  });

  describe('on `increment` action', () => {
    it('increments the value', () => {
      const state = counterReducer({ a: 5, b: 8 }, { type: 'COUNTER_INCREMENT', payload: 'a' });
      expect(state).toEqual({ a: 6, b: 8 });
    });
  });

  describe('on `decrement` action', () => {
    it('decrements the state value', () => {
      const state = counterReducer({ a: 4, b: 7 }, { type: 'COUNTER_DECREMENT', payload: 'b' });
      expect(state).toEqual({ a: 4, b: 6 });
    });

    describe('when value is 0', () => {
      it('it remains 0', () => {
          const state = counterReducer({ c: 0 }, { type: 'COUNTER_DECREMENT', payload: 'c' });
          expect(state).toEqual({ c: 0 });
      });
    });
  });
});
