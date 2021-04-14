import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/FontAwesome'

const Unit = ({title}) => {
    const [number, setNumber] = useState(0)
    return (
        <UnitCont>
            <Text>{title}</Text>
            <Controls>
                <TouchableOpacity onPress={()=>setNumber(number - 1)}>
                    <Icon name='angle-left' size={30} color='black' />
                </TouchableOpacity>

                <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>{number}</Text>

                <TouchableOpacity onPress={()=>setNumber(number + 1)}>
                    <Icon name='angle-right' size={30} color='black' />
                </TouchableOpacity>
            </Controls>
        </UnitCont>
    )
}

export default Unit


const UnitCont = styled.View`
    margin-bottom: 7px;
    background-color: white;
    border-radius:5px;
    padding: 15px 10px;
    flex-direction: row;
    justify-content: space-between
`

const Controls = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 70px
`