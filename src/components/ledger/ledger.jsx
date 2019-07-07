// @flow
import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import Record from '../record';
import * as recordsTypes from '../../models/records/types';

type Props = {|
  records: $ReadOnlyArray<recordsTypes.Record>,
  isSmallRecords: boolean,
|};

const Ledger = styled.div`
  display: grid;
  grid-gap: 1rem;
  overflow-y: scroll;
  overflow-x: hidden;
  width: fit-content;
  padding: 0.5rem;
`;

export default ({ records, isSmallRecords }: Props) => (
  <Ledger>
    {_.map(records, record => (
      <Record record={record} isSmall={isSmallRecords} />
    ))}
  </Ledger>
);
