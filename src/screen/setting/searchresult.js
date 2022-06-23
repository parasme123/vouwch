import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
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
import String from '../../common/String';
import {Header} from '@common';
import Imagepath from '../../common/imagepath';
import {useNavigation} from '@react-navigation/native';
import Fonts from '../../common/Fonts';
import Colors from '../../common/Colors';
import Fontsize from '../../common/Fontsize';
// import {Fonts,Colors,Fontsize,Header,String } from "@common"

const Searchresult = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={Imagepath.background} style={styles.imagebg}>
      {/* Header */}
      <Header title={String.searchresult} isback={'bottomtab'} />
      <Image style={styles.imageHospital} source={Imagepath.hospital} />
      <Text style={styles.textdata}>No Data Found</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('hospital')}
        style={styles.button}>
        <Text style={styles.textButton}>
          Add doctor/hospital and write a review
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imagebg: {flex: 1},
  container: {flex: 1, marginTop: 50},
  imageHospital: {
    height: 196,
    width: 216,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 80,
  },
  textdata: {
    fontSize: Fontsize.fontTwenty,
    color: Colors.black,
    fontFamily: Fonts.ProximaNovaBold,
    textAlign: 'center',
    marginVertical: 15,
  },
  button: {
    marginHorizontal: 20,
    backgroundColor: Colors.appcolor,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 5,
  },
  textButton: {
    color: '#fff',
    fontSize: Fontsize.fontSixteen,
    fontFamily: Fonts.ProximaNovaMedium,
  },
});

export default Searchresult;
