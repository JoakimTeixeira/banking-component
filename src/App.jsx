import React from 'react';
import { Wallet, Input, Button } from 'components';

const App = () => (
  <div className="container text-center">
    <Wallet value={100} />
    <Input>
      <Button text="Submit" />
    </Input>
  </div>
);

export default App;
