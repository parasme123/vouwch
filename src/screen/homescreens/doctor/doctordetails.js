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
  SortUrl,
  CustomLoader,
  Constants,
  AsyncStorageHelper,
} from '@lib';
import { Colors, Fontsize } from '@common';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getdoctordetails } from '../../../reduxStore/action/doctorAction';

const Doctordetails = (props, { route }) => {
  const navigation = useNavigation();

  // const person = route.params ? route.params.person : false;
  // const personRed = route.params ? route.params.personRed : false;
  const doctorId = props.route.params ? props.route.params.doctorId : null;

  const [About, setAbout] = useState();
  const [Service, setService] = useState();
  const [Location, setLocation] = useState();
  const [Business, setBusiness] = useState();
  const [loaderVisible, setloaderVisible] = useState();
  const [Feedback, setFeedback] = useState();
  // const [ DoctorCardDetails, setDoctorCardDetails] = useState();
  const [userType, setuserType] = useState();


  const Aboutus = () => {
    setAbout(true);
    setService(false);
    setLocation(false);
    setBusiness(false);
    setFeedback(false);
  };
  const Serviceus = () => {
    setAbout(false);
    setService(true);
    setLocation(false);
    setBusiness(false);
    setFeedback(false);
  };
  const ServiceLocation = () => {
    setAbout(false);
    setService(false);
    setLocation(true);
    setBusiness(false);
    setFeedback(false);
  };
  const Businessis = () => {
    setAbout(false);
    setService(false);
    setLocation(false);
    setBusiness(true);
    setFeedback(false);
  };
  const Feedbackfun = () => {
    setAbout(false);
    setService(false);
    setLocation(false);
    setBusiness(false);
    setFeedback(true);
  };
  const AddReview = () => {
    if (userType !== 2) {
      navigation.navigate('review', { detail: doctorId });
    } else {
      alert('you are not able to give a review');
    }
  };

  useEffect(() => {
    Call_Details_Api();
    Aboutus();
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
    console.log("dataaa", apiData);
    actions.getdoctordetails(apiData, setloaderVisible);
  };

  // console.log("anil______doctorId_______________++++++++++++++", props.allDetailsDoc);

  return (
    <ImageBackground source={Imagepath.background} style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={Imagepath.doctor}
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
              width: '90%',
              marginTop: 50,
              justifyContent: 'space-between',
              alignSelf: 'center',
              backgroundColor: '#fff',
              elevation: 5,
              borderRadius: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                Aboutus(props.allDetailsDoc);
              }}
              style={[
                {
                  backgroundColor: About ? Colors.appcolor : Colors.white,
                  paddingHorizontal: About ? 12 : 12,
                },
                styles.button,
              ]}>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: Fonts.ProximaNovaMedium,
                  color: About ? '#fff' : '#000',
                }}>
                About us
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Serviceus();
              }}
              style={[
                {
                  backgroundColor: Service ? Colors.appcolor : Colors.white,
                  paddingHorizontal: Service ? 12 : 0,
                },
                styles.button,
              ]}>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: Fonts.ProximaNovaMedium,
                  color: Service ? '#fff' : '#000',
                }}>
                Services
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                ServiceLocation();
              }}
              style={[
                {
                  backgroundColor: Location ? Colors.appcolor : Colors.white,
                  paddingHorizontal: Location ? 12 : 0,
                },
                styles.button,
              ]}>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: Fonts.ProximaNovaMedium,
                  color: Location ? '#fff' : '#000',
                }}>
                Services Location
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Businessis();
              }}
              style={[
                {
                  backgroundColor: Business ? Colors.appcolor : Colors.white,
                  paddingHorizontal: Business ? 12 : 0,
                },
                styles.button,
              ]}>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: Fonts.ProximaNovaMedium,
                  color: Business ? '#fff' : '#000',
                }}>
                Business Hours
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Feedbackfun();
              }}
              style={[
                {
                  backgroundColor: Feedback ? Colors.appcolor : Colors.white,
                  paddingHorizontal: Feedback ? 12 : 12,
                },
                styles.button,
              ]}>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: Fonts.ProximaNovaMedium,
                  color: Feedback ? '#fff' : Colors.black,
                }}>
                Feedback
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tabviewDetails}>
            {About && (
              <Abouappt
                name={doctorId?.name}
                data={props.allDetailsDoc}
              // aboutDetail={ props.allDetailsDoc.about_us}
              />
            )}
            {Service && <ServicesPage name={doctorId?.name}
              data={props.allDetailsDoc}
            />}
            {Location && <Locationn
              data={props.allDetailsDoc}
            />}
            {Business && <Businesses
              data={props.allDetailsDoc}
            />}
            {Feedback && <Feedbackpage
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
    width: '90%',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: -65,
    paddingVertical: 15,
  },
  dactorName: {
    color: Colors.black,
    fontSize: 20,
    fontFamily: Fonts.ProximaNovaBold,
    marginBottom: 5,
  },
  doctorSpacilist: {
    color: '#858585',
    fontSize: 15,
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
    fontSize: 11,
    fontFamily: Fonts.ProximaNovaMedium,
    marginLeft: 10,
  },
  clinicianReview: {
    color: '#5D5D5D',
    fontSize: 10,
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
    fontSize: 10,
    paddingLeft: 10,
    fontFamily: Fonts.ProximaNovaMedium,
  },
  yellowStarview: {
    width: '100%', flexDirection: 'row',
    alignItems: 'center'
  },
  tabviewDetails: {
    width: '90%',
    backgroundColor: Colors.white,
    alignSelf: 'center',
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

export default connect(mapStateToProps, mapDispatchToProps)(Doctordetails);


