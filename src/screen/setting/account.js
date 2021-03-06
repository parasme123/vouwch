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
import ImagePicker from 'react-native-image-crop-picker';
import { Header, Colors, Fonts, String } from '@common';
import Imagepath from '../../common/imagepath';

import {
  ApiCall,
  SortUrl,
  CustomLoader,
  Constants,
  AsyncStorageHelper,
  Validators
} from '@lib';
import { connect } from 'react-redux';
import { handleNavigation } from '../../navigator/Navigator';
import { bindActionCreators } from 'redux';
import { postAccountSetting } from '../../reduxStore/action/doctorAction';
const { width, height } = Dimensions.get('window');
const Account = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState({});
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [mailAddress, setmailAddress] = useState();
  const [loaderVisible, setloaderVisible] = useState(false);
  const [editText, seteditText] = useState(false);
  const [userData, setuser] = useState(null);

  useEffect(() => {
    setuser(props?.allUserPostData)
    setfirstName(props?.allUserPostData?.first_name);
    setlastName(props.allUserPostData?.last_name);
  }, []);

// console.log(props?.allUserPostData)
  const requestCamera = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        camera(!modalVisible)
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const camera = async () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image);
      setModalVisible(!modalVisible);
    }).catch((err) => {
      console.log("Error in OPen Camera : ", err)
    });
  };
  const Gallery = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image);
      setModalVisible(!modalVisible);
    });
  };

  const HandelAccountsetting = () => {
    if (
      Validators.checkNull('First Name', 2, firstName) &&
      Validators.checkNull('Last Name', 2, lastName)
    ) {
      Account_SettingApi();
    }
  }
  const Account_SettingApi = () => {
    let { actions } = props;
    let imageData = {}
    if(image.path){
    let fileName = image?.path?.split("/");
     imageData = {
      uri: image.path,
      name: fileName[fileName.length - 1],
      type: image.mime
    }}
    const data = new FormData();
    data.append('profile_picture', image.path ? imageData : "");
    data.append('user_fname', firstName);
    data.append('user_lname', lastName);
    data.append('email', userData?.email);
    actions.postAccountSetting(data, () => setloaderVisible(), () => PageNavigation());
  };
  const PageNavigation = () => {
    handleNavigation({
      type: 'setRoot',
      page: 'bottomtab',
      navigation: props.navigation,
    });
  }


  return (
    <ImageBackground source={Imagepath.background} style={styles.imagebg}>
      {/*  Header*/}
      <Header title={String.AccountSetting} isback={'bottomtab'} />

      <View style={styles.headerView2}>
        <TouchableOpacity
          // seteditText=true
          onPress={() => seteditText(true)}
        >
          <Image
            style={styles.headerbuttonIcon}
            source={Imagepath.Edit}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 90 }}>
        {/* container */}
        <View style={styles.profileImageview}>
          <Image
            style={styles.ProfileImage}
            source={image.path ? { uri: image.path } : { uri: userData?.profile_picture }}
            resizeMode="contain"
          />
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.CameraButton}>
            <Image
              style={styles.CameraImage}
              source={Imagepath.camera}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        {/* Image Crop Picker */}

        {/* details */}

        <Text style={styles.textInputHeader}>First Name</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="default"
          placeholder={"Enter First Name"}
          value={firstName}
          placeholderTextColor={'#737373'}
          editable={editText}
          onChangeText={text => {
            setfirstName(text);
          }}
        />

        <Text style={styles.textInputHeader}>Last Name</Text>
        <TextInput
          style={styles.textInput}
          value={lastName}
          keyboardType="default"
          placeholder={"Enter Last Name"}
          placeholderTextColor={'#737373'}
          editable={editText}
          onChangeText={text => {
            setlastName(text);
          }}
        />
        <Text style={styles.textInputHeader}>Email address</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="email-address"
          placeholder={"Enter Email"}
          placeholderTextColor={'#737373'}
          editable={false}
          value={userData?.email}
        />
        {/* <Text style={styles.textInputHeader}>password</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="default"
          secureTextEntry={true}
          placeholder="********"
          placeholderTextColor={'#737373'}
          editable={editText}
          onChangeText={text => {
            setpassword(text);
          }}
        /> */}

        <TouchableOpacity
          onPress={() => HandelAccountsetting()}
          style={styles.button}>
          <Text style={styles.textButton}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View
            style={{
              paddingVertical: 20,
              marginHorizontal: 10,
              borderRadius: 20,
              backgroundColor: Colors.appcolor,
            }}>
            <TouchableOpacity
              hitSlop={{ top: 30, bottom: 30, right: 30, left: 30 }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              style={{ position: 'absolute', top: 10, right: 20 }}>
              <Image
                style={[styles.CancleArrow, { tintColor: Colors.white }]}
                source={Imagepath.crose}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <Text style={styles.SelecttextStyle}> Select image from...</Text>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => { requestCamera() }}>
                <Text style={styles.textStyle}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => Gallery(!modalVisible)}>
                <Text style={styles.textStyle}>gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <CustomLoader loaderVisible={loaderVisible} />
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
    fontSize: 16,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingLeft: 10,
    fontFamily: Fonts.ProximaNovaMedium,
    height: 100,
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
    color: Colors.white,
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
    backgroundColor: Colors.white,
    borderRadius: 5,
    position: 'absolute',
    top: height / 3.3,
  },
});


const mapStateToProps = state => ({
  setData: state.doctor.setData,
  allUserPostData: state.doctor.allUserPostData
});

const ActionCreators = Object.assign(
  { postAccountSetting }
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);

