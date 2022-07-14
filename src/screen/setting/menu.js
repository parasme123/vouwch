import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Linking,
  Image,
} from 'react-native';
import { useIsFocused, useLinkProps } from '@react-navigation/native';
import { Header, Fonts, String, Colors, Fontsize, imagepath } from '@common';
import { Helper, Constants, AsyncStorageHelper,CustomLoader } from '@lib';
import { handleNavigation } from '../../navigator/Navigator';
import { logOut ,postLogout} from '../../reduxStore/action/doctorAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// const { width, height } = Dimensions.get("window");
const Menu = (props, { navigation }) => {
  const [userType, setuserType] = useState(null);
  const [userToken, setuserToken] = useState(null);
  const isFocused = useIsFocused();
  const [loaderVisible, setloaderVisible] = useState(false);
  useEffect(() => {
    AsyncStorageHelper.getData(Constants.TOKEN).then(value => {
      if (value !== null) {
        setuserToken(value);
      }
    });
    AsyncStorageHelper.getData(Constants.USER_DATA).then(value => {
      if (value !== null) {
        setuserType(value);
      }
    });
  }, [isFocused]);

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
    props.actions.logOut();
    HandelLogoutbyApi();
    handleNavigation({
      type: 'setRoot',
      page: 'bottomtab',
      navigation: props.navigation,
    });
  };
  
  const HandelLogoutbyApi = () => {
    let { actions } = props;
    actions.postLogout(setloaderVisible);
  };
  return (
    <ImageBackground source={imagepath.background} style={styles.imagebg}>
      {/*  Header*/}
      <Header title={String.menu} isback={'bottomtab'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container1}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("webView", { url: 'https://apponedemo.top/vouwch/api/contact-us-app', title: "Contact Us" })}
            style={styles.pageButton}>
            <Image
              style={styles.pageButtonIcon}
              resizeMode="contain"
              source={imagepath.Contact}
            />
            <Text style={styles.pageButtonText}>contact us</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => props.navigation.navigate("webView", { url: 'https://apponedemo.top/vouwch/api/help-support-app', title: "Help & support" })}
            style={styles.pageButton}>
            <Image
              style={styles.pageButtonIcon}
              resizeMode="contain"
              source={imagepath.help}
            />
            <Text style={styles.pageButtonText}>Help & support</Text>
          </TouchableOpacity>
          <TouchableOpacity
             onPress={() => props.navigation.navigate("webView", { url: 'https://apponedemo.top/vouwch/api/about-us-app', title: "About us" })}
            style={styles.pageButton}>
            <Image
              style={styles.pageButtonIcon}
              resizeMode="contain"
              source={imagepath.i}
            />
            <Text style={styles.pageButtonText}>About us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("webView", { url: 'https://apponedemo.top/vouwch/api/privacy-policy-app', title: "Privacy Policy" })}
            style={styles.pageButton}>
            <Image
              style={styles.pageButtonIcon}
              resizeMode="contain"
              source={imagepath.privacy}
            />
            <Text style={styles.pageButtonText}>Privacy Policy</Text>
          </TouchableOpacity>
          {
            userType && userToken ? (
              <TouchableOpacity
                style={[styles.pageButton, { marginBottom: 50 }]}
                onPress={() => {
                  SignOut();
                }}>
                <Image
                  style={styles.pageButtonIcon}
                  resizeMode="contain"
                  source={imagepath.help}
                />
                <Text style={styles.pageButtonText}>Sign out</Text>
              </TouchableOpacity>
            ) : null
          }
        </View>
      </ScrollView>
      <CustomLoader loaderVisible={loaderVisible} />
    </ImageBackground >
  );
};

const styles = StyleSheet.create({
  imagebg: { flex: 1 },
  container1: {
    marginHorizontal: 24,
    marginTop: 10,
  },
  pageButton: { flexDirection: 'row', alignItems: 'center', },
  pageButtonIcon: { height: 30, width: 30 },
  pageButtonText: {
    color: Colors.black,
    fontSize: Fontsize.fontEighteen,
    marginHorizontal: 15,
    marginVertical: 20,
    fontFamily: Fonts.ProximaNovaMedium,
  },
});


const mapStateToProps = state => ({
  // setData: state.doctor.setData,
});

const ActionCreators = Object.assign(
  { logOut },
  {postLogout}
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
