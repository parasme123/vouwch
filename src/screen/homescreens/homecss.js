import {StyleSheet, Dimensions} from 'react-native';
import Fonts from '../../common/Fonts';
import Colors from '../../common/Colors';
import Fontsize from '../../common/Fontsize';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const styles = StyleSheet.create({
  notificationHeaserView: {
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: "flex-end",
    alignItems: 'center',
    marginVertical: 20,
    flex: 1,
  },
  headerbgImage: {width: '100%', zIndex: 80, paddingBottom: 25},
  headerIconMenue: {height: 16, width: 30},
  profileView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '30%',
  },
  notificationbutton: {
    height: 43,
    width: 43,
    backgroundColor: '#EEF2FB',
    borderRadius: 100,
    alignSelf: 'center',
  },
  notificationIcon: {height: 43, width: 43},
  profileButton: {height: 54, width: 54, borderRadius: 100},
  searchView: {
    marginHorizontal: 15,
    justifyContent: 'center',
    backgroundColor: Colors.appcolor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  textInputStyles: {
    color: Colors.white,
    fontSize: Fontsize.fontFourteen,
    fontFamily: Fonts.ProximaNovaLight,
    flex:1
  },
  searchText: {
    color: Colors.white,
    fontSize: Fontsize.fontFourteen,
    fontFamily: Fonts.ProximaNovaLight,
  },
  searchImage: {height: 24, width: 24,},
  categouryView: {
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 7,
    zIndex: 70,
  },
  categouryViewText: {
    color: Colors.black,
    fontSize: Fontsize.fontTwentytwo,
    fontFamily: Fonts.ProximaNovaBold,
  },
  categouryViewButtonText: {
    color: Colors.appcolor,
    fontSize: Fontsize.fontFifteen,
    fontFamily: Fonts.ProximaNovaMedium,
  },
  bravoCategoury: {
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bravoCategouryText: {
    color: Colors.black,
    fontSize: Fontsize.fontTwentytwo,
    fontFamily: Fonts.ProximaNovaBold,
  },
  bravoCategouryButtonText: {
    color: Colors.appcolor,
    fontSize: Fontsize.fontFifteen,
    fontFamily: Fonts.ProximaNovaMedium,
  },
  featuredView: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop:20,
    marginBottom:10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featuredViewText: {
    color: Colors.black,
    fontSize: Fontsize.fontTwentytwo,
    fontFamily: Fonts.ProximaNovaBold,
  },
  featuredViewButtonText: {
    color: Colors.appcolor,
    fontSize: Fontsize.fontFifteen,
    fontFamily: Fonts.ProximaNovaMedium,
  },
  categoFlatelistView: {
    paddingHorizontal: 15,
    backgroundColor: Colors.appcolor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    marginRight: 10,
    flex: 1,
    paddingVertical: 10,
  },
  categoFlatelistViewText: {
    color: Colors.white,
    fontSize: Fontsize.fontTwelve,
    fontFamily: Fonts.ProximaNovaRegular,
  },
  //
  cardContainer: {borderRadius: 10, padding: 15, margin: 10, flex: 1},
  cardIconView: {
    height: 100,
    width: 100,
    backgroundColor: Colors.white,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  cardIcon: {height: 78, width: 78, borderRadius: 100, alignSelf: 'center'},
  shareCardView: {flexDirection: 'row', marginVertical: 10},
  shareButton: {alignItems: 'center', flex: 1},
  shareButtonImage: {height: 30, width: 30},
  shareButtonText: {
    color: Colors.grey,
    fontSize: Fontsize.small,
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
    fontFamily: Fonts.ProximaNovaRegular,
    flex: 1,
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
    flex: 1,
    paddingVertical: 5,
    marginRight: 5,
  },
  videoButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 10,
    flex: 1,
    paddingVertical: 5,
    marginLeft: 5,
  },
  cardPhotoImage: {height: 11.5, width: 13},
  cardPhotoVideoText: {
    color: Colors.lightGrey,
    fontSize: Fontsize.small,
    fontFamily: Fonts.ProximaNovaRegular,
    paddingLeft: 5,
  },
  cardVideoIcon: {height: 11.5, width: 13},
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
  DoctorCardShareButton: {alignItems: 'center', flex: 1},
  DoctorCardShareButtonIcon: {height: 30, width: 30},
  //
  DoctorCardShareButtonText: {
    color: Colors.grey,
    fontSize: Fontsize.small,
    fontFamily: Fonts.ProximaNovaRegular,
    marginTop: 10,
  },
  doctorDetails: {},
  doctorname: {
    color: Colors.black,
    fontSize: Fontsize.fontFifteen,
    fontFamily: Fonts.ProximaNovaBold,
    marginVertical: 5,
  },
  doctorProfile: {
    color: Colors.appcolor,
    fontSize: Fontsize.small,
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
  star: {height: 9, width: 9},
  ratingText: {
    color: Colors.black,
    fontSize: Fontsize.fontTwelve,
    fontFamily: Fonts.ProximaNovaMedium,
    marginLeft: 10,
    flex: 3,
  },
  clinicianReview: {
    color: Colors.darkGrey,
    fontSize: Fontsize.fontTwelve,
    fontFamily: Fonts.ProximaNovaRegular,
  },
  yellowstarview: {flexDirection: 'row', alignItems: 'center'},
  searchName: {fontSize: Fontsize.fontTwenty, color: Colors.black},
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
