import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '.';

const renderCounter = props => (
  <div data-qa={props.id} className="counter">
    <button data-qa="counter-decrement" onClick={props.handleDecrement}>-</button>
    <span data-qa="counter-value">{props.value}</span>
    <button data-qa="counter-increment" onClick={props.handleIncrement}>+</button>
  </div>
);

const mapStateToProps = (state, props) => ({
  value: state.counters[props.id] || 0
});

const mapDispatchToProps = (dispatch, props) => ({
  handleDecrement: () => dispatch(decrement(props.id)),
  handleIncrement: () => dispatch(increment(props.id))
});

export const Counter = connect(mapStateToProps, mapDispatchToProps)(renderCounter)
