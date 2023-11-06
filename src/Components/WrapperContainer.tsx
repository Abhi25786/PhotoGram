import { SafeAreaView, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import colors from '../styles/colors'
interface ComponentProps {
    children: React.ReactNode
    style?:ViewStyle
}
const WrapperContainer: FC<ComponentProps> = ({ children,style }) => {
    return (
        <View style={{...styles.containerStyle,...style}}>
            <SafeAreaView style={{flex:1}}>
            {children}
            </SafeAreaView>
        </View>
    )
}

export default WrapperContainer

const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor:colors.white,
        flex:1
    }
})