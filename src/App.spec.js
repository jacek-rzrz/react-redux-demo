import { HomePage } from './test_support/HomePage';
import { Counter } from './counter';

describe('App', () => {

  describe('Home page', () => {

    let homePage;

    beforeEach(() => {
      homePage = new HomePage();
    });

    it('renders interactable counters', () => {
      expect(homePage.getCounters()).toHaveLength(6);
      expect(homePage.getCounterValue('counter-3')).toBe('0');

      homePage.clickCounterIncrement('counter-3');
      homePage.clickCounterIncrement('counter-4');
      homePage.clickCounterIncrement('counter-3');
      homePage.clickCounterIncrement('counter-3');
      homePage.clickCounterDecrement('counter-3');

      expect(homePage.getCounterValue('counter-3')).toBe('2');
      expect(homePage.getCounterValue('counter-4')).toBe('1');
    });
  });
});
