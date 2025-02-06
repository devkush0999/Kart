import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../store/store'

const Home = () => {
  return (
    <View>
      {/* <Provider store={store}> */}
      <Text>Home</Text>
      {/* </Provider> */}
    </View>
  )
}

export default Home