import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  Linking,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { imagepath, Colors, svg } from "@common";
import { Validators, CustomLoader } from '@lib';
import RNPickerSelect from 'react-native-picker-select';
import Toast from 'react-native-simple-toast';
import styles from './css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postRegister, getCategories } from '../../reduxStore/action/doctorAction';
import { handleNavigation } from '../../navigator/Navigator';
import { useNavigation } from '@react-navigation/native';
const BusinessSignup = (props) => {
  const [mark, setMark] = useState();
  const [loaderVisible, setloaderVisible] = useState(false);
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [BusinessName, setBusinessName] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [CateList, setCateList] = useState([]);
  const [CateId, setCateId] = useState();
  const navigation = useNavigation();
  const chexkBox = () => {
    setMark(!mark);
  };

  useEffect(() => {
    Get_Categroy();
    Call_CategouryApis();
  }, []);
  // handelCategories
  const Call_CategouryApis = () => {
    let { actions } = props;
    actions.getCategories();
    // console.log("getCategoriesljsalfja---------------", props.allCategories);

  };
  const Get_Categroy = () => {
    let { actions } = props;
    actions.getCategories();
  };

  useEffect(() => {
    if (props.allCategories.status == true) {
      let arr = [];
      props.allCategories.data.categories.map((item, label) => {
        arr.push({ label: item.name, value: item.id });
        console.log('arr== categories in signup==>>>', arr);
      });
      setCateList(arr);
    }
  }, [props.allCategories])

  const Signin_Validators = () => {
    if (
      Validators.checkNotNull('First Name', 2, 20, firstname) &&
      Validators.checkNotNull('Last Name', 2, 20, lastname) &&
      Validators.checkNotNull('Email', 2, 20, email) &&
      Validators.checkNotNull('Business Name', 2, 20, BusinessName) &&
      Validators.checkEmail('Email', email) &&
      Validators.checkPassword('Password', 7, 15, password)
    ) {
      if (!mark) {
        Toast.show('Please Select Terms of Services and Privacy Policy');
      } else {
        Signin_CallApi();
      }
    }
  };

  const Signin_CallApi = () => {
    let { actions } = props;
    let apiData = {
      user_type: 'Business',
      first_name: firstname,
      last_name: lastname,
      email: email,
      password: password,
      confirm_password: ConfirmPassword,
      business_name: BusinessName,
      device_type: 'Android',
      device_token: 'Business',
      category_id: CateId,
    };
    actions.postRegister(apiData, setloaderVisible, () => PageNavigation());
    setloaderVisible(true);
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
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.header}>Business sign up </Text>
          <Text style={styles.headerText}>
            (Dodtors, Hospitals and clinics )
          </Text>
          <View style={styles.ImputView}>
            <View style={styles.textInputView}>
              <View style={styles.textInputsubView}>
                {svg.manIcon(16, 18, Colors.imputborderColor)}
              </View>
              <TextInput
                placeholderTextColor={Colors.imputborderColor}
                placeholder="Enter your first name"
                style={styles.textInput}
                onChangeText={text => {
                  setfirstname(text);
                }}
                value={firstname}
                maxLength={40}
                keyboardType="default"
              />
            </View>
            <View style={styles.textInputView}>
              <View style={styles.textInputsubView}>
                {svg.manIcon(16, 18, Colors.imputborderColor)}
              </View>
              <TextInput
                placeholderTextColor={Colors.imputborderColor}
                placeholder="Enter your last name"
                style={styles.textInput}
                onChangeText={text => {
                  setlastname(text);
                }}
                value={lastname}
                maxLength={40}
                keyboardType="default"
              />
            </View>
            <View style={styles.textInputView}>
              <View style={styles.textInputsubView}>
                {svg.email(16, 18, Colors.imputborderColor)}
              </View>
              <TextInput
                placeholderTextColor={Colors.imputborderColor}
                placeholder="Enter your email address"
                style={styles.textInput}
                onChangeText={text => {
                  setemail(text);
                }}
                value={email}
                maxLength={40}
                keyboardType="email-address"
              />
            </View>
            <View style={styles.textInputView}>
              <View style={styles.textInputsubView}>
                {svg.businessIcon(16, 18, Colors.imputborderColor)}
              </View>
              <TextInput
                placeholderTextColor={Colors.imputborderColor}
                placeholder="Enter your  business name"
                style={styles.textInput}
                onChangeText={text => {
                  setBusinessName(text);
                }}
                value={BusinessName}
                keyboardType="default"
              />
            </View>

            <View style={styles.textInputView}>
              <View style={styles.textInputsubView}>
                {svg.lockIcon(16, 18, Colors.imputborderColor)}
              </View>
              <TextInput
                placeholderTextColor={Colors.imputborderColor}
                placeholder="Enter your password"
                style={styles.textInput}
                onChangeText={text => {
                  setpassword(text);
                }}
                value={password}
                // maxLength={8}
                keyboardType="default"
              />
            </View>

            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 0,
                paddingLeft: 10,
                borderColor: '#CCC',
                borderWidth: 1,
                borderRadius: 30,
              }}>
              <RNPickerSelect
                placeholderTextColor={Colors.imputborderColor}
                placeholder={{ label: 'Select Categroy', value: null }}
                onValueChange={value => setCateId(value)}
                // onClose={(value) =>setCateId(value)}
                items={CateList}
                style={styles}
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
              style={styles.continuebtn}>
              <Text style={styles.continuebtnText}>CONTINUE</Text>
            </TouchableOpacity>

            <View style={styles.detailbutton}>
              <Text style={styles.detailbuttonText1}>
                Already have an account?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('login', { UserType: 'BUSINESS' });
                }}>
                <Text style={styles.sigininTextButton}> Sign in</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>
      <CustomLoader loaderVisible={loaderVisible} />
    </ImageBackground>
  );
};


const mapStateToProps = state => ({
  allRegisterData: state.doctor.allRegisterData,
  allCategories: state.doctor.allCategories,
});

const ActionCreators = Object.assign(
  { postRegister },
  { getCategories }
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessSignup)
