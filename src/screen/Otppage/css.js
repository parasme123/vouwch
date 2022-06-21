import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Fonts from '../../common/Fonts';
import Colors from '../../common/Colors';

const styles = StyleSheet.create({
  saperateLineView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('50%'),
    alignSelf: 'center',
    margin: hp('2%'),
  },
  line: {
    flex: 1,
    height: hp('0.15%'),
    backgroundColor: '#737373',
  },
  orText: {
    width: wp('10%'),
    textAlign: 'center',
    color: '#737373',
    fontSize: hp('2%'),
    // fontSize:15
  },

  container: {width: '85%', alignSelf: 'center', height: '100%'},
  header: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 34,
    marginTop: hp('9%'),
    marginBottom: hp('2%'),
    fontFamily: Fonts.ProximaNovaBold,
  },
  textInputMainView: {width: '100%', alignSelf: 'center', marginTop: 70},
  textinputUsernameView: {
    flexDirection: 'row',
    borderColor: '#000000',
    borderWidth: 1,
    width: '100%',
    borderRadius: 30,
    alignSelf: 'center',
    height: 48,
    marginBottom: hp('1%'),
  },
  textinputpasswordView: {
    borderRightWidth: 1,
    borderColor: '#737373',
    height: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  usernameIcon: {
    tintColor: '#8F8B8B',
    alignSelf: 'center',
    height: 15,
    width: 15,
    alignSelf: 'center',
    marginLeft: '7%',
  },
  textInputname: {
    alignSelf: 'center',
    fontSize: 15,
    paddingLeft: '4%',
    color: '#000000',
    width: '85%',
    fontFamily: Fonts.ProximaNovaLight,
  },
  loginButton: {
    backgroundColor: 'rgba(36, 95, 199, 1)',
    alignItems: 'center',
    borderRadius: 30,
    height: 50,
    justifyContent: 'center',
    marginVertical: 30,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: Fonts.ProximaNovaSemibold,
  },
  registerview: {flexDirection: 'row', justifyContent: 'center'},
  registerText: {
    color: '#000000',
    fontSize: 17,
    fontFamily: Fonts.ProximaNovaRegular,
  },
  registerButtonText: {
    color: Colors.appcolor,
    fontSize: 17,
    fontFamily: Fonts.ProximaNovaBold,
  },
  otpview: {flexDirection: 'row', justifyContent: 'center'},
  otpText1234: {
    fontSize: 25,
    // color: Colors.DEFAULT_BLACK,
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
    width: 50,
    // backgroundColor: "pink",
    // borderRadius: 10, margin: 10
  },
  otpBox: {
    borderRadius: 5,
    borderColor: '#CCC',
    borderWidth: 1,
    margin: 10,
  },
});

export default styles;
