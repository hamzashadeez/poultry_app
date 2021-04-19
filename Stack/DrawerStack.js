import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screens/Home';
import BroilerRecord from '../Screens/BroilderRecord'
import CustomDrawer from './CustomDrawer';
import FeedRecord from '../Screens/FeedRecord';
import Costing from '../Screens/Costing';
import Sales from '../Screens/Sales'
import NewSales from '../Screens/NewSales';
const Drawer = createDrawerNavigator();

const DrawerStack = props => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="BroilerRecord" component={BroilerRecord} />
      <Drawer.Screen name="FeedRecord" component={FeedRecord} />
      <Drawer.Screen name="Costing" component={Costing} />
      <Drawer.Screen name="Sales" component={Sales} />
      <Drawer.Screen name="NewSales" component={NewSales} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
