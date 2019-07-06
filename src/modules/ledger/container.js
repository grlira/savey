import _ from 'lodash';
import { connect } from 'react-redux';
import mockRecords from '../../mockData/records_slice.json';
import Ledger from './ledger';

const mapStateToProps = () => ({
  records: _.map(mockRecords, datum => ({
    ...datum,
    date: new Date(datum.date),
  })),
});

export default connect(mapStateToProps)(Ledger);
