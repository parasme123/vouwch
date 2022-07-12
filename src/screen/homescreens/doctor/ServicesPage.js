import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
// import Unorderedlist from 'react-native-unordered-list';

import { Fonts, imagepath, Colors, Fontsize } from '@common';
// import { useLinkProps } from '@react-navigation/native';

export default ServicesPage = (props) => {
  const DoctorService = ({ item, index }) => {
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
              {item?.service_detail?.name}``
            </Text>
          </>: null
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
        <FlatList
          data={props.data?.business?.services}
          renderItem={DoctorService}
          keyExtractor={(item, index) => String(index)}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
