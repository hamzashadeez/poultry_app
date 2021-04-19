import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Feather'

const ListItem = ({head, sub, extra})=>{
    return(
        <List>
            <Text style={{fontSize: 17, fontFamily: "Roboto-Medium"}}>{head}</Text>
            <View style={{flexDirection: "row", alignItems: 'center', justifyContent: "space-between"}}>
                <Text style={{color: 'gold'}}>{sub}</Text>
                <Text style={{color: 'gold'}}>{extra}</Text>
            </View>
        </List>
    )
}

const Record = ({label, list, showBox}) => {
    return (
        <RecordBox>
            <Text style={{fontFamily: "Roboto-Bold", fontSize: 17, marginBottom: 10}}>{label}</Text>
            <Box>
                <IconBox>
                   <Icon name='plus' size={14} color='black' />
                </IconBox>
               {list.map(li => <ListItem key={li.name} head={li.name} sub={li.qty} extra={li.extra} />)}
            </Box>
        </RecordBox>
    )
}

export default Record;

const RecordBox = styled.View`
    width: 95%;
    margin: 10px auto;
    height: 270px;
`

const Box = styled.ScrollView`
    background-color: lightgrey;
    border-radius: 5px;
    height: 234px;
    z-index: 20
`


const IconBox = styled.TouchableOpacity`
    background-color: whitesmoke;
    align-items: center;
    justify-content: center;
    height: 26px;
    width: 26px;
    border-radius: 13px;
    margin: 5px 5px 5px auto;
`

const List = styled.View`
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 5px;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
`    