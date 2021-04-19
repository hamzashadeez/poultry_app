import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'

import styled from 'styled-components'
import Record from '../Components/Record';


const data = [
    {label: 'Feed', list:[
        {'name': 'Starter', qty: "1 bag - 40kg"},
        {'name': 'Grower', qty: "2 bag - 80kg"},
        {'name': 'Finisher', qty: "1 bag - 40kg"},
    ]},
    {label: 'Vaccination', list:[
        {'name': 'Vac 1', qty: "7 issued/used"},
        {'name': 'Vac 2', qty: "22 issued/used"},
        {'name': 'Vac 3', qty: "10 issued/used"},
    ]}
]

const FeedRecord = ({navigation}) => {
  return (
    <View>
      <Header>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")} >
          <Icon2 name="caretleft" size={20} color="red" />
        </TouchableOpacity>
        <Title>Feed Record</Title>
        <TouchableOpacity
            onPress={()=>navigation.openDrawer()}
          style={{
            backgroundColor: 'red',
            height: 26,
            width: 26,
            borderRadius: 13,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="md-menu-sharp" size={20} color="white" />
        </TouchableOpacity>
      </Header>
      <Menu>
        <Image resizeMode='cover' source={require('../assets/01.jpg')} />
        <CenterTexts>
            <H1>Coop 1</H1>
            <H3>Day 7 -12</H3>
            <H3>17 Sept 20 - 22 Sept 20 </H3>
        </CenterTexts>
        <View style={{flexDirection: 'column', alignItems: 'flex-end', justifyContent: "flex-end"}}>
            <Pressable>
                <Icon name='md-calendar' size={20} color='indianred' />
            </Pressable>
        </View>
    </Menu>
    {/* Body */}
    <Body>
        <FCR>
            <Text style={{fontSize: 17, fontFamily: "Roboto-Medium"}}>FCR</Text>
        </FCR>
          {data.map(x => <Record label={x.label} key={x.label}  list={x.list}/> )}
    </Body>
    </View>
  );
};

export default FeedRecord;

const Body = styled.ScrollView`
    height: 500px;
    padding-bottom: 10px
`

const FCR = styled.TouchableOpacity`
    background-color: white;
    width: 90%;
    margin: 20px auto;
    padding: 10px;
    align-items: center;
    elevation: 3;
    border-radius: 5px;
`

const Header = styled.View`
    padding: 10px;
    alignItems: center;
    justifyContent: space-between;
    flexDirection: row;
    background-color: whitesmoke
`

const Title = styled.Text`
    color: black;
    font-size: 17px;
    font-family: "Roboto-Medium"
`

const Menu = styled.View`
    flex-direction: row;
    padding: 10px;
    justify-content: space-around;
    borderBottomWidth: 5px;
    borderBottomColor: gold;
`

const CenterTexts = styled.View`
    
`
const Image = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 35px
`

const H1 = styled.Text`
    color: black;
    font-size: 19px;
    font-family: "Roboto-Medium"`

const H3 = styled.Text`
    color: black;
    font-size: 13px;
    font-family: "Roboto-Medium"
`
