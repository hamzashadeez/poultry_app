import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import AdBanner from '../Components/AdBanner';
import Coop from '../Components/Coop';
const Home = () => {
    return (
        <Screen>
            <Header>
                <Icon2 name='caretleft' size={20} color='red' />
                <Title>Home</Title>
                <TouchableOpacity style={{backgroundColor: "red", height:26, width: 26, borderRadius: 13, alignItems: 'center', justifyContent: "center"}}>
                    <Icon name='md-menu-sharp' size={20} color='white' />
                </TouchableOpacity>
            </Header>
            <AdBanner />
            <Container showsVerticalScrollIndicator={false}>
                <Coop name='Coop 1' url={require('../assets/coop1.png')} />
                <Coop name='Coop 2' url={require('../assets/coop2.png')} />
                <Coop name='Coop 3' url={require('../assets/coop2.png')} />
            </Container>
        </Screen>
    )
}

export default Home

const Screen = styled.View`
  background-color: white;
  flex: 1;
`;

const Container = styled.ScrollView`
    flex: 1;
    borderTopWidth: 5px;
    borderTopColor: gold;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px
`

const Title = styled.Text`
    color: black;
    font-size: 17px;
    font-family: "Roboto-Medium"
`

const Header = styled.View`
    padding: 10px;
    borderBottomWidth: 5px;
    borderBottomColor: gold;
    alignItems: center;
    justifyContent: space-between;
    flexDirection: row
`