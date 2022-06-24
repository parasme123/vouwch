import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Imagepath from '../../common/imagepath';
import ApiCall from '../../Lib/ApiCall';
import SortUrl from '../../Lib/SortUrl';
import Constants from '../../Lib/Constants';
import CustomLoader from '../../Lib/CustomLoader';
import {Header} from '@common';
import String from '../../common/String';
import Toast from 'react-native-simple-toast';
import {handleNavigation} from '../../navigator/navigator';
import styles from './css';

export default function OtpPage({navigation, route}) {
  const [loaderVisible, setloaderVisible] = useState(false);
  const [OtpSave, setOtpSave] = useState(route.params.Otp);

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');

  console.log('Otp', route.params.Otp);
  const Signin_Validators = () => {
    let OTP = otp1 + otp2 + otp3 + otp4;
    if (OTP.length < 4) {
      Toast.show('Please Select OTP ');
    } else if (OtpSave != OTP) {
      Toast.show('OTP Worng ');
    } else {
      Signin_CallApi(OTP);
    }
  };

  const Signin_CallApi = OTP => {
    let data = {
      email: route.params.Email,
      otp: Number(OTP),
    };
    setloaderVisible(true);

    ApiCall.ApiMethod(SortUrl.Confirm_otp, Constants.POST, data)
      .then(response => {
        setloaderVisible(false);
        if (response.status == Constants.Success) {
          // handleNavigation({ type: 'se', page: 'Resetpassword', navigation: navigation, });
          navigation.navigate('Resetpassword', {Email: route.params.Email});
        } else {
          navigation.navigate('Resetpassword', {Email: route.params.Email});
          Toast.show(response.message);
        }
      })
      .catch(err => {
        setloaderVisible(false);
      });
  };

  return (
    <ImageBackground source={Imagepath.background} style={{flex: 1}}>
      <Header  isback={true} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flex: 1}}>
        <KeyboardAvoidingView behavior="padding" style={{flexGrow: 1}}>
          <View style={styles.container}>
            <Text style={styles.header}>Confirm OTP</Text>
            <View style={styles.textInputMainView}>
              <View style={styles.otpview}>
                <View style={styles.otpBox}>
                  <TextInput
                    style={styles.otpText1234}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={firstInput}
                    onChangeText={text => {
                      setOtp1(text);
                      text && secondInput.current.focus();
                    }}
                  />
                </View>
                <View style={styles.otpBox}>
                  <TextInput
                    style={styles.otpText1234}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={secondInput}
                    onChangeText={text => {
                      setOtp2(text);
                      text
                        ? thirdInput.current.focus()
                        : firstInput.current.focus();
                    }}
                  />
                </View>
                <View style={styles.otpBox}>
                  <TextInput
                    style={styles.otpText1234}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={thirdInput}
                    onChangeText={text => {
                      setOtp3(text);
                      text
                        ? fourthInput.current.focus()
                        : secondInput.current.focus();
                    }}
                  />
                </View>
                <View style={styles.otpBox}>
                  <TextInput
                    style={styles.otpText1234}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={fourthInput}
                    onChangeText={text => {
                      setOtp4(text);
                      !text && thirdInput.current.focus();
                    }}
                  />
                </View>
              </View>

              <TouchableOpacity
                onPress={() => Signin_Validators()}
                style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Confirm OTP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <CustomLoader loaderVisible={loaderVisible} />
    </ImageBackground>
  );
}
