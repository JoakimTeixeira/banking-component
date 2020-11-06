import React from 'react';
import { Wallet, Input } from 'components';

const App = () => (
  <>
    <div className="container text-center">
      <Wallet value={100} />
      <Input />
    </div>
  </>
);

export default App;
