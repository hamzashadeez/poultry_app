import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styled from 'styled-components';

const Forgot = ({navigation}) => {
    return (
        <Screen>
      <ImagePoster
        resizeMode="contain"
        source={require('../assets/poster.png')}
      />
      <InputContainer>
        <Input placeholder="Email" />
      </InputContainer>
      <ResetButton>
        <Text
          style={{color: 'white', fontSize: 17, fontFamily: 'Roboto-Medium'}}>
          Reset Password
        </Text>
      </ResetButton>
    </Screen>
    )
}

export default Forgot


const ImagePoster = styled.Image`
  width: 100%;
  height: 240px;
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
  marginBottom: 10px;
`;

const ResetButton = styled.TouchableOpacity`
  background: red;
  height: 40px;
  width: 100%;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
