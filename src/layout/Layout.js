import React from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';

export const Layout = ({children}) => (
  <div className="layout">
    <div className="header">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
    </div>
    {children}
  </div>
);
