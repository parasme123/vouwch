import { StyleSheet } from "react-native";
import Fonts from '../../common/Fonts';
import Colors from "../../common/Colors";

const styles = StyleSheet.create({

    doctorCardContainer: {  justifyContent: "center",  borderRadius: 10,  padding:15,margin: 10,flex:1},
    doctorCardIconVIew: { height: 100, width: 100, backgroundColor: Colors.white, borderRadius: 100, justifyContent: "center", alignItems: "center", alignSelf: "center" },
    doctorCardIcon: { height: 100, width: 100, borderRadius: 100, alignSelf: "center" },
    DoctorCardShareView: { flexDirection: "row" , marginVertical:10 },
    DoctorCardShareButton: { alignItems: "center", flex:1 },
    DoctorCardShareButtonIcon: { height: 20, width: 20 },
    DoctorCardShareButtonText: { color: "#929397", fontSize: 12, fontFamily: Fonts.ProximaNovaRegular },
    doctorDetails: {   },
    doctorname: { color: Colors.black, fontSize: 15, fontFamily: Fonts.ProximaNovaBold, marginVertical: 5 },
    doctorProfile: { color: Colors.appcolor, fontSize: 8, fontFamily: Fonts.ProximaNovaRegular },
    ratingViewRed: {  flexDirection: "row", marginVertical: 10, alignItems:"center" },
    ratingViewmain: { backgroundColor: Colors.white, flexDirection: "row", justifyContent: "space-around", alignItems: "center", borderRadius: 10,   flex:1 , justifyContent:"center" ,  paddingHorizontal:15 ,paddingVertical:5},
    star: { height: 9, width: 9 },
    ratingText: { color: Colors.black, fontSize: 10, fontFamily: Fonts.ProximaNovaMedium, marginLeft: 10 , flex:3},
    clinicianReview: { color: "#5D5D5D", fontSize: 10, fontFamily: Fonts.ProximaNovaRegular },
    yellowstarview: { flexDirection: "row",alignItems:"center" },





})
 

export default styles;