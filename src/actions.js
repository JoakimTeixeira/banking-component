import {
  WITHDRAW, DEPOSIT, INTEREST, DELETE,
} from 'constants.js';

export const requestWithdraw = (amount) => ({
  type: WITHDRAW, payload: amount,
});

export const requestDeposit = (amount) => ({
  type: DEPOSIT, payload: amount,
});

export const requestInterest = {
  type: INTEREST,
};

export const requestDelete = {
  type: DELETE,
};
