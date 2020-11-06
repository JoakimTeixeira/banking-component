import React from 'react';
import PropTypes from 'prop-types';

const Wallet = ({ value }) => (
  <h1 className="text-center mt-5">{`The balance is: ${value}`}</h1>
);

export default Wallet;

Wallet.propTypes = {
  value: PropTypes.number.isRequired,
};
