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
import { Rating } from 'react-native-ratings';

const styles = StyleSheet.create({
  feedBackTypeBtn: {
    backgroundColor: Colors.darkSkyBlue,
    paddingVertical: 6,
    paddingHorizontal: 8,
    marginHorizontal: 15,
    borderRadius: 10,
    flex: 1
  },
  feedBackTypeBtnTxt: {
    color: Colors.black,
    fontSize: Fontsize.fontTwelve,
    textAlign: "center"
  },
  feedBackTypeBtnActive: {
    backgroundColor: Colors.appcolor,
    textAlign: "center"
  },
  feedBackTypeBtnTxtActive: {
    color: Colors.white,
    textAlign: "center"
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
  const Review = activeFeedbackTab == "p" ? props.data?.patient_reviews : props.data?.clinical_reviews;
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
                  {item.is_anonym == 1 ? "anonymous" : item.users.full_name}
                </Text>
                <Image
                  style={{ height: 11, width: 11, marginLeft: 10 }}
                  source={imagepath.bluetick}
                />
              </View>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: 10, marginRight: 10 }}>
                <Image
                  style={{ height: 15, width: 15, marginRight: 5 }}
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
                    backgroundColor: Colors.white,
                    borderRadius: 10,
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 3,
                    borderWidth: 0.5,
                    borderColor: "#B5B5B5"
                  }}>
                  <Rating
                    type="custom"
                    max={5}
                    readonly="true"
                    ratingColor={activeFeedbackTab == "p" ? "#FAC917" : Colors.red}
                    ratingBackgroundColor={Colors.white}
                    startingValue={item.rate}
                    imageSize={12}
                    iconWidth={15}
                    iconHeight={15}
                  />

                  {/* <Image
                    style={{ height: 8, width: 8, paddingRight: 3 }}
                    source={activeFeedbackTab == "p" ? imagepath.yellowstar : imagepath.redstar}
                  />
                  <Text
                    style={{
                      fontSize: Fontsize.fontTwelve,
                      color: Colors.black,
                      fontFamily: Fonts.ProximaNovaBold,
                      paddingLeft: 3,
                    }}>
                    {item.rate}
                  </Text> */}
                </View>
                {/* <Text
                  style={{
                    fontSize: Fontsize.fontTwelve,
                    color: '#5D5D5D',
                    paddingLeft: 5,
                    fontFamily: Fonts.ProximaNovaRegular,
                  }}>
                  Reviews
                </Text> */}
              </View>
              <Text
                style={{
                  fontSize: Fontsize.fontTwelve,
                  color: Colors.grey,
                  // paddingLeft: 20,
                  fontFamily: Fonts.ProximaNovaLight,
                  // marginVertical: 10
                }}>
                {item.review}
              </Text>

              {/*           View recomended   by user*/}
              <View
                // onPress={() => navigation.navigate('profile')}s
                style={{ flexDirection: "row", alignItems: 'center', justifyContent: "flex-end" }}>
                <Image
                  style={{ height: 14, width: 14 }}
                  source={imagepath.likeicon}
                />
                {
                  activeFeedbackTab == "p" ? (
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
                  ) : null
                }
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const BravoCard = ({ item, index }) => {
    return (
      <Bravocard
        bravo_Card_name={item.name}
        bravo_Card_Details={item.department}
        hideButtons={true}
        item={item}
        index={index}
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
          <Text style={[styles.feedBackTypeBtnTxt, activeFeedbackTab == "p" ? styles.feedBackTypeBtnTxtActive : null]}>Patient </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveFeedbackTab("c")} style={[styles.feedBackTypeBtn, activeFeedbackTab == "c" ? styles.feedBackTypeBtnActive : null]}>
          <Text style={[styles.feedBackTypeBtnTxt, activeFeedbackTab == "c" ? styles.feedBackTypeBtnTxtActive : null]}>Clinician </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveFeedbackTab("b")} style={[styles.feedBackTypeBtn, activeFeedbackTab == "b" ? styles.feedBackTypeBtnActive : null]}>
          <Text style={[styles.feedBackTypeBtnTxt, activeFeedbackTab == "b" ? styles.feedBackTypeBtnTxtActive : null]}>Bravo Card</Text>
        </TouchableOpacity>
      </View>
      {activeFeedbackTab == "p" || activeFeedbackTab == "c" ?
        <>
          {Review?.map((item, index) => (
            Feedback({ item, index })
          ))
          }
        </>
        : null
      }

      {activeFeedbackTab == "b" ?
        // <>
        //   {props.data?.business?.get_card.map((item, index) => (
        //     BravoCard({ item, index })
        //   ))
        //   }
        // </>
        < FlatList
          data={props.data?.business?.get_card}
          renderItem={BravoCard}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
        />
        : null
      }
    </SafeAreaView>
  );
};
