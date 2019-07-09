// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import RecordInput from './recordInput';

storiesOf('RecordInput', module).add('default', () => (
  <div style={{ padding: '1rem' }}>
    <RecordInput />
  </div>
));
