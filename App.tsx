import React, { useEffect } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Routes from './src/Navigations/Routes'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import { getItem } from './src/utils/utils'
import { fontFamilyobject, userDataObject } from './src/utils/Interface'
import actions from './src/redux/actions'


const App = () => {
  useEffect(() => {
    (async () => {
      const userData = await getItem('userData') as userDataObject
      if (!!userData.authToken) {
        actions.setUserData(userData)
      }
      const primaryFontFamily = await getItem('primaryFontFamily') as fontFamilyobject
      console.log(primaryFontFamily, 'userDatauserDatauserData');

      if (!!primaryFontFamily) {
        actions.primaryFontFamily(primaryFontFamily)

      }
    })()
  }, [])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </SafeAreaView>
  )
}

export default App

