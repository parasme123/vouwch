import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Imagepath from '../../common/imagepath';
import Colors from '../../common/Colors';
import styles from './css';

const Welcome = () => {
  const [SlectUser, setSlectUser] = useState('PERSONAL');
  const PersonalPage = () => {
    setSlectUser('PERSONAL');
  };

  const BusinessPage = () => {
    setSlectUser('BUSINESS');
  };
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={Imagepath.doctorbg}
      resizeMode="cover"
      style={styles.backgroundimg}>
      {/* header Text */}
      <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Welcome to vouwch</Text>
      </View>
      {/* Header sub Text */}
      <View style={styles.headersubTextView}>
        <Text style={styles.headersubText}>
          Read or add review about medical care by hospitals and doctors you can
          vouch for
        </Text>
      </View>
      {/* Personal Business button */}
      <View style={styles.categouryButton}>
        {/* <TouchableOpacity onPress={() => { Aboutus() }} style={[{ backgroundColor: About ? "blue" : "#ffffff", width: 70, }, styles.button]}> */}
        {/* this.props.navigation.navigate('signup')}                      */}
        <TouchableOpacity
          style={[
            {
              backgroundColor:
                SlectUser == 'PERSONAL' ? Colors.appcolor : '#D7EFFB',
            },
            styles.touchablePersonalButton,
          ]}
          onPress={() => {
            PersonalPage();
          }}>
          <View
            style={[
              {
                backgroundColor:
                  SlectUser == 'PERSONAL' ? '#19428b' : '#AAE3FF',
              },
              styles.personIconView,
            ]}>
            <Image
              source={Imagepath.man}
              resizeMode="contain"
              style={[
                styles.personicon,
                {tintColor: SlectUser == 'PERSONAL' ? '#fff' : '#000'},
              ]}
            />
          </View>
          <Text
            style={[
              {color: SlectUser == 'PERSONAL' ? '#fff' : '#000'},
              styles.personIconText,
            ]}>
            PERSONAL
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            {
              backgroundColor:
                SlectUser == 'BUSINESS' ? Colors.appcolor : '#D7EFFB',
            },
            styles.doctorIconbtn,
          ]}
          onPress={() => {
            BusinessPage();
          }}>
          <View
            style={[
              {
                backgroundColor:
                  SlectUser == 'BUSINESS' ? '#19428b' : '#AAE3FF',
              },
              styles.personIconView,
            ]}>
            <Image
              source={Imagepath.doctoricon2}
              style={[
                styles.doctorIcon,
                {tintColor: SlectUser == 'BUSINESS' ? '#fff' : '#000'},
              ]}
            />
          </View>
          <Text
            style={[
              {color: SlectUser == 'BUSINESS' ? '#fff' : '#000'},
              styles.doctorIconTexthead,
            ]}>
            BUSINESS
          </Text>
          <Text
            style={[
              {color: SlectUser == 'BUSINESS' ? '#fff' : Colors.appcolor},
              styles.doctorIconTextSub,
            ]}>
            ( Doctor, Hospital and clinics)
          </Text>
        </TouchableOpacity>
      </View>
      {/* Login  Button */}
      <View style={styles.loginBtnView}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            [navigation.navigate('login', {UserType: SlectUser})];
          }}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      {/* Signup Button */}
      <View style={styles.signupViewButton}>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => {
            [
              SlectUser == 'PERSONAL'
                ? navigation.navigate('signup')
                : navigation.navigate('business'),
            ];
          }}>
          <Text style={styles.signupButtonText}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
      {/*  bottom image*/}
      {/* <View style={styles.bottomImage}>
                    <Image source={Imagepath.bg} resizeMode="cover" style={styles.bottomImageIcon} />
                </View> */}
      {/* </View> */}
      {/* </ScrollView> */}
    </ImageBackground>
  );
};
export default Welcome;
