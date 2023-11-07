import { StyleSheet } from "react-native";
import { moderateScale, moderateScaleVertical, textScale } from "../../../styles/responsiveSize";
import { fontFamilyobject } from "../../../redux/Interface";
import colors from "../../../styles/colors";

const styles = (primaryFontFamily: fontFamilyobject) => {
    const styles = StyleSheet.create({
      logoStyle: {
        height: moderateScale(64),
        width: moderateScale(54),
        tintColor: colors.themeColor,
        resizeMode: 'contain',
        marginTop: moderateScaleVertical(25),
        transform: [{rotateY: '180deg'}],
      },
      welcomeText: {
        color: colors.black,
        marginTop: moderateScaleVertical(27),
        fontSize: textScale(30),
        fontFamily: primaryFontFamily.bold,
      },
      loginAccountTextView: {
        color: colors.black,
        marginTop: moderateScaleVertical(8),
        fontSize: textScale(14),
        fontFamily: primaryFontFamily.regular,
        opacity: 0.5,
      },
      signIpText: {
        color: colors.themeColor,
        fontFamily: primaryFontFamily.bold,
        fontSize: textScale(14),
        marginBottom: moderateScaleVertical(24),
        textAlign:'center'
      },
    });
    return styles;
  };
  export default styles