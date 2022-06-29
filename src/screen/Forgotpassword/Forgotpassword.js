import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Imagepath from '../../common/imagepath';
import { useNavigation } from '@react-navigation/native';
import { CustomLoader, Validators, } from '@lib';
import { svg, Colors } from '@common';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postForgot, } from '../../reduxStore/action/doctorAction';
import styles from './forgotpasswordcss';
function ForgotPassword(props) {
  const [loaderVisible, setloaderVisible] = useState(false);
  const [Email, setEmail] = useState();
  const navigation = useNavigation();
  const Signin_Validators = () => {
    if (Validators.checkNotNull('Email', 2, 50, Email)) {
      Signin_CallApi();
    }
  };

  Signin_CallApi = () => {
    let { actions } = props;
    let apiData = {
      email: Email,
    }
    actions.postForgot(apiData, setloaderVisible, () => PageNavigation());
    // setloaderVisible(true);

  };
  const PageNavigation = () => {
    navigation.navigate('otppage', { Email: Email })
  }

  return (
    <ImageBackground source={Imagepath.background} style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          {/* Heading */}
          <Text style={styles.header}>Forgot Password</Text>
          <Text style={styles.headersubText}>Please enter your email address to reset your password </Text>
          {/* container  */}
          <View style={styles.textInputMainView}>
            {/* textInput usernsme */}
            <View style={styles.textInputView}>
              <View style={styles.textInputSubView}>
                {svg.email(16, 18, Colors.imputborderColor)}
              </View>
              <TextInput
                placeholder="Enter your email address"
                placeholderTextColor={Colors.imputborderColor}
                style={styles.textInputText}
                onChangeText={text => {
                  setEmail(text);
                }}
                value={Email}
                maxLength={40}
                keyboardType="email-address"
              />
            </View>

            {/* Login Button */}
            <TouchableOpacity
              onPress={() => Signin_Validators()}
              style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Next</Text>
            </TouchableOpacity>
          </View>

          {/* Register text */}
          <View style={styles.registerview}>
            <Text style={styles.registerText}>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('login');
              }}>
              <Text style={styles.registerButtonText}> Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <CustomLoader loaderVisible={loaderVisible} />
    </ImageBackground>
  );
}



const mapStateToProps = state => ({
  allLoginRegister: state.doctor.allLoginRegister,
});

const ActionCreators = Object.assign(
  { postForgot },
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);

