import React from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components';

const Register = ({navigation}) => {
    return (
        <Screen>
            <InputContainer>
                <Input placeholder="Name" />
                <Input placeholder="Surname" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
            
            </InputContainer>
            <AvatarContainer>
                <Avatar source={require('../assets/avatar.jpg')} />
                <Upload>
                    <Text style={{fontSize: 10, color: "white", fontFamily: "Roboto-Medium"}}>Upload</Text>
                </Upload>
            </AvatarContainer>

            <LoginButton onPress={()=>navigation.navigate("Home")}>
                <Text
                style={{color: 'white', fontSize: 17, fontFamily: 'Roboto-Medium'}}>
                CREATE ACCOUNT
                </Text>
            </LoginButton>
    </Screen>
    )
}

export default Register

const AvatarContainer = styled.View`
    marginBottom: 50px;
    align-items: center;
    justify-content: center;

`

const Avatar = styled.Image`
    height: 120px;
    width: 120px;
    border-radius: 60px;
    margin-vertical: 10px;
`

const Screen = styled.View`
  background-color: white;
  flex: 1;
  padding: 20px;
`;
const Input = styled.TextInput`
  padding: 10px;
  paddingBottom: 5px
  background: white;
  borderBottomWidth: 2px;
  borderBottomColor: #555;
  marginBottom: 5px;
  color: #222;
`;

const InputContainer = styled.View`
  background: white;
  padding: 10px;
  marginTop: -20px;
  marginBottom: 10px;
`;

const LoginButton = styled.TouchableOpacity`
  background: red;
  height: 40px;
  width: 100%;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

const Upload = styled.TouchableOpacity`
    background: red;
    height: 20px;
    width: 60px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`