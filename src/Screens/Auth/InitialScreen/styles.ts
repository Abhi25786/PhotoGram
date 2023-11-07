import { StyleSheet } from "react-native";
import { fontFamilyobject } from "../../../redux/Interface";
import colors from "../../../styles/colors";
import { height, moderateScale, moderateScaleVertical, textScale, width } from "../../../styles/responsiveSize";

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
      bottomView:{
        position: 'absolute',
        bottom: moderateScaleVertical(54),
        alignItems: 'center',
        width: width,
      },
      welcomeText:{
        fontSize: textScale(36),
        fontFamily: primaryFontFamily.bold,
        color: colors.white,
      },
      connectWithStyle:{
        fontSize: textScale(14),
        fontFamily: primaryFontFamily.regular,
        color: colors.white,
      },
      logoStyle:{
        transform: [{rotateY: '180deg'}],
        height: height / 4,
        width: moderateScale(71),
        resizeMode: 'contain',
        marginBottom:moderateScaleVertical(30)
      }
    });
    return styles;
  };
  export default stylefuntion