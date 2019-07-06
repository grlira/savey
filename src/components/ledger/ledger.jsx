// @flow
import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import Record from '../record';
import recordsTypes from '../../models/records/types';

type Props = {|
  records: $ReadOnlyArray<recordsTypes.Record>,
|};

const Ledger = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

export default ({ records }: Props) => (
  <Ledger>
    {_.map(records, record => (
      <Record record={record} />
    ))}
  </Ledger>
);
