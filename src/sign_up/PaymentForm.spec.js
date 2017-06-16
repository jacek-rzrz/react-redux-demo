import React from 'react';
import { Provider } from 'react-redux';
import { push } from 'react-router-redux';
import { testStore, setValue, submit } from '../test_support';
import { mount } from 'enzyme';
import { reducer as formReducer } from 'redux-form'
import { PaymentForm } from './PaymentForm';

describe('PaymentForm', () => {

  let store;

  describe('when form is submitted', () => {

    beforeEach(() => {
      store = testStore({ form: formReducer, signUp: { payment: {} } });
      const form = mount(<Provider store={store}><PaymentForm /></Provider>);

      const fillIn = (fieldName, value) => setValue(form.find(`[name="${fieldName}"]`), value);
      fillIn('cardNumber', '12 3456 7890 123 456');
      fillIn('cardExpiryDate', '06/16');
      fillIn('cardCvv', '123');
      submit(form.find('button[type="submit"]'));
    });

    it('saves submitted data', () => {
      expect(store.getActions()).toContainEqual({
        type: 'SAVE_SIGN_UP_DATA',
        payload: {
          payment: {
            cardNumber: '1234567890123456',
            cardExpiryDate: '06/16',
            cardCvv: '123'
          }
        }
      });
    });

    it('navigates to the next form', () => {
      expect(store.getActions()).toContainEqual(push('/sign-up/summary'));
    });
  });
});
