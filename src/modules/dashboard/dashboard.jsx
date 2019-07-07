// @flow
import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import Ledger from '../../components/ledger';
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
  height: 30.5rem;
  max-height: 100vh;
  grid-row: 1 / span 4;
`;

const MonthBox = styled.div`
  grid-column: 2;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const YearBox = styled.div`
  grid-column: 2;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const AllTimeBox = styled.div`
  grid-column: 2;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export default ({ records, onAddRecord }: Props) => {
  const today = new Date();
  return (
    <Dashboard>
      <LedgerBox>
        <Ledger records={records} isThinRecords />
      </LedgerBox>
      <MonthBox>
        <PeriodSummary
          records={records}
          label="This month"
          minDate={new Date(today.getFullYear(), today.getMonth(), 1)}
          maxDate={new Date(today.getFullYear(), today.getMonth() + 1, 0)}
        />
      </MonthBox>
      <YearBox>
        <PeriodSummary
          records={records}
          label="This year"
          minDate={new Date(today.getFullYear(), 0, 1)}
          maxDate={new Date(today.getFullYear() + 1, 0, 0)}
        />
      </YearBox>
      <AllTimeBox>
        <PeriodSummary records={records} label="All time" />
      </AllTimeBox>
      <button
        type="button"
        onClick={_.partial(onAddRecord, {
          date: new Date(),
          description: 'New stuff',
          category: 'Food',
          amount: 500,
        })}
      />
    </Dashboard>
  );
};
