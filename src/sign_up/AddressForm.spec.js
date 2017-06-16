import React from 'react';
import { Provider } from 'react-redux';
import { push } from 'react-router-redux';
import { testStore, setValue, submit } from '../test_support';
import { mount } from 'enzyme';
import { reducer as formReducer } from 'redux-form'
import { AddressForm } from './AddressForm';

describe('AddressForm', () => {

  let store, form, submitForm;
  let fillIn;

  beforeEach(() => {
    store = testStore({ form: formReducer, signUp: {} });
    form = mount(<Provider store={store}><AddressForm /></Provider>);

    fillIn = (fieldName, value) => setValue(form.find(`[name="${fieldName}"]`), value);
    submitForm = () => submit(form.find('button[type="submit"]'));
  });

  describe('when form is submitted', () => {

    beforeEach(() => {
      fillIn('street', '211 Old Street');
      fillIn('postCode', 'ec1 ec2');
      fillIn('city', 'london');
    });

    it('saves submitted data', () => {
      submitForm();
      expect(store.getActions()).toContainEqual({
        type: 'SAVE_SIGN_UP_DATA',
        payload: {
          address: {
            street: '211 Old Street',
            postCode: 'EC1 EC2',
            city: 'London'
          }
        }
      });
    });

    it('navigates to the next form', () => {
      submitForm();
      expect(store.getActions()).toContainEqual(push('/sign-up/payment'));
    });

    it('shows error if street is missing', () => {
      fillIn('street', '');
      expect(form.find('[data-qa="street-error"]')).toHaveText('required');
    });
  });
});
