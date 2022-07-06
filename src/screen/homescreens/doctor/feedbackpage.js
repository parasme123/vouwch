import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  FlatList,
  Text,
  StatusBar,
} from 'react-native';
import Imagepath from '../../../common/imagepath';
import { useNavigation } from '@react-navigation/native';
import {Colors, Fonts} from '@common';

export default Feedbackpage = (props) => {
  const navigation = useNavigation();

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
        style={{ borderBottomWidth: 0.5, borderColor: '#929397', width: '100%', paddingVertical: 10 }} key={index}>
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
                source={Imagepath.bluetick}
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
                    source={Imagepath.yellowstar}
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
                  source={Imagepath.likeicon}
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

      <FlatList
        data={props.data?.clinical_reviews.data}
        style={{ paddingHorizontal: 8 }}
        renderItem={Feedback}
        keyExtractor={item => item}
      />
      <FlatList
        data={props.data?.patient_reviews.data}
        style={{ paddingHorizontal: 8 }}
        renderItem={Feedback}
        keyExtractor={item => item}
      />
    </SafeAreaView>
  );
};
