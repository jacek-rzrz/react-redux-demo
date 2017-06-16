import React from 'react';
import {Layout} from '../layout';
import { Link } from 'react-router';

export const HomePage = () => (
  <Layout>
    <div className="content-home">
      <Link data-qa="counters-link" to="/counters">Counters</Link>
      <Link data-qa="sign-up-link" to="/sign-up/contact">Sign up</Link>
    </div>
  </Layout>
);
