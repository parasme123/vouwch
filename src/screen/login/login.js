import React, { useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import Imagepath from '../../common/imagepath';
import styles from './css';
import { handleNavigation } from '../../navigator/Navigator';
import { AsyncStorageHelper, Constants, SortUrl, ApiCall, CustomLoader, } from '@lib';
import { Validators } from '../../Lib/Validators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postLogin } from '../../reduxStore/action/doctorAction';

const Login = (props, { route }) => {
  const navigation = useNavigation();
  const [securepasswordIcon, setSecurepassworddIcon] = useState(true);
  const [loaderVisible, setloaderVisible] = useState(false);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  // const  personal  = route.params;
  const personal = props.route.params ? props.route.params.personal : false;

  const securepassworddIcon = () => {
    setSecurepassworddIcon(!securepasswordIcon);
  };

  const Signin_Validators = () => {
    if (
      Validators.checkNotNull('Email', 2, 20, Email) &&
      Validators.checkNotNull('Password', 2, 20, Password)
    ) {
      Call_LoginApi();
    }
  };

  const Call_LoginApi = () => {
    let { actions } = props;
    let apiData = {
      email: Email,
      password: Password,
      device_token: 12345,
      device_type: 'Android',
    }
    actions.postLogin(apiData, Check_User(), setloaderVisible, () => PageNavigation());
  };




  const PageNavigation = () => {
    handleNavigation({
      type: 'setRoot',
      page: 'bottomtab',
      navigation: navigation,
    });
  }

  const Check_User = () => {
    if (props.route.params.UserType == 'PERSONAL') {
      return "personal"
    } else {
      return "business"
    }
  };


  const Registernow = () => {
    if (props.route.params.UserType == 'PERSONAL') {
      navigation.navigate('signup');
    } else {
      navigation.navigate('business');
    }
  };

  return (
    <ImageBackground source={Imagepath.background} style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1 }}>
        <KeyboardAvoidingView behavior="padding" style={{ flexGrow: 1 }}>
          <View style={styles.container}>
            {/* Heading */}
            {/* <View style={{ justifyContent: "center", width: "100%", alignSelf: "center" }}> */}
            <Text style={styles.header}>Login Account</Text>
            {/* sub heading */}
            <Text style={styles.subHeader}>
              Hello, Welcome back to our {'\n'}account
            </Text>
            {/* </View> */}

            {/* container  */}
            <View style={styles.textInputMainView}>
              {/* textInput usernsme */}
              <View style={styles.textinputUsernameView}>
                <View style={styles.textinputpasswordView}>
                  <Image
                    source={Imagepath.user}
                    resizeMode="contain"
                    style={styles.usernameIcon}
                  />
                </View>
                <TextInput
                  placeholder="Enter Username"
                  style={styles.textInputname}
                  onChangeText={text => {
                    setEmail(text);
                  }}
                  value={Email}
                  maxLength={40}
                  keyboardType="email-address"
                />
              </View>
              {/* textInput password */}
              <View style={styles.textInputPasswordView}>
                <View style={styles.textinputpasswordView}>
                  <Image
                    source={Imagepath.lock}
                    resizeMode="contain"
                    style={styles.passwordIcon}
                  />
                </View>
                <TextInput
                  placeholder="Enter Password"
                  style={styles.textinputPassword}
                  keyboardType="default"
                  onChangeText={text => {
                    setPassword(text);
                  }}
                  value={Password}
                  maxLength={20}
                  blurOnSubmit={false}
                  secureTextEntry={securepasswordIcon ? true : false}
                // ref={one}
                />
                <TouchableOpacity onPress={() => securepassworddIcon()}>
                  <Image
                    source={
                      securepasswordIcon ? Imagepath.eyehide : Imagepath.eye
                    }
                    tintColor="#CCC"
                    style={{ width: 25, height: 25 }}
                  />
                </TouchableOpacity>
              </View>

              {/* Forgot password */}
              <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('forgotpassword')}>
                <Text style={styles.forgotButtontext}>Forgot password?</Text>
              </TouchableOpacity>
              {/* Login Button */}
              <TouchableOpacity
                onPress={() => Signin_Validators()}
                style={styles.loginButton}>
                <Text style={styles.loginButtonText}>LOGIN</Text>
              </TouchableOpacity>
            </View>
            {/* Or line */}
            <View style={styles.orLineView}>
              <View style={styles.subView} />
              <View>
                <Text style={styles.orText}>or continue with</Text>
              </View>
              <View style={styles.subView} />
            </View>
            {/* social button */}
            <View style={styles.socialButtonView}>
              <TouchableOpacity style={styles.googleButton}>
                <Image style={styles.googleIcon} source={Imagepath.google} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.fbButton}>
                <Image style={styles.fbIcon} source={Imagepath.fb} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.twiterButton}>
                <Image style={styles.twiterIcon} source={Imagepath.twitter} />
              </TouchableOpacity>
            </View>

            {/* Register text */}
            <View style={styles.registerview}>
              <Text style={styles.registerText}>Not a member? </Text>
              <TouchableOpacity
                onPress={() => {
                  Registernow();
                }}>
                <Text style={styles.registerButtonText}> Register now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <CustomLoader loaderVisible={loaderVisible} />
    </ImageBackground>
  );
}




const mapStateToProps = state => ({
  allLoginData: state.doctor.allLoginData,
});

const ActionCreators = Object.assign(
  { postLogin }
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)