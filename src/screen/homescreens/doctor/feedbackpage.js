import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  FlatList,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, Fonts, imagepath } from '@common';

const styles = StyleSheet.create({
  feedBackTypeBtn: {
    backgroundColor: Colors.darkSkyBlue,
    paddingVertical: 6,
    paddingHorizontal: 8,
    marginLeft: 6,
    borderRadius: 10
  },
  feedBackTypeBtnTxt: {
    color: Colors.black,
    fontSize: 12
  },
  feedBackTypeBtnActive: {
    backgroundColor: Colors.appcolor,
  },
  feedBackTypeBtnTxtActive: {
    color: Colors.white,
  }
})
export default Feedbackpage = (props) => {
  const navigation = useNavigation();
  const [activeFeedbackTab, setActiveFeedbackTab] = useState("p");
  const Card = [
    {
      NameFeedback: 'Dr. jenny wilson',
    },
    {
      NameFeedback: 'Dr. jenny wilson',
    },
    {
      NameFeedback: 'Dr. jenny wilson',
    },
  ];
  const Feedback = ({ item, index }) => {
    return (
      <View
        style={{ borderBottomWidth: 0.5, borderColor: '#929397', paddingVertical: 10 }} key={index}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 15,
          }}>
          {/* doctor Image */}
          <Image
            style={{ height: 49, width: 49, borderRadius: 100 }}
            source={{ uri: item.users.profile_picture }}
          />
          {/* Doctor Details */}
          <View style={{ flexDirection: 'column', marginLeft: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#000',
                  fontFamily: Fonts.ProximaNovaBold,
                }}>
                {item.NameFeedback}
              </Text>
              <Image
                style={{ height: 11, width: 11, marginLeft: 10 }}
                source={imagepath.bluetick}
              />
            </View>
            <Text
              style={{
                fontSize: 8,
                color: '#929397',
                paddingVertical: 3,
                fontFamily: Fonts.ProximaNovaRegular,
              }}>
              {item.users.full_name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '80%',
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#E6F5FB',
                    width: 35,
                    height: 14,
                    borderRadius: 10,
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{ height: 8, width: 8, paddingRight: 3 }}
                    source={imagepath.yellowstar}
                  />
                  <Text
                    style={{
                      fontSize: 8,
                      color: '#000',
                      fontFamily: Fonts.ProximaNovaBold,
                      paddingLeft: 3,
                    }}>
                    {item.rate}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 8,
                    color: '#5D5D5D',
                    paddingLeft: 5,
                    fontFamily: Fonts.ProximaNovaRegular,
                  }}>
                  Reviews
                </Text>
              </View>
              <View
                // onPress={() => navigation.navigate('profile')}
                style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={{ height: 14, width: 14 }}
                  source={imagepath.likeicon}
                />
                <Text
                  style={{
                    fontSize: 8,
                    color: Colors.appcolor,
                    marginLeft: 5,
                    fontFamily: Fonts.ProximaNovaRegular,
                  }}>
                  {item.is_recommend == 1 ? "I recommended this doctor" : "Not recommended this doctor"}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{
            fontSize: 9,
            color: '#929397',
            paddingLeft: 20,
            paddingVertical: 5,
            fontFamily: Fonts.ProximaNovaLight,
          }}>
          {item.review}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      {/*Feedback Text  */}
      <Text
        style={{
          fontSize: 16,
          color: '#000',
          paddingBottom: 5,
          fontFamily: Fonts.ProximaNovaBold,
          padding: 15,
        }}>
        Feedback
      </Text>
      {/* Card of Feedback */}
      <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center', marginVertical:12 }}>
        <TouchableOpacity onPress={()=>setActiveFeedbackTab("p")} style={[styles.feedBackTypeBtn, activeFeedbackTab == "p" ? styles.feedBackTypeBtnActive : null]}>
          <Text style={[styles.feedBackTypeBtnTxt, activeFeedbackTab == "p" ? styles.feedBackTypeBtnTxtActive : null]}>Patient Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setActiveFeedbackTab("c")} style={[styles.feedBackTypeBtn, activeFeedbackTab == "c" ? styles.feedBackTypeBtnActive : null]}>
          <Text style={[styles.feedBackTypeBtnTxt, activeFeedbackTab == "c" ? styles.feedBackTypeBtnTxtActive : null]}>Clinician Feedback</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={()=>setActiveFeedbackTab("b")} style={[styles.feedBackTypeBtn, activeFeedbackTab == "b" ? styles.feedBackTypeBtnActive : null]}>
          <Text style={[styles.feedBackTypeBtnTxt, activeFeedbackTab == "b" ? styles.feedBackTypeBtnTxtActive : null]}>Bravo Card</Text>
        </TouchableOpacity> */}
      </View>

      <FlatList
        data={activeFeedbackTab == "p" ? props.data?.patient_reviews?.data : props.data?.clinical_reviews?.data}
        style={{ paddingHorizontal: 8 }}
        renderItem={Feedback}
        keyExtractor={item => item}
      />
      {/* <FlatList
        data={props.data?.patient_reviews?.data}
        style={{ paddingHorizontal: 8 }}
        renderItem={Feedback}
        keyExtractor={item => item}
      /> */}
    </SafeAreaView>
  );
};
