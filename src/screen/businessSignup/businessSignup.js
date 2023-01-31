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
  FlatList
} from 'react-native';
import { imagepath, Colors, svg } from "@common";
import { Validators, CustomLoader } from '@lib';
// import RNPickerSelect from 'react-native-picker-select';
import Modal from "react-native-modal";
import Toast from 'react-native-simple-toast';
import styles from './css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postRegister, getCategories } from '../../reduxStore/action/doctorAction';
import { firebaseRegister } from '../../reduxStore/action/firebaseActions';
import { handleNavigation } from '../../navigator/Navigator';
import { useNavigation } from '@react-navigation/native';
import { contactUsUrl, WebBaseUrl } from '../../reduxStore/action/webApiUrl';
import firestore from '@react-native-firebase/firestore';
import Dropdown from '../../component/dropdown';
import messaging from '@react-native-firebase/messaging';

const BusinessSignup = (props) => {
  const usersCollection = firestore().collection('Users');
  const [mark, setMark] = useState();
  const [loaderVisible, setloaderVisible] = useState(false);
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [BusinessName, setBusinessName] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [CateList, setCateList] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [searchCatList, setSearchCatList] = useState([]);
  const [CateId, setCateId] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);
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
        // console.log('arr== categories in signup==>>>', arr);
      });
      setCateList(arr);
    }
  }, [props.allCategories])

  const checkUserisNew = async () => {
    const querySnapshot = await usersCollection.where("email", "==", email).limit(1).get();
    return querySnapshot.empty;
  }

  const Signin_Validators = async () => {
    if (
      Validators.checkNull('First Name', 2, BusinessName) &&
      Validators.checkEmail('Email', email) &&
      Validators.checkNull('Password', 7, password)
    ) {
      let isNew = await checkUserisNew();
      if (!mark) {
        Toast.show('Please Select Terms of Services and Privacy Policy', Toast.LONG);
      } else if (!isNew) {
        Toast.show('This email already registered! Please try with another Email', Toast.LONG);
      } else {
        Signin_CallApi();
      }
    }
  };

  const Signin_CallApi = async () => {
    let { actions } = props;
    let fcmToken = await messaging().getToken();
    let apiData = {
      user_type: 'Business',
      first_name: BusinessName,
      last_name: "",
      email: email,
      password: password,
      confirm_password: ConfirmPassword,
      device_type: 'Android',
      // device_token: 'Business',
      category_id: CateId.value,
      device_token: fcmToken
    };
    actions.postRegister(apiData, setloaderVisible, () => registerOnFirebase(apiData));
  };

  const registerOnFirebase = (apiData) => {
    let { actions } = props;
    actions.firebaseRegister(apiData, setloaderVisible, () => PageNavigation())
  }

  const PageNavigation = async () => {
    handleNavigation({
      type: 'setRoot',
      page: 'bottomtab',
      navigation: navigation,
    });
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    if (!isModalVisible) {
      setSearchVal("");
      setSearchCatList([])
    }
  }, [isModalVisible])

  const handleSearchCategory = (val) => {
    setSearchVal(val)
    setSearchCatList(CateList.filter((item) => item.label.toLowerCase().includes(val.toLowerCase())))
  }

  const handleCatSelect = (item) => {
    toggleModal()
    setCateId(item);
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
                secureTextEntry={true}
                style={styles.textInput}
                onChangeText={text => {
                  setpassword(text);
                }}
                value={password}
                keyboardType="default"
              />
            </View>
            <View style={styles.textInputView}>
              <View style={styles.textInputsubView}>
                {svg.lockIcon(16, 18, Colors.imputborderColor)}
              </View>
              <Dropdown
                isModalVisible={isModalVisible}
                toggleModal={toggleModal}
                handleCatSelect={handleCatSelect}
                searchVal={searchVal}
                searchCatList={searchCatList}
                CateList={CateList}
                handleSearchCategory={handleSearchCategory}
                CateId={CateId}
              />
            </View>



            <View style={styles.privacyView}>
              <TouchableOpacity
                onPress={() => chexkBox()}
                style={{ paddingRight: 5 }}>
                <Image
                  source={
                    mark
                      ? imagepath.yes
                      : imagepath.check}

                  style={styles.checkbox}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <Text style={styles.checkBoxText}>I agree to
                <Text style={styles.checkBoxText2}> Terms of Services </Text>and
                <Text onPress={() => props.navigation.navigate("webView", { url: `${WebBaseUrl}${contactUsUrl}`, title: "Privacy Policy" })}
                  style={styles.checkBoxText2}> Privacy Policy</Text>
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
  { getCategories },
  { firebaseRegister }
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessSignup)
