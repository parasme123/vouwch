import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
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
import Imagepath from '../../common/imagepath';
import {Rating, AirbnbRating} from 'react-native-ratings';
import ToggleSwitch from 'toggle-switch-react-native';
import {Header} from '@common';
import String from '../../common/String';
import {useNavigation} from '@react-navigation/native';
import Fonts from '../../common/Fonts';
import Colors from '../../common/Colors';
export default Profile = ({route}) => {
  const [rating, setRating] = useState();
  const [isTrue, setisTrue] = useState(false);

  const isBackTrue = route.params ? route.params.isBackTrue : false;

  const navigation = useNavigation();
  return (
    <ImageBackground source={Imagepath.background} style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}

        <Header title={String.ProfileSetting} isback={isBackTrue} />
        <View
          style={{
            height: 115,
            width: '100%',
            backgroundColor: Colors.appcolor,
          }}></View>

        <View style={styles.container}>
          {/* params */}
          <Image style={styles.profileIcon} source={Imagepath.doctors} />
          {/* Button of Share , Comment and Mesage */}

          <Text style={styles.doctorname}>Dr. Darren Elder</Text>
          <Text style={styles.field}>Medicine & Heart Spelist</Text>
          <Text style={styles.organization}>
            Good Health Clinic, MBBS, FCPS
          </Text>

          {/* yellow Star Line */}
          <TouchableOpacity
            style={styles.yellowstarview}
            onPress={() =>
              navigation.navigate('Doctordetails', {personRed: true})
            }>
            <View style={styles.ratingViewmain}>
              <Image style={styles.star} source={Imagepath.yellowstar} />
              <Image style={styles.star} source={Imagepath.yellowstar} />
              <Image style={styles.star} source={Imagepath.yellowstar} />
              <Image style={styles.star} source={Imagepath.yellowstar} />
              <Image style={styles.star} source={Imagepath.yellowstar} />
            </View>
            <Text style={styles.ratingText}>
              3.2
              <Text style={styles.clinicianReview}> Patient Review</Text>
            </Text>
          </TouchableOpacity>
          {/* Red Star Line */}
          <TouchableOpacity
            style={styles.ratingViewRed}
            onPress={() =>
              navigation.navigate('Doctordetails', {personRed: true})
            }>
            <View style={styles.ratingViewmain}>
              <Image style={styles.star} source={Imagepath.redstar} />
              <Image style={styles.star} source={Imagepath.redstar} />
              <Image style={styles.star} source={Imagepath.redstar} />
              <Image style={styles.star} source={Imagepath.redstar} />
              <Image style={styles.star} source={Imagepath.redstar} />
            </View>
            <Text style={styles.ratingText}>
              3.2
              <Text style={styles.clinicianReview}> Clinician's Review</Text>
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container1}>
          <TouchableOpacity
            onPress={() => navigation.navigate('asscounsetting')}
            style={styles.pageButton}>
            <Image
              style={styles.pageButtonIcon}
              resizeMode="contain"
              source={Imagepath.Accountsetting}
            />
            <Text style={styles.pageButtonText}>Account setting</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('edit')}
            style={styles.pageButton}>
            <Image
              style={styles.pageButtonIcon}
              resizeMode="contain"
              source={Imagepath.Profilesetting}
            />
            <Text style={styles.pageButtonText}>Profile setting</Text>
          </TouchableOpacity>
          <View
            style={[
              {justifyContent: 'space-between', alignContent: 'center'},
              styles.pageButton,
            ]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={styles.pageButtonIcon}
                resizeMode="contain"
                source={Imagepath.Notification22}
              />
              <Text style={styles.pageButtonText}>Notification</Text>
            </View>
            <ToggleSwitch
              isOn={isTrue}
              onColor="#245FC7"
              // offColor="blue"
              // disabled='false'
              size="medium"
              onToggle={isOn => setisTrue(isOn)}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 168,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  container: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginTop: 65,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#00000012',
    borderBottomWidth: 2,
    shadowColor: '#00000012',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.6,
    shadowRadius: 7,
    flex: 1,
    paddingVertical: 20,
  },
  container1: {width: '90%', alignSelf: 'center', marginTop: 250},
  header: {height: 130, width: '100%', backgroundColor: Colors.appcolor},
  arrowView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    width: '90%',
    alignSelf: 'center',
  },
  arrowicon: {height: 21, width: 31},
  headerTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    paddingTop: 15,
  },
  headerText: {
    color: '#ffffff',
    paddingLeft: 35,
    fontSize: 20,
    fontWeight: '500',
  },
  profileIcon: {height: 120, width: 120, borderRadius: 100, marginBottom: 20},
  doctorname: {
    color: Colors.appcolor,
    fontSize: 25,
    fontFamily: Fonts.ProximaNovaSemibold,
  },
  field: {
    color: '#000',
    fontSize: 18,
    fontFamily: Fonts.ProximaNovaSemibold,
    marginVertical: 10,
  },
  organization: {
    color: '#858585',
    fontSize: 14,
    fontFamily: Fonts.ProximaNovaRegular,
  },
  ratingView: {marginVertical: 15},
  pageButton: {flexDirection: 'row', alignItems: 'center'},
  pageButtonIcon: {height: 30, width: 30},
  pageButtonText: {
    color: '#000',
    fontSize: 18,
    marginHorizontal: 15,
    marginVertical: 20,
    fontFamily: Fonts.ProximaNovaMedium,
  },

  ratingViewRed: {flexDirection: 'row'},
  ratingViewmain: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 7,
  },
  star: {height: 12, width: 12},
  ratingText: {
    color: '#000000',
    fontSize: 15,
    fontFamily: Fonts.ProximaNovaMedium,
  },
  clinicianReview: {
    color: '#858585',
    fontSize: 15,
    fontFamily: Fonts.ProximaNovaRegular,
  },
  yellowstarview: {flexDirection: 'row', marginVertical: 10},
});
