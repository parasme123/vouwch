import React, {useEffect, useState} from 'react';
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
import {Validators} from '../../Lib/Validators';
import ApiCall from '../../Lib/ApiCall';
import SortUrl from '../../Lib/SortUrl';
import Constants from '../../Lib/Constants';
import CustomLoader from '../../Lib/CustomLoader';
import RNPickerSelect from 'react-native-picker-select';
import Toast from 'react-native-simple-toast';
import styles from './css';
const BusinessSignup = ({navigation}) => {
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

  const chexkBox = () => {
    setMark(!mark);
  };

  useEffect(() => {
    Get_Categroy();
  }, []);

  const Get_Categroy = () => {
    ApiCall.ApiMethod(SortUrl.Get_categories, 'GET').then(response => {
      if (response.status == true) {
        let arr = [];
        response.data.categories.map((item, label) => {
          arr.push({label: item.name, value: item.id});
          console.log('arr====>>>', arr);
        });
        setCateList(arr);
      } else {
      }
    });
  };

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
        Check_User();
      }
    }
  };

  const Check_User = () => {
    let data = {
      email: email,
    };
    setloaderVisible(true);
    ApiCall.ApiMethod(SortUrl.CheckUser, Constants.POST, data)
      .then(response => {
        if (response.status == Constants.Success) {
          Signin_CallApi();
        } else {
          Toast.show(response.message);
        }
      })
      .catch(err => {
        setloaderVisible(false);
      });
  };

  Signin_CallApi = () => {
    let Data = {
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

    setloaderVisible(true);
    ApiCall.ApiMethod(SortUrl.Register, Constants.POST, Data)
      .then(response => {
        setloaderVisible(false);
        if (response.status == Constants.Success) {
          navigation.navigate('login');
        } else {
          Toast.show(response.message);
        }
      })
      .catch(err => {
        setloaderVisible(false);
      });
  };
  console.log('categories============CateId', CateId);
  return (
    <ImageBackground source={Imagepath.background} style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.header}>Business sign up </Text>
          <Text style={styles.headerText}>
            (Dodtors, Hospitals and clinics )
          </Text>
          <View style={styles.ImputView}>
            <View style={styles.textInputView}>
              <View style={styles.textInputsubView}>
                <Image
                  source={Imagepath.user}
                  resizeMode="contain"
                  style={styles.textInputIcoon}
                />
              </View>
              <TextInput
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
                <Image
                  source={Imagepath.user}
                  resizeMode="contain"
                  style={styles.textInputIcoon}
                />
              </View>
              <TextInput
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
                <Image
                  source={Imagepath.email}
                  resizeMode="contain"
                  style={styles.textInputIcoon}
                />
              </View>
              <TextInput
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
                <Image
                  source={Imagepath.business}
                  resizeMode="contain"
                  style={styles.textInputIcoon}
                />
              </View>
              <TextInput
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
                <Image
                  source={Imagepath.lock}
                  resizeMode="contain"
                  style={styles.textInputIcoon}
                />
              </View>
              <TextInput
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
                placeholder={{label: 'Select Categroy', value: null}}
                onValueChange={value => setCateId(value)}
                // onClose={(value) =>setCateId(value)}
                items={CateList}
                style={styles}
              />
            </View>

            <View style={styles.checkBoxView}>
              <TouchableOpacity
                onPress={() => chexkBox()}
                style={{paddingRight: 5}}>
                <Image
                  source={
                    mark
                      ? require('../../assect/icon/yes.png')
                      : require('../../assect/icon/check.png')
                  }
                  style={styles.checkBoxViewIcon}
                  resizeMode="cover"
                />
              </TouchableOpacity>

              <Text style={styles.checkBoxText}>I agree to </Text>
              <TouchableOpacity>
                <Text style={styles.checkBoxText2}>Terms of Services </Text>
              </TouchableOpacity>
              <Text style={styles.checkBoxText}>and </Text>
              <TouchableOpacity>
                <Text style={styles.checkBoxText2}>Privacy Policy</Text>
              </TouchableOpacity>
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
                  navigation.navigate('login', {UserType: 'BUSINESS'});
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

export default BusinessSignup;
