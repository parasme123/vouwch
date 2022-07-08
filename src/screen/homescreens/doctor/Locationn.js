import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Image,
  Text,
  StatusBar,
} from 'react-native';

import { imagepath, Fonts, Fontsize, Colors } from '@common';

export default Locationn = (props) => {
  return (
    <SafeAreaView>
      <View style={{ padding: 15 }}>
        <Text
          style={{
            fontSize: Fontsize.fontSixteen,
            color: Colors.black,
            paddingBottom: 5,
            fontFamily: Fonts.ProximaNovaBold,
          }}>
          {props.data.business.business_name}
        </Text>
        {
          props.data.business.service_location != null ?
            <>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={{ height: 10, width: 10, tintColor: 'black' }}
                  source={imagepath.dot}
                />
                <Text
                  style={{
                    color: '#929397',
                    paddingLeft: 15,
                    paddingVertical: 7,
                    fontSize: Fontsize.fontNine,
                    fontFamily: Fonts.ProximaNovaRegular,
                  }}>
                  {props.data.business.service_location}
                </Text>
              </View>
            </> : null
        }
      </View>
    </SafeAreaView>
  );
};
