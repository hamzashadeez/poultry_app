import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import Login from './Screens/Login';
import Forgot from './Screens/Forgot';
import Register from './Screens/Register';
import Home from './Screens/Home';
import BroilderRecord from './Screens/BroilderRecord';
import UpdateUnits from './Screens/UpdateUnits';
const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Forgot" component={Forgot} options={{headerShown:false}} />
        <Stack.Screen name="BroilerRecord" component={BroilderRecord} options={{headerShown:false}} />
        <Stack.Screen name="UpdateUnits" component={UpdateUnits} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

