import { StyleSheet } from 'react-native';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
import Fontsize from '../../common/Fontsize';

const NotificationStyle = StyleSheet.create({
  background: { flex: 1, backgroundColor: Colors.white },
  Imageicon: { height: 70, width: 70, borderRadius: 70 / 2 },
  UserNameText: {
    fontSize: Fontsize.fontEighteen,
    color: Colors.black,
    fontFamily: Fonts.ProximaNovaMedium,
  },
  RequestText: {
    fontSize: Fontsize.fontEighteen,
    color: 'grey',
    fontFamily: Fonts.ProximaNovaRegular,
  },
  VideoView: {
    marginTop: 10,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    backgroundColor: Colors.light,
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 7,
  },
  PhotoText: {
    fontSize: Fontsize.fontFourteen,
    color: Colors.white,
    left: 5,
    fontFamily: Fonts.ProximaNovaLight,
  },
  Imagealram: { height: 18, width: 18 },
  feedBackTypeBtn: {
    backgroundColor: Colors.darkSkyBlue,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginLeft: 6,
    borderRadius: 10,
    flex: 1,
    justifyContent: "space-around",
    margin: 10
  },
  feedBackTypeBtnTxt: {
    color: Colors.black,
    fontSize: Fontsize.fontTwelve,
    textAlign: "center"
  },
  feedBackTypeBtnActive: {
    backgroundColor: Colors.appcolor,
  },
  feedBackTypeBtnTxtActive: {
    color: Colors.white,
  },
  headButton:{
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: Colors.white,

  }
});

export default NotificationStyle;
