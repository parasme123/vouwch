import { StyleSheet } from "react-native";
import Fonts from '../../common/Fonts';
import Colors from "../../common/Colors";

const styles = StyleSheet.create({
    notificationHeaserView: { width: "92%", alignSelf: "center", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 20 },
    headerbgImage: { width: "100%", height: 183, },
    headerIconMenue: { height: 16, width: 30 },
    profileView: { justifyContent: "flex-end", flexDirection: "row", width: "30%" },
    notificationbutton: { height: 43, width: 43, backgroundColor: "#EEF2FB", borderRadius: 100, alignSelf: "center" },
    notificationIcon: { height: 43, width: 43 },
    profileButton: { height: 54, width: 54, borderRadius: 100 },
    searchView: { width: "92%", justifyContent: "center", backgroundColor:Colors.appcolor, flexDirection: "row", justifyContent: "space-between", borderRadius: 10, height: 50, alignItems: "center", alignSelf: "center", paddingHorizontal: 15, },
    textInputStyles: { color: "#ffffff", fontSize: 14, fontFamily: Fonts.ProximaNovaLight },
    searchText: { color: "#ffffff", fontSize: 14, fontFamily: Fonts.ProximaNovaLight },
    searchImage: { height: 24, width: 24, },
    categouryView: { flexDirection: "row", width: "92%", alignSelf: "center", justifyContent: "space-between", alignItems: "center", marginTop: 7 },
    categouryViewText: { color: "#000000", fontSize: 22, fontFamily: Fonts.ProximaNovaBold },
    categouryViewButtonText: { color:Colors.appcolor, fontSize: 15, fontFamily: Fonts.ProximaNovaMedium },
    bravoCategoury: { flexDirection: "row", width: "92%", alignSelf: "center", justifyContent: "space-between", alignItems: "center" },
    bravoCategouryText: { color: "#000000", fontSize: 22, fontFamily: Fonts.ProximaNovaBold },
    bravoCategouryButtonText: { color:Colors.appcolor, fontSize: 15, fontFamily: Fonts.ProximaNovaMedium },
    featuredView: { flexDirection: "row", width: "92%", alignSelf: "center", justifyContent: "space-between", alignItems: "center" },
    featuredViewText: { color: "#000000", fontSize: 22, fontFamily: Fonts.ProximaNovaBold },
    featuredViewButtonText: { color:Colors.appcolor, fontSize: 15, fontFamily: Fonts.ProximaNovaMedium },
    categoFlatelistView: { width: 91, height: 45, backgroundColor:Colors.appcolor, justifyContent: "center", alignItems: "center", borderRadius: 10, marginRight: 20 },
    categoFlatelistViewText: { color: "#ffffff", fontSize: 12, fontFamily: Fonts.ProximaNovaRegular },
   
    // Card View Main

    cardContainer: { backgroundColor: "#245FC714",  borderRadius: 10,margin:10 , flex:1 , padding:15,  },

    cardIconView: { height: 100, width: 100, backgroundColor: "#ffffff", borderRadius: 100, justifyContent: "center", alignItems: "center", alignSelf: "center" },
    cardIcon: { height: 78, width: 78, borderRadius: 100 },
    shareCardView: { flexDirection: "row",  justifyContent: "space-around", alignSelf: "center", marginVertical: 10 },
    shareButton: { alignItems: "center" ,flex:1},
    shareButtonImage: { height: 20, width: 20 },
    shareButtonText: { color: "#929397", fontSize: 7, fontFamily: Fonts.ProximaNovaRegular },
    cardHospitalView: {  },
    hospitalName: { color: "#000000", fontSize: 15, fontFamily: Fonts.ProximaNovaSemibold, marginVertical: 5 },
    cardHospitalViewText: { color: "#858585", fontSize: 8, fontFamily: Fonts.ProximaNovaRegular },
    
    cardHospitalViewButton: { flexDirection: "row", marginTop: 10, justifyContent:"space-between" },
    // Photo Button
    cardPhotoButton: { justifyContent: "center", alignItems: "center", flexDirection: "row",  backgroundColor:Colors.appcolor, borderRadius: 10,flex:1 ,paddingVertical:5,marginRight:5},

    cardPhotoImage: { height: 11.5, width: 13 },
    cardPhotoVideoText: { color: "#929397", fontSize: 7, fontFamily: Fonts.ProximaNovaRegular, paddingLeft: 5 },
    cardVideoIcon: { height: 11.5, width: 13 },  
    // VideoButton
    videoButton: { justifyContent: "center", alignItems: "center", flexDirection: "row",   backgroundColor: "#ffffff", borderRadius: 10, flex:1, paddingVertical:5,marginLeft:5},








})


export default styles;