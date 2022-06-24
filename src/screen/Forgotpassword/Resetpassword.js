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
import Toast from 'react-native-simple-toast';
import Imagepath from '../../common/imagepath';
import { Fonts, svg } from '@common';
import { ApiCall, SortUrl, Constants, CustomLoader, Validators } from '@lib';
import { handleNavigation } from '../../navigator/Navigator';
import Colors from '../../common/Colors';
import styles from './resetpasscss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handelresetPassword } from '../../reduxStore/action/doctorAction';

const Resetpassword = (props) => {
  const [loaderVisible, setloaderVisible] = useState(false);
  const [password, setpassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');



  const Signin_Validators = () => {
    if (
      Validators.checkPassword('Password', 7, 15, password) &&
      Validators.checkNotNull('Confirm Password', 2, 20, ConfirmPassword) &&
      Validators.checkMatch(
        'Password',
        password,
        'Confirm Password',
        ConfirmPassword,
      )
    ) {
      Signin_CallApi();
    }
  };

  Signin_CallApi = () => {
    let { actions } = props;
    let apiData = {
      email: props.route.params.Email,
      password: password,
      confirm_password: ConfirmPassword,
    };
    // console.log(" apiData", apiData);

    actions.handelresetPassword(apiData, setloaderVisible,PageNavigation() );
    setloaderVisible(true);
  };
  const PageNavigation = () => {
    handleNavigation({
      type: 'setRoot',
      page: 'bottomtab',
      navigation: props.navigation,
    });
  }

  return (
    <ImageBackground source={Imagepath.background} style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <KeyboardAvoidingView behavior="padding" style={{ flexGrow: 1 }}>
          <View style={styles.container}>
            {/* Heading */}
            <Text style={styles.header}>Reset Password</Text>

            {/* container  */}
            <View style={styles.textInputMainView}>
              {/* textInput usernsme */}


              <View style={styles.textInputView}>
                <View style={styles.textInputSubView}>
                  {svg.lockIcon(16, 18, Colors.imputborderColor)}
                </View>
                <TextInput
                  placeholder="Enter your  Password"
                  placeholderTextColor={Colors.imputborderColor}
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
                  style={styles.textInputText}
                  onChangeText={text => {
                    setConfirmPassword(text);
                  }}
                  value={ConfirmPassword}
                  keyboardType="default"
                />
              </View>
              {/* Login Button */}
              <TouchableOpacity
                onPress={() => Signin_Validators()}
                style={styles.loginButton}>
                <Text style={styles.loginButtonText}>SUBMIT</Text>
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
  allFollowPost: state.doctor.allFollowPost,
});

const ActionCreators = Object.assign(
  { handelresetPassword }
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Resetpassword);
