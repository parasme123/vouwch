import { StyleSheet } from 'react-native';
import Fonts from '../../common/Fonts';
import Colors from '../../common/Colors';
import Fontsize from '../../common/Fontsize';
// Welcome css
const styles = StyleSheet.create({
  backgroundimg: { flex: 1 },
  headerTextView: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  headerText: {
    fontSize: Fontsize.fontThirtyfour,
    fontFamily: Fonts.ProximaNovaBold,
    color: Colors.black,
    marginTop: 40,
    marginHorizontal: 24,
    textAlign: "center"
  },
  headersubText: {
    fontSize: Fontsize.fontFifteen,
    color: Colors.black,
    fontFamily: Fonts.ProximaNovaRegular,
    lineHeight: 23,
    marginTop: 12,
    marginHorizontal: 24,
    textAlign: "center",
    opacity:0.4

  },
  categouryButton: {
    marginTop: 63,
    flexDirection: 'row',
    justifyContent: "space-between",
    marginHorizontal: 24
  },
  touchablePersonalButton: {
    flex:1,
    marginRight:10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',

  },
  personIconText: { fontSize: Fontsize.fontSixteen,
     fontFamily: Fonts.ProximaNovaMedium },
  personIconView: {
    padding:20,
    marginBottom: 10,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',

  },
  doctorIconTextSub: { fontSize: Fontsize.Verysmall, 
    fontFamily: Fonts.ProximaNovaMedium },
  doctorIconTexthead: { fontSize: Fontsize.fontSixteen, 
    fontFamily: Fonts.ProximaNovaMboldedium 
  },
  doctorIconbtn: {
    flex:1,
    marginLeft:10,
    paddingVertical:30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: Colors.appcolor,
    fontSize: Fontsize.fontSixteen,
    fontFamily: Fonts.ProximaNovaSemibold,
  },
  loginButton: {
    borderColor: Colors.appcolor,
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 48,
    marginHorizontal: 24,
    paddingVertical: 14
  },

  signupButton: {
    backgroundColor: Colors.appcolor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 40,
    marginHorizontal: 24,
    paddingVertical: 14,
    marginBottom:80
  },
  signupButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: Fonts.ProximaNovaSemibold,
  },
});

export default styles;
