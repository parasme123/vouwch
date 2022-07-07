import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Imagepath from '../../../common/imagepath';
// import styles from './styles';

import { CustomDropDown, Header, imagepath, Fonts, String, Colors, Fontsize } from '@common';
import { Validators } from '@lib';
import { useNavigation } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import DoctorList from '../../../modal/DoctorList';
export default Patient = (props) => {
  const navigation = useNavigation();
  const doctorId = props.docId;
  const [docPicList, setdocPicList] = useState();
  const [click, setclick] = useState(false);
  const [waitTime, setWaitTime] = useState(0);
  const [modalVisible, setModalVisible] = useState();
  const [mark, setMark] = useState(false);
  const [doctId, setdoctId] = useState();
  const [ratingDoc, setRatingDoc] = useState(1);
  const [ratingTreat, setRatingTreat] = useState(1);
  const [ratingWait, setRatingWait] = useState(1);
  const [ratingExplain, setRatingExplain] = useState(1);
  const [ratingMoney, setRatingMoney] = useState(1);
  const [message, setMessage] = useState();

  const Buttonslect = () => {
    setclick(true);
    // settext(false);
  };
  const Buttonunslect = () => {
    setclick(false);
    // settext(true);
  };

  const chexkBox = () => {
    setMark(!mark);
  };

  const ListModal = () => {
    setdocPicList(!modalVisible);
    setModalVisible(!modalVisible);
  };

  const ServiceData = (item) => {
    setdoctId(item)
    setModalVisible(!modalVisible);
  };


  const Call_ClinicialApi = () => {
    let apiData = {
      business_id: doctorId ?? doctId.id,
      review_type: "Patient",
      // rate: selectvalue,
      // review: recomendation,
      is_recommend: click ? 1 : 0,
      wait_period: waitTime,
      friendness_rate: ratingDoc,
      treatment_rate: ratingTreat,
      wait_rate: ratingWait,
      experience_rate: ratingExplain,
      money_rate: ratingMoney,
      is_anonym: mark ? 1 : 0,
      review: message
    }
    console.log("apiData : ", apiData);
    if (
      Validators.checkNotNull('Doctor Id', 1, 20, doctorId ?? doctId.id)
      // Validators.checkNotNull('Recommendation', 2, 20, is_recommend) 
    ) {
      props.Review_Validators(apiData)
    }
  }


  return (
    <ImageBackground source={Imagepath.background} style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {
          doctorId == null ?
            <>
              <Text
                style={[styles.imputHeader, { marginTop: 22 }]}>
                Select Doctors List
              </Text>

              <TouchableOpacity
                onPress={() => ListModal()}
                style={[styles.dropdownView, { marginBottom: 15 }]}>
                <Text style={styles.dropdownText}>{doctId != null ? doctId.business_name : "Select Doctors"}</Text>
                <Image
                  style={styles.downArrow}
                  source={Imagepath.down}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </> : null
        }
        {/* Text Recomended */}
        <Text
          style={{
            color: Colors.black,
            width: '90%',
            alignSelf: 'center',
            fontSize: 15,
            paddingVertical: 10,
            fontFamily: Fonts.ProximaNovaSemibold,
          }}>
          I Recomend This Doctor
        </Text>

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          {/* Button of Recomondation */}
          <TouchableOpacity
            onPress={() => {
              Buttonslect();
            }}
            style={[styles.button, click ? { backgroundColor: Colors.appcolor } : { borderWidth: 1 }]}>
            <Text
              style={[styles.buttonText, click ? { color: "#ffffff" } : { color: Colors.black }]}>
              yes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Buttonunslect();
            }}
            style={[styles.button, { marginLeft: 10 }, !click ? { backgroundColor: Colors.appcolor } : { borderWidth: 1 }]}>
            <Text
              style={[styles.buttonText, !click ? { color: "#ffffff" } : { color: Colors.black }]}>
              No
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            color: Colors.black,
            width: '90%',
            alignSelf: 'center',
            marginTop: 15,
            paddingLeft: 5,
            fontSize: 15,
            fontFamily: Fonts.ProximaNovaSemibold,
          }}>
          How long did you wait
        </Text>
        {/* Progress Bar */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              setWaitTime(1);
            }}
            style={styles.progressButton}>
            {/* style={[{ backgroundColor: text ? Colors.appcolor : null, borderWidth: text ? null : 1, marginLeft: 10 }, styles.button]} */}
            <Image
              style={[
                { tintColor: waitTime >= 1 ? '#245FC7' : '#929397' },
                styles.dotImage,
              ]}
              resizeMode="contain"
              source={Imagepath.dot}
            />
          </TouchableOpacity>
          <Text
            style={[
              { color: waitTime >= 2 ? '#245FC7' : '#929397' },
              styles.progressButtonText,
            ]}>
            ---------------
          </Text>
          <TouchableOpacity
            onPress={() => {
              setWaitTime(2);
            }}
            style={styles.progressButton}>
            <Image
              style={[
                { tintColor: waitTime >= 2 ? '#245FC7' : '#929397' },
                styles.dotImage,
              ]}
              resizeMode="contain"
              source={Imagepath.dot}
            />
          </TouchableOpacity>
          <Text
            style={[
              { color: waitTime >= 3 ? '#245FC7' : '#929397' },
              styles.progressButtonText,
            ]}>
            ---------------
          </Text>
          <TouchableOpacity
            onPress={() => {
              setWaitTime(3);
            }}
            style={styles.progressButton}>
            <Image
              style={[
                { tintColor: waitTime >= 3 ? '#245FC7' : '#929397' },
                styles.dotImage,
              ]}
              resizeMode="contain"
              source={Imagepath.dot}
            />
          </TouchableOpacity>
          <Text
            style={[
              { color: waitTime >= 4 ? '#245FC7' : '#929397' },
              styles.progressButtonText,
            ]}>
            ---------------
          </Text>
          <TouchableOpacity onPress={() => setWaitTime(4)} style={styles.progressButton}>
            <Image
              style={[styles.dotImage, { tintColor: waitTime >= 4 ? '#245FC7' : '#929397' }]}
              resizeMode="contain"
              source={Imagepath.dot}
            />
          </TouchableOpacity>
        </View>
        {/* progress bar Text */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: 370,
            alignSelf: 'center',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => {
              setWaitTime(1);
            }}>
            <Text
              style={[
                { color: waitTime >= 1 ? '#245FC7' : '#929397', paddingHorizontal: 18 },
                styles.progressButtonTexttime,
              ]}>
              0To15
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setWaitTime(2);
            }}>
            <Text
              style={[
                { color: waitTime >= 2 ? '#245FC7' : '#929397' },
                styles.progressButtonTexttime,
              ]}>
              15To30
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setWaitTime(3);
            }}>
            <Text
              style={[
                { color: waitTime >= 3 ? '#245FC7' : '#929397', paddingLeft: 25 },
                styles.progressButtonTexttime,
              ]}>
              30To1hr
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setWaitTime(4);
            }}>
            <Text
              style={[
                { color: waitTime >= 4 ? '#245FC7' : '#929397' },
                styles.progressButtonTexttime,
              ]}>
              More than hr
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ width: '90%', alignSelf: 'center' }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            <Text
              style={{
                color: Colors.black,
                fontSize: 15,
                fontFamily: Fonts.ProximaNovaMedium,
              }}>
              Doctor Friendliness
            </Text>
            <Rating
              startingValue={ratingDoc}
              onFinishRating={(val) => setRatingDoc(val)}
              max={5}
              imageSize={20}
              iconWidth={24}
              iconHeight={24}
              onRate={setRatingDoc}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
              borderColor: '#929397',
              borderTopWidth: 1,
            }}>
            <Text
              style={{
                color: Colors.black,
                fontSize: 15,
                fontFamily: Fonts.ProximaNovaMedium,
              }}>
              Treatnment Satisfication
            </Text>
            <Rating
              startingValue={ratingTreat}
              onFinishRating={(val) => setRatingTreat(val)}
              max={5}
              imageSize={20}
              iconWidth={24}
              iconHeight={24}
              onRate={setRatingTreat}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
              borderColor: '#929397',
              borderTopWidth: 1,
            }}>
            <Text
              style={{
                color: Colors.black,
                fontSize: 15,
                fontFamily: Fonts.ProximaNovaMedium,
              }}>
              Wait Time
            </Text>
            <Rating
              startingValue={ratingWait}
              onFinishRating={(val) => setRatingWait(val)}
              max={5}
              imageSize={20}
              iconWidth={24}
              iconHeight={24}
              onRate={setRatingWait}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
              borderColor: '#929397',
              borderTopWidth: 1,
            }}>
            <Text
              style={{
                color: Colors.black,
                fontSize: 15,
                fontFamily: Fonts.ProximaNovaMedium,
              }}>
              Explanation of the issue
            </Text>
            <Rating
              startingValue={ratingExplain}
              onFinishRating={(val) => setRatingExplain(val)}
              max={5}
              imageSize={20}
              iconWidth={24}
              iconHeight={24}
              onRate={setRatingExplain}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
              borderColor: '#929397',
              borderTopWidth: 1,
            }}>
            <Text
              style={{
                color: Colors.black,
                fontSize: 15,
                fontFamily: Fonts.ProximaNovaMedium,
              }}>
              Value for Money
            </Text>
            <Rating
              startingValue={ratingMoney}
              onFinishRating={(val) => setRatingMoney(val)}
              max={5}
              imageSize={20}
              iconWidth={24}
              iconHeight={24}
              onRate={setRatingMoney}
            />
          </View>
        </View>
        <Text
          style={{
            color: Colors.black,
            width: '90%',
            alignSelf: 'center',
            paddingLeft: 5,
            fontSize: 15,
            fontFamily: Fonts.ProximaNovaMedium,
          }}>
          Share your experience
        </Text>
        <TextInput
          placeholder="Share your experiance"
          multiline={true}
          placeholderTextColor="#929397"
          style={{
            paddingLeft: 15,
            height: 120,
            borderColor: '#CECECE',
            borderWidth: 0.5,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: 10,
            textAlign: 'center',
            textAlign: 'justify',
          }}
          keyboardType="default"
          numberOfLines={20}
          onChangeText={setMessage}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 15,
            marginVertical: 10,
          }}>
          <TouchableOpacity
            onPress={() => chexkBox()}
            style={{ paddingRight: '2%' }}>
            <Image
              source={mark ? Imagepath.yes : Imagepath.check}
              style={{
                height: 30,
                width: 30,
                borderRadius: 5,
                tintColor: '#707070',
              }}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 15,
              color: Colors.black,
              fontFamily: Fonts.ProximaNovaRegular,
            }}>
            Keep this feedback publicity anonymous
          </Text>
        </View>

        <TouchableOpacity
          onPress={Call_ClinicialApi}
          style={{
            backgroundColor: '#245FC7',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            width: '90%',
            alignSelf: 'center',
            marginBottom: 10,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#FFFFFF',
              fontFamily: Fonts.ProximaNovaSemibold,
            }}>
            SUBMIT
          </Text>
        </TouchableOpacity>
      </ScrollView>
      {docPicList && (
        <DoctorList
          modalVisible={modalVisible}
          Hidemodal={ListModal}
          data={props.doctorList}
          slectData={mark}
          chexkBoxFnc={ServiceData}
        />
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 84,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#CECECE',
  },
  buttonText: { fontSize: 13, fontFamily: Fonts.ProximaNovaSemibold },
  progressButton: { alignItems: 'center', height: 15, width: 15 },
  progressButtonText: { fontSize: 17, width: 74 },
  dotImage: { height: 15, width: 15 },
  progressButtonTexttime: { fontFamily: Fonts.ProximaNovaRegular, fontSize: 13 },
  imputHeader: {
    color: Colors.black,
    marginHorizontal: 24,
    fontFamily: Fonts.ProximaNovaSemibold,
  },
  dropdownView: {
    borderWidth: 1,
    borderColor: '#CECECE',
    fontSize: Fontsize.fontFifteen,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingLeft: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  dropdownText: { fontSize: Fontsize.fontFifteen, fontFamily: Fonts.ProximaNovaMedium },
  downArrow: { height: 8, width: 12, paddingRight: 50 },
  DropDownView: {
    elevation: 5,
    width: "90%",
    zIndex: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
    borderRadius: 5,
    position: 'absolute',
    // top: height / 5.1,
    alignSelf: "center"
  },
});
