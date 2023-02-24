import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import Imagepath from '../../../common/imagepath';
import { useNavigation } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ServicesPage from './ServicesPage';
import Locationn from './Locationn';
import Abouappt from './about';
import Businesses from './Businesses';
import Feedbackpage from './feedbackpage';
import Fonts from '../../../common/Fonts';
import {
  ApiCall,
  Helper,
  CustomLoader,
  Constants,
  AsyncStorageHelper,
} from '@lib';
import { Colors, Fontsize } from '@common';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getdoctordetails } from '../../../reduxStore/action/doctorAction';

const HospitalDetail = (props, { route }) => {
  const navigation = useNavigation();

  const doctorId = props.route.params ? props.route.params.doctorId : null;
  const propActiveTab = props.route?.params?.activeTab ? props.route.params.activeTab : "about";
  const [loaderVisible, setloaderVisible] = useState();
  const [activeTab, setActiveTab] = useState(propActiveTab)
  const [userType, setuserType] = useState();

//   const CommentpropPage = DataCardiList => {
//     setmsgDocId(DataCardiList)
//     if (!userType) {
//       Helper.loginPopUp(props.navigation);
//     } else {
//       navigation.navigate('review', { doctorid: doctorId });
//   }
// }

  const AddReview = () => {
    // setmsgDocId(DataCardiList)
    if (!userType) {
      Helper.loginPopUp(props.navigation);
    } else {
      navigation.navigate('review', { doctorid: doctorId });
  }
  };

  useEffect(() => {
    Call_Details_Api();
    AsyncStorageHelper.getData(Constants.USER_DATA).then(value => {
      if (value !== null) {
      }
      setuserType(value?.user_type);
      
    });
  }, []);
  const Call_Details_Api = () => {
    let { actions } = props;
    const apiData = {
      id: doctorId,
    };
    actions.getdoctordetails(apiData, setloaderVisible);
  };

  return (
    <ImageBackground source={Imagepath.background} style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Image
            source={props.allDetailsDoc?.business?.business_profile ? { uri: props.allDetailsDoc?.business?.business_profile } :
              Imagepath.hospitalImage}
            resizeMode="stretch"
            style={styles.ImageTop}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.backButton}>
            <Image style={styles.backIcon} source={Imagepath.back} />
          </TouchableOpacity>
          {/* Doctor detail Card */}
          <View style={styles.DoctordetailsCard}>
            <Text style={styles.dactorName}>
              {props.allDetailsDoc?.business?.business_name}
            </Text>
            <Text style={styles.doctorSpacilist}>
              {props.allDetailsDoc?.business?.category?.name}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <View style={styles.ratingViewRed}>
                  <View style={styles.ratingViewmain}>
                    <Rating
                      type="custom"
                      max={5}
                      readonly="true"
                      ratingColor={Colors.red}
                      ratingBackgroundColor={Colors.white}
                      startingValue={props.allDetailsDoc?.business?.clinical_rate}
                      imageSize={10}
                      iconWidth={10}
                      iconHeight={10}
                    />
                  </View>
                  <Text style={styles.ratingText}>
                    {props.allDetailsDoc?.business?.clinical_rate}
                    <Text style={styles.clinicianReview}>
                      {' '}
                      Clinician's Review
                    </Text>
                  </Text>
                </View>

                {/* yellow Star Line */}
                <View style={styles.yellowstarview}>
                  <View style={styles.ratingViewmain}>
                    <Rating
                      max={5}
                      readonly="true"
                      startingValue={props.allDetailsDoc?.business?.patient_rate}
                      imageSize={10}
                      iconWidth={10}
                      iconHeight={10}
                    />
                  </View>
                  <Text style={styles.ratingText}>
                    {props.allDetailsDoc?.business?.patient_rate}
                    <Text style={styles.clinicianReview}> Patient Review</Text>
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: 'column-reverse' }}>
                <TouchableOpacity
                  onPress={() => {
                    AddReview();
                  }}
                  style={styles.yellowstarButton}>
                  <Image
                    source={Imagepath.mess}
                    style={styles.yellowStarSubviewIcon}
                  />
                  <Text style={styles.yellowStarSubviewIconTExt}>
                    {' '}
                    Add review
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* tab View */}

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 24,
              marginTop: 50,
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              elevation: 5,
              borderRadius: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                setActiveTab("about");
              }}
              style={[
                {
                  backgroundColor: activeTab == "about" ? Colors.appcolor : Colors.white,
                  paddingHorizontal: activeTab == "about" ? 12 : 5,
                },
                styles.button,
              ]}>
              <Text
                style={{
                  fontSize: Fontsize.small,
                  fontFamily: Fonts.ProximaNovaMedium,
                  color: activeTab == "about" ? '#fff' : '#000',
                }}>
                About us
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setActiveTab("services");
              }}
              style={[
                {
                  backgroundColor: activeTab == "services" ? Colors.appcolor : Colors.white,
                  paddingHorizontal: activeTab == "services" ? 12 : 0,
                },
                styles.button,
              ]}>
              <Text
                style={{
                  fontSize: Fontsize.small,
                  fontFamily: Fonts.ProximaNovaMedium,
                  color: activeTab == "services" ? '#fff' : '#000',
                }}>
                Services
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setActiveTab("location");
              }}
              style={[
                {
                  backgroundColor: activeTab == "location" ? Colors.appcolor : Colors.white,
                  paddingHorizontal: activeTab == "location" ? 12 : 0,
                },
                styles.button,
              ]}>
              <Text
                style={{
                  fontSize: Fontsize.small,
                  fontFamily: Fonts.ProximaNovaMedium,
                  color: activeTab == "location" ? '#fff' : '#000',
                }}>
                Services Location
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setActiveTab("business");
              }}
              style={[
                {
                  backgroundColor: activeTab == "business" ? Colors.appcolor : Colors.white,
                  paddingHorizontal: activeTab == "business" ? 12 : 0,
                },
                styles.button,
              ]}>
              <Text
                style={{
                  fontSize: Fontsize.small,
                  fontFamily: Fonts.ProximaNovaMedium,
                  color: activeTab == "business" ? '#fff' : '#000',
                }}>
                Business Hours
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setActiveTab("feedback");
              }}
              style={[
                {
                  backgroundColor: activeTab == "feedback" ? Colors.appcolor : Colors.white,
                  paddingHorizontal: activeTab == "feedback" ? 12 : 10,
                },
                styles.button,
              ]}>
              <Text
                style={{
                  fontSize: Fontsize.small,
                  fontFamily: Fonts.ProximaNovaMedium,
                  color: activeTab == "feedback" ? '#fff' : Colors.black,
                }}>
                Feedback
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tabviewDetails}>
            {activeTab == "about" && (
              <Abouappt
                name={doctorId?.name}
                data={props.allDetailsDoc}
              // aboutDetail={ props.allDetailsDoc.about_us}
              />
            )}
            {activeTab == "services" && <ServicesPage name={doctorId?.name}
              data={props.allDetailsDoc}
            />}
            {activeTab == "location" && <Locationn
              data={props.allDetailsDoc}
            />}
            {activeTab == "business" && <Businesses
              data={props.allDetailsDoc}
            />}
            {activeTab == "feedback" && <Feedbackpage
              data={props.allDetailsDoc}
            />}
          </View>
        </View>
      </ScrollView>
      {/* <CustomLoader loaderVisible={loaderVisible} /> */}
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 12,
  },
  container: {
    marginBottom: 10
  },
  ImageTop: {
    height: hp('45%'),
    width: '100%'
  },
  backButton: {
    position: 'absolute',
    marginTop: 20,
    marginLeft: 15
  },
  backIcon: {
    height: 21,
    width: 32
  },
  DoctordetailsCard: {
    backgroundColor: '#E7F6FC',
    marginHorizontal: 24,
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 20,
    flex: 1,
    marginTop: -65,
    paddingVertical: 15,
  },
  dactorName: {
    color: Colors.black,
    fontSize: Fontsize.fontTwenty,
    fontFamily: Fonts.ProximaNovaBold,
    marginBottom: 5,
  },
  doctorSpacilist: {
    color: '#858585',
    fontSize: Fontsize.fontFifteen,
    fontFamily: Fonts.ProximaNovaMedium,
    marginBottom: 5,
  },
  redstarView: { width: '85%', flexDirection: 'row', marginVertical: 5 },
  ratingView: {
    height: 15,
    width: 45,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  star: { height: 6, width: 6 },
  ratingNumber: {
    color: Colors.black,
    fontSize: Fontsize.fontEleven,
    fontFamily: Fonts.ProximaNovaMedium,
    marginLeft: 10,
  },
  clinicianReview: {
    color: '#5D5D5D',
    fontSize: Fontsize.small,
    fontFamily: Fonts.ProximaNovaRegular,
  },
  yellowStarSubview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignItems: 'center',
  },
  yellowstarButton: {
    backgroundColor: Colors.appcolor,
    height: 30,
    width: 108,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  yellowStarSubviewIcon: {
    height: 12,
    width: 12
  },
  yellowStarSubviewIconTExt: {
    color: Colors.white,
    fontSize: Fontsize.small,
    paddingLeft: 10,
    fontFamily: Fonts.ProximaNovaMedium,
  },
  yellowStarview: {
    width: '100%', flexDirection: 'row',
    alignItems: 'center'
  },
  tabviewDetails: {
    marginHorizontal: 24,
    backgroundColor: Colors.white,
    marginTop: 15,
    borderRadius: 10,
    elevation: 5,
  },
  ratingViewRed: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  ratingViewmain: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  ratingText: {
    color: Colors.black,
    fontSize: Fontsize.fontTwelve,
    lineHeight: 15,
    fontFamily: Fonts.ProximaNovaMedium,
    marginLeft: 10,
    flex: 5,
  },
  clinicianReview: {
    color: Colors.darkGrey,
    fontSize: Fontsize.fontTwelve,
    lineHeight: 15,
    fontFamily: Fonts.ProximaNovaRegular,
  },
  yellowstarview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  allDetailsDoc: state.doctor.allDetailsDoc,
});

const ActionCreators = Object.assign(
  { getdoctordetails }
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HospitalDetail);


