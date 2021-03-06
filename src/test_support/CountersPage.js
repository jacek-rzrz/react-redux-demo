import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { Counter } from '../counter';

export class CountersPage {

  constructor(screen) {
    this.screen = screen;
  }

  isCurrent() {
    return this.screen.find(Counter).exists();
  }

  getCounters() {
    return this.screen.find(Counter);
  }

  getCounter(dataQa) {
    return this.screen.find(`[data-qa="${dataQa}"]`);
  }

  getCounterValue(dataQa) {
    return this.getCounter(dataQa)
      .find('[data-qa="counter-value"]')
      .text();
  }

  clickCounterIncrement(dataQa) {
    return this.getCounter(dataQa)
      .find('[data-qa="counter-increment"]')
      .simulate('click');
  }

  clickCounterDecrement(dataQa) {
    return this.getCounter(dataQa)
      .find('[data-qa="counter-decrement"]')
      .simulate('click');
  }

}
