import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { HomePage, CountersPage } from './test_support';
import { Counter } from './counter';

describe('App', () => {
  let screen;
  let homePage;

  beforeEach(() => {
    screen = mount(<App />);
    homePage = new HomePage(screen);
  });

  describe('Counters page', () => {

    let countersPage;

    beforeEach(() => {
      countersPage = new CountersPage(screen);
      homePage.clickCountersLink();
      expect(countersPage.isCurrent()).toBe(true);
    });

    it('renders interactable counters', () => {
      expect(countersPage.getCounters()).toHaveLength(6);
      expect(countersPage.getCounterValue('counter-3')).toBe('0');

      countersPage.clickCounterIncrement('counter-3');
      countersPage.clickCounterIncrement('counter-4');
      countersPage.clickCounterIncrement('counter-3');
      countersPage.clickCounterIncrement('counter-3');
      countersPage.clickCounterDecrement('counter-3');

      expect(countersPage.getCounterValue('counter-3')).toBe('2');
      expect(countersPage.getCounterValue('counter-4')).toBe('1');
    });
  });
});
