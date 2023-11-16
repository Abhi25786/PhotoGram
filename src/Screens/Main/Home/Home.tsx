import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { changePrimaryTranslation } from '../../../redux/actions/main'
import { useSelector } from 'react-redux'
import { allReducer } from '../../../redux/Interface'
import { useTranslation } from 'react-i18next'
import WrapperContainer from '../../../Components/WrapperContainer'

const Home = () => {
  const primaryFont = useSelector((state: allReducer) => state?.main?.primaryFontFamily)
  const {t} = useTranslation();
  return (
 <WrapperContainer>
  
 </WrapperContainer>
  )
}

export default Home

const styles = StyleSheet.create({})