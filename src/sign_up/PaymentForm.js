import React from 'react';
import { Routes } from '../constants';
import { SubmitButton } from './SubmitButton';
import { SignUpPage } from './SignUpPage';
import { signUpForm } from './signUpForm';
import { Field } from 'redux-form';
import { Input } from './Input';
import { validateRequiredField } from '../utils';

const digitsOf = value => value.replace(/[^\d]/g, '');

const slice = wordSize => (value='') => {
  if(value.length <= wordSize) {
    return [ value ];
  }
  return [ value.substring(0, wordSize), ...slice(wordSize)(value.substring(wordSize)) ];
};

const normalizeCardNumber = value => digitsOf(value).substring(0, 16);

const formatCardNumber = value => slice(4)(value).join(' ');

const renderPaymentForm = ({handleSubmit, valid}) => (
  <SignUpPage step={3}>
    <form onSubmit={handleSubmit}>
      <Field name="cardNumber" component={Input} label="Card number" normalize={normalizeCardNumber} format={formatCardNumber} validate={validateRequiredField} />
      <Field name="cardExpiryDate" component={Input} label="Expiry date" placeholder="MM/YY" validate={validateRequiredField} />
      <Field name="cardCvv" component={Input} label="CVV" validate={validateRequiredField} />
      <SubmitButton disabled={!valid} />
    </form>
  </SignUpPage>
);

export const PaymentForm = signUpForm({
  key: 'payment',
  nextRoute: Routes.SIGN_UP_SUMMARY
})(renderPaymentForm);
