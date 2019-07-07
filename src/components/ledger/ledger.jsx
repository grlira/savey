// @flow
import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import Record from '../record';
import * as recordsTypes from '../../models/records/types';

type Props = {|
  records: $ReadOnlyArray<recordsTypes.Record>,
  isThinRecords: boolean,
|};

const Ledger = styled.div`
  display: grid;
  grid-gap: 1rem;
  overflow-y: scroll;
  overflow-x: hidden;
  width: fit-content;
  height: 100%;
  padding: 0.5rem;
`;

export default ({ records, isThinRecords }: Props) => (
  <Ledger>
    {_.map(records, (record, index) => (
      <Record key={index} record={record} isThin={isThinRecords} />
    ))}
  </Ledger>
);
