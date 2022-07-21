import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  Linking,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import { CustomLoader, Validators } from '@lib';
import { handleNavigation } from '../../navigator/Navigator';
import styles from './css';
import { svg, Colors, imagepath } from "@common";
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postRegister } from '../../reduxStore/action/doctorAction';

const Signup = (props) => {
  const [mark, setMark] = useState();
  const [loaderVisible, setloaderVisible] = useState(false);
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();
  const chexkBox = () => {
    setMark(!mark);
  };

  const Signin_Validators = () => {
    if (
      Validators.checkNull('First Name', 2, firstname) &&
      Validators.checkNull('Last Name', 2,  lastname) &&
      Validators.checkEmail('Email', email) &&
      Validators.checkNull('Password', 8,  password) &&
      Validators.checkNull('Confirm Password', 8,  ConfirmPassword) &&
      Validators.checkMatch('Password', password, 'Confirm Password', ConfirmPassword,)
    ) {
      if (!mark) {
        Toast.show('Please Select Terms of Services and Privacy Policy');
      } else {
        Signup_CallApi();
      }
    }
  };
  const Signup_CallApi = () => {
    let { actions } = props;
    let apiData = {
      user_type: 'User',
      first_name: firstname,
      last_name: lastname,
      email: email,
      password: password,
      confirm_password: ConfirmPassword,
      device_type: 'Android',
      device_token: 'abcd',
    };
    actions.postRegister(apiData, setloaderVisible, () => PageNavigation());
  };

  const PageNavigation = () => {
    handleNavigation({
      type: 'setRoot',
      page: 'bottomtab',
      navigation: navigation,
    });
  }

  return (
    <ImageBackground source={imagepath.background} style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Sign up</Text>
          <Text style={styles.headerSubText}>Create your personal account</Text>
          {/* <View style={styles.subContainer}> */}
          <View style={styles.textInputView}>
            <View style={styles.textInputSubView}>
              {svg.manIcon(16, 18, Colors.imputborderColor)}
            </View>
            <TextInput
              placeholderTextColor={Colors.imputborderColor}
              placeholder="Enter your first name"
              style={styles.textInputText}
              onChangeText={text => {
                setfirstname(text);
              }}
              value={firstname}
              keyboardType="default"
            />
          </View>
          <View style={styles.textInputView}>
            <View style={styles.textInputSubView}>
              {svg.manIcon(16, 18, Colors.imputborderColor)}
            </View>
            <TextInput
              placeholderTextColor={Colors.imputborderColor}
              placeholder="Enter your last name"
              style={styles.textInputText}
              onChangeText={text => {
                setlastname(text);
              }}
              value={lastname}

              keyboardType="default"
            />
          </View>
          <View style={styles.textInputView}>
            <View style={styles.textInputSubView}>
              {svg.email(16, 18, Colors.imputborderColor)}
            </View>
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor={Colors.imputborderColor}
              style={styles.textInputText}
              onChangeText={text => {
                setemail(text);
              }}
              value={email}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.textInputView}>
            <View style={styles.textInputSubView}>
              {svg.lockIcon(16, 18, Colors.imputborderColor)}
            </View>
            <TextInput
              placeholder="Enter your  Password"
              placeholderTextColor={Colors.imputborderColor}
              secureTextEntry={true}
              style={styles.textInputText}
              onChangeText={text => {
                setpassword(text);
              }}
              value={password}
              keyboardType="default"
            />
          </View>
          <View style={styles.textInputView}>
            <View style={styles.textInputSubView}>
              {svg.lockIcon(16, 18, Colors.imputborderColor)}
            </View>
            <TextInput
              placeholder="Enter Confirm Password"
              placeholderTextColor={Colors.imputborderColor}
              secureTextEntry={true}
              style={styles.textInputText}
              onChangeText={text => {
                setConfirmPassword(text);
              }}
              value={ConfirmPassword}
              keyboardType="default"
            />
          </View>
          <View style={styles.privacyView}>
            <TouchableOpacity
              onPress={() => chexkBox()}
              style={{ paddingRight: 5 }}>
              <Image
                source={
                  mark
                    ? require('../../assect/icon/yes.png')
                    : require('../../assect/icon/check.png')
                }
                style={styles.checkbox}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <Text style={styles.checkBoxText}>I agree to
              <Text style={styles.checkBoxText2}> Terms of Services </Text>and
              <Text onPress={() => { Linking.openURL('https://apponedemo.top/vouwch/api/privacy-policy-app') }} style={styles.checkBoxText2}> Privacy Policy</Text>
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              Signin_Validators();
            }}
            style={styles.signupButton}>
            <Text style={styles.signupButtonText}>SIGNUP</Text>
          </TouchableOpacity>

          {/* {/ Register text /} */}
          <View style={styles.signinView}>
            <Text style={styles.textsignin}>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('login', { UserType: 'PERSONAL' });
              }}>
              <Text style={styles.button}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <CustomLoader loaderVisible={loaderVisible} />
    </ImageBackground>
  );
};




const mapStateToProps = state => ({
  allLoginRegister: state.doctor.allLoginRegister,
});

const ActionCreators = Object.assign(
  { postRegister }
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
