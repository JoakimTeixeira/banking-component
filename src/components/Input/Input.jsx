import React from 'react';
import PropTypes from 'prop-types';
import { useInput } from './hooks';

const Input = ({ children }) => {
  const [amount, handleInput] = useInput('');

  return (
    <div className="row justify-content-center">
      <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="balanceInput">
            Enter value:
            <input value={amount} onChange={handleInput} type="text" className="form-control ml-3" id="balanceInput" />
          </label>
        </div>
        {children}
      </form>
    </div>
  );
};

export default Input;

Input.propTypes = {
  children: PropTypes.node,
};

Input.defaultProps = {
  children: '',
};
