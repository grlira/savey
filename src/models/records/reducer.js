import mockRecords from './mock';
import * as actionTypes from './actionTypes';

const reducer = (state = mockRecords, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return [
        ...state,
        {
          ...action.record,
          date: new Date(action.record.date),
        },
      ];

    default:
      return state;
  }
};

export default {
  records: reducer,
};
