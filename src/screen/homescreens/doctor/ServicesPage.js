import React, {useState} from 'react';
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
import {useLinkProps} from '@react-navigation/native';

export default ServicesPage = props => {
  const [DoctorServiceList, setDoctorServiceList] = useState([1, 2, 3, 4]);
  const DoctorService = ({item, index}) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}} key={index}>
        <Image
          style={{height: 10, width: 10, tintColor: 'black'}}
          source={require('../../../assect/icon/dot.png')}
        />
        <Text
          style={{
            color: '#929397',
            paddingLeft: 15,
            paddingVertical: 7,
            fontFamily: Fonts.ProximaNovaRegular,
          }}>
          General Physicians:
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={{padding: 15}}>
        <Text
          style={{
            fontSize: 16,
            color: '#000',
            paddingBottom: 5,
            fontFamily: Fonts.ProximaNovaBold,
          }}>
          {props.name}
        </Text>
        <FlatList
          data={DoctorServiceList}
          // style={{ padding: "4%" ,alignSelf:"center"}}
          renderItem={DoctorService}
          // numColumns={2}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
