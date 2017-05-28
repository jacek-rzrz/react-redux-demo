import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { Counter } from '../counter';

export class HomePage {

  constructor() {
    this.screen = mount(<App />);
  }

  getCounter() {
    return this.screen.find(Counter);
  }

  getCounterValue() {
    return this.getCounter()
      .find('[data-qa="counter-value"]')
      .text();
  }

  clickCounterIncrement() {
    return this.getCounter()
      .find('[data-qa="counter-increment"]')
      .simulate('click');
  }

  clickCounterDecrement() {
    return this.getCounter()
      .find('[data-qa="counter-decrement"]')
      .simulate('click');
  }

}
