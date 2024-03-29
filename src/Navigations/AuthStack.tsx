import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Screens from '../Screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from './navigationStrings';
import { fontFamilyobject } from '../redux/Interface';


const Stack = createNativeStackNavigator();

export const AuthStack = (primaryFontFamily: fontFamilyobject) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={navigationStrings.INITIAL_SCREEN} component={Screens.InitialScreen} />
      <Stack.Screen name={navigationStrings.LOGIN} component={Screens.Login} />
      <Stack.Screen name={navigationStrings.SIGNUP} component={Screens.SignUp} />
    </Stack.Navigator>
  )
}


