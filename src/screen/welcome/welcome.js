import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import styles from './css';
import { Colors, imagepath, svg } from '@common';

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
      source={imagepath.doctorbg}
      resizeMode="cover"
      style={styles.backgroundimg}>
      <ScrollView
        style={{}}>
        {/* header Text */}
        <Text style={styles.headerText}>Welcome to vouwch</Text>
        {/* Header sub Text */}
        <Text style={styles.headersubText}>
          Read or add review about medical care by hospitals and doctors you can
          vouch for
        </Text>
        {/* Personal Business button */}
        <View style={styles.categouryButton}>
          <TouchableOpacity
            style={[
              {
                backgroundColor:
                  SlectUser == 'PERSONAL' ? Colors.appcolor : Colors.darkSkyBlue ,
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
                    SlectUser == 'PERSONAL' ? Colors.darkBlue  : Colors.mediumskyblue ,
                },
                styles.personIconView,
              ]}>
              {svg.manIcon(25, 25, SlectUser == 'BUSINESS' ? Colors.black : Colors.white)}
            </View>
            <Text
              style={[
                { color: SlectUser == 'PERSONAL' ? Colors.white : Colors.black },
                styles.personIconText,
              ]}>
              PERSONAL
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                backgroundColor:
                  SlectUser == 'BUSINESS' ? Colors.appcolor : Colors.darkSkyBlue ,
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
                    SlectUser == 'BUSINESS' ? Colors.darkBlue  : Colors.mediumskyblue ,
                },
                styles.personIconView,
              ]}>

              {svg.doctorIcon(25, 25, SlectUser == 'BUSINESS' ? Colors.white : Colors.black)}

            </View>
            <Text
              style={[
                { color: SlectUser == 'BUSINESS' ? Colors.white : Colors.black },
                styles.doctorIconTexthead,
              ]}>
              BUSINESS
            </Text>
            <Text
              style={[
                { color: SlectUser == 'BUSINESS' ? Colors.white : Colors.appcolor },
                styles.doctorIconTextSub,
              ]}>
              ( Doctor, Hospital and clinics)
            </Text>
          </TouchableOpacity>
        </View>
        {/* Login  Button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            [navigation.navigate('login', { UserType: SlectUser })];
          }}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        {/* Signup Button */}
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
      </ScrollView>
    </ImageBackground>
  );
};
export default Welcome;
