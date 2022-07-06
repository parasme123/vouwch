import React, { useState, useRef } from 'react';
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
import { imagepath } from '@common';
import { CustomLoader } from '@lib';
import Toast from 'react-native-simple-toast';
import styles from './otpcss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Handelotp, } from '../../reduxStore/action/doctorAction';

const OtpPage = (props, { navigation, route }) => {
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
    if (otp1 == '' || otp2 == '' || otp3 == '' || otp4 == '') {
      Toast.show('please otp');
    } else {
      Signin_CallApi();
    }
  };

  const Signin_CallApi = () => {
    let { actions } = props;
    let apiData = {
      email: props.route.params.Email,
      otp: parseInt(otp1 + otp2 + otp3 + otp4),
    };
    actions.Handelotp(apiData,setloaderVisible);

  };


  const PageNavigation = () => {
    navigation.navigate('otppage', { Email: Email })
  }

  return (
    <ImageBackground source={imagepath.background} style={{ flex: 1 }}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <KeyboardAvoidingView behavior="padding" style={{ flexGrow: 1 }}>
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



const mapStateToProps = state => ({
  // allLoginRegister: state.doctor.allLoginRegister,
});

const ActionCreators = Object.assign(
  { Handelotp },
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(OtpPage);



