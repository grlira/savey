// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs';
import Record from './record';

storiesOf('Record', module).add('default', () => (
  <div style={{ padding: '1rem' }}>
    <Record
      isThin={boolean('isThin', true)}
      record={{
        date: new Date(),
        description: text('description', 'Foetex food supermarket consumption long string'),
        category: text('category', 'Food'),
        amount: number('amount', 250.3),
      }}
    />
  </div>
));
