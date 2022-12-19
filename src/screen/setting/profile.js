import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
import { Rating } from 'react-native-ratings';
import { Colors, imagepath, svg } from '@common';

import ToggleSwitch from 'toggle-switch-react-native';
import { Header, Fonts, String, Fontsize } from '@common';
import { useNavigation } from '@react-navigation/native';
import {
  ApiCall,
  SortUrl,
  CustomLoader,
  Constants,
  AsyncStorageHelper,
  Helper
} from '@lib';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getServices, } from '../../reduxStore/action/doctorAction';
const Profile = (props) => {
  const [isTrue, setisTrue] = useState(false);
  const [userData, setuserData] = useState(null);
  const isBackTrue = props.route.params ? props.route.params.isBackTrue : false;
  const navigation = useNavigation();
  const [usedId, setUserId] = useState(null);    //userid ==id
  const [loaderVisible, setloaderVisible] = useState(false);
  useEffect(() => {
    // handleuserData();
    handleServicesData();
    setuserData(props.allUserPostData);
    AsyncStorageHelper.getData(Constants.USER_DATA).then(value => {
      if (value !== null) {
        setUserId(value?.id);
      }
    })
  }, []);

  // user data
  const handleServicesData = () => {
    let { actions } = props;
    actions.getServices(setloaderVisible);
  };

  // console.log("usedId",usedId);
  // console.log("props.allUserPostData1111111111111111111111111", props.allUserPostData);
  // console.log("props.allUserPostData111111111111111props.userData1111111111", props.userData);

  return (
    <ImageBackground source={imagepath.background} style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Header title={String.ProfileSetting} isback={isBackTrue} />
        <View
          style={{
            height: 115,
            flex: 1,
            backgroundColor: Colors.appcolor,
          }}></View>

        <View style={styles.container}>
          {/* params */}
          <ImageBackground
            source={imagepath.doctor}
            imageStyle={{ borderRadius: 60 }}
            style={styles.profileIcon}
          >
            <Image style={styles.profileIcon}
              source={{ uri: userData?.profile_picture }}
            />
          </ImageBackground>
          {/* Button of Share , Comment and Mesage */}

          <Text style={styles.doctorname}>{userData?.full_name}</Text>
          {
            userData?.user_type !== 1 ? (
              <>
                <Text style={styles.field}>{userData?.business?.about_us}</Text>

                {/* no data availablefor this  */}

                <Text style={styles.organization}>
                  {userData?.business?.category?.name}
                </Text>

                {/* Red Star  */}
                <View>
                  <View style={styles.ratingViewRed}>
                    <View style={styles.ratingViewmain}>
                      <Rating
                        type="custom"
                        max={5}
                        readonly="true"
                        ratingColor={Colors.red}
                        ratingBackgroundColor={Colors.white}
                        startingValue={userData?.business?.clinical_rate}
                        imageSize={10}
                        iconWidth={10}
                        iconHeight={10}
                      />
                    </View>
                    <Text style={styles.ratingText}>  {userData?.business?.clinical_rate}
                      {/* {props.Clinician_Rating} */}
                      <Text style={styles.clinicianReview}> Clinician's Review</Text>
                    </Text>
                  </View>


                  {/* yellow Star Line */}
                  <View style={styles.yellowstarview}>
                    <View style={styles.ratingViewmain}>
                      <Rating
                        max={5}
                        readonly="true"
                        startingValue={userData?.business?.patient_rate}
                        imageSize={10}
                        iconWidth={10}
                        iconHeight={10}
                      />
                    </View>
                    <Text style={styles.ratingText}>
                      {/* {props.patient_Rating} */}  {userData?.business?.patient_rate}
                      <Text style={styles.clinicianReview}> Patient Review</Text>
                    </Text>
                  </View>
                </View>
              </>) : null
          }

        </View>

        <View style={styles.container1}>
          <TouchableOpacity
            onPress={() => navigation.navigate('asscounsetting')}
            style={styles.pageButton}>
            <Image
              style={styles.pageButtonIcon}
              resizeMode="contain"
              source={imagepath.Accountsetting}
            />
            <Text style={styles.pageButtonText}>Account setting</Text>
          </TouchableOpacity>
          {
            userData?.user_type !== 1 ? (
              <>
                <TouchableOpacity
                  onPress={() => navigation.navigate('edit')}
                  style={styles.pageButton}>
                  <Image
                    style={styles.pageButtonIcon}
                    resizeMode="contain"
                    source={imagepath.Profilesetting}
                  />
                  <Text style={styles.pageButtonText}>Profile setting</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => props.navigation.navigate('DetailedBusinessProfile')}
                  style={styles.pageButton}>
                  <Image
                    style={styles.pageButtonIcon}
                    resizeMode="contain"
                    source={imagepath.Profilesetting}
                  />
                  <Text style={styles.pageButtonText}>Detailed Business Profile</Text>
                </TouchableOpacity>
              </>) : null
          }
          <View
            style={[
              { justifyContent: 'space-between', alignContent: 'center', marginBottom: 40 },
              styles.pageButton,
            ]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={styles.pageButtonIcon}
                resizeMode="contain"
                source={imagepath.Notification22}
              />
              <Text style={styles.pageButtonText}>Notification</Text>
            </View>
            <ToggleSwitch
              isOn={isTrue}
              onColor="#245FC7"
              // offColor="blue"
              // disabled='false'
              size="medium"
              onToggle={isOn => setisTrue(isOn)}
            />
          </View>
        </View>
      </ScrollView>
      <CustomLoader loaderVisible={loaderVisible} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    // position: 'absolute',
    backgroundColor: Colors.white,
    marginTop: 65,
    borderRadius: 20,
    elevation: 5,
    paddingBottom: 65,
    paddingVertical: 15,
    flex: 1,
    marginHorizontal: 24,
    marginTop: -100
  },

  container1: { marginTop: 25, justifyContent: "space-between", marginHorizontal: 24, flex: 1 },

  profileIcon: { height: 120, width: 120, borderRadius: 100, marginBottom: 20 },
  doctorname: {
    color: Colors.appcolor,
    fontSize: Fontsize.fontTwentyfive,
    fontFamily: Fonts.ProximaNovaSemibold,
  },
  field: {
    color: Colors.black,
    fontSize: Fontsize.fontEighteen,
    fontFamily: Fonts.ProximaNovaSemibold,
    marginVertical: 10,
  },
  ratingViewRed: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10,
    alignItems: 'center',
    // backgroundColor:"red"
  },
  ratingViewmain: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    borderRadius: 10,
    // flex: 1,
    justifyContent: "flex-end",
    // backgroundColor:"green"
  },
  ratingText: {
    color: Colors.black,
    fontSize: Fontsize.fontEighteen,
    lineHeight: 24,
    fontFamily: Fonts.ProximaNovaMedium,
    // flex: 1,
    // backgroundColor:"red"
  },
  clinicianReview: {
    color: Colors.darkGrey,
    fontSize: Fontsize.fontEighteen,
    lineHeight: 24,
    fontFamily: Fonts.ProximaNovaRegular,
  },
  yellowstarview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  organization: {
    color: '#858585',
    fontSize: Fontsize.fontFourteen,
    fontFamily: Fonts.ProximaNovaRegular,
  },
  pageButton: { flexDirection: 'row', alignItems: 'center' },
  pageButtonIcon: { height: 30, width: 30 },
  pageButtonText: {
    color: Colors.black,
    fontSize: Fontsize.fontEighteen,
    marginHorizontal: 15,
    marginVertical: 20,
    fontFamily: Fonts.ProximaNovaMedium,
  },

});



const mapStateToProps = state => ({
  setData: state.doctor.setData,
  allUserPostData: state.doctor.allUserPostData
});
const ActionCreators = Object.assign(
  { getServices },
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
