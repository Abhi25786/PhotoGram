import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import colors from '../styles/colors';
import { moderateScale, moderateScaleVertical, width } from '../styles/responsiveSize';
import { useSelector } from 'react-redux';
import { allReducer, fontFamilyobject } from '../redux/Interface';
type propType = {
  containerStyle?: ViewStyle;
  leftImage?: ImageSourcePropType;
  leftImageStyle?: ImageStyle;
  rightImage?: ImageSourcePropType;
  rightImageStyle?: ImageStyle;
  centerTitle: string;
  centerTextStyle?: TextStyle
  primaryFontFamily:fontFamilyobject
  onPress:()=>void
};
const ButtonComponent: FC<propType> = ({
  containerStyle,
  leftImage,
  leftImageStyle,
  rightImage,
  rightImageStyle,
  centerTitle,
  centerTextStyle,
  primaryFontFamily,
  onPress
}) => {
const styles = stylefuntion(primaryFontFamily)
  return (
    <TouchableOpacity style={{...styles.mainView, ...containerStyle}} activeOpacity={1} onPress={onPress}>
        <View style={{flex: 1, flexGrow: 0.1 }}>
      {!!leftImage && (
          <Image source={leftImage} style={{...leftImageStyle}} />
          )}
        </View>
      <View style={{flex: 1, flexGrow: 0.8,}}>
        <Text style={{...styles.titlestyle, ...centerTextStyle}}>{centerTitle}</Text>
      </View>
      {!!rightImage && (
        <View style={{flex: 1, flexGrow: 0.1 }}>
          <Image source={rightImage} style={{...rightImageStyle}} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const stylefuntion =(primaryFontFamily:fontFamilyobject)=>{


const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    backgroundColor:colors.themeColor,
    width:moderateScale(width-48),
    paddingVertical:moderateScaleVertical(10),
    alignSelf:'center',
    borderRadius:moderateScale(8),

  },
  titlestyle:{
    fontFamily:primaryFontFamily.medium,
    alignSelf:'center',
    color:colors.white
  }
})
return styles
}
