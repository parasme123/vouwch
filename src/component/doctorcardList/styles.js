import { StyleSheet, Dimensions } from 'react-native';
import { Fonts, Colors, Fontsize } from "@common";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
  // Doctor Cards
  addBravoCardBtn: {
    backgroundColor: Colors.appcolor,
    marginTop:16,
    flex: 1,
    // marginLeft: 2,
    padding: 5,
    borderRadius: 10,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  addBravoCardTxt: {
    color: Colors.white,
    textAlign: 'center',
    color: Colors.white,
    fontSize: Fontsize.small,
    lineHeight: 20,
    fontFamily: Fonts.ProximaNovaMedium,
    marginLeft:4
  },
  doctorCardContainer: {
    borderRadius: 10,
    padding: 16,
    margin: 24,
    // marginBottom:40,
  },
  doctorCardIconVIew: {
    height: 100,
    width: 100,
    backgroundColor: Colors.white,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  doctorCardIcon: {
    height: 80,
    width: 70,
    borderRadius: 50,
    alignSelf: 'center',
  },
  DoctorCardShareView: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    marginTop: 24,
    marginBottom:10
  },
  DoctorCardShareButton: {
    alignItems: 'center',
    flex: 1,
  },
  DoctorCardShareButtonIcon: {
    height: 30,
    width: 30,
  },
  //
  DoctorCardShareButtonText: {
    color: Colors.grey,
    fontSize: Fontsize.small,
    lineHeight: 15,
    fontFamily: Fonts.ProximaNovaRegular,
    marginTop: 10,
  },
  doctorDetails: {flex:3, marginLeft:24},
  doctorname: {
    color: Colors.black,
    fontSize: Fontsize.fontFifteen,
    lineHeight: 25,
    fontFamily: Fonts.ProximaNovaBold,
    marginBottom: 5,
    marginLeft: 5,
  },
  doctorProfile: {
    color: Colors.appcolor,
    fontSize: Fontsize.small,
    lineHeight: 15,
    fontFamily: Fonts.ProximaNovaRegular,
    marginLeft: 5,
  },
  ratingViewRed: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  ratingViewmain: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  ratingText: {
    color: Colors.black,
    fontSize: Fontsize.fontTwelve,
    lineHeight: 15,
    fontFamily: Fonts.ProximaNovaMedium,
    marginLeft: 10,
    flex: 3,
  },
  clinicianReview: {
    color: Colors.darkGrey,
    fontSize: Fontsize.fontTwelve,
    lineHeight: 15,
    fontFamily: Fonts.ProximaNovaRegular,
  },
  yellowstarview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchName: {
    fontSize: Fontsize.fontTwenty,
    lineHeight: 25,
    color: Colors.black,
  },
  searchkey: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
    paddingLeft: 20,
    elevation: 9,
    flex: 1,
    marginHorizontal: 15,
  },
});

export default styles;
