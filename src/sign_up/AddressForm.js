import React from 'react';
import { Field } from 'redux-form';
import { Input } from './Input';
import { signUpForm } from './signUpForm';
import { Routes } from '../constants';
import { SubmitButton } from './SubmitButton';
import {SignUpPage} from './SignUpPage';
import { capitalize, validateRequiredField } from '../utils';

const renderAddressForm = ({handleSubmit, valid}) => (
  <SignUpPage step={2}>
    <form onSubmit={handleSubmit}>
      <Field name="street" component={Input} label="Street" validate={validateRequiredField} />
      <Field name="postCode" component={Input} label="Post code" normalize={s => s.toUpperCase()} />
      <Field name="city" component={Input} label="City" normalize={capitalize} />
      <SubmitButton  disabled={!valid} />
    </form>
  </SignUpPage>
);

export const AddressForm = signUpForm({
  key: 'address',
  nextRoute: Routes.SIGN_UP_PAYMENT
})(renderAddressForm);
