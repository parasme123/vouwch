import { StyleSheet } from "react-native";
import{Fonts,Colors} from '@common'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fontsize from "../../common/Fontsize";
// Login mail

const styles = StyleSheet.create({
    saperateLineView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp("50%"),
        alignSelf: "center",
        margin: hp("2%"),
    },
    line: {
        flex: 1,
        height: hp("0.15%"),
        backgroundColor: '#737373'
    },
    orText: {
        width: wp("10%"),
        textAlign: 'center',
        color: "#737373",
        fontSize: hp("2%"),
        // fontSize:15
    },

    container: { width: "85%", alignSelf: "center", height: "100%", },
    header: { color: Colors.black, fontSize: Fontsize.fontThirtyfour,  fontFamily: Fonts.ProximaNovaBold, marginTop:100,marginBottom:15 },
    subHeader: { color: Colors.black,
         fontSize: Fontsize.fontSixteen, 
     fontFamily: Fonts.ProximaNovaRegular ,
    opacity:0.5
    },
    textInputMainView: { width: "100%", alignSelf: "center", },
    textinputUsernameView: { flexDirection: "row", borderColor: "#CCC", borderWidth: 1,
     width: "100%", borderRadius: 30, alignSelf: "center", height: 48,  },
    textinputpasswordView: { borderRightWidth: 1, borderColor: "#CCC", height: 20, alignSelf: "center", justifyContent: "center", },
    usernameIcon: { tintColor: "#8F8B8B", alignSelf: "center", height: 15, width: 15, alignSelf: "center", },
    textInputname: { alignSelf: "center", fontSize: 15, paddingLeft: "4%", color: "#000000", width: "85%", fontFamily: Fonts.ProximaNovaLight },
    textInputPasswordView: { flexDirection: "row", borderColor: "#CCC", borderWidth: 1, width: "100%", borderRadius: 30, alignSelf: "center", height: 48,  alignItems: "center" },
    passwordIcon: { tintColor: "#8F8B8B", alignSelf: "center", height: 18, width: 18, alignSelf: "center", },
    textinputPassword: { alignSelf: "center", fontSize: 15, paddingLeft: "4%", color: "#000000", width: "75%", fontFamily: Fonts.ProximaNovaLight },
    forgotButton: { marginBottom: hp("3%"), alignSelf: "flex-end", },
    forgotButtontext: { color: "rgba(36, 95, 199, 1)", fontSize: 15, fontFamily: Fonts.ProximaNovaMedium },
    loginButton: { backgroundColor: "rgba(36, 95, 199, 1)", alignItems: "center", borderRadius: 30, height: 50, justifyContent: "center" },
    loginButtonText: { color: "#ffffff", fontSize: 16, fontFamily: Fonts.ProximaNovaSemibold },
    orLineView: { flexDirection: 'row', alignItems: 'center', width: "65%", alignSelf: "center", marginTop: hp("4%"), },
    subView: { flex: 1, height: 1, backgroundColor: '#929397' },
    orText: { width: 150, textAlign: 'center', color: "#929397", fontSize: 16, fontFamily: Fonts.ProximaNovaRegular },
    socialButtonView: { flexDirection: "row", width: "85%", justifyContent: "space-between", alignSelf: "center", marginVertical: hp("5%"), },
    googleButton: { borderColor: "#EA4335", width: 83, height: 48, borderRadius: 10, justifyContent: "center", alignItems: "center", borderWidth: 1 },
    googleIcon: { height: 18, width: 18, },
    fbButton: { borderColor: "#3B5998", width: 83, height: 48, borderRadius: 10, justifyContent: "center", alignItems: "center", borderWidth: 1 },
    fbIcon: { height: 23, width: 23, },
    twiterButton: { borderColor: "#27AAE2", width: 83, height: 48, borderRadius: 10, justifyContent: "center", alignItems: "center", borderWidth: 1 },
    twiterIcon: { height: 33, width: 33, },
    registerview: { flexDirection: "row", justifyContent: "center", },
    registerText: { color: "#000000", fontSize: 17, fontFamily: Fonts.ProximaNovaRegular },
    registerButtonText: { color:Colors.appcolor, fontSize: 17, fontFamily: Fonts.ProximaNovaBold }














})


export default styles;