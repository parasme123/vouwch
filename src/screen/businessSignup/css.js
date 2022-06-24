import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Fonts from '../../common/Fonts';
import Colors from '../../common/Colors';
import Fontsize from '../../common/Fontsize';

const styles = StyleSheet.create({
  container: {marginHorizontal:24,  flex: 1},
  header: {
    color: Colors.black,
    fontFamily: Fonts.ProximaNovaBold,
    fontSize: Fontsize.fontThirtyfour,
    marginTop: 70,
    marginBottom: 17,
  },
  headerText: {
    color: Colors.black,
    fontSize: Fontsize.fontseventeen,
    marginBottom: 45,
    fontFamily: Fonts.ProximaNovaRegular,
    lineHeight: 23,
    opacity: 0.4
  
  },
  // ImputView: {width: '100%', alignSelf: 'center'},
  textInputView: {
    flexDirection: 'row',
    borderColor: Colors.imputborderColor,
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: "center"
  },
  textInputsubView: {
    borderRightWidth: 1,
    borderColor: Colors.imputborderColor,
    paddingHorizontal:15
  },
  textInput: {
    fontSize: Fontsize.fontFifteen,
    color: Colors.black,
    fontFamily: Fonts.ProximaNovaLight,
    paddingLeft:15,
    flex:1
  },
  continuebtn: {
    backgroundColor: Colors.appcolor,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 25,
    paddingVertical:15
  },
  continuebtnText: {
    color: Colors.white,
    fontFamily: Fonts.ProximaNovaSemibold,
    fontSize:Fontsize.fontSixteen,
  },
  detailbutton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
    alignItems: 'center',
  },
  detailbuttonText1: {
    color: Colors.black,
    fontSize: Fontsize.fontTwenty,
    lineHeight:43,
    fontFamily: Fonts.ProximaNovaRegular,
  },
  sigininTextButton: {
    color: Colors.appcolor,
    fontSize: Fontsize.fontTwenty,
    lineHeight:43,
    fontFamily: Fonts.ProximaNovaSemibold,
  },
  dropdownSubView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textSpacilist: {
    fontSize:Fontsize.fontFifteen,
    color: '#999',
    fontFamily: Fonts.ProximaNovaLight,
  },
  dropdownIcon: {tintColor:Colors.black, height: 25, width: 25},
  inputAndroid: {
    fontSize: Fontsize.fontTwenty,
    color: Colors.black,
    fontFamily: Fonts.ProximaNovaLight,
    paddingLeft: 20,
    height: 50,
  },
  inputIOS: {
    height: 50,
    color: '#565656',
    paddingLeft: 10,
  },
  placeholder: {
    fontSize: Fontsize.fontTwenty,
    color: Colors.grey,
    fontFamily: Fonts.ProximaNovaLight,
  },


  privacyView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 5,
    marginHorizontal:10
  },
  checkbox: {height: 30, width: 30, borderRadius: 5, tintColor: Colors.checkboxColor},
  checkBoxText: {
    color: Colors.black,
    fontFamily: Fonts.ProximaNovaRegular,
    fontSize:Fontsize.fontFifteen,
  },
  checkBoxText2: {
    color: Colors.appcolor,
  },
});

export default styles;
