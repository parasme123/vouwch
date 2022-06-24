import { StyleSheet } from 'react-native';
import { Colors, Fontsize, Fonts } from "@common";

// marginHorizontal: 24,


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    flex: 1,
  },
  header: {
    color: Colors.black,
    fontSize: Fontsize.fontThirtyfour,
    marginTop: 70,
    marginBottom: 17,
    fontFamily: Fonts.ProximaNovaBold,
  },
  subHeader: {
    color: Colors.black,
    fontSize: Fontsize.fontseventeen,
    marginBottom: 45,
    fontFamily: Fonts.ProximaNovaRegular,
    lineHeight: 23,
    opacity: 0.4
  },
  textInputMainView: {
  },
  textinputUsernameView: {
    flexDirection: 'row',
    borderColor: Colors.imputborderColor,
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: "center"
  },
  textinputpasswordView: {
    borderRightWidth: 1,
    borderColor: Colors.imputborderColor,
    paddingHorizontal:15
  },
  textInputname: {
    alignSelf: 'center',
    fontSize: Fontsize.fontFifteen,
    color: Colors.black,
    fontFamily: Fonts.ProximaNovaLight,
    paddingLeft:15,
    flex:1
  },
  textInputPasswordView: {
    flexDirection: 'row',
    borderColor: Colors.imputborderColor,
    borderWidth: 1,
    borderRadius: 30,
    alignItems: 'center',
    paddingRight:15
  },
  textinputPassword: {
    alignSelf: 'center',
    fontSize: Fontsize.fontFifteen,
    color: Colors.black,
    flex:1,
    paddingLeft:15,
    fontFamily: Fonts.ProximaNovaLight,
  },
  forgotButton: { margin: 25, alignSelf: 'flex-end' },
  forgotButtontext: {
    color: Colors.appcolor,
    fontSize: Fontsize.fontSixteen,
    fontFamily: Fonts.ProximaNovaMedium,
  },
  loginButton: {
    backgroundColor: Colors.appcolor,
    alignItems: 'center',
    borderRadius: 30,
    paddingVertical:14,
    justifyContent: 'center',
  },
  loginButtonText: {
    color: Colors.white,
    fontSize: Fontsize.fontSixteen,
    fontFamily: Fonts.ProximaNovaSemibold,
  },
  orLineView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '65%',
    alignSelf: 'center',
    marginVertical: 40,
  },
  subView: { flex: 1, height: 1, backgroundColor: Colors.grey },
  orText: {
    width: 150,
    textAlign: 'center',
    color: Colors.grey,
    fontSize: Fontsize.fontSixteen,
    fontFamily: Fonts.ProximaNovaRegular,
  },
  socialButtonView: {
    flexDirection: 'row',
    justifyContent:"space-around",
  },
  googleButton: {
    borderColor: '#EA4335',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  fbButton: {
    borderColor: '#3B5998',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  twiterButton: {
    borderColor: '#27AAE2',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  twiterIcon: { height: 33, width: 33 },
  registerview: { flexDirection: 'row', justifyContent: 'center',marginVertical:40 },
  registerText: {
    color: Colors.black,
    fontSize: Fontsize.fontTwenty,
    fontFamily: Fonts.ProximaNovaRegular,
  },
  registerButtonText: {
    color: Colors.appcolor,
    fontSize: Fontsize.fontTwenty,
    fontFamily: Fonts.ProximaNovaBold,
  },
});


export default styles;
