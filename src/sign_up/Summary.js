import React from 'react';
import { connect } from 'react-redux';
import {SignUpPage} from './SignUpPage';
import {Table} from "../components/Table";

const paymentText = payment => {
  const cardNumber = payment.cardNumber;
  const last4Digits = cardNumber.substring(cardNumber.length-4);
  return `**** **** **** ${last4Digits}`;
};

const renderSummary = ({contact, address, payment}) => (
  <SignUpPage step={4}>
    <h2>Summary</h2>
    <div className="summary">

      <Table columns={['field', 'value']} rows={[ ['name', contact.firstName +' ' + contact.lastName], ['email', contact.email], ['address', address.street +' ' + address.postCode +' ' + address.city], ['payment', paymentText(payment) ] ]}>

      </Table>
      <div>
        <span>Your name:</span>
        <span data-qa="name">{contact.firstName} {contact.lastName}</span>
      </div>
      <div>
        <span>Email</span>
        <span data-qa="email">{contact.email}</span>
      </div>
      <div>
        <span>Address</span>
        <span data-qa="address">{address.street}, {address.postCode} {address.city}</span>
      </div>
      <div>
        <span>Payment</span>
        <span data-qa="payment">{paymentText(payment)}</span>
      </div>
    </div>
  </SignUpPage>
);

const mapStateToProps = state => ({ ...state.signUp });

export const Summary = connect(mapStateToProps)(renderSummary);
