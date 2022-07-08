import { StyleSheet, Dimensions } from 'react-native';
import { Fonts, Fontsize, Colors } from '@common';

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
  imputHeader: {
    fontSize: 16, color: "#000", fontFamily: Fonts.ProximaNovaBold , marginHorizontal: 24,
  },
  dropdownView: {
    borderWidth: 1,
    borderColor: '#CECECE',
    fontSize: Fontsize.fontFifteen,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingLeft: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  dropdownText: { fontSize: Fontsize.fontFifteen, fontFamily: Fonts.ProximaNovaMedium },
  downArrow: { height: 8, width: 12, paddingRight: 50 },
});
export default Brovo_Styles;
