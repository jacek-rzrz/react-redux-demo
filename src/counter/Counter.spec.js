import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Counter } from './Counter';
const mockStore = configureStore([]);

describe('Counter', () => {

  let store;

  beforeEach(() => {
    store = mockStore({
      mycounter: 7
    });
  });

  it('renders the value', () => {
    const counter = mount(<Counter id="mycounter" />, { context: { store } });

    const value = counter.find('[data-qa="counter-value"]');
    expect(value).toHaveText('7');
  });

  describe('when there is no value in the store', () => {
    it('renders 0', () => {
      const counter = mount(<Counter id="anothercounter" />, { context: { store } });

      const value = counter.find('[data-qa="counter-value"]');
      expect(value).toHaveText('0');
    });
  });

  describe('when the `increment` button is clicked', () => {
    it('dispatches COUNTER_INCREMENT', () => {
      const counter = mount(<Counter id="mycounter" />, { context: { store } });
      const button = counter.find('[data-qa="counter-increment"]');

      button.simulate('click');

      expect(store.getActions()).toHaveLength(1);
      expect(store.getActions()[0]).toEqual({
        type: 'COUNTER_INCREMENT',
        payload: 'mycounter'
      });
    });
  });

  describe('when the `decrement` button is clicked', () => {
    it('dispatches COUNTER_DECREMENT', () => {
      const counter = mount(<Counter id="mycounter" />, { context: { store } });
      const button = counter.find('[data-qa="counter-decrement"]');

      button.simulate('click');

      expect(store.getActions()).toHaveLength(1);
      expect(store.getActions()[0]).toEqual({
        type: 'COUNTER_DECREMENT',
        payload: 'mycounter'
      });
    });
  });


});
