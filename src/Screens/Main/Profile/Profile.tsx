import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import actions from '../../../redux/actions'

const Profile = () => {  
  return (
    <View>
      <Button title='LogOut' onPress={() => actions.setUserData({})} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})