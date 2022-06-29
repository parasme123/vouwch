import {StyleSheet} from 'react-native';
import {Fonts, Colors, Fontsize, Header, String} from '@common';

const styles = StyleSheet.create({
  imagebg: {flex: 1, justifyContent:'center'},
  imageHospital: {
    height: 196,
    width: 216,
    borderRadius: 100,
    alignSelf: 'center',
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
export default styles;
