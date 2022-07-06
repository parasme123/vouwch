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
import Unorderedlist from 'react-native-unordered-list';
import Imagepath from '../../../common/imagepath';

import Fonts from '../../../common/Fonts';
import { useLinkProps } from '@react-navigation/native';

export default ServicesPage = (props) => {
  const DoctorService = ({ item, index }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }} key={index}>
        <Image
          style={{ height: 10, width: 10, tintColor: 'black' }}
          source={require('../../../assect/icon/dot.png')}
        />
        <Text
          style={{
            color: '#929397',
            paddingLeft: 15,
            paddingVertical: 7,
            fontFamily: Fonts.ProximaNovaRegular,
          }}>
        {item?.service_detail?.name}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={{ padding: 15 }}>
        <Text
          style={{
            fontSize: 16,
            color: '#000',
            paddingBottom: 5,
            fontFamily: Fonts.ProximaNovaBold,
          }}>
          {props.data.business.business_name}
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
