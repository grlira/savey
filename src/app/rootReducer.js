import { combineReducers } from 'redux';
import recordsReducer from '../models/records/reducer';

export default combineReducers({
  ...recordsReducer,
});
