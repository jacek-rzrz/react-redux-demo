import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { HomePage, CountersPage, SignUpPage } from './test_support';
import { Counter } from './counter';

describe('App', () => {
  let screen;
  let homePage;

  beforeEach(() => {
    screen = mount(<App />);
    homePage = new HomePage(screen);
    homePage.open();
  });

  afterEach(() => {
    screen.unmount();
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

  describe('SignUp page', () => {

    let signUpPage;

    beforeEach(() => {
      signUpPage = new SignUpPage(screen);
      homePage.clickSignUpLink();
      expect(signUpPage.isCurrent()).toBe(true);
    });

    describe('when all fields are filled in', () => {

      beforeEach(() => {
        signUpPage.fillInFirstName('Jacek');
        signUpPage.fillInLastName('Rzrz');
        signUpPage.fillInEmail('jacek@email.com');
        signUpPage.clickNext();

        signUpPage.fillInStreet('211 Old Street');
        signUpPage.fillInPostCode('EC1 EC2');
        signUpPage.fillInCity('London');
        signUpPage.clickNext();

        signUpPage.fillInCardNumber('1234 5678 9012 3456');
        signUpPage.fillInCardExpiryDate('03/22');
        signUpPage.fillInCardCvv('123');
        signUpPage.clickNext();
      });

      it('shows confirmation with the specified information', () => {
        const details = signUpPage.getSignUpDetailsConfirmation();

        expect(details.name).toBe('Jacek Rzrz');
        expect(details.email).toBe('jacek@email.com');
        expect(details.address).toBe('211 Old Street, EC1 EC2 London');
        expect(details.payment).toBe('**** **** **** 3456');
      });

      describe.only('when the user goes back to a previous form', () => {

        it('keeps the fields filled in', () => {
          signUpPage.clickPaymentLink();
          expect(signUpPage.getCardNumber()).toBe('1234 5678 9012 3456');
          expect(signUpPage.getCardExpiryDate()).toBe('03/22');
          expect(signUpPage.getCardCvv()).toBe('123');

          signUpPage.clickAddressLink();
          expect(signUpPage.getStreet()).toBe('211 Old Street');
          expect(signUpPage.getPostCode()).toBe('EC1 EC2');
          expect(signUpPage.getCity()).toBe('London');

          signUpPage.clickContactLink();
          expect(signUpPage.getFirstName()).toBe('Jacek');
          expect(signUpPage.getLastName()).toBe('Rzrz');
          expect(signUpPage.getEmail()).toBe('jacek@email.com');
        });
      });
    });

  });
});
