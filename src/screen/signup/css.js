import {StyleSheet} from 'react-native';
import Fonts from '../../common/Fonts';
import Colors from '../../common/Colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {width: '85%', alignSelf: 'center', height: '100%', flexGrow: 1},
  headerText: {
    color: '#000000',
    fontSize: 34,
    marginTop: 50,
    marginBottom: 10,
    fontFamily: Fonts.ProximaNovaBold,
  },
  headerSubText: {
    color: '#737373',
    fontSize: 17,
    marginBottom: 40,
    fontFamily: Fonts.ProximaNovaRegular,
  },
  subContainer: {width: '100%', alignSelf: 'center'},
  textInputView: {
    flexDirection: 'row',
    borderColor: '#CCC',
    borderWidth: 1,
    width: '100%',
    borderRadius: 30,
    alignSelf: 'center',
    height: 50,
    marginBottom: 15,
  },
  textInputSubView: {
    borderRightWidth: 1,
    borderColor: '#737373',
    height: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textinputIcon: {
    tintColor: '#8F8B8B',
    alignSelf: 'center',
    height: 15,
    width: 15,
    alignSelf: 'center',
    marginLeft: '7%',
  },
  textInputText: {
    alignSelf: 'center',
    fontSize: 15,
    paddingLeft: '4%',
    color: '#000000',
    fontFamily: Fonts.ProximaNovaLight,
    width: '85%',
  },
  emailIcon: {
    tintColor: '#8F8B8B',
    alignSelf: 'center',
    height: 15,
    width: 15,
    alignSelf: 'center',
    marginLeft: '7%',
  },
  privacyView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '85%',
    alignSelf: 'center',
    marginTop: 5,
  },
  checkbox: {height: 30, width: 30, borderRadius: 5, tintColor: '#707070'},
  checkBoxText: {
    color: '#000000',
    fontFamily: Fonts.ProximaNovaRegular,
    fontSize: wp('3.5%'),
  },
  checkBoxText2: {
    color: Colors.appcolor,
    fontFamily: Fonts.ProximaNovaRegular,
    fontSize: wp('3.5%'),
  },
  signupButton: {
    backgroundColor: 'rgba(36, 95, 199, 1)',
    alignItems: 'center',
    borderRadius: 20,
    height: 45,
    justifyContent: 'center',
    marginBottom: 25,
  },
  signupButtonText: {
    color: '#ffffff',
    fontFamily: Fonts.ProximaNovaSemibold,
    fontSize: 15,
  },
  signinView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    alignItems: 'center',
  },
  textsignin: {
    color: '#000000',
    fontSize: wp('4.5%'),
    fontFamily: Fonts.ProximaNovaRegular,
  },
  button: {
    color: Colors.appcolor,
    fontSize: wp('4.5%'),
    fontFamily: Fonts.ProximaNovaSemibold,
  },
});

export default styles;
