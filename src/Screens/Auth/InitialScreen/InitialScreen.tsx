import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import ButtonComponent from '../../../Components/ButtonComponent';
import WrapperContainer from '../../../Components/WrapperContainer';
import navigationStrings from '../../../Navigations/navigationStrings';
import imagePath from '../../../constants/imagePath';
import { allReducer } from '../../../redux/Interface';
import colors from '../../../styles/colors';
import { moderateScaleVertical } from '../../../styles/responsiveSize';
import stylefuntion from './styles';

const InitialScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const primaryFontFamily = useSelector(
    (state: allReducer) => state?.main?.primaryFontFamily || {},
  );
  const styles = stylefuntion(primaryFontFamily);

  return (
    <WrapperContainer>
      <ImageBackground
        source={imagePath.intoImage}
        style={styles.backgroundImage}
        imageStyle={{resizeMode: 'cover'}}>
        <View style={styles.bottomView}>
          <Image source={imagePath.logo} style={styles.logoStyle} />
          <Text style={styles.welcomeText}>{t('WELCOME_TO_TAP')}</Text>
          <Text style={styles.connectWithStyle}>
            {t('CONTECTING_WITH_PEOPLE')}
          </Text>
          <ButtonComponent
            centerTitle={t('JOIN_NOW')}
            primaryFontFamily={primaryFontFamily}
            containerStyle={{marginTop: moderateScaleVertical(52)}}
            onPress={() => navigation.navigate(navigationStrings.LOGIN)}
          />

          <Text
            style={[
              styles.signIpText,
              {color: colors.white, fontFamily: primaryFontFamily.medium},
            ]}
            onPress={() => navigation.navigate(navigationStrings.SIGNUP)}>
            {t('ALREADY_A_MEMBER')}{' '}
            <Text style={styles.signIpText}>{t('SIGNIN')}</Text>
          </Text>
        </View>
      </ImageBackground>
    </WrapperContainer>
  );
};

export default InitialScreen;
