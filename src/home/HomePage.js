import React from 'react';
import { Layout } from '../layout';
import { Link } from 'react-router';

export const HomePage = () => (
  <Layout>
    <Link data-qa="counters-link" to="/counters" >Counters</Link>
  </Layout>
);
