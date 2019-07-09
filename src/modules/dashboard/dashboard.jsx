// @flow
import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import Ledger from '../../components/ledger';
import RecordInput from '../../components/recordInput';
import * as recordsTypes from '../../models/records/types';
import PeriodSummary from './periodSummary';

type Props = {
  records: $ReadOnlyArray<recordsTypes.Records>,
  onAddRecord: (record: recordsTypes.Record) => void,
};

const Dashboard = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
  margin: auto;
`;

const LedgerBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 30.5rem;
  max-height: 100vh;
  grid-row: 1 / span 4;
`;

const MonthBox = styled.div`
  grid-column: 2;
  margin: auto;

  @media screen and (max-width: 1024px) {
    grid-column: 1;
  }
`;

const YearBox = styled.div`
  grid-column: 2;
  margin: auto;

  @media screen and (max-width: 1024px) {
    grid-column: 1;
  }
`;

const AllTimeBox = styled.div`
  grid-column: 2;
  margin: auto;

  @media screen and (max-width: 1024px) {
    grid-column: 1;
  }
`;

const InputBox = styled.div`
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

export default ({ records, onAddRecord }: Props) => {
  const today = new Date();
  const pastToFuture = _.orderBy(records, 'date', 'asc');
  return (
    <Dashboard>
      <LedgerBox>
        <InputBox>
          <RecordInput onAddRecord={onAddRecord} />
        </InputBox>
        <Ledger records={_.orderBy(records, 'date', 'desc')} />
      </LedgerBox>
      <MonthBox>
        <PeriodSummary
          records={pastToFuture}
          label="This month"
          minDate={new Date(today.getFullYear(), today.getMonth(), 1)}
          maxDate={new Date(today.getFullYear(), today.getMonth() + 1, 0)}
        />
      </MonthBox>
      <YearBox>
        <PeriodSummary
          records={pastToFuture}
          label="This year"
          minDate={new Date(today.getFullYear(), 0, 1)}
          maxDate={new Date(today.getFullYear() + 1, 0, 0)}
        />
      </YearBox>
      <AllTimeBox>
        <PeriodSummary records={pastToFuture} label="All time" />
      </AllTimeBox>
    </Dashboard>
  );
};
