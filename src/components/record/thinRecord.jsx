// @flow
import React from 'react';
import styled from 'styled-components';
import * as recordsTypes from '../../models/records/types';
import Amount from '../amount';

type Props = {|
  record: recordsTypes.Record,
|};

const Record = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-rows: 2rem;
  grid-template-columns: 8rem auto 6rem 6rem;

  width: 30rem;
  height: 3rem;

  background-color: ${props => props.theme.paperBackground};
  box-shadow: 0px 0px 5px 0px ${props => props.theme.paperAccent};
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 1rem;
`;

const AmountFormatter = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  grid-column: 1;
  grid-row: 1;
  text-align: left;
  color: ${props => (props.value > 0 ? props.theme.positive : props.theme.negative)};
`;

const Description = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  grid-column: 2;
  grid-row: 1;
  line-height: 2rem;
  text-align: left;
`;

const DateContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  grid-column: 4;
  grid-row: 1;
  line-height: 2rem;
  text-align: right;
`;

const Category = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: right;
  grid-column: 3;
  grid-row: 1;
  line-height: 2rem;
  text-align: left;
`;

export default ({ record: { date, description, category, amount } }: Props) => (
  <Record>
    <Amount value={amount} RenderText={AmountFormatter} />
    <Description>{description}</Description>
    <Category>{category}</Category>
    <DateContainer>{date.toLocaleDateString()}</DateContainer>
  </Record>
);
