import { connect } from 'react-redux';
import * as recordsSelectors from '../../models/records/selectors';
import * as recordsActions from '../../models/records/actions';
import Dashboard from './dashboard';

const mapStateToProps = state => ({
  records: recordsSelectors.getAll(state),
});

const mapDispatchToProps = {
  onAddRecord: recordsActions.add,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
