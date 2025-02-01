import { View, Text, StyleSheet, Image } from 'react-native'
import React, { FC, useEffect } from 'react'
import { Colors, screenWidth } from '@utils/Constants'
import { resetAndNavigate } from '@navigation/NavigationUtil'

const Splash:FC = () => {
  useEffect(()=>{
     const timerId = setTimeout(() => {
      resetAndNavigate("MainNavigator");
     }, 3000)
     return () => clearTimeout(timerId)
  }, [])
  return (
    <View style={styles.container}>
      <Image source={require('@assets/images/logo_t.png')} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
     container:{
      flex:1,
      backgroundColor:Colors.primary,
      justifyContent:'center',
      alignItems:'center'
     },
     image:{
      width:screenWidth *0.35,
      height:screenWidth *0.35,
      resizeMode:'contain',
      }
})

export default Splash