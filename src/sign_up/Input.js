import React from 'react';

export const Input = ({input, meta, placeholder, label}) => (
  <div className="form-item">
    <label htmlFor={input.name}>{label}</label>
    <input {...input} placeholder={placeholder} />
    { meta.error && meta.touched && <span data-qa={`${input.name}-error`}>{meta.error}</span> }
  </div>
);
