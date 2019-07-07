// @flow
import _ from 'lodash';
import * as types from './types';

export const getTotal = (records: $ReadOnlyArray<types.Record>) =>
  _.reduce(records, (total, record) => total + record.ammount, 0);

export const getRunningTotals = (records: $ReadOnlyArray<types.Record>) => {
  let runningTotal = 0;
  return _.reduce(
    records,
    (totals, record) => {
      runningTotal += record.ammount;
      return [...totals, runningTotal];
    },
    []
  );
};
