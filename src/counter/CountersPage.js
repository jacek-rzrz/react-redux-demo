import React from 'react';
import {Layout} from '../layout';
import { Counter } from '.';

export const CountersPage = () => (
  <Layout>
    <div className="content-counters">
      <Counter id="counter-1" />
      <Counter id="counter-2" />
      <Counter id="counter-3" />
      <Counter id="counter-4" />
      <Counter id="counter-5" />
      <Counter id="counter-6" />
    </div>
  </Layout>
);
