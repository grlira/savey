import { connect } from 'react-redux';
import mockRecords from '../../models/records/mock';
import Ledger from './ledger';

const mapStateToProps = () => ({
  records: mockRecords,
});

export default connect(mapStateToProps)(Ledger);
