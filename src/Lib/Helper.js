import * as React from 'react';
import {Alert} from 'react-native';
import Constants from './Constants';

// import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
export default class Helper extends React.Component {
  static device_token = 'Andriod';
  static device_type = '123456';

  static confirmPopUp(alertMessage, cb) {
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
      {cancelable: false},
    );
  }
}
