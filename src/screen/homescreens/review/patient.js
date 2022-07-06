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
// const { width, height } = Dimensions.get("window");
// import Rating from 'react-native-easy-rating';
import { Validators } from '@lib';
import { useNavigation } from '@react-navigation/native';
import Fonts from '../../../common/Fonts';
import { Rating, AirbnbRating } from 'react-native-ratings';
export default Patient = ({ }) => {
  const [mark, setMark] = useState(0);
  const navigation = useNavigation();

  const [click, setclick] = useState();
  const [text, settext] = useState();
  const [one, setone] = useState();
  const [two, settwo] = useState();
  const [three, setthree] = useState();
  const [four, setfour] = useState();

  const Button1 = () => {
    setone(true);
    settwo(false);
    setthree(false);
    setfour(false);
  };

  const Button2 = () => {
    setone(true);
    settwo(true);
    setthree(false);
    setfour(false);
  };
  const Button3 = () => {
    setone(true);
    settwo(true);
    setthree(true);
    setfour(false);
  };

  const Button4 = () => {
    setone(true);
    settwo(true);
    setthree(true);
    setfour(true);
  };

  const Buttonslect = () => {
    setclick(true);
    settext(false);
  };
  const Buttonunslect = () => {
    setclick(false);
    settext(true);
  };

  const chexkBox = () => {
    setMark(!mark);
  };
  const [rating, setRating] = useState();


  const Call_ClinicialApi = () => {
    let apiData = {
      business_id: doctId.id,
      review_type: "Clinical",
      // rate: selectvalue,
      // review: recomendation,
      is_recommend: city,
      wait_period: hospital,
      friendness_rate: state,
      treatment_rate: detail,  
       wait_rate: doctorId,
      experience_rate: name,
      money_rate: department,
      is_anonym: mark ? 1 : 0,
    }
    if (
      Validators.checkNotNull('Doctor Id', 1, 20, doctId.id) &&
      Validators.checkNotNull('Recommendation', 2, 20, recomendation)
    ) {
      props.Review_Validators(apiData)
    }
  }


  return (
    <ImageBackground source={Imagepath.background} style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {/* Text Recomended */}
        <Text
          style={{
            color: '#000000',
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
            width: '90%',
            alignSelf: 'center',
          }}>
          {/* Button of Recomondation */}
          <TouchableOpacity
            onPress={() => {
              Buttonslect();
            }}
            style={[
              {
                backgroundColor: click ? '#19428A' : null,
                borderWidth: click ? null : 1,
              },
              styles.button,
            ]}>
            <Text
              style={[
                { color: click ? '#ffffff' : '#000000' },
                styles.buttonText,
              ]}>
              yes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Buttonunslect();
            }}
            style={[
              {
                backgroundColor: text ? '#19428A' : null,
                borderWidth: text ? null : 1,
                marginLeft: 10,
              },
              styles.button,
            ]}>
            <Text
              style={[
                { color: text ? '#ffffff' : '#000000' },
                styles.buttonText,
              ]}>
              No
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            color: '#000000',
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
              Button1();
            }}
            style={styles.progressButton}>
            {/* style={[{ backgroundColor: text ? "#19428A" : null, borderWidth: text ? null : 1, marginLeft: 10 }, styles.button]} */}
            <Image
              style={[
                { tintColor: one ? '#245FC7' : '#929397' },
                styles.dotImage,
              ]}
              resizeMode="contain"
              source={Imagepath.dot}
            />
          </TouchableOpacity>
          <Text
            style={[
              { color: two ? '#245FC7' : '#929397' },
              styles.progressButtonText,
            ]}>
            ---------------
          </Text>
          <TouchableOpacity
            onPress={() => {
              Button2();
            }}
            style={styles.progressButton}>
            <Image
              style={[
                { tintColor: two ? '#245FC7' : '#929397' },
                styles.dotImage,
              ]}
              resizeMode="contain"
              source={Imagepath.dot}
            />
          </TouchableOpacity>
          <Text
            style={[
              { color: three ? '#245FC7' : '#929397' },
              styles.progressButtonText,
            ]}>
            ---------------
          </Text>
          <TouchableOpacity
            onPress={() => {
              Button3();
            }}
            style={styles.progressButton}>
            <Image
              style={[
                { tintColor: three ? '#245FC7' : '#929397' },
                styles.dotImage,
              ]}
              resizeMode="contain"
              source={Imagepath.dot}
            />
          </TouchableOpacity>
          <Text
            style={[
              { color: four ? '#245FC7' : '#929397' },
              styles.progressButtonText,
            ]}>
            ---------------
          </Text>
          <TouchableOpacity
            onPress={() => {
              Button4();
            }}
            style={styles.progressButton}>
            <Image
              style={[
                { tintColor: four ? '#245FC7' : '#929397' },
                styles.dotImage,
              ]}
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
              Button1();
            }}>
            <Text
              style={[
                { color: one ? '#245FC7' : '#929397', paddingHorizontal: 18 },
                styles.progressButtonTexttime,
              ]}>
              0To15
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Button2();
            }}>
            <Text
              style={[
                { color: two ? '#245FC7' : '#929397' },
                styles.progressButtonTexttime,
              ]}>
              15To30
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Button3();
            }}>
            <Text
              style={[
                { color: three ? '#245FC7' : '#929397', paddingLeft: 25 },
                styles.progressButtonTexttime,
              ]}>
              30To1hr
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Button4();
            }}>
            <Text
              style={[
                { color: four ? '#245FC7' : '#929397' },
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
                color: '#000000',
                fontSize: 15,
                fontFamily: Fonts.ProximaNovaMedium,
              }}>
              Doctor Friendliness
            </Text>
            <Rating
              rating={rating}
              max={5}
              imageSize={20}
              iconWidth={24}
              iconHeight={24}
              onRate={setRating}
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
                color: '#000000',
                fontSize: 15,
                fontFamily: Fonts.ProximaNovaMedium,
              }}>
              Treatnment Satisfication
            </Text>
            <Rating
              rating={rating}
              max={5}
              imageSize={20}
              iconWidth={24}
              iconHeight={24}
              onRate={setRating}
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
                color: '#000000',
                fontSize: 15,
                fontFamily: Fonts.ProximaNovaMedium,
              }}>
              Wait Time
            </Text>
            <Rating
              rating={rating}
              max={5}
              imageSize={20}
              iconWidth={24}
              iconHeight={24}
              onRate={setRating}
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
                color: '#000000',
                fontSize: 15,
                fontFamily: Fonts.ProximaNovaMedium,
              }}>
              Explanation of the issue
            </Text>
            <Rating
              rating={rating}
              max={5}
              imageSize={20}
              iconWidth={24}
              iconHeight={24}
              onRate={setRating}
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
                color: '#000000',
                fontSize: 15,
                fontFamily: Fonts.ProximaNovaMedium,
              }}>
              Value for Money
            </Text>
            <Rating
              rating={rating}
              max={5}
              imageSize={20}
              iconWidth={24}
              iconHeight={24}
              onRate={setRating}
            />
          </View>
        </View>
        <Text
          style={{
            color: '#000000',
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
          placeholderTextColor="#929397"
          style={{
            paddingLeft: 15,
            height: 120,
            borderColor: 'CECECE',
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
              color: '#000000',
              fontFamily: Fonts.ProximaNovaRegular,
            }}>
            Keep this feedback publicity anonymous
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('bottomtab')}
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
});
