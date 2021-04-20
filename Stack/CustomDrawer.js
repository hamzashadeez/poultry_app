import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons';
import Ico from 'react-native-vector-icons/MaterialCommunityIcons';
import {UserContext} from '../UserContext'

const CustomDrawer = props => {
  const [user] = useContext(UserContext)
  return (
    <DrawerContentScrollView style={{backgroundColor: 'red'}}>
      {/* <DrawerItemList {...props} /> */}
      <Header>
        <Avatar />
        <Text style={{fontFamily: "Roboto-Medium", marginLeft: 5, fontSize: 16,color: 'white' }}>{user.username}</Text>
      </Header>
      <Line />
      <DrawerItem
        label="Home"
        labelStyle={{color: 'white',fontFamily: "Roboto-Medium",fontSize: 16}}
        onPress={() => props.navigation.navigate("Home")}
      />
      <DrawerItem
        label="Broiler Record"
        labelStyle={{color: 'white',fontFamily: "Roboto-Medium",fontSize: 16}}
        onPress={() => props.navigation.navigate("BroilerRecord")}
      />
      <DrawerItem
        label="Feed Record"
        labelStyle={{color: 'white',fontFamily: "Roboto-Medium",fontSize: 16}}
        onPress={() => props.navigation.navigate("FeedRecord")}
      />
      <DrawerItem
        label="Costing"
        labelStyle={{color: 'white',fontFamily: "Roboto-Medium",fontSize: 16}}
        onPress={() => props.navigation.navigate("Costing")}
      />
      <DrawerItem
        label="Sales"
        labelStyle={{color: 'white',fontFamily: "Roboto-Medium",fontSize: 16}}
        onPress={() => props.navigation.navigate("Sales")}
      />
      <DrawerItem
        label="Income Invoice"
        labelStyle={{color: 'white',fontFamily: "Roboto-Medium",fontSize: 16}}
        onPress={() => props.navigation.navigate("Invoice")}
      />
      <DrawerItem
        label="Feed Calculator"
        labelStyle={{color: 'white',fontFamily: "Roboto-Medium",fontSize: 16}}
        onPress={() => props.navigation.navigate("Home")}
      />
      <DrawerItem
        label="Calender"
        labelStyle={{color: 'white',fontFamily: "Roboto-Medium",fontSize: 16}}
        onPress={() => props.navigation.navigate("Home")}
      />
      <DrawerItem
        label="Settings"
        labelStyle={{color: 'white',fontFamily: "Roboto-Medium",fontSize: 16}}
        onPress={() => props.navigation.navigate("Home")}
      />
      <DrawerItem
        label="Logout"
        labelStyle={{color: 'white',fontFamily: "Roboto-Medium",fontSize: 16}}
        onPress={() => props.navigation.navigate("Home")}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const Header = styled.View`
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around

`

const Avatar = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-color: white;
`

const Line = styled.View`
  width: 100%;
  height: 2px;
  background-color: #ccc
`