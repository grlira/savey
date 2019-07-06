// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import Ledger from './ledger';

storiesOf('Ledger', module).add('default', () => (
  <div style={{ padding: '1rem' }}>
    <Ledger
      records={[
        {
          date: new Date(),
          description: 'Foetex food supermarket consumption long string',
          category: 'Food products',
          ammount: 250.3,
        },
        {
          date: new Date(),
          description: 'Bla bla',
          category: 'Food products',
          ammount: 250.3,
        },
        {
          date: new Date(),
          description: 'Foetex food supermarket consumption long string',
          category: 'Food products',
          ammount: 250.3,
        },
        {
          date: new Date(),
          description: 'Foetex food supermarket consumption long string',
          category: 'Food products',
          ammount: -1000.3,
        },
      ]}
    />
  </div>
));
