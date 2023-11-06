import {Alert, Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import WrapperContainer from '../../../Components/WrapperContainer';
import imagePath from '../../../constants/imagePath';
import ButtonComponent from '../../../Components/ButtonComponent';
import colors from '../../../styles/colors';
import {useSelector} from 'react-redux';
import {allReducer, fontFamilyobject} from '../../../redux/Interface';
import {
  moderateScaleVertical,
  textScale,
  width,
} from '../../../styles/responsiveSize';
import fontfamily from '../../../styles/fontfamily';
import { strings } from '../../../constants/lang';
const InitialScreen = () => {
  const ref = useRef();

  const primaryFontFamily = useSelector(
    (state: allReducer) => state?.main?.primaryFontFamily || {},
  );
  const styles = stylefuntion(primaryFontFamily);

  return (
    <WrapperContainer>
      <ImageBackground
        source={imagePath.intoImage}
        style={styles.backgroundImage}
        imageStyle={{resizeMode: 'stretch'}}>
        <View
          style={{
            position: 'absolute',
            bottom: moderateScaleVertical(54),
            alignItems: 'center',
            width: width,
          }}>
          <Text style={{
            fontSize:textScale(36),
            fontFamily:primaryFontFamily.bold,
            color:colors.white
            }}>{strings('WELCOME_TO_TAP')}</Text>
          <Text style={{     fontSize:textScale(14),
            fontFamily:primaryFontFamily.regular,
            color:colors.white}}>{strings('CONTECTING_WITH_PEOPLE')}</Text>
          <ButtonComponent
            centerTitle="Join Now"
            primaryFontFamily={primaryFontFamily}
            containerStyle={{marginTop: moderateScaleVertical(52)}}
            onPress={()=>Alert.alert('eadu')}
          />
          <Text
            style={[
              styles.signIpText,
              {color: colors.white, fontFamily: primaryFontFamily.medium},
            ]}>
            {strings('ALREADY_A_MEMBER')} <Text style={styles.signIpText}>{strings('SIGNIN')}</Text>
          </Text>
        </View>
      </ImageBackground>
    </WrapperContainer>
  );
};

export default InitialScreen;
const stylefuntion = (primaryFontFamily: fontFamilyobject) => {
  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
    },
    signIpText: {
      color: colors.themeColor,
      fontFamily: primaryFontFamily.bold,
      fontSize: textScale(14),
      marginTop: moderateScaleVertical(24),
    },
  });
  return styles;
};
