import React from 'react';
import { signUpForm } from './signUpForm';
import { SignUpPage } from './SignUpPage';
import { Routes } from '../constants';
import { SubmitButton } from './SubmitButton';
import { Field } from 'redux-form';
import { Input } from './Input';
import validator from 'validator';
import { capitalize, validateRequiredField } from '../utils';

const validateEmail = value => {
  if(!validator.isEmail(value || '')) {
    return 'not a valid email';
  }
};

const renderContactForm = ({handleSubmit, valid}) => (
  <SignUpPage step={1}>
    <form onSubmit={handleSubmit}>
      <Field name="firstName" component={Input} label="First name" validate={validateRequiredField} normalize={capitalize} />
      <Field name="lastName" component={Input} label="Last name" validate={validateRequiredField} normalize={capitalize} />
      <Field name="email" component={Input} label="Email" validate={validateEmail} />
      <SubmitButton disabled={!valid} />
    </form>
  </SignUpPage>
);

export const ContactForm = signUpForm({
  key: 'contact',
  nextRoute: Routes.SIGN_UP_ADDRESS
})(renderContactForm);
