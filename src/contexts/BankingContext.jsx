import React, { createContext, useReducer } from 'react';
import bankingReducer from 'reducers';
import PropTypes from 'prop-types';

export const BankingContext = createContext();

export const BankingContextProvider = ({ children }) => {
  const [balance, dispatch] = useReducer(bankingReducer, 0);

  return (
    <BankingContext.Provider value={{ balance, dispatch }}>
      {children}
    </BankingContext.Provider>
  );
};

BankingContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
