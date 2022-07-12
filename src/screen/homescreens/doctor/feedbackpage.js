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
import Fontsize from '../../../common/Fontsize';
import { Bravocard, DoctorCard } from '@component';
import { Helper } from '@lib';
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
    fontSize: Fontsize.fontTwelve
  },
  feedBackTypeBtnActive: {
    backgroundColor: Colors.appcolor,
  },
  feedBackTypeBtnTxtActive: {
    color: Colors.white,
  },
  listMainViewFlatlist: {
    borderBottomWidth: 0.5,
    borderColor: Colors.grey,
    width: '100%',
    paddingVertical: 10
  },
  subViewflatelist: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  profileuserfeedback: {
    height: 49,
    width: 49,
    borderRadius: 100
  },
  detailsView: {
    flexDirection: 'column',
    marginLeft: 15,
    flex: 1
  },
  userNameFeed: {
    fontSize: Fontsize.fontTwelve,
    color: Colors.black,
    fontFamily: Fonts.ProximaNovaBold,
  },
})
export default Feedbackpage = (props) => {
  const navigation = useNavigation();
  const [activeFeedbackTab, setActiveFeedbackTab] = useState("p");
  const Feedback = ({ item, index }) => {
    return (
      <View
        style={styles.listMainViewFlatlist} key={index}>
        <View
          style={styles.subViewflatelist}>
          {/* doctor Image */}
          <TouchableOpacity
            onPress={() => { navigation.navigate("FeedbackUserProfile", { userId: item?.users?.id }) }}>
            <Image
              style={styles.profileuserfeedback}
              //  source={}
              source={item.users.profile_picture == null ? imagepath.doctor : { uri: item.users.profile_picture }}
            />
          </TouchableOpacity>
          {/* feedback details */}
          <View style={styles.detailsView}>
            {/* name of feedback user */}
            <View style={{
              flexDirection: 'row', alignItems: 'center', paddingTop: 10
            }}>
              <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', paddingTop: 10 }}>
                <Text
                  style={[styles.userNameFeed]}>
                  {/* {item.NameFeedback} */}
                  {item.users.full_name}
                </Text>
                <Image
                  style={{ height: 11, width: 11, marginLeft: 10 }}
                  source={imagepath.bluetick}
                />
              </View>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: 10, marginRight:10}}>
                <Image
                  style={{ height: 15, width: 15, marginRight:5 }}
                  source={imagepath.calender}
                />
                <Text
                  style={{
                    fontSize: Fontsize.fontTwelve,
                    color: Colors.grey,
                    paddingVertical: 3,
                    fontFamily: Fonts.ProximaNovaRegular,
                    justifyContent: "flex-end"
                  }}>
                  {Helper.setDateFormat(item.created_at)}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
              }}>
              {/* Review given */}
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#E6F5FB',
                    borderRadius: 10,
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 3
                  }}>
                  <Image
                    style={{ height: 8, width: 8, paddingRight: 3 }}
                    source={imagepath.yellowstar}
                  />
                  <Text
                    style={{
                      fontSize: Fontsize.fontTwelve,
                      color: Colors.black,
                      fontFamily: Fonts.ProximaNovaBold,
                      paddingLeft: 3,
                    }}>
                    {item.rate}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: Fontsize.fontTwelve,
                    color: '#5D5D5D',
                    paddingLeft: 5,
                    fontFamily: Fonts.ProximaNovaRegular,
                  }}>
                  Reviews
                </Text>
              </View>
              {/*           View recomended   by user*/}
              <View
                // onPress={() => navigation.navigate('profile')}s
                style={{ flexDirection: "row", alignItems: 'center', justifyContent: "flex-end" }}>
                <Image
                  style={{ height: 14, width: 14 }}
                  source={imagepath.likeicon}
                />
                <Text
                  style={{
                    fontSize: Fontsize.fontTwelve,
                    color: Colors.appcolor,
                    marginLeft: 5,
                    lineHeight: 15,
                    fontFamily: Fonts.ProximaNovaRegular,
                    marginRight: 10
                  }}>
                  {item.is_recommend == 1 ? "I recommended this doctor" : "Not recommended this doctor"}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{
            fontSize: Fontsize.fontTwelve,
            color: Colors.grey,
            paddingLeft: 20,
            fontFamily: Fonts.ProximaNovaLight,
            marginVertical: 10
          }}>
          {item.review}
        </Text>
      </View>
    );
  };

  const BravoCard = ({ item, index }) => {
    return (
      <Bravocard
        bravo_Card_name={item.name}
        bravo_Card_Details={item.department}
        hideButtons={true}
        // onpress_Comment={CommentpropPage}
        // onpress_Message={MessagepropPage}
        // onpress_Share={onShare}
        item={item}
        index={index}
      // onpress_Photo={}
      // onpress_Video={}
      />
    )
  }
  return (
    <SafeAreaView>
      {/*Feedback Text  */}
      <Text
        style={{
          fontSize: Fontsize.fontSixteen,
          color: Colors.black,
          paddingBottom: 5,
          fontFamily: Fonts.ProximaNovaBold,
          padding: 15,
        }}>
        Feedback
      </Text>
      {/* Card of Feedback */}
      <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center', marginVertical: 12 }}>
        <TouchableOpacity onPress={() => setActiveFeedbackTab("p")} style={[styles.feedBackTypeBtn, activeFeedbackTab == "p" ? styles.feedBackTypeBtnActive : null]}>
          <Text style={[styles.feedBackTypeBtnTxt, activeFeedbackTab == "p" ? styles.feedBackTypeBtnTxtActive : null]}>Patient Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveFeedbackTab("c")} style={[styles.feedBackTypeBtn, activeFeedbackTab == "c" ? styles.feedBackTypeBtnActive : null]}>
          <Text style={[styles.feedBackTypeBtnTxt, activeFeedbackTab == "c" ? styles.feedBackTypeBtnTxtActive : null]}>Clinician Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveFeedbackTab("b")} style={[styles.feedBackTypeBtn, activeFeedbackTab == "b" ? styles.feedBackTypeBtnActive : null]}>
          <Text style={[styles.feedBackTypeBtnTxt, activeFeedbackTab == "b" ? styles.feedBackTypeBtnTxtActive : null]}>Bravo Card</Text>
        </TouchableOpacity>
      </View>
      {activeFeedbackTab == "p" || activeFeedbackTab == "c" ?
        < FlatList
          data={activeFeedbackTab == "p" ? props.data?.patient_reviews?.data : props.data?.clinical_reviews?.data}
          style={{ paddingHorizontal: 8 }}
          renderItem={Feedback}
          keyExtractor={(item, index) => String(index)}
        /> : null

      }

      {activeFeedbackTab == "b" ?
        <FlatList
          data={props.data?.business?.get_card}
          renderItem={BravoCard}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
        /> : null
      }
    </SafeAreaView>
  );
};
