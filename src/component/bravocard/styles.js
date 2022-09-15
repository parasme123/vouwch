import { StyleSheet, Dimensions } from 'react-native';
import { Fonts, Colors, Fontsize } from "@common";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
  centeredView1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.transparentBlack,
    opacity: 5,
  },
  centeredView2: {
    width: '92%',
    height: 360,
    borderRadius: 15,
    alignSelf: 'center',
    backgroundColor: Colors.white,
    elevation: 1,
  },
  headerView: {
    height: 50,
    backgroundColor: Colors.bottonColors,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  headerText: {
    color: Colors.white,
    fontSize: Fontsize.fontFifteen,
  },
  headerIcon: {
    height: 30,
    width: 30,
  },
  cardContainer: {
    borderRadius: 10,
    padding: 15,
    margin: 10,
    // width: SCREEN_WIDTH / 2 - 20,
    width: 280,
  },
  cardIconView: {
    height: 100,
    width: 100,
    backgroundColor: Colors.white,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  cardIcon: { height: 78, width: 78, borderRadius: 100, alignSelf: 'center' },
  shareCardView: { flexDirection: 'row', marginTop: 10 },
  shareButton: { alignItems: 'center', flex: 1 },
  shareButtonImage: { height: 30, width: 30 },
  shareButtonText: {
    color: Colors.grey,
    fontSize: Fontsize.small,
    lineHeight: 15,
    fontFamily: Fonts.ProximaNovaRegular,
    marginTop: 5,
  },
  cardHospitalView: {},
  hospitalName: {
    color: Colors.black,
    fontSize: Fontsize.fontFifteen,
    fontFamily: Fonts.ProximaNovaSemibold,
    marginVertical: 5,
  },
  cardHospitalViewText: {
    color: Colors.lightGrey,
    fontSize: Fontsize.small,
    lineHeight: 15,
    fontFamily: Fonts.ProximaNovaRegular,
    flex: 1,
  },
  cardHospitalViewTextmain: {
    color: Colors.lightGrey,
    fontSize: Fontsize.small,
    lineHeight: 15,
    fontFamily: Fonts.ProximaNovaRegular,
    // flex: 1,
  },
  //
  cardHospitalViewButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  //
  cardPhotoButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.appcolor,
    borderRadius: 10,
    flex: 2,
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  cardPhotoButton2: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.appcolor,
    borderRadius: 10,
    flex: 3,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  videoButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 10,
    flex: 2,
    paddingVertical: 5,
    marginHorizontal: 7,
  },
  cardPhotoImage: { height: 11.5, width: 13 },
  cardVideoText: {
    color: Colors.lightGrey,
  },
  cardPhotoText: {
    color: Colors.white,
    fontSize: Fontsize.small,
    lineHeight: 15,
    fontFamily: Fonts.ProximaNovaRegular,
    paddingLeft: 5, textAlign: "center"
  },
  cardVideoIcon: { height: 11.5, width: 13 },
  // Doctor Cards
  doctorCardContainer: {
    justifyContent: 'center',
    borderRadius: 10,
    flex: 1,
    padding: 15,
    margin: 10,
  },
  doctorCardIconVIew: {
    height: 100,
    width: 100,
    backgroundColor: Colors.white,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  doctorCardIcon: {
    height: 100,
    width: 100,
    borderRadius: 100,
    alignSelf: 'center',
  },
  DoctorCardShareView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  DoctorCardShareButton: { alignItems: 'center', flex: 1 },
  DoctorCardShareButtonIcon: { height: 30, width: 30 },
  //
  DoctorCardShareButtonText: {
    color: Colors.grey,
    fontSize: Fontsize.small,
    lineHeight: 15,
    fontFamily: Fonts.ProximaNovaRegular,
    marginTop: 10,
  },
  doctorDetails: {},
  doctorname: {
    color: Colors.black,
    fontSize: Fontsize.fontFifteen,
    lineHeight: 25,
    fontFamily: Fonts.ProximaNovaBold,
    marginVertical: 5,
  },
  doctorProfile: {
    color: Colors.appcolor,
    fontSize: Fontsize.small,
    lineHeight: 15,
    fontFamily: Fonts.ProximaNovaRegular,
  },
  ratingViewRed: {
    flexDirection: 'row',
    marginVertical: 10,
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
  star: { height: 9, width: 9 },
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
  yellowstarview: { flexDirection: 'row', alignItems: 'center' },
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
