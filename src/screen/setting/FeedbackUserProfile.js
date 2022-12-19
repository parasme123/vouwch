import { NavigationContainer } from '@react-navigation/native';
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
import Imagepath from '../../common/imagepath';
import ToggleSwitch from 'toggle-switch-react-native';
import { Header, Fonts, String, Fontsize } from '@common';
import { useNavigation } from '@react-navigation/native';
import AsyncStorageHelper from '../../Lib/AsyncStorageHelper';
import Constants from '../../Lib/Constants';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PostUserProfile } from '../../reduxStore/action/doctorAction';
import CustomLoader from '../../Lib/CustomLoader';

const FeedbackUserProfile = (props, { route }) => {
  const [userData, setuserData] = useState(null);
  const [loaderVisible, setloaderVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    FeedbackPrsonDetails();
    AsyncStorageHelper.getData(Constants.USER_DATA).then(value => {
      if (value !== null) {
        setuserData(value);
      }
      // console.log('  global.userData=====================-------',   global.userData);
    });
  }, []);
  // console.log("props.feedbackUserData", props.feedbackUserData);              // console.log('  global.userData=====================-------',   global.userData);


  // user data come from api of feedback Person
  const FeedbackPrsonDetails = () => {
    let { actions } = props;
    actions.PostUserProfile(props.route.params.userId, setloaderVisible, true);

  };


  return (
    <ImageBackground source={Imagepath.background} style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}

        <Header title={String.ProfileSetting} isback={"isBackTrue"} />
        <View
          style={{
            height: 115,
            flex: 1,
            backgroundColor: Colors.appcolor,
          }}></View>

        <View style={styles.container}>
          {/* params */}
          <ImageBackground
            source={Imagepath.doctor}
            imageStyle={{ borderRadius: 60 }}
            style={styles.profileIcon}
          >
            <Image style={styles.profileIcon}
              source={{ uri: props.feedbackUserData?.profile_picture }}
            />
          </ImageBackground>
          {/* Button of Share , Comment and Mesage */}

          <Text style={styles.doctorname}>{props.feedbackUserData?.full_name}</Text>


          <Text style={styles.doctorname}>{props.feedbackUserData?.email}</Text>

        </View>
        {/* use for About us details */}
        <View
          style={styles.pageButton}>
          {/* <Image
            style={styles.pageButtonIcon}
            resizeMode="contain"
            source={Imagepath.Accountsetting}
          />
          <Text style={styles.pageButtonText}>About us</Text> */}
        </View>
        <CustomLoader loaderVisible={loaderVisible} />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
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
  pageButton: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 24, marginTop: 25, },
  pageButtonIcon: { height: 10, width: 10, tintColor: Colors.appcolor },
  pageButtonText: {
    color: Colors.black,
    fontSize: Fontsize.fontEighteen,
    marginHorizontal: 15,
    marginVertical: 20,
    fontFamily: Fonts.ProximaNovaMedium,
  },

});



const mapStateToProps = state => ({
  feedbackUserData: state.doctor.feedbackUserData,
});

const ActionCreators = Object.assign(
  { PostUserProfile },
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackUserProfile);
