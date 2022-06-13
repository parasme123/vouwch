import { StyleSheet, Dimensions } from "react-native";
import Fonts from "../../common/Fonts";
import Colors from "../../common/Colors";
import Fontsize from "../../common/Fontsize";
const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');


const styles = StyleSheet.create({
    cardContainer: {borderRadius: 10, padding: 15, margin: 10, flex: 1, maxWidth: SCREEN_WIDTH / 2 - 25 },
    cardIconView: { height: 100, width: 100, backgroundColor: Colors.white, borderRadius: 100, justifyContent: "center", alignItems: "center", alignSelf: "center" },
    cardIcon: { height: 78, width: 78, borderRadius: 100, alignSelf: "center" },
    shareCardView: { flexDirection: "row", marginVertical: 10 },
    shareButton: { alignItems: "center", flex: 1 },
    shareButtonImage: { height: 30, width: 30 },
    shareButtonText: { color: Colors.grey, fontSize: Fontsize.small,lineHeight:15, fontFamily: Fonts.ProximaNovaRegular, marginTop: 5 },
    cardHospitalView: {},
    hospitalName: { color: Colors.black, fontSize: Fontsize.fontFifteen, fontFamily: Fonts.ProximaNovaSemibold, marginVertical: 5 },
    cardHospitalViewText: { color: Colors.lightGrey, fontSize: Fontsize.small,lineHeight:15, fontFamily: Fonts.ProximaNovaRegular, flex: 1 },
    // 
    cardHospitalViewButton: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
    // 
    cardPhotoButton: { justifyContent: "center", alignItems: "center", flexDirection: "row", backgroundColor: Colors.appcolor, borderRadius: 10, flex: 1, paddingVertical: 5, marginRight: 5 },
    videoButton: { justifyContent: "center", alignItems: "center", flexDirection: "row", backgroundColor: "#fff", borderRadius: 10, flex: 1, paddingVertical: 5, marginLeft: 5 },
    cardPhotoImage: { height: 11.5, width: 13 },
    cardPhotoVideoText: { color: Colors.lightGrey, fontSize: Fontsize.small, lineHeight:15,fontFamily: Fonts.ProximaNovaRegular, paddingLeft: 5 },
    cardVideoIcon: { height: 11.5, width: 13 },
    // Doctor Cards
    doctorCardContainer: { justifyContent: "center", borderRadius: 10, flex: 1, padding: 15, margin: 10, },
    doctorCardIconVIew: { height: 100, width: 100, backgroundColor: Colors.white, borderRadius: 100, justifyContent: "center", alignItems: "center", alignSelf: "center" },
    doctorCardIcon: { height: 100, width: 100, borderRadius: 100, alignSelf: "center" },
    DoctorCardShareView: { flexDirection: "row", justifyContent: "space-around", marginVertical: 10 },
    DoctorCardShareButton: { alignItems: "center", flex: 1 },
    DoctorCardShareButtonIcon: { height: 30, width: 30 },
    // 
    DoctorCardShareButtonText: { color: Colors.grey, fontSize: Fontsize.small,lineHeight:15, fontFamily: Fonts.ProximaNovaRegular, marginTop: 10 },
    doctorDetails: {},
    doctorname: { color: Colors.black, fontSize: Fontsize.fontFifteen,lineHeight:25, fontFamily: Fonts.ProximaNovaBold, marginVertical: 5 },
    doctorProfile: { color: Colors.appcolor, fontSize: Fontsize.small,lineHeight:15, fontFamily: Fonts.ProximaNovaRegular },
    ratingViewRed: { flexDirection: "row", marginVertical: 10, alignItems: "center" },
    ratingViewmain: { backgroundColor: Colors.white, flexDirection: "row", alignItems: "center", borderRadius: 10, flex: 1, justifyContent: "center", paddingHorizontal: 15, paddingVertical: 5 },
    star: { height: 9, width: 9 },
    ratingText: { color: Colors.black, fontSize: Fontsize.fontTwelve,lineHeight:15, fontFamily: Fonts.ProximaNovaMedium, marginLeft: 10, flex: 3 },
    clinicianReview: { color: Colors.darkGrey, fontSize: Fontsize.fontTwelve, lineHeight:15,fontFamily: Fonts.ProximaNovaRegular },
    yellowstarview: { flexDirection: "row", alignItems: "center" },
    searchName: { fontSize: Fontsize.fontTwenty,lineHeight:25, color: Colors.black },
    searchkey: {
        backgroundColor: "#fff",
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 10,
        paddingLeft: 20,
        elevation: 9,
        flex: 1,
        marginHorizontal: 15
    },



})


export default styles;