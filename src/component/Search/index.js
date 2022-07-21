import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Imagepath from '../../common/imagepath';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
const Searchresult = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.imagebg}>
      <Image style={styles.imageHospital} source={Imagepath.hospital} />
      <Text style={styles.textdata}>No Data Found</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('hospital')}
        style={styles.button}>
        <Text style={styles.textButton}>
          Add doctor / hospital name
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Searchresult;
