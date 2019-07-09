// @flow
import React from 'react';
import styled from 'styled-components';
import * as recordsTypes from '../../models/records/types';
import RecordBox from '../recordBox';
import Amount from '../amount';

type Props = {|
  record: recordsTypes.Record,
|};

const AmountFormatter = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${props => (props.value > 0 ? props.theme.positive : props.theme.negative)};
`;

const Ellipsis = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.9375rem;
  line-height: 2rem;
`;

const DateContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 2rem;
  font-size: 1.0625em;
  text-align: right;
`;

export default ({ record: { date, description, category, amount } }: Props) => (
  <RecordBox>
    <Amount value={amount} RenderText={AmountFormatter} />
    <Ellipsis>{description}</Ellipsis>
    <Ellipsis>{category}</Ellipsis>
    <DateContainer>{date.toLocaleDateString()}</DateContainer>
  </RecordBox>
);
