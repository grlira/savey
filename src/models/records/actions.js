// @flow
import * as types from './types';
import * as actionTypes from './actionTypes';

export const add = (record: types.Record) => ({
  type: actionTypes.ADD,
  record,
});
