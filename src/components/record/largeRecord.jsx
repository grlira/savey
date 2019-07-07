// @flow
import React from 'react';
import styled from 'styled-components';
import * as recordsTypes from '../../models/records/types';
import Ammount from '../ammount';

type Props = {|
  record: recordsTypes.Record,
|};

const Record = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-rows: 1rem 3rem 1rem;
  grid-template-columns: auto auto;

  width: 15rem;

  background-color: ${props => props.theme.paperBackground};
  box-shadow: 0px 0px 5px 0px ${props => props.theme.paperAccent};
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 1rem;
`;

const Description = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  grid-column: 1 / span 2;
  grid-row: 1;
  line-height: 1rem;
`;

const AmmountFormatter = styled.div`
  font-size: 2.5rem;
  line-height: 3rem;
  grid-column: 1 / span 2;
  grid-row: 2;
  text-align: center;
  color: ${props => (props.value > 0 ? props.theme.positive : props.theme.negative)};
`;

const DateContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  grid-column: 1;
  grid-row: 3;
  line-height: 1rem;
`;

const Category = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: right;
  grid-column: 2;
  grid-row: 3;
  line-height: 1rem;
`;

export default ({ record: { date, description, category, ammount } }: Props) => (
  <Record>
    <Description>{description}</Description>
    <Ammount value={ammount} RenderText={AmmountFormatter} />
    <DateContainer>{date.toLocaleDateString()}</DateContainer>
    <Category>{category}</Category>
  </Record>
);
