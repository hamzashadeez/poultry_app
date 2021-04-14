import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

const Box = ({title, number}) => {
    return (
        <BoxCont>
            <View style={{backgroundColor: "black", height: 30, width: 30, borderRadius: 15}}></View>
            <View style={{ flex: 1, paddingLeft: 10}}>
                <Text style={{fontFamily: "Roboto-Bold", fontSize: 16}}>{number}</Text>
                <Text style={{color: "#555", marginTop: -3, fontSize: 12}}>{title}</Text>

            </View>
        </BoxCont>
    )
}

export default Box


const BoxCont = styled.View`
    background-color: white;
    border-radius: 10px;
    padding: 15px 10px;
    flex-direction: row;
    justify-content: space-around;
    width: 140px;
    align-items: center;
    margin-bottom: 10px;
    margin-right: 10px;
    elevation: 1;


`