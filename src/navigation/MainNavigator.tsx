import { View, Text, Platform } from 'react-native'
import React, { FC } from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Colors } from '@utils/Constants';
import Home from '@modules/home';
import Account from '@modules/account';
import Category from '@modules/category';
import Cart from '@modules/cart';
import { AccountIcon, CategoryIcon, HomeIcon } from './TabIcons';

const Tab = createBottomTabNavigator();

const MainNavigator:FC = () => {
    const count = 2
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
        <Tab.Screen name="Category" component={Category} options={{ tabBarIcon:({focused,color,size})=>(
            <CategoryIcon focused={focused} color={color} size={size} />
        )}} />
       
        <Tab.Screen name='Cart' component={Cart} options={{ tabBarIcon:({focused,color,size})=>(
            <CategoryIcon focused={focused} color={color} size={size} />
        ), tabBarBadge:count >0? count:undefined, tabBarBadgeStyle:{
            height:16,
            width:16
        }}} />
         <Tab.Screen name="Account" component={Account} options={{ tabBarIcon:({focused,color,size})=>(
            <AccountIcon focused={focused} color={color} size={size} />
        )}} />
    </Tab.Navigator>
  )
}

export default MainNavigator