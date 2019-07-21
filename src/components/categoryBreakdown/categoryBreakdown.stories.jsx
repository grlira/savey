// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import mockRecords from '../../models/records/mock';
import * as recordsUtils from '../../models/records/utils';
import CategoryBreakdown from './categoryBreakdown';

storiesOf('CategoryBreakdown', module).add('default', () => (
  <div style={{ padding: '1rem', position: 'relative', height: '30.5rem', display: 'flex' }}>
    <CategoryBreakdown
      records={recordsUtils.getBetween(mockRecords, new Date('January 1970'), new Date('June 2019'))}
    />
  </div>
));
