import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { BankingContext } from 'contexts/BankingContext';

const Wallet = ({ children }) => {
  const { balance } = useContext(BankingContext);

  return (
    <>
      <h1 className="m-5">
        {`Your balance is: $${balance}`}
      </h1>
      { children }
    </>
  );
};

export default Wallet;

Wallet.propTypes = {
  children: PropTypes.node.isRequired,
};
