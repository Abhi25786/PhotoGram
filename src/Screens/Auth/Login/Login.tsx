import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text
} from 'react-native';
import { useSelector } from 'react-redux';
import AnimatedTextInput from '../../../Components/AnimatedTextInput/AnimatedTextInput';
import ButtonComponent from '../../../Components/ButtonComponent';
import WrapperContainer from '../../../Components/WrapperContainer';
import navigationStrings from '../../../Navigations/navigationStrings';
import imagePath from '../../../constants/imagePath';
import { allReducer } from '../../../redux/Interface';
import colors from '../../../styles/colors';
import {
  moderateScale,
  moderateScaleVertical
} from '../../../styles/responsiveSize';
import stylefuntion from './styles';
import actions from '../../../redux/actions';
const Login = () => {
  const primaryFontFamily = useSelector(
    (state: allReducer) => state?.main?.primaryFontFamily || {},
  );
  const {t} = useTranslation();
  const navigation = useNavigation()
  const styles = stylefuntion(primaryFontFamily);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <WrapperContainer style={{paddingHorizontal: moderateScale(24)}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}} bounces={false}>
          <Image source={imagePath.logo} style={styles.logoStyle} />
          <Text style={styles.welcomeText}>{t('WELCOM_BACK')}</Text>
          <Text style={styles.loginAccountTextView}>
            {t('LOGIN_IN_TO_YOUR_ACCOUNT')}
          </Text>
          <AnimatedTextInput
            lable={t('EMAIL_OR_PHONENUMBER')}
            primaryFontFamily={primaryFontFamily}
            textInputStyle={{flex: 1}}
            value={email}
            props={{
              keyboardType: 'email-address',
              onChangeText: text => setEmail(text),
            }}
            mainContainerStyle={{marginTop: moderateScaleVertical(28)}}
          />
          {email.length > 0 ? (
            <AnimatedTextInput
              lable={t('PASSWORD')}
              primaryFontFamily={primaryFontFamily}
              textInputStyle={{flex: 1}}
              value={password}
              props={{
                keyboardType: 'email-address',
                onChangeText: text => setPassword(text),
              }}
              mainContainerStyle={{marginTop: moderateScaleVertical(28)}}
            />
          ) : null}

          <ButtonComponent
            centerTitle={'Continue'}
            primaryFontFamily={primaryFontFamily}
            containerStyle={{
              marginTop: moderateScaleVertical(52),
              position: 'absolute',

              bottom: moderateScale(19),
            }}
            onPress={() =>
              actions.setUserData({authToken: 'ciaugvuisyfdvsuyfudbk'})
            }
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <Text
        style={[
          styles.signIpText,
          {color: colors.black, fontFamily: primaryFontFamily.medium},
        ]}
        onPress={() => navigation.navigate(navigationStrings.SIGNUP)}>
        {t('DONT_HANE_ACCOUNT')}{' '}
        <Text style={styles.signIpText}>{t('JOIN_NOW')}</Text>
      </Text>
    </WrapperContainer>
  );
};

export default Login;
