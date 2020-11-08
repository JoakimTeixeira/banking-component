import { useState } from 'react';

const useInput = () => {
  const [amount, setAmount] = useState('');

  const handleInput = (event) => {
    setAmount(event.target.value);
  };

  return [amount, handleInput];
};

export default useInput;
