import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

const Coop = ({name, url}) => {
    return (
        <CoopCont>
            <Title>{name}</Title>
            <CoopImage resizeMode='cover' source={url}/>
        </CoopCont>
    )
}

export default Coop

const CoopCont = styled.View`
    background: whitesmoke;
    margin-bottom: 15px;
    align-items: center;
`

const Title = styled.Text`
    font-size: 20px;
    font-family: 'Roboto-Medium';
    margin-bottom: 5px;
`

const CoopImage = styled.Image`
    width: 92%;
`