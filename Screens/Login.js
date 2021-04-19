import React, {useState, useContext} from 'react';
import {Text,View, Pressable, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {UserContext} from '../UserContext'
import {login} from '../API'
import axios from 'react-native-axios'

const Login = ({navigation}) => {
  const [user, setUser] = useContext(UserContext);
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const submit = async()=>{
    // const path = "https://demo.exultcybersolution.com/poultryfarm/api"
    // let data = {
    //   username,
    //   password,
    //   device: 1,
    //   fcm_key: 'oiweio'
    // }
    // axios.post(path, {
    //   method: 'POST', // or 'PUT'
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     'Content-Language': 'en'
    //   },
    //     body: JSON.stringify({
    //       username: "hahmad1178@gmail.com",
    //       password: 1234444,
    //       device: 1,
    //       fcm_key: 'oiweio'
    //     })
    // })
    // .then(function (response) {
    //   console.log(response.data);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    // await fetch(path, {
    //   method: 'POST', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept-Language': 'en'
    //     // 'Authorization': 'Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGVtby5leHVsdGN5YmVyc29sdXRpb24uY29tXC9wb3VsdHJ5ZmFybSIsInNlY3JhdGUiOiJRSjV6Ym9OQTJkS2ptZTE5WG5wdk0iLCJhdWQiOiJodHRwczpcL1wvZGVtby5leHVsdGN5YmVyc29sdXRpb24uY29tXC9wb3VsdHJ5ZmFybSIsImlhdCI6MTYxODU4MzMwNn0.zOziHaDYAVLYjQ-hMOhC9ribbwSstjQQatObagPO7_k', 
    //   },
    //   body: JSON.stringify(data)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    //   alert(data.message)
    // })
    // .catch((error) => {
    //   alert("Something went wrong")
    //   console.error('Error:', error);
    // });
    setUser({username: username})
  }
  return (
    <Screen>
      <ImagePoster
        resizeMode="contain"
        source={require('../assets/poster.png')}
      />
      <InputContainer>
        <Input value={username} onChangeText={(e)=>setUsername(e)} placeholder="Username" />
        <Input value={password} onChangeText={(e)=>setPassword(e)} placeholder="Password" />
        <Pressable onPress={()=>navigation.navigate("Forgot")}>
          <Text
            style={{
              marginTop: -5,
              fontSize: 12,
              color: '#444',
              fontFamily: 'Roboto-Medium',
            }}>
            Forget Password
          </Text>
        </Pressable>
      </InputContainer>
      <LoginButton onPress={()=>submit()}>
        <Text
          style={{color: 'white', fontSize: 17, fontFamily: 'Roboto-Medium'}}>
          Login
        </Text>
      </LoginButton>
      <View style={{marginTop: 15, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10}}>
        <Text>New User ?</Text> 
        <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
          <Text style={{fontFamily: "Roboto-Medium", color: 'red'}}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default Login;

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
  marginBottom: 40px;
`;

const LoginButton = styled.TouchableOpacity`
  background: red;
  height: 40px;
  width: 100%;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
