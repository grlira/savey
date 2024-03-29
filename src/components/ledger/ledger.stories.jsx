// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import mockRecords from '../../models/records/mock';
import Ledger from './ledger';

storiesOf('Ledger', module).add('default', () => (
  <div style={{ padding: '1rem', position: 'relative', height: '30.5rem', display: 'flex' }}>
    <Ledger records={mockRecords} />
  </div>
));
