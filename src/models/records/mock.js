import _ from 'lodash';
import exampleData from '../../mockData/records_full_20190709.json';

export default _.map(exampleData, datum => ({
  ...datum,
  date: new Date(datum.date),
}));
