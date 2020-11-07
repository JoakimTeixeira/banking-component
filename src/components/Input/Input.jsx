import React from 'react';
import useInput from './useInput';

const Input = () => {
  const [amount, handleInput] = useInput('');

  return (
    <>
      <label htmlFor="balanceInput" className="mb-3">
        {'Enter value: '}
        <input value={amount} onChange={handleInput} type="text" id="balanceInput" />
      </label>
    </>
  );
};

export default Input;
