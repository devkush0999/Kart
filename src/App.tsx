
import React from 'react'
import Navigation from '@navigation/Navigation'
import { Provider } from 'react-redux'
import { persistor, store } from '@store/store'
import { PersistGate } from 'redux-persist/integration/react'


const App = () => {
  return (
            <Navigation />
  )
}

export default App