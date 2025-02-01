import { View, Text, Platform } from 'react-native'
import React, { FC } from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Colors } from '@utils/Constants';
import Home from '@modules/home';
import Account from '@modules/account';
import Category from '@modules/category';
import Cart from '@modules/cart';
import { HomeIcon } from './TabIcons';

const Tab = createBottomTabNavigator();

const MainNavigator:FC = () => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.active,
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor:Colors.inactive,
        lazy:true,
        
        tabBarStyle: {
            paddingTop:Platform.OS==="android"?0: 10
            }
    }}>
        <Tab.Screen name="Home" component={Home} options={{ tabBarIcon:({focused,color,size})=>(
            <HomeIcon focused={focused} color={color} size={size} />
        )}} />
        <Tab.Screen name="Category" component={Category} />
        <Tab.Screen name="Account" component={Account} />
        <Tab.Screen name='Cart' component={Cart} />
    </Tab.Navigator>
  )
}

export default MainNavigator