import _ from 'lodash';
import exampleData from '../../mockData/records_slice.json';

export default _.map(exampleData, datum => ({
  ...datum,
  date: new Date(datum.date),
}));
