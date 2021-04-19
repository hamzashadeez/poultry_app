import React, {useContext} from 'react'
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack'
import DrawerStack from './DrawerStack'
import {UserContext} from '../UserContext'

function MainStack() {
    const [user] = useContext(UserContext)
    return (
       <NavigationContainer>
           {/* <AuthStack /> */}
           {user.username? <DrawerStack /> : <AuthStack />}
       </NavigationContainer>
    )
}

export default MainStack
