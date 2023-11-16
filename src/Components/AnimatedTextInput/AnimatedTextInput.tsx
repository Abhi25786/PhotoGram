import {
  Alert,
  Image,
  ImageSourcePropType,
  ImageStyle,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC, memo, useEffect, useRef, useState} from 'react';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import {bottomToTopAnimation} from './animatedFunctions';
import colors from '../../styles/colors';
import {fontFamilyobject} from '../../redux/Interface';
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)
type propType = {
  lable: string;
  textInputStyle?: TextStyle;
  primaryFontFamily: fontFamilyobject;
  props: TextInputProps;
  rightImageStyle?: ImageStyle;
  leftImageIcon?: ImageSourcePropType;
  value: string;
  mainContainerStyle?: ViewStyle;
};
const AnimatedTextInput: FC<propType> = ({
  lable,
  textInputStyle,
  primaryFontFamily,
  rightImageStyle,
  leftImageIcon,
  value,
  mainContainerStyle,
  props,
}) => {
  const styles = stylefuntion(primaryFontFamily);

  console.log(value, 'valuevalue', value.length > 0);

  let animatedValue = useSharedValue(0);
  const textInputRef = useRef();
  const [keyboardDidHide, setKeyboardDidHide] = useState(false);


  useEffect(() => {
    if (!!keyboardDidHide) {
      animatedValue.value = withTiming(1, {duration: 300});
    } else if (!keyboardDidHide && value.length > 0) {
      return;
    } else {
      animatedValue.value = withTiming(0, {duration: 300});
    }
  }, [keyboardDidHide]);


  return (
    <AnimatedTouchableOpacity style={[styles.mainContainer, mainContainerStyle]}      
         onPress={() => textInputRef.current.focus()}
         activeOpacity={1}
    >
      {!!lable && (
        <Animated.Text
          onPress={() => textInputRef.current.focus()}
        
          style={[
            styles.lableStyle,
            bottomToTopAnimation(
              animatedValue,
              [0, 1, 0],
              [moderateScaleVertical(15), -10, moderateScaleVertical(15), 100],
            ),
          ]}>
          {lable}
        </Animated.Text>
      )}
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={[styles.textStyle, textInputStyle]}
          ref={textInputRef}
          focusable={true}
          value={value}
          {...props}
          onFocus={()=>setKeyboardDidHide(true)}
          onBlur={()=>setKeyboardDidHide(false)}
        />
        {leftImageIcon ? (
          <Image style={rightImageStyle} source={leftImageIcon} />
        ) : null}
      </View>
    </AnimatedTouchableOpacity>
  );
};

export default AnimatedTextInput;
const stylefuntion = (primaryFontFamily: fontFamilyobject) => {
  const styles = StyleSheet.create({
    mainContainer: {
      borderWidth: 1,
      borderRadius: moderateScale(8),
      borderColor: colors.lightGrey,
      padding: moderateScaleVertical(16),
    },
    textStyle: {
      fontSize: textScale(16),
      fontFamily: primaryFontFamily.regular,
      flex: 0.9,
    },
    lableStyle: {
      backgroundColor: colors.white,
      position: 'absolute',
      zIndex: 100,
      left: moderateScale(16),
      paddingHorizontal: moderateScale(5),
      color: colors.lightGrey,
      fontFamily: primaryFontFamily.regular,
    },
  });
  return styles;
};
