import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import actions from '../../../redux/actions'
import WrapperContainer from '../../../Components/WrapperContainer'

const Login = () => {
  return (
    <WrapperContainer>
    <Button title='Login' onPress={()=>actions.setUserData({authToken:'ciaugvuisyfdvsuyfudbk'})}/>
    </WrapperContainer>
  )
}

export default Login

const styles = StyleSheet.create({})