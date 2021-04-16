import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screens/Home';
import BroilerRecord from '../Screens/BroilderRecord'
import CustomDrawer from './CustomDrawer';
// import Trip from '../Screens/Destination/Trip'
// import Search from '../Screens/Destination/Search'
const Drawer = createDrawerNavigator();

const DrawerStack = props => {
  return (
    // <NavigationContainer>
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="BroilerRecord" component={BroilerRecord} />
      {/* <DrawerItem label='Hamza'/> */}
      {/* <Drawer.Screen name='Search' component={Search} /> */}
      {/* <Drawer.Screen name='Trip' component={Trip} /> */}
    </Drawer.Navigator>
    // </NavigationContainer>
  );
};

export default DrawerStack;
