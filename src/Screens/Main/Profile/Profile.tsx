import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import actions from '../../../redux/actions'
import fontfamily from '../../../styles/fontfamily'
import { primaryFontFamily } from '../../../redux/actions/main'
import { useSelector } from 'react-redux'
import { allReducer } from '../../../redux/Interface'
import { useTranslation } from 'react-i18next'
import WrapperContainer from '../../../Components/WrapperContainer'

const Profile = () => {
  const primaryFont = useSelector((state: allReducer) => state?.main?.primaryFontFamily)
  const {t} = useTranslation();
  return (
    <WrapperContainer >
      <Text style={{ fontFamily: primaryFont.bold }}>{t('PROFILE')}</Text>
      <Button title='LogOut' onPress={() => actions.setUserData({})} />
      {fontfamily.map((item,index) => {
        return (
          <Button key={index.toString()} title={item.fontName} onPress={() => primaryFontFamily(item)} />
            )
          }
        )
      }
    </WrapperContainer>
  )
}

export default Profile

const styles = StyleSheet.create({})