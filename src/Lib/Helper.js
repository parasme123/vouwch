import * as React from 'react';
import { Alert } from 'react-native';
import Constants from './Constants';

import { handleNavigation } from '../navigator/Navigator';
// import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
export const confirmPopUp = (alertMessage, cb) => {
  Alert.alert(
    Constants.AppName,
    alertMessage,
    [
      {
        text: 'YES',
        onPress: () => {
          if (cb) cb(true);
          console.log('OK Pressed');
        },
      },
      {
        text: 'NO',
        onPress: () => {
          if (cb) cb(false);
        },
        style: 'cancel',
      },
    ],
    { cancelable: false },
  );
}

export const loginPopUp = (navigation) => {
  Alert.alert(
    Constants.AppName,
    "Please Login First",
    [
      {
        text: 'Cancel',
        onPress: () => console.log("Login Cancel"),
      },
      {
        text: 'Login',
        onPress: () => handleNavigation({
          type: 'push',
          page: 'welcome',
          navigation: navigation,
        }),
      },
    ],
    { cancelable: false },
  );
}

