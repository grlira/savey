// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import RecordInput from './recordInput';

storiesOf('RecordInput', module).add('default', () => (
  <div style={{ padding: '1rem' }}>
    <RecordInput isThin={boolean('isThin', true)} />
  </div>
));
