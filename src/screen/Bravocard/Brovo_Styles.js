import {StyleSheet, Dimensions} from 'react-native';
import {Fontsize, Colors} from '@common';
import Fonts from '../../common/Fonts';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Brovo_Styles = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.white,
    flex: 1,
    elevation: 4,
    marginBottom: 60,
    marginHorizontal: 20,
    borderRadius: 10,
    top: 40,
  },
  hightView: {
    backgroundColor: Colors.bottonColors,
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    height: 200,
  },
  ScrollViewStyle: {
    flexGrow: 1,
  },
  input_main: {
    flex: 1,
    paddingVertical: 20,
  },
  TextStyles: {
    fontSize: Fontsize.fontSixteen,
    color: Colors.black,
    fontFamily: Fonts.ProximaNovaBold,
  },
  PhotoText: {
    fontSize: Fontsize.fontFourteen,
    color: Colors.white,
    left: 10,
    fontFamily: Fonts.ProximaNovaLight,
  },
  Imageicon: {
    height: 20,
    width: 20,
  },
  mainContPhoto: {
    flex: 1,
    marginLeft: 20,
  },
  PhotosVideoView: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  PhotosView: {
    marginRight: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 20,
  },

  VideoView: {
    alignSelf: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 20,
  },
});
export default Brovo_Styles;
