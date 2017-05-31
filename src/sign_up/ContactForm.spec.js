import React from 'react';
import { Provider } from 'react-redux';
import { push } from 'react-router-redux';
import { testStore, setValue, submit } from '../test_support';
import { mount } from 'enzyme';
import { reducer as formReducer } from 'redux-form'
import { ContactForm } from './ContactForm';

describe('ContactForm', () => {

  let store, form, submitForm;
  let fillIn;

  beforeEach(() => {
    store = testStore({ form: formReducer, signUp: {} });
    form = mount(<Provider store={store}><ContactForm /></Provider>);
    fillIn = (fieldName, value) => setValue(form.find(`[name="${fieldName}"]`), value);
    submitForm = () => submit(form.find('button[type="submit"]'));
  });

  describe('when form is submitted', () => {

    beforeEach(() => {
      fillIn('firstName', 'john');
      fillIn('lastName', 'smith');
      fillIn('email', 'john@example.com');
    });

    it('saves submitted data', () => {
      submitForm();
      expect(store.getActions()).toContainEqual({
        type: 'SAVE_SIGN_UP_DATA',
        payload: {
          contact: {
            firstName: 'John',
            lastName: 'Smith',
            email: 'john@example.com'
          }
        }
      });
    });

    it('navigates to the next form', () => {
      submitForm();
      expect(store.getActions()).toContainEqual(push('/sign-up/address'));
    });

    it('shows error if first name is empty', () => {
      fillIn('firstName', '');
      expect(form.find('[data-qa="firstName-error"]')).toHaveText('required');
    });

    it('shows error if last name is empty', () => {
      fillIn('lastName', '');
      expect(form.find('[data-qa="lastName-error"]')).toHaveText('required');
    });

    it('shows error if email is invalid', () => {
      fillIn('email', 'john!example.com');
      expect(form.find('[data-qa="email-error"]')).toHaveText('not a valid email');
    });
  });

});
