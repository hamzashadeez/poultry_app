import React from 'react';
import {View, Text, Pressable, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const Login = () => {
  return (
    <Screen>
        <ImagePoster  resizeMode='contain' source={require('../assets/poster.png')} />
      <InputContainer>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Pressable><Text style={{marginTop: 0, fontSize: 12, color:"#444"}}>Forget Password</Text></Pressable>
      </InputContainer>
      <LoginButton>
          <Text style={{color: 'white', fontWeight: "bold", fontSize:17}}>Login</Text>
      </LoginButton>
    </Screen>
  );
};

export default Login;

const ImagePoster = styled.Image`
    width: 100%;
    height: 240px
`;

const Screen = styled.View`
  background-color: white;
  flex: 1;
  padding: 20px;
`;
const Input = styled.TextInput`
  padding: 10px;
  background: white;
  borderBottomWidth: 2px;
  borderBottomColor: #555;
  marginBottom: 15px;
  color: #222;
`;

const InputContainer = styled.View`
    background: white;
    padding: 10px;
    marginTop: -20px;
    marginBottom: 40px
`

const LoginButton = styled.TouchableOpacity`
background: red;
height: 40px;
width: 100%;
border-radius: 20px;
align-items: center;
justify-content: center
`;