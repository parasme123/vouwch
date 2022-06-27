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
import { Rating } from 'react-native-ratings';
import { Colors, imagepath, svg } from '@common';
import Imagepath from '../../common/imagepath';
import ToggleSwitch from 'toggle-switch-react-native';
import {Header,Fonts,String,Fontsize} from '@common';
import {useNavigation} from '@react-navigation/native';
export default Profile = (props,{route}) => {
  const [rating, setRating] = useState();
  const [isTrue, setisTrue] = useState(false);
  const isBackTrue = props.route.params ? props.route.params.isBackTrue : false;

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

           {/* Red Star Line */}
        <View style={styles.ratingViewRed}>
          <View style={styles.ratingViewmain}>
            <Rating
              type="custom"
              max={5}
              readonly="true"
              ratingColor={Colors.red}
              ratingBackgroundColor={Colors.white}
              startingValue={props.ClinicianReview_Value}
              imageSize={10}
              iconWidth={10}
              iconHeight={10}
            />
          </View>
          <Text style={styles.ratingText}>
            {props.Clinician_Rating}
            <Text style={styles.clinicianReview}> Clinician's Review</Text>
          </Text>
        </View>

        {/* yellow Star Line */}
        <View style={styles.yellowstarview}>
          <View style={styles.ratingViewmain}>
            <Rating
              max={5}
              readonly="true"
              startingValue={props.startingValue}
              imageSize={10}
              iconWidth={10}
              iconHeight={10}
            />
          </View>
          <Text style={styles.ratingText}>
            {props.patient_Rating}
            <Text style={styles.clinicianReview}> Patient Review</Text>
          </Text>
        </View>
       
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
  // button: {
  //   height: 40,
  //   width: 168,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 20,
  // // },
  // shadowProp: {
  //   shadowColor: '#171717',
  //   shadowOffset: {width: 0, height: 3},
  //   shadowOpacity: 0.4,
  //   shadowRadius: 2,
  // },
  container: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#ffffff',
    marginTop: 65,
    borderRadius: 20,
    elevation:5,
    flex: 1,
    paddingVertical: 20,
  },
 
  container1: {width: '90%', alignSelf: 'center', marginTop: 250},
  
  profileIcon: {height: 120, width: 120, borderRadius: 100, marginBottom: 20},
  doctorname: {
    color: Colors.appcolor,
    fontSize: Fontsize.fontTwentyfive,
    fontFamily: Fonts.ProximaNovaSemibold,
  },
  field: {
    color: Colors.black,
    fontSize: Fontsize.fontEighteen,
    fontFamily: Fonts.ProximaNovaSemibold,
    marginVertical: 10,
  },
  ratingViewRed: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  ratingViewmain: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    borderRadius: 10,
    flex: 1,
    justifyContent:"center"
  },
  ratingText: {
    color: Colors.black,
    fontSize: Fontsize.fontEighteen,
    lineHeight: 24,
    fontFamily: Fonts.ProximaNovaMedium,
    flex: 1,
  },
  clinicianReview: {
    color: Colors.darkGrey,
    fontSize: Fontsize.fontEighteen,
    lineHeight: 24,
    fontFamily: Fonts.ProximaNovaRegular,
  },
  yellowstarview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  organization: {
    color: '#858585',
    fontSize: Fontsize.fontFourteen,
    fontFamily: Fonts.ProximaNovaRegular,
  },
  pageButton: {flexDirection: 'row', alignItems: 'center'},
  pageButtonIcon: {height: 30, width: 30},
  pageButtonText: {
    color: Colors.black,
    fontSize: Fontsize.fontEighteen,
    marginHorizontal: 15,
    marginVertical: 20,
    fontFamily: Fonts.ProximaNovaMedium,
  },

});
