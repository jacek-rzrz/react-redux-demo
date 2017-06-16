import React from 'react';
import { mount } from 'enzyme';
import { testStore } from '../test_support';
import { Summary } from './Summary';

describe('Summary', () => {

  it('shows the data provided by user', () => {
    const store = testStore({
      signUp: {
        contact: {
          firstName: 'Dave',
          lastName: 'Johnson',
          email: 'dave@example.com',
        },
        address: {
          street: '211 Old Street',
          postCode: 'EC2 2CE',
          city: 'London',
        },
        payment: {
          cardNumber: '1234 5678 9012 3456',
          cardExpiryDate: '06/16',
          cardCvv: '012',
        },
      }
    });
    const confirmation = mount(<Summary />, { context: { store }});

    const value = name => confirmation.find(`[data-qa="${name}"]`);
    expect(value('name')).toHaveText('Dave Johnson');
    expect(value('email')).toHaveText('dave@example.com');
    expect(value('address')).toHaveText('211 Old Street, EC2 2CE London');
    expect(value('payment')).toHaveText('**** **** **** 3456');
  });
});
