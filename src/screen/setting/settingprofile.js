import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Header, Imagepath, String, Fonts, Colors } from '@common';
import { useNavigation } from '@react-navigation/native';

const Settingprofile = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={Imagepath.background} style={{ flex: 1 }}>
      <Header title={String.ProfileSetting} isback={'bottomtab'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.mainView}></View>
        <View style={styles.container}>
          <Image style={styles.doctorImage} source={Imagepath.doctors} />
          <Text style={styles.doctorImageText}>Rate and Review</Text>
          <Text style={styles.doctorImageSubText}>Rate and Review</Text>
          <TouchableOpacity style={styles.followbutton}>
            <Image
              style={styles.followIcon}
              resizeMode="contain"
              source={Imagepath.follow}
            />
            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container1}>
          <Text style={styles.messageHeading}>Message</Text>
          <View style={styles.textInputView}>
            <TextInput
              placeholder="Enter Message"
              placeholderTextColor={'#000'}
              style={styles.imputText}
            />
            <TouchableOpacity style={styles.sendIcon}>
              <Image
                style={styles.sendImage}
                resizeMode="contain"
                source={Imagepath.send}
              />
            </TouchableOpacity>
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
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  container: {
    width: '90%',
    height: 260,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#00000012',
    borderBottomWidth: 2,
    shadowColor: '#00000012',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 7,
  },
  container1: {
    width: '90%',
    height: 150,
    alignSelf: 'center',
    marginTop: 180,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#00000012',
    borderBottomWidth: 2,
    shadowColor: '#00000012',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 7,
  },
  mainView: { height: 115, width: '100%', backgroundColor: Colors.appcolor },
  doctorImage: { height: 93, width: 93, borderRadius: 100 },
  doctorImageText: {
    color: '#000',
    fontSize: 20,
    marginVertical: 3,
    fontFamily: Fonts.ProximaNovaBold,
  },
  doctorImageSubText: {
    color: '#737373',
    fontSize: 14,
    fontFamily: Fonts.ProximaNovaMedium,
  },
  followbutton: {
    backgroundColor: Colors.appcolor,
    width: 120,
    height: 26,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 10,
  },
  followIcon: { tintColor: '#fff', height: 20, width: 20 },
  followText: {
    color: '#ffffff',
    fontSize: 10,
    fontFamily: Fonts.ProximaNovaMedium,
  },
  messageHeading: {
    color: '#000',
    fontSize: 20,
    marginHorizontal: 15,
    marginVertical: 20,
    fontFamily: Fonts.ProximaNovaSemibold,
  },
  textInputView: {
    height: 45,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginHorizontal: 15,
  },
  imputText: { fontSize: 14, width: '90%', fontFamily: Fonts.ProximaNovaMedium },
  sendIcon: { width: 30, height: 30, flexDirection: 'row', borderRadius: 20 },
  sendImage: { height: 30, width: 30 },
});
export default Settingprofile;
