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
import LinearGradient from 'react-native-linear-gradient';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Fonts from '../../common/Fonts';
import {Validators} from '../../Lib/Validators';
import ApiCall from '../../Lib/ApiCall';
import SortUrl from '../../Lib/SortUrl';
import Constants from '../../Lib/Constants';
import CustomLoader from '../../Lib/CustomLoader';
import {Header} from '../../common/Header';
import String from '../../common/String';
import Toast from 'react-native-simple-toast';
import Colors from '../../common/Colors';
export default function OtpPage({navigation, route}) {
  const [loaderVisible, setloaderVisible] = useState(false);
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');

  const Signin_Validators = () => {
    if (otp1 == '' && otp2 == '' && otp3 == '' && otp4 == '') {
      Toast.show('please slect otp');
    } else {
      Signin_CallApi();
    }
  };

  const Signin_CallApi = () => {
    let data = {
      email: route.params.Email,
      otp: otp1 + otp2 + otp3 + otp4,
    };
    setloaderVisible(true);

    ApiCall.ApiMethod(SortUrl.VarifyOTP, Constants.POST, data)
      .then(response => {
        setloaderVisible(false);
        if (response.status == Constants.Success) {
          navigation.navigate('Confirmpassword', {Email: route.params.Email});
          //    Toast.show(response.message);
        } else {
          Toast.show(response.message);
          navigation.navigate('Confirmpassword', {Email: route.params.Email});
        }
      })
      .catch(err => {
        setloaderVisible(false);
      });
  };

  return (
    <ImageBackground source={Imagepath.background} style={{flex: 1}}>
      <Header title={String.forgot} isback={true} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flex: 1}}>
        <KeyboardAvoidingView behavior="padding" style={{flexGrow: 1}}>
          <View style={styles.container}>
            {/* Heading */}
            <Text style={styles.header}>Confirm OTP</Text>

            {/* container  */}
            <View style={styles.textInputMainView}>
              {/* textInput usernsme */}

              {/* otp  Container */}
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

              {/* Login Button */}
              <TouchableOpacity
                onPress={() => Signin_Validators()}
                style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Confirm OTP</Text>
              </TouchableOpacity>
            </View>

            {/* <OTPTextInput /> */}
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <CustomLoader loaderVisible={loaderVisible} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  saperateLineView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('50%'),
    alignSelf: 'center',
    margin: hp('2%'),
  },
  line: {
    flex: 1,
    height: hp('0.15%'),
    backgroundColor: '#737373',
  },
  orText: {
    width: wp('10%'),
    textAlign: 'center',
    color: '#737373',
    fontSize: hp('2%'),
    // fontSize:15
  },

  container: {width: '85%', alignSelf: 'center', height: '100%'},
  header: {
    color: '#000000',
    fontSize: 34,
    marginTop: hp('9%'),
    marginBottom: hp('2%'),
    fontFamily: Fonts.ProximaNovaBold,
  },
  textInputMainView: {width: '100%', alignSelf: 'center', marginTop: 70},
  textinputUsernameView: {
    flexDirection: 'row',
    borderColor: '#000000',
    borderWidth: 1,
    width: '100%',
    borderRadius: 30,
    alignSelf: 'center',
    height: 48,
    marginBottom: hp('1%'),
  },
  textinputpasswordView: {
    borderRightWidth: 1,
    borderColor: '#737373',
    height: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  usernameIcon: {
    tintColor: '#8F8B8B',
    alignSelf: 'center',
    height: 15,
    width: 15,
    alignSelf: 'center',
    marginLeft: '7%',
  },
  textInputname: {
    alignSelf: 'center',
    fontSize: 15,
    paddingLeft: '4%',
    color: '#000000',
    width: '85%',
    fontFamily: Fonts.ProximaNovaLight,
  },
  loginButton: {
    backgroundColor: 'rgba(36, 95, 199, 1)',
    alignItems: 'center',
    borderRadius: 30,
    height: 50,
    justifyContent: 'center',
    marginVertical: 30,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: Fonts.ProximaNovaSemibold,
  },
  registerview: {flexDirection: 'row', justifyContent: 'center'},
  registerText: {
    color: '#000000',
    fontSize: 17,
    fontFamily: Fonts.ProximaNovaRegular,
  },
  registerButtonText: {
    color: Colors.appcolor,
    fontSize: 17,
    fontFamily: Fonts.ProximaNovaBold,
  },
  otpview: {flexDirection: 'row', justifyContent: 'center'},
  otpText1234: {
    fontSize: 25,
    // color: Colors.DEFAULT_BLACK,
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
    width: 50,
    // backgroundColor: "pink",
    // borderRadius: 10, margin: 10
  },
  otpBox: {
    borderRadius: 5,
    borderColor: '#CCC',
    borderWidth: 1,
    margin: 10,
  },
});
