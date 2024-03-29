import { createStore } from 'redux';
import rootReducer from './rootReducer';

// eslint-disable-next-line no-underscore-dangle
export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
