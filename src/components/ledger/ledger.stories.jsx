// @flow
import _ from 'lodash';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import mockRecords from '../../models/records/mock';
import Ledger from './ledger';

storiesOf('Ledger', module).add('default', () => (
  <div style={{ padding: '1rem', position: 'relative', height: '30.5rem', display: 'flex' }}>
    <Ledger records={mockRecords} isThinRecords={boolean('isThinRecords', false)} />
  </div>
));
