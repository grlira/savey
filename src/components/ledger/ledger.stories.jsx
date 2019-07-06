// @flow
import _ from 'lodash';
import React from 'react';
import { storiesOf } from '@storybook/react';
import exampleData from '../../mockData/records_slice.json';
import Ledger from './ledger';

storiesOf('Ledger', module).add('default', () => (
  <div style={{ padding: '1rem' }}>
    <Ledger
      records={_.map(exampleData, datum => ({
        ...datum,
        date: new Date(datum.date),
      }))}
    />
  </div>
));
