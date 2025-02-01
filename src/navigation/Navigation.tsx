import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '@modules/home';
import Splash from '@modules/onboard';
import { navigationRef } from './NavigationUtil';
import MainNavigator from './MainNavigator';


const  Stack = createNativeStackNavigator();

 const Navigation:FC =()=>{
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName='Splash'>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="MainNavigator" component={MainNavigator} />
            </Stack.Navigator>
        </NavigationContainer>)
}

export default Navigation; 