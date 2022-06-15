import { StyleSheet, Dimensions } from "react-native";
import Fonts from "../../common/Fonts";
import Colors from "../../common/Colors";
import Fontsize from "../../common/Fontsize";
const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');


const styles = StyleSheet.create({


    // Doctor Cards
    doctorCardContainer: {
        borderRadius: 10, padding: 15,
        margin: 10, 
        width: SCREEN_WIDTH / 2-20
    },
    doctorCardIconVIew: {
        height: 100, width: 100, backgroundColor: Colors.white,
        borderRadius: 100, justifyContent: "center", alignItems: "center", alignSelf: "center"
    },
    doctorCardIcon: {
        height: 100, width: 100,
        borderRadius: 100, alignSelf: "center"
    },
    DoctorCardShareView: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10
    },
    DoctorCardShareButton: {
        alignItems: "center",
        flex: 1,
    },
    DoctorCardShareButtonIcon: {
        height: 30,
        width: 30
    },
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
        color: Colors.black, fontSize: Fontsize.fontFifteen,
        lineHeight: 25, fontFamily: Fonts.ProximaNovaBold,
        marginVertical: 5
    },
    doctorProfile: {
        color: Colors.appcolor, fontSize: Fontsize.small,
        lineHeight: 15, fontFamily: Fonts.ProximaNovaRegular
    },
    ratingViewRed: {
        flexDirection: "row",
        marginVertical: 10, alignItems: "center"
    },
    ratingViewmain: {
        backgroundColor: Colors.white,
        flexDirection: "row", alignItems: "center",
        borderRadius: 10, flex: 1,
        justifyContent: "center",
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    ratingText: {
        color: Colors.black,
        fontSize: Fontsize.fontTwelve, lineHeight: 15,
        fontFamily: Fonts.ProximaNovaMedium,
        marginLeft: 10, flex: 3
    },
    clinicianReview: {
        color: Colors.darkGrey,
        fontSize: Fontsize.fontTwelve,
        lineHeight: 15, fontFamily: Fonts.ProximaNovaRegular
    },
    yellowstarview: {
        flexDirection: "row",
        alignItems: "center"
    },
    searchName: {
        fontSize: Fontsize.fontTwenty, lineHeight: 25, color: Colors.black
    },
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