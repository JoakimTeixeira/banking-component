import React from 'react';
import { Wallet, Input } from 'components';
import { BankingContextProvider } from 'contexts/BankingContext';

const App = () => (
  <BankingContextProvider>
    <div className="container text-center pt-5">
      <Wallet>
        <Input />
      </Wallet>
    </div>
  </BankingContextProvider>
);

export default App;
