// @flow
import _ from 'lodash';
import * as types from './types';

export const getTotal = (records: $ReadOnlyArray<types.Record>) =>
  _.reduce(records, (total, record) => total + record.amount, 0);

export const getRunningTotals = (records: $ReadOnlyArray<types.Record>) =>
  _.reduce(
    records,
    (totals, record) => {
      return [...totals, totals[totals.length - 1] + record.amount];
    },
    [0]
  );

export const getBetween = (records: $ReadOnlyArray<types.Record>, minDate: ?Date, maxDate: ?Date) =>
  _.filter(records, record => {
    return (!minDate || record.date >= minDate) && (!maxDate || record.date <= maxDate);
  });
