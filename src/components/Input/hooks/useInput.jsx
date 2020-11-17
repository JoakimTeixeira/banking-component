import { useState } from 'react';

const useInput = () => {
  const [amount, setAmount] = useState('');

  const handleInput = (event) => {
    setAmount(parseFloat(event.target.value));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setAmount('');
  };

  return [amount, handleInput, handleFormSubmit];
};

export default useInput;
