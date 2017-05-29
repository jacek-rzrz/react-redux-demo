import React from 'react';
import { Layout } from '../layout';
import { Counter } from '.';

export const CountersPage = () => (
  <Layout dataQa="counters-page">
    <Counter id="counter-1" />
    <Counter id="counter-2" />
    <Counter id="counter-3" />
    <Counter id="counter-4" />
    <Counter id="counter-5" />
    <Counter id="counter-6" />
  </Layout>
);
