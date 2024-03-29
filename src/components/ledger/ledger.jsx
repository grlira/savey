// @flow
import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import Record from '../record';
import * as recordsTypes from '../../models/records/types';

type Props = {|
  records: $ReadOnlyArray<recordsTypes.Record>,
|};

const Ledger = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  overflow-y: scroll;
  overflow-x: hidden;
  width: fit-content;
  height: 100%;
  padding: 0rem 0.5rem;
`;

export default ({ records }: Props) => (
  <Ledger>
    {_.map(records, (record, index) => (
      <Record key={index} record={record} />
    ))}
  </Ledger>
);
