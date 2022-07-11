import React from 'react';
import loadConfigurations from './src/configuration';
import Test from './src/Test';

loadConfigurations()

const App = () => {
  return (
    <Test></Test>
  );
};

export default App;
