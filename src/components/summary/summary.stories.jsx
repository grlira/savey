// @flow
import _ from 'lodash';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import * as recordsUtils from '../../models/records/utils';
import mockRecords from '../../models/records/mock';
import Summary from './summary';

const negative = values => _.map(values, value => -value);

storiesOf('Summary', module)
  .add('default', () => (
    <div style={{ padding: '1rem' }}>
      <Summary
        total={number('total', recordsUtils.getTotal(mockRecords))}
        label={text('label', 'This month')}
        dataPoints={recordsUtils.getRunningTotals(mockRecords)}
      />
    </div>
  ))
  .add('negative', () => (
    <div style={{ padding: '1rem' }}>
      <Summary
        total={number('total', -recordsUtils.getTotal(mockRecords))}
        label={text('label', 'This month')}
        dataPoints={negative(recordsUtils.getRunningTotals(mockRecords))}
      />
    </div>
  ));
