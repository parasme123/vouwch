import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import Colors from '../../../common/Colors';

import Fonts from '../../../common/Fonts';
import Fontsize from '../../../common/Fontsize';
// import styles from '../homecss';

export default Aboutapp = (props) => {
  return (
    <SafeAreaView>
      <View style={{padding: 25}}>
        <Text style={styles.name}>
          {props.data.business?.business_name}
          </Text>
        <Text style={styles.details}>
          {props.data?.business?.about_us}
          </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  name: {
    fontSize: Fontsize.fontSixteen,
    color: Colors.black,
    paddingBottom: 5,
    fontFamily: Fonts.ProximaNovaBold,
  },
  details: {
    fontSize: Fontsize.fontTwelve,
    color: '#929397',
    justifyContent: 'center',
    fontFamily: Fonts.ProximaNovaRegular,
  },
});
