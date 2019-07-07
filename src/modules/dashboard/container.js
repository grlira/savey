import { connect } from 'react-redux';
import mockRecords from '../../models/records/mock';
import Dashboard from './dashboard';

const mapStateToProps = () => ({
  records: mockRecords,
});

export default connect(mapStateToProps)(Dashboard);
