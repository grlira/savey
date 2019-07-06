// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import Record from './record';

storiesOf('Record', module)
  .add('default', () => (
    <div style={{ padding: '1rem' }}>
      <Record
        record={{
          date: new Date(),
          description: 'Foetex food supermarket consumption long string',
          category: 'Food products',
          ammount: 250.3,
        }}
      />
    </div>
  ))
  .add('large number', () => (
    <div style={{ padding: '1rem' }}>
      <Record
        record={{
          date: new Date(),
          description: 'Foetex food supermarket consumption long string',
          category: 'Food products',
          ammount: 10530.5,
        }}
      />
    </div>
  ))
  .add('negative number', () => (
    <div style={{ padding: '1rem' }}>
      <Record
        record={{
          date: new Date(),
          description: 'Foetex food supermarket consumption long string',
          category: 'Food products',
          ammount: -10530.5,
        }}
      />
    </div>
  ));
