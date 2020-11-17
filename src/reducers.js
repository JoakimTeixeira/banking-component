import {
  WITHDRAW, DEPOSIT, INTEREST, DELETE,
} from 'constants.js';

const bankingReducer = (state, action) => {
  switch (action.type) {
    case WITHDRAW:
      if (state > 0) {
        return state - action.payload;
      }
      return state;
    case DEPOSIT:
      return state + action.payload;
    case INTEREST:
      return state * 1.3;
    case DELETE:
      return 0;
    default:
      return state;
  }
};

export default bankingReducer;
