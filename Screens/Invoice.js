import React from 'react'
import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'

import styled from 'styled-components'

const Costs = ({item, cost})=>{
    return(
        <CostCont>
            <Text style={{fontSize: 15, fontWeight: '500'}}>{item}</Text>
            <Text style={{fontSize: 15, fontWeight: '500', color: "grey"}}>{cost}</Text>
        </CostCont>
    )
}

const Invoice = () => {
    return (
        <View>
            <Header>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")} >
          <Icon2 name="caretleft" size={20} color="red" />
        </TouchableOpacity>
        <Title>Income Statement</Title>
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
    <Body>
         <Title2>Income</Title2> 
         <Costs item='Livestock' cost='R124' />
         <Costs item='Slaughted' cost='R142' />
         <Costs item='Extras' cost='R144' />
         <Total>
            <Text style={{fontFamily: "Roboto-Bold", fontSize: 18}}>Total Direct Cost</Text>
            <Text style={{fontFamily: "Roboto-Bold", fontSize: 18}}>R213</Text>
        </Total>

         <Title2>Other Income</Title2> 
         <Costs item='Manure' cost='R174' />
         <Total>
            <Text style={{fontFamily: "Roboto-Bold", fontSize: 18}}>Total Direct Cost</Text>
            <Text style={{fontFamily: "Roboto-Bold", fontSize: 18}}>R174</Text>
        </Total>
         <Title2>Expenses and Costs</Title2> 
         <Costs item='Chicks' cost='R753' />
         <Costs item='Feed' cost='R274' />
         <Costs item='Heating' cost='R114' />
         <Costs item='Medication' cost='R173' />
         <Costs item='Vaccination' cost='R194' />
         <Costs item='Disinfection' cost='R294' />
         <Costs item='Utility' cost='R100' />
         <Costs item='Wages' cost='R200' />
         <Costs item='Indirect Cost' cost='R294' />
         <Costs item='Rental' cost='R294' />
         <Total>
            <Text style={{fontFamily: "Roboto-Bold", fontSize: 18}}>Total Direct Cost</Text>
            <Text style={{fontFamily: "Roboto-Bold", fontSize: 18}}>R5174</Text>
        </Total>
    </Body>
        </View>
    )
}

export default Invoice


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
const Title2 = styled.Text`
    color: black;
    textDecorationLine: underline;
    padding-bottom:5px;
    font-size: 19px;
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
const Body = styled.ScrollView`
    height: 510px;
    padding: 10px;

`
const CostCont = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px
`


const Total = styled.View`
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    borderWidth: 2px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    borderColor: black;
    justify-content: space-between;
    margin-bottom: 30px;
`