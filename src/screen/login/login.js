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
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Imagepath from '../../common/imagepath';
import styles from './css';
// import { handleNavigation } from '../../navigator/navigator';
import { handleNavigation } from '../../navigator/Navigator';
import { svg, Colors } from "@common";
import { Validators, Constants, SortUrl, ApiCall, CustomLoader, } from '@lib';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postLogin } from '../../reduxStore/action/doctorAction';
import { firebaseLogin } from '../../reduxStore/action/firebaseActions';
import messaging from '@react-native-firebase/messaging';

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
    if (!Email || !Password) {
      Alert.alert("Email Or Password is required")
      return
    } else {
      Call_LoginApi();
    }
  };

  const Call_LoginApi = async () => {
    let { actions } = props;
    let fcmToken = await messaging().getToken();
    console.log("fcmToken", fcmToken);
    // return
    let apiData = {
      email: Email,
      password: Password,
      device_token: 12345,
      device_type: 'Android',
      fcmToken: fcmToken
    }
    actions.postLogin(apiData, Check_User(), setloaderVisible, (data) => loginFirebase(apiData, data));
  };

  const loginFirebase = (apiData, loginData) => {
    let { actions } = props;
    actions.firebaseLogin(apiData, loginData, Check_User(), setloaderVisible, () => PageNavigation());
  }

  const PageNavigation = () => {
    handleNavigation({
      type: 'setRoot',
      page: 'bottomtab',
      navigation: navigation,
    });
  }

  const Check_User = () => {
    if (props.route.params.UserType == 'PERSONAL') {
      return "User"
    } else {
      return "Business"
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
        contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          {/* Heading */}
          <Text style={styles.header}>Login Account</Text>
          {/* sub heading */}
          <Text style={styles.subHeader}>
            Hello, Welcome back to our {'\n'}account
          </Text>

          {/* container  */}
          <View style={styles.textInputMainView}>
            {/* textInput usernsme */}
            <View style={styles.textinputUsernameView}>
              <View style={styles.textinputpasswordView}>
                {svg.manIcon(16, 18, Colors.imputborderColor)}
              </View>
              <TextInput
                placeholder="Enter Username"
                placeholderTextColor={Colors.imputborderColor}
                style={styles.textInputname}
                onChangeText={text => {
                  setEmail(text);
                }}
                value={Email}
                keyboardType="email-address"

              />
            </View>
            {/* textInput password */}
            <View style={styles.textInputPasswordView}>
              <View style={styles.textinputpasswordView}>
                {svg.lockIcon(16, 18, Colors.imputborderColor)}
              </View>
              <TextInput
                placeholder="Enter Password"
                style={styles.textinputPassword}
                placeholderTextColor={Colors.imputborderColor}

                keyboardType="default"
                onChangeText={text => {
                  setPassword(text);
                }}
                value={Password}
                blurOnSubmit={false}
                secureTextEntry={securepasswordIcon ? true : false}
              // ref={one}
              />
              <TouchableOpacity onPress={() => securepassworddIcon()}>
                <Image
                  source={
                    securepasswordIcon ? Imagepath.eyehide : Imagepath.eye
                  }
                  tintColor={Colors.imputborderColor}
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
              {svg.googleIcon(90, 55)}
            </TouchableOpacity>
            <TouchableOpacity style={styles.fbButton}>
              {svg.fbIcon(90, 55)}
            </TouchableOpacity>
            <TouchableOpacity style={styles.twiterButton}>
              {svg.twiterIcon(90, 55)}
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
      </ScrollView>
      <CustomLoader loaderVisible={loaderVisible} />
    </ImageBackground>
  );
}

const mapStateToProps = state => ({
  allLoginData: state.doctor.allLoginData,
});

const ActionCreators = Object.assign(
  { postLogin },
  { firebaseLogin }
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)