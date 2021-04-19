import React from 'react'
import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import styled from 'styled-components'
import Box from '../Components/Box'

const BroilderRecord = ({navigation}) => {
    return (
        <View>
            <Header>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <Icon2 name='caretleft' size={20} color='red' />
                </TouchableOpacity>
                <Title>Broiler Record</Title>
                <TouchableOpacity 
                    onPress={()=>navigation.openDrawer()}
                style={{backgroundColor: "red", height:26, width: 26, borderRadius: 13, alignItems: 'center', justifyContent: "center"}}>
                    <Icon name='md-menu-sharp' size={20} color='white' />
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
            <BodyCont>
                <BodyTitle>2500 Units</BodyTitle>
                <BodySubTitle>Update</BodySubTitle>

                <Container>
                    <Box number='2500' title='placed' />
                    <Box number='12Kg' title='Avg Weight' />
                    <Box number='4%' title='Dead rate' />
                    <Box number='110' title='Mortality' />
                    <Box number='12' title='Culis' />
                    <Box number='10' title='Slaughted' />
                    <Box number='250' title='Live stock' />
                    <Box number='4' title='Bags' />
                </Container>

                <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={{backgroundColor: 'red', marginTop: 40, padding: 10, borderRadius: 10}}>
                    <Text style={{textAlign: "center", color: "white", fontFamily:"Roboto-Bold"}}>Update Units</Text>
                </TouchableOpacity>
            </BodyCont>
        </View>
    )
}

export default BroilderRecord

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
const Image = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 35px
`

const CenterTexts = styled.View`
    
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

const BodyCont = styled.View`
    height: 100%;
    background-color: whitesmoke;
    padding-horizontal: 30px;
    padding-vertical: 20px;
`

const BodyTitle = styled.Text`
    color: black;
    font-size: 20px;
    text-align: center;
    font-family: "Roboto-Medium"
`
const BodySubTitle = styled.Text`
    color: gray;
    font-size: 15px;
    text-align: center;
    font-family: "Roboto-Medium";
    margin-bottom: 30px
`

const Container = styled.View`
    flex-wrap: wrap;
    flex-direction: row
`