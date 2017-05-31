import React from 'react';
import { Link } from 'react-router';
import {Layout} from '../layout';
import { Routes } from '../constants';

const ProgressItem = ({children, link, spanClass}) =>
  link ?
    <Link to={link}>{children}</Link> :
    <span className={spanClass}>{children}</span>;

export const SignUpPage = ({children, step}) => {
  const link = (stepIndex, path) => stepIndex < step ? { link: path } : { spanClass: stepIndex === step ? 'current' : '' };
  return (
    <Layout>
      <div className="content-sign-up">
        <h1>Sign up</h1>
        <div className="sign-up-progress">
          <ProgressItem {...link(1, Routes.SIGN_UP_CONTACT)}>1. Contact</ProgressItem>
          <ProgressItem {...link(2, Routes.SIGN_UP_ADDRESS)}>2. Address</ProgressItem>
          <ProgressItem {...link(3, Routes.SIGN_UP_PAYMENT)}>3. Payment</ProgressItem>
          <ProgressItem {...link(4, Routes.SIGN_UP_SUMMARY)}>4. Summary</ProgressItem>
        </div>
        {children}
      </div>
    </Layout>
  );
};
