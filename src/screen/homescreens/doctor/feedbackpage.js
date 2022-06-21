import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  FlatList,
  Text,
  StatusBar,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Imagepath from '../../../common/imagepath';
// import { Header } from '../../../common/Header';
// import String from '../../../common/String';
import {useNavigation} from '@react-navigation/native';
import Fonts from '../../../common/Fonts';
import Colors from '../../../common/Colors';

export default Feedbackpage = () => {
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
  const Feedback = ({item}) => {
    return (
      <View
        style={{borderBottomWidth: 0.5, borderColor: '#929397', width: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 15,
          }}>
          {/* doctor Image */}
          <Image
            style={{height: 49, width: 49, borderRadius: 100}}
            source={Imagepath.doctors}
          />
          {/* Doctor Details */}
          <View style={{flexDirection: 'column', marginLeft: '1.5%'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#000',
                  fontFamily: Fonts.ProximaNovaBold,
                }}>
                {item.NameFeedback}
              </Text>
              <Image
                style={{height: 11, width: 11, marginLeft: 10}}
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
              Heart Surgeon
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '80%',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
                    style={{height: 8, width: 8, paddingRight: 3}}
                    source={Imagepath.yellowstar}
                  />
                  <Text
                    style={{
                      fontSize: 8,
                      color: '#000',
                      fontFamily: Fonts.ProximaNovaBold,
                      paddingLeft: 3,
                    }}>
                    3.2
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 8,
                    color: '#5D5D5D',
                    paddingLeft: 5,
                    fontFamily: Fonts.ProximaNovaRegular,
                  }}>
                  200 Reviews
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('profile')}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{height: 14, width: 14}}
                  source={Imagepath.likeicon}
                />
                <Text
                  style={{
                    fontSize: 8,
                    color: Colors.appcolor,
                    marginLeft: 5,
                    fontFamily: Fonts.ProximaNovaRegular,
                  }}>
                  I Recommeded this doctor
                </Text>
              </TouchableOpacity>
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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
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
        data={Card}
        style={{padding: '4%'}}
        renderItem={Feedback}
        keyExtractor={item => item}
      />
    </SafeAreaView>
  );
};
