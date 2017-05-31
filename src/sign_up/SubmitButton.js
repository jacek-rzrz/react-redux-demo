import React from 'react';
import PropTypes from 'prop-types';

export const SubmitButton = ({disabled}) => (
  <div className="form-item">
    <div />
    <button type="submit" disabled={disabled} data-qa="sign-up-next">
      next
    </button>
  </div>
);

SubmitButton.propTypes = {
  disabled: PropTypes.bool.isRequired
};
