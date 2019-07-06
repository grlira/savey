// @flow
import React from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';
import * as recordsTypes from '../../models/records/types';

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

const Ammount = styled.div`
  font-size: 2.5rem;
  line-height: 3rem;
  grid-column: 1 / span 2;
  grid-row: 2;
  text-align: center;
  color: ${props => (props.ammount > 0 ? props.theme.positive : props.theme.negative)};
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
    <NumberFormat
      value={ammount}
      displayType="text"
      decimalScale={2}
      fixedDecimalScale
      thousandSeparator
      renderText={value => (
        <Ammount ammount={ammount}>
          <span
            style={{
              lineHeight: 'normal',
              verticalAlign: 'text-bottom',
            }}
          >
            {value}
          </span>
        </Ammount>
      )}
    />
    <DateContainer>{date.toLocaleDateString()}</DateContainer>
    <Category>{category}</Category>
  </Record>
);
