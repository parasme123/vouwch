import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
  Modal,
  PermissionsAndroid,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import { useNavigation } from '@react-navigation/native';

import { String, Header, Fonts, imagepath, Colors, } from '@common';
import RNPickerSelect from 'react-native-picker-select';
import { Constants, SortUrl, ApiCall, AsyncStorageHelper, Validators } from '@lib';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HandlDocProfil, getCategories } from '../../reduxStore/action/doctorAction';
import { handleNavigation } from '../../navigator/Navigator';


const { width, height } = Dimensions.get('window');
const Editprofile = (props) => {
  const [Location, setLocation] = useState('');
  const [Hours, setHours] = useState();
  const [Aboutus, setAboutus] = useState('');
  const [loaderVisible, setloaderVisible] = useState(false);
  const [CateList, setCateList] = useState([]);
  const [CateId, setCateId] = useState();
  const navigation = useNavigation();
  useEffect(() => {
    Get_Categroy();
  }, []);

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

  const Account_SettingApi = () => {
    if (
      Validators.checkNotNull('Service Location', 1, 60, Hours) &&
      Validators.checkNotNull('Location', 3, 15, Location) &&
      Validators.checkNotNull('Aboutus', 2, 60, Aboutus)
    ) {
      Signin_Validators();
    }
  }

  const Signin_Validators = () => {
    let { actions } = props;
    let apiData = {
      bussiness_services: CateId,
      bussiness_hours: Hours,
      location: Location,
      about_us: Aboutus,
    };
    actions.HandlDocProfil(apiData, () => setloaderVisible(), () => PageNavigation());

  };
  const PageNavigation = () => {
    handleNavigation({
      type: 'setRoot',
      page: 'bottomtab',
      navigation: navigation,
    });
  }
  return (
    <ImageBackground source={imagepath.background} style={styles.imagebg}>
      {/*  Header*/}
      <Header title={String.ProfileSetting} isback={'bottomtab'} />

      <View style={styles.headerView2}>
        <TouchableOpacity>
          <Image
            style={styles.headerbuttonIcon}
            source={imagepath.Edit}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 90 }}>
        {/* container */}

        {/* details */}
        <Text style={styles.textInputHeader}>Services</Text>

        <View
          style={{
            marginHorizontal: 20,
            borderColor: '#CECECE',
            borderWidth: 1,
            borderRadius: 10,
          }}>
          <RNPickerSelect
            placeholder={{ label: 'Select Categroy', value: null }}
            onValueChange={value => setCateId(value)}
            // onClose={(value) =>setCateId(value)}
            items={CateList}
            style={styles}
          />
        </View>

        <Text style={styles.textInputHeader}>Service Location</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="default"
          placeholder="Serivice Location"
          placeholderTextColor={'#737373'}
          onChangeText={text => {
            setLocation(text);
          }}
        />
        <Text style={styles.textInputHeader}>Business Hours</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="default"
          placeholder="hours"
          placeholderTextColor={'#737373'}
          onChangeText={text => {
            setHours(text);
          }}
        />
        <Text style={styles.textInputHeader}>About Us</Text>
        <TextInput
          style={styles.textInputAbout}
          keyboardType="default"
          placeholder="Message"
          multiline={true}
          placeholderTextColor={'#737373'}
          onChangeText={text => {
            setAboutus(text);
          }}
        />

        <TouchableOpacity
          onPress={() => Account_SettingApi()}
          style={styles.button}>
          <Text style={styles.textButton}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imagebg: { flex: 1 },
  containerView: {
    height: 65,
    width: '100%',
    backgroundColor: Colors.appcolor,
  },
  arrowiconView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    width: '90%',
    alignSelf: 'center',
  },
  arrowicon: { height: 21, width: 31 },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    paddingTop: 20,
  },
  headerView2: { position: 'absolute', top: 15, right: 10 },
  profileImageview: { alignItems: 'center', position: 'relative', marginTop: 20 },
  ProfileImage: { height: 120, width: 120, borderRadius: 100 },
  CameraButton: { position: 'absolute', paddingLeft: 100, paddingTop: 20 },
  CameraImage: { height: 28, width: 28 },
  dropdownView: {
    borderWidth: 1,
    borderColor: '#CECECE',
    fontSize: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingLeft: 10,
    fontWeight: '600',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: { fontSize: 16, fontFamily: Fonts.ProximaNovaMedium },
  downArrow: { height: 8, width: 12, paddingRight: 50 },
  headerbuttonIcon: { height: 30, width: 30 },
  headerText: {
    color: '#ffffff',
    paddingLeft: 35,
    fontSize: 20,
    fontWeight: '500',
  },
  textInputHeader: {
    color: '#000',
    fontSize: 16,
    marginHorizontal: 20,
    fontFamily: Fonts.ProximaNovaBold,
    marginVertical: 15,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CECECE',
    fontSize: 16,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingLeft: 10,
    fontFamily: Fonts.ProximaNovaMedium,
    height: 45,
  },
  textInputAbout: {
    borderWidth: 1,
    borderColor: '#CECECE',
    borderRadius: 10,
    marginHorizontal: 20,
    paddingLeft: 10,
    fontFamily: Fonts.ProximaNovaMedium,
    textAlignVertical: "top",
    height: 150,
    justifyContent: "flex-start"
  },
  button: {
    marginHorizontal: 20,
    backgroundColor: Colors.appcolor,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 15,
    marginBottom: 0,
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontFamily: Fonts.ProximaNovaSemibold,
  },
  modalView: {
    borderRadius: 20,
    paddingVertical: 20,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonClose: { backgroundColor: '#38C348', width: '40%' },
  textStyle: {
    fontSize: 18,
    fontFamily: Fonts.ProximaNovaRegular,
    color: 'white',
    textAlign: 'center',
  },
  SelecttextStyle: {
    fontSize: 20,
    fontFamily: Fonts.ProximaNovaMedium,
    color: 'white',
    textAlign: 'center',
  },
  CancleArrow: { height: 15, width: 15 },
  DropDownView: {
    width: '90%',
    zIndex: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    position: 'absolute',
    top: height / 3.3,
  },
});

const mapStateToProps = state => ({
  setData: state.doctor.setData,
  allCategories: state.doctor.allCategories,
});

const ActionCreators = Object.assign(
  { HandlDocProfil },
  { getCategories }
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Editprofile);
