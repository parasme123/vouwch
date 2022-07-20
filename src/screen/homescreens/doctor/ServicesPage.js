import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
// import Unorderedlist from 'react-native-unordered-list';

import { Fonts, imagepath, Colors, Fontsize } from '@common';
// import { useLinkProps } from '@react-navigation/native';

export default ServicesPage = (props) => {
  const Data = props.data?.business?.services;
  const DoctorService = ({ item, index }) => {
    // console.log("Data",Data);
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }} key={index}>
        {
          item?.service_detail?.name != null ?
            <>
              <Image
                style={{ height: 10, width: 10, tintColor: Colors.black }}
                source={imagepath.dot}
              />
              <Text
                style={{
                  color: '#929397',
                  paddingLeft: 15,
                  paddingVertical: 7,
                  fontFamily: Fonts.ProximaNovaRegular,
                  fontSize: Fontsize.fontTwelve,
                }}>
                {item?.service_detail?.name}
              </Text>
            </> : null
        }
      </View>
    );
  };
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
          {props?.data?.business?.business_name}
        </Text>
        {Data?.map((item, index) => (
          DoctorService({ item, index })
        ))}
      </View>
    </SafeAreaView>
  );
};
