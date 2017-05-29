import React from 'react';
import logo from './logo.svg';

export const Layout = ({children, dataQa}) => (
  <div className="layout" data-qa={dataQa}>
    <div className="header">
      <img src={logo} className="logo" alt="logo" />
    </div>
    <div className="content">
      {children}
    </div>
  </div>
);
