import { HomePage } from './test_support/HomePage';
import { Counter } from './counter';

describe('App', () => {

  describe('Home page', () => {

    let homePage;

    beforeEach(() => {
      homePage = new HomePage();
    });

    it('renders an interactable counter', () => {
      let counterValue = homePage.getCounterValue();
      expect(counterValue).toBe('0');

      homePage.clickCounterIncrement();
      homePage.clickCounterIncrement();
      homePage.clickCounterIncrement();
      homePage.clickCounterDecrement();

      counterValue = homePage.getCounterValue();
      expect(counterValue).toBe('2');
    });
  });
});
