import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import * as Screens from '../Screens';
import { fontFamilyobject } from '../redux/Interface';
import navigationStrings from './navigationStrings';
import { moderateScale, textScale, width } from '../styles/responsiveSize';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const Tab = createBottomTabNavigator();
type propType ={
  primaryFontFamily: fontFamilyobject,
  primaryLanguage: string,
}
export default function MainStack(props:propType) {
  const styles = stylesFun(props)

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: { fontFamily: props.primaryFontFamily.bold }
      }}

    >
      <Tab.Screen
        name={navigationStrings.HOME}
        component={Screens.Home}
        options={{
          tabBarLabel: () => {
            return <Text style={styles.lableTyle}>{t('HOME')}</Text>
          }
        }}
      />
      <Tab.Screen
        name={navigationStrings.SEARCH}
        component={Screens.Search}
        options={{
          tabBarLabel: () => {
            return <Text style={styles.lableTyle}>{t('SEARCH')}</Text>
          }
        }}
      />
      <Tab.Screen
        name={navigationStrings.POST}
        component={Screens.CreatePost}
        options={{
          tabBarLabel: () => {
            return <Text style={styles.lableTyle}>{t('POST')}</Text>
          }
        }}
      />
      <Tab.Screen
        name={navigationStrings.NOTIFICATION}
        component={Screens.Notification}
        options={{
          tabBarLabel: () => {
            return <Text style={styles.lableTyle}>{t('NOTIFICATION')}</Text>
          }
        }}
      />
      <Tab.Screen
        name={navigationStrings.PROFILE}
        component={Screens.Profile}
        options={{
          tabBarLabel: () => {
            return <Text style={styles.lableTyle}>{t('PROFILE')}</Text>
          }
        }}
      />
    </Tab.Navigator>
  )
}

export function stylesFun(props:propType) {
  const styles = StyleSheet.create({
    tabBarStyle: {
      transform:
        [{ rotateY: props.primaryLanguage == 'ar' ? '180deg' : '0deg' }], marginHorizontal: moderateScale(10)
    },
    lableTyle: {
      fontFamily: props.primaryFontFamily.medium,
      fontSize: textScale(10),
      maxWidth: width / 5,
      textAlign: 'center'

    }
  })
  return styles
}

