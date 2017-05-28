import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Counter } from './Counter';
const mockStore = configureStore([]);

describe('Counter', () => {

  let store;

  beforeEach(() => {
    store = mockStore({
      counter: 7
    });
  });

  it('renders the value', () => {
    const counter = mount(<Counter />, { context: { store } });

    const value = counter.find('[data-qa="counter-value"]');
    expect(value).toHaveText('7');
  });

  describe('when the `increment` button is clicked', () => {
    it('dispatches COUNTER_INCREMENT', () => {
      const counter = mount(<Counter />, { context: { store } });
      const button = counter.find('[data-qa="counter-increment"]');

      button.simulate('click');

      expect(store.getActions()).toHaveLength(1);
      expect(store.getActions()[0].type).toBe('COUNTER_INCREMENT');
    });
  });

  describe('when the `decrement` button is clicked', () => {
    it('dispatches COUNTER_DECREMENT', () => {
      const counter = mount(<Counter />, { context: { store } });
      const button = counter.find('[data-qa="counter-decrement"]');

      button.simulate('click');

      expect(store.getActions()).toHaveLength(1);
      expect(store.getActions()[0].type).toBe('COUNTER_DECREMENT');
    });
  });


});
