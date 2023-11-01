import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import actions from '../../../redux/actions'
import fontfamily from '../../../styles/fontfamily'
import { useSelector } from 'react-redux'
import { allReducer, fontFamilyobject, mainInterface } from '../../../redux/Interface'

const Profile = () => {  
  return (
    <View>
      <Button title='LogOut' onPress={() => actions.setUserData({})} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})