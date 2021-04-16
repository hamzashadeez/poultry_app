import React from 'react';
import {View, Text} from 'react-native';
import {UserProvider} from './UserContext';

//main Stack
import MainStack from './Stack/MainStack';

const App = () => {
  return (
    <UserProvider>
      <MainStack />
    </UserProvider>
  );
};

export default App;
