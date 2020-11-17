import React, { useContext } from 'react';
import { Button } from 'components/Button';
import {
  requestWithdraw,
  requestDeposit,
  requestInterest,
  requestDelete,
} from 'actions';
import { BankingContext } from 'contexts/BankingContext';
import useInput from './hooks/useInput';

const Input = () => {
  const [amount, handleInput, handleFormSubmit] = useInput();
  const { dispatch } = useContext(BankingContext);

  return (

    <form className="form-inline justify-content-center" onSubmit={handleFormSubmit}>
      <div className="form-group mx-sm-3 mb-2 ">
        <label htmlFor="balanceInput">
          Enter value:
          <input value={amount} onChange={handleInput} type="number" className="form-control ml-3" id="balanceInput" />
        </label>
      </div>
      <div className="form-group">
        <Button text="Withdraw" dispatch={() => dispatch(requestWithdraw(amount))} />
        <Button text="Deposit" dispatch={() => dispatch(requestDeposit(amount))} />
        <Button text="Collect interest" dispatch={() => dispatch(requestInterest)} />
        <Button text="Delete account" dispatch={() => dispatch(requestDelete)} />
      </div>
    </form>

  );
};

export default Input;
