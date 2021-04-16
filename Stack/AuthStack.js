import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import Forgot from '../Screens/Forgot'

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Forgot"
        component={Forgot}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
