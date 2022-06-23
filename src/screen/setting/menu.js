import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
  Image,
  TextInput,
  Modal,
} from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Imagepath from '../../common/imagepath';
import ImagePicker from 'react-native-image-crop-picker';
import String from '../../common/String';
import {Header} from '@common';
import Fonts from '../../common/Fonts';
import Helper from '../../Lib/Helper';
import AsyncStorageHelper from '../../Lib/AsyncStorageHelper';
import {handleNavigation} from '../../navigator/Navigator';
import Constants from '../../Lib/Constants';
import Colors from '../../common/Colors';
// import styles from './styles';
// const { width, height } = Dimensions.get("window");
export default Menu = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const SignOut = () => {
    Helper.confirmPopUp('Are you sure, you want to logout ?', status => {
      if (status) {
        appLogout();
      }
    });
    // navigation.navigate('bottomtab')
  };
  const appLogout = async () => {
    await AsyncStorageHelper.removeItemValue(Constants.USER_DATA);
    await AsyncStorageHelper.removeItemValue(Constants.TOKEN);
    handleNavigation({
      type: 'setRoot',
      page: 'bottomtab',
      navigation: navigation,
    });
  };

  return (
    <ImageBackground source={Imagepath.background} style={styles.imagebg}>
      {/*  Header*/}
      <Header title={String.menu} isback={'bottomtab'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container1}>
          <TouchableOpacity style={styles.pageButton}>
            <Image
              style={styles.pageButtonIcon}
              resizeMode="contain"
              source={Imagepath.Contact}
            />
            <Text style={styles.pageButtonText}>contact us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pageButton}>
            <Image
              style={styles.pageButtonIcon}
              resizeMode="contain"
              source={Imagepath.help}
            />
            <Text style={styles.pageButtonText}>Help & support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pageButton}>
            <Image
              style={styles.pageButtonIcon}
              resizeMode="contain"
              source={Imagepath.i}
            />
            <Text style={styles.pageButtonText}>About us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pageButton}>
            <Image
              style={styles.pageButtonIcon}
              resizeMode="contain"
              source={Imagepath.privacy}
            />
            <Text style={styles.pageButtonText}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pageButton}
            onPress={() => {
              SignOut();
            }}>
            <Image
              style={styles.pageButtonIcon}
              resizeMode="contain"
              source={Imagepath.help}
            />
            <Text style={styles.pageButtonText}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imagebg: {flex: 1},
  containerView: {height: 65, width: '100%', backgroundColor: Colors.appcolor},
  arrowiconView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    width: '90%',
    alignSelf: 'center',
  },
  arrowicon: {height: 21, width: 31},
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    paddingTop: 20,
  },
  headerText: {
    color: '#ffffff',
    paddingLeft: 35,
    fontSize: 20,
    fontWeight: '500',
  },
  container1: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  pageButton: {flexDirection: 'row', alignItems: 'center', width: '60%'},
  pageButtonIcon: {height: 30, width: 30},
  pageButtonText: {
    color: '#000',
    fontSize: 18,
    marginHorizontal: 15,
    marginVertical: 20,
    fontFamily: Fonts.ProximaNovaMedium,
  },
});
