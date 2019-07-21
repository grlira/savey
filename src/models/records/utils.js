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

export const getForMonth = (records: $ReadOnlyArray<types.Record>, month: Date) => {
  const monthStart = new Date(month.getFullYear(), month.getMonth(), 1);
  const monthEnd = new Date(month.getFullYear(), month.getMonth() + 1, 0);
  return getBetween(records, monthStart, monthEnd);
};

export const getTotalsByCategory = (records: $ReadOnlyArray<recordsTypes.Record>) => {
  const categoryTotals = _.chain(records)
    .groupBy('category')
    .mapValues(categoryRecords =>
      _.reduce(categoryRecords, (total, categoryRecord) => total + categoryRecord.amount, 0)
    )
    .pickBy(categoryTotal => categoryTotal < 0)
    .mapValues(categoryTotal => Math.abs(categoryTotal))
    .value();

  const totalExpenditutre = _.reduce(categoryTotals, (total, categoryTotal) => total + categoryTotal, 0);

  return _.chain(categoryTotals)
    .mapValues((categoryTotal, category) => ({
      categoryTotal,
      percentage: categoryTotal / totalExpenditutre,
      category,
    }))
    .values()
    .value();
};
