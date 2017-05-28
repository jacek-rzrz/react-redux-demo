import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '.';

const renderCounter = props => (
  <div className="counter">
    <button data-qa="counter-decrement" onClick={props.handleDecrement}>-</button>
    <span data-qa="counter-value">{props.value}</span>
    <button data-qa="counter-increment" onClick={props.handleIncrement}>+</button>
  </div>
);

const mapStateToProps = state => ({
  value: state.counter
});

const mapDispatchToProps = dispatch => ({
  handleDecrement: () => dispatch(decrement()),
  handleIncrement: () => dispatch(increment())
});

export const Counter = connect(mapStateToProps, mapDispatchToProps)(renderCounter)
