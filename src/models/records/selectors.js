import _ from 'lodash';

export const getAll = state => _.orderBy(state.records, 'date', 'asc');
