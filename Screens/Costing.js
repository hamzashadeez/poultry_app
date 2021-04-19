import React from 'react'
import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import styled from 'styled-components'
import Box from '../Components/Box'

const Costs = ({item, cost})=>{
    return(
        <CostCont>
            <Text style={{fontSize: 15, fontWeight: '500'}}>{item}</Text>
            <Text style={{fontSize: 15, fontWeight: '500', color: "grey"}}>{cost}</Text>
        </CostCont>
    )
}

const Costing = ({navigation}) => {
    return (
        <View>
            <Header>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <Icon2 name='caretleft' size={20} color='red' />
                </TouchableOpacity>
                <Title>Costing</Title>
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
            <Slider horizontal showsHorizontalScrollIndicator={false}>
                <Box number='Units' title='2500' />
                <Box number='CPU' title='R3' />
                <Box number='Total' title='R7213' />
            </Slider>

            <Text style={{fontFamily: "Roboto-Bold", fontSize:20, marginLeft: 15, textTransform: 'uppercase', marginBottom: 10}}>Costs</Text>
            <Listings>
                <Costs item='Chicks' cost='R752' />
                <Costs item='Feed' cost='R424' />
                <Costs item='Vaccinations' cost='R124' />
                <Costs item='Medication' cost='R754' />
                <Costs item='Sawducks' cost='R457' />
                <Costs item='Heating' cost='R452' />
                <Costs item='Utility' cost='R424' />
                <Costs item='Wages' cost='R785' />
                <Costs item='Rental' cost='R454' />
                <Costs item='Indirect Costs' cost='R452' />
                <Costs item='Other' cost='R124' />

                <Total>
                    <Text style={{fontFamily: "Roboto-Bold", fontSize: 20}}>Total Direct Cost</Text>
                    <Text style={{fontFamily: "Roboto-Bold", fontSize: 20}}>R7213</Text>
                </Total>
            </Listings>
        </View>
    )
}

export default Costing

const Listings = styled.View`
    padding-left: 15px;
    padding-right: 15px;
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
    font-family: "Roboto-Medium";
`


const Slider = styled.ScrollView`
    margin-top: 10px;
    padding: 0 4px;
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
    borderWidth: 3px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    borderColor: black;
    justify-content: space-between;
`