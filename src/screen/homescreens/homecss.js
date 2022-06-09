import { StyleSheet } from "react-native";
import Fonts from '../../common/Fonts';
import Colors from "../../common/Colors";

const styles = StyleSheet.create({
    notificationHeaserView: { width: "92%", alignSelf: "center", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 20 },
    headerbgImage: { width: "100%", height: 183,zIndex:80 },
    headerIconMenue: { height: 16, width: 30 },
    profileView: { justifyContent: "space-between", flexDirection: "row", width: "30%" },
    notificationbutton: { height: 43, width: 43, backgroundColor: "#EEF2FB", borderRadius: 100, alignSelf: "center" },
    notificationIcon: { height: 43, width: 43 },
    profileButton: { height: 54, width: 54, borderRadius: 100 },
    searchView: { width: "92%", justifyContent: "center", backgroundColor: Colors.appcolor, flexDirection: "row", justifyContent: "space-between", borderRadius: 10, height: 50, alignItems: "center", alignSelf: "center", paddingHorizontal: 15, },
    textInputStyles: { color: Colors.white, fontSize: 14, fontFamily: Fonts.ProximaNovaLight },
    searchText: { color: Colors.white, fontSize: 14, fontFamily: Fonts.ProximaNovaLight },
    searchImage: { height: 24, width: 24, },
    categouryView: { flexDirection: "row", width: "92%", alignSelf: "center", justifyContent: "space-between", alignItems: "center", marginTop: 7, zIndex:70 },
    categouryViewText: { color: Colors.black, fontSize: 22, fontFamily: Fonts.ProximaNovaBold },
    categouryViewButtonText: { color: Colors.appcolor, fontSize: 15, fontFamily: Fonts.ProximaNovaMedium },
    bravoCategoury: { flexDirection: "row", width: "92%", alignSelf: "center", justifyContent: "space-between", alignItems: "center" },
    bravoCategouryText: { color: Colors.black, fontSize: 22, fontFamily: Fonts.ProximaNovaBold },
    bravoCategouryButtonText: { color: Colors.appcolor, fontSize: 15, fontFamily: Fonts.ProximaNovaMedium },
    featuredView: { flexDirection: "row", width: "92%", alignSelf: "center", justifyContent: "space-between", alignItems: "center" },
    featuredViewText: { color: Colors.black, fontSize: 22, fontFamily: Fonts.ProximaNovaBold },
    featuredViewButtonText: { color: Colors.appcolor, fontSize: 15, fontFamily: Fonts.ProximaNovaMedium },
    categoFlatelistView: { paddingHorizontal: 15, paddingVertical:10, backgroundColor: Colors.appcolor, justifyContent: "center", alignItems: "center", borderRadius: 10,flex:1 ,marginVertical:10,marginRight:10 },
    categoFlatelistViewText: { color: Colors.white, fontSize: 12, fontFamily: Fonts.ProximaNovaRegular },
    // 
    cardContainer: { backgroundColor: "#245FC714", borderRadius: 10,  padding: 15,marginVertical:10, marginRight:10, flex:1},
    cardIconView: { height: 100, width: 100, backgroundColor: Colors.white, borderRadius: 100, justifyContent: "center", alignItems: "center", alignSelf: "center" },
    cardIcon: { height: 78, width: 78, borderRadius: 100, alignSelf: "center" },
    shareCardView: { flexDirection: "row", justifyContent: "space-around", alignSelf: "center",marginVertical:10 },
    shareButton: { alignItems: "center", flex:1 },
    shareButtonImage: { height: 20, width: 20 },
    shareButtonText: { color: "#929397", fontSize: 7, fontFamily: Fonts.ProximaNovaRegular },
    cardHospitalView: {},
    hospitalName: { color: Colors.black, fontSize: 15, fontFamily: Fonts.ProximaNovaSemibold, marginVertical: 5 },
    cardHospitalViewText: { color: "#858585", fontSize: 8, fontFamily: Fonts.ProximaNovaRegular },
    // 
    cardHospitalViewButton: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
    // 
    cardPhotoButton: { justifyContent: "center", alignItems: "center", flexDirection: "row", backgroundColor: Colors.appcolor, borderRadius: 10, flex: 1, paddingVertical: 5, marginRight: 5 },
    videoButton: { justifyContent: "center", alignItems: "center", flexDirection: "row", backgroundColor: "#ffffff", borderRadius: 10, flex: 1, paddingVertical: 5, marginLeft: 5 },
    cardPhotoImage: { height: 11.5, width: 13 },
    cardPhotoVideoText: { color: "#929397", fontSize: 7, fontFamily: Fonts.ProximaNovaRegular, paddingLeft: 5 },
    cardVideoIcon: { height: 11.5, width: 13 },
    // Doctor Cards
    doctorCardContainer: {  justifyContent: "center",  borderRadius: 10,flex:1 ,  padding:15,marginVertical: 10,marginRight:10},
    doctorCardIconVIew: { height: 100, width: 100, backgroundColor: Colors.white, borderRadius: 100, justifyContent: "center", alignItems: "center", alignSelf: "center" },
    doctorCardIcon: { height: 100, width: 100, borderRadius: 100, alignSelf: "center" },
    DoctorCardShareView: { flexDirection: "row",  justifyContent: "space-around",  marginVertical: 10 },
    DoctorCardShareButton: { alignItems: "center", flex:1 },
    DoctorCardShareButtonIcon: { height: 20, width: 20 },
    DoctorCardShareButtonText: { color: "#929397", fontSize: 7, fontFamily: Fonts.ProximaNovaRegular },
    doctorDetails: { },
    doctorname: { color: Colors.black, fontSize: 15, fontFamily: Fonts.ProximaNovaBold, marginVertical: 5 },
    doctorProfile: { color: Colors.appcolor, fontSize: 8, fontFamily: Fonts.ProximaNovaRegular },
    ratingViewRed: {  flexDirection: "row", marginVertical: 10,alignItems:"center" },
    ratingViewmain: { backgroundColor: Colors.white, flexDirection: "row",  alignItems: "center", borderRadius: 10,  flex:1 , justifyContent:"center", paddingHorizontal:15 ,paddingVertical:5 },
    star: { height: 9, width: 9 },
    ratingText: { color: Colors.black, fontSize: 10, fontFamily: Fonts.ProximaNovaMedium, marginLeft: 10 , flex:3},
    clinicianReview: { color: "#5D5D5D", fontSize: 10, fontFamily: Fonts.ProximaNovaRegular },
    yellowstarview: { flexDirection: "row",alignItems:"center"},
    searchName:{fontSize:20, color:"#000000"},
    searchkey:{backgroundColor:"#fff",width: "92%", justifyContent: "center",  alignItems: "center", alignSelf: "center", paddingHorizontal: 15,elevation:9 },



})


export default styles;