import {StyleSheet} from 'react-native';
import Fonts from '../../common/Fonts';
import Colors from '../../common/Colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Fontsize from '../../common/Fontsize';

const styles = StyleSheet.create({
  container: {marginHorizontal:24, 
     flexGrow: 1},
  headerText: {
    color: Colors.black,
    fontSize: Fontsize.fontThirtyfour,
    marginTop: 70,
    marginBottom: 17,
    fontFamily: Fonts.ProximaNovaBold,
  },
  headerSubText: {
    color: Colors.black,
    fontSize: Fontsize.fontseventeen,
    marginBottom: 45,
    fontFamily: Fonts.ProximaNovaRegular,
    lineHeight: 23,
    opacity: 0.4
  },
  // subContainer: {width: '100%', alignSelf: 'center'},
  textInputView: {
    flexDirection: 'row',
    borderColor: Colors.imputborderColor,
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 15,
  },
  textInputSubView: {
    borderRightWidth: 1,
    borderColor: Colors.imputborderColor,
    alignSelf: 'center',
    paddingHorizontal:15
  },
  textInputText: {
    alignSelf: 'center',
    fontSize: 15,
    paddingLeft: 15,
    color:Colors.black,
    fontFamily: Fonts.ProximaNovaLight,
    flex:1
  },
  privacyView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 5,
    marginHorizontal:10
  },
  checkbox: {height: 30, width: 30, borderRadius: 5, tintColor: '#707070'},
  checkBoxText: {
    color: Colors.black,
    fontFamily: Fonts.ProximaNovaRegular,
    fontSize:Fontsize.fontFifteen,
  },
  checkBoxText2: {
    color: Colors.appcolor,
  },
  signupButton: {
    backgroundColor: Colors.appcolor,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 25,
    paddingVertical:15
  },
  signupButtonText: {
    color: Colors.white,
    fontFamily: Fonts.ProximaNovaSemibold,
    fontSize:Fontsize.fontSixteen,
  },
  signinView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
    alignItems: 'center',
  },
  textsignin: {
    color: Colors.black,
    fontSize: Fontsize.fontTwenty,
    lineHeight:43,
    fontFamily: Fonts.ProximaNovaRegular,
  },
  button: {
    color: Colors.appcolor,
    fontSize: Fontsize.fontTwenty,
    lineHeight:43,
    fontFamily: Fonts.ProximaNovaSemibold,
  },
});

export default styles;
