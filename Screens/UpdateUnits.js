import React from 'react'
import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import styled from 'styled-components'
import Unit from '../Components/Unit'


const UpdateUnits = ({navigation}) => {
    return (
        <View>
           <Header>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <Icon2 name='caretleft' size={20} color='red' />
                </TouchableOpacity>
                <Title>Broiler Record</Title>
                <TouchableOpacity style={{backgroundColor: "red", height:26, width: 26, borderRadius: 13, alignItems: 'center', justifyContent: "center"}}>
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
                <Text style={{fontSize: 18, fontFamily: "Roboto-Medium"}}>Update Units</Text>
                <Container showsVerticalScrollIndicator={false}>
                    <Unit title='Mortality' />
                    <Unit title='Culls' />
                    <Unit title='Sold' />
                    <Unit title='Slaughtered' />
                    <Unit title='Live stock' />
                    <Unit title='Stoled' />
                </Container>
                {/* button */}
                <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={{backgroundColor: 'red', marginTop: 40, padding: 10, borderRadius: 10}}>
                    <Text style={{textAlign: "center", color: "white", fontFamily:"Roboto-Bold"}}>Update</Text>
                </TouchableOpacity>
            </BodyCont>
        </View>
    )
}

export default UpdateUnits

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
    padding: 15px;

`

const Container = styled.ScrollView`
    background-color: lightgray;
    border-radius:7px;
    padding: 10px;
    padding-top: 20px;
    height: 240px;
    margin-top: 10px;
`