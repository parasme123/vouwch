import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Image,
  Text,
  StatusBar,
} from 'react-native';

import Fonts from '../../../common/Fonts';

export default Locationn = () => {
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
          Dr. jenny wilson
        </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{height: 10, width: 10, tintColor: 'black'}}
            source={require('../../../assect/icon/dot.png')}
          />
          <Text
            style={{
              color: '#929397',
              paddingLeft: 15,
              fontFamily: Fonts.ProximaNovaRegular,
            }}>
            Anesthesiology
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{height: 10, width: 10, tintColor: 'black'}}
            source={require('../../../assect/icon/dot.png')}
          />
          <Text
            style={{
              color: '#929397',
              paddingLeft: 15,
              fontFamily: Fonts.ProximaNovaRegular,
            }}>
            General Physicians:
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
            Pediatricians:
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
