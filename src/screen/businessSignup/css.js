import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Fonts from '../../common/Fonts';
import Colors from '../../common/Colors';

 const styles = StyleSheet.create({
    container: { width: "85%", alignSelf: "center", flex:1 },
    header: { color: "#000000", fontFamily: Fonts.ProximaNovaBold, fontSize: 34, marginTop: 50, marginBottom: 10 },
    headerText: { color: "#737373", fontFamily: Fonts.ProximaNovaRegular, fontSize: 15, marginBottom: 40 },
    ImputView: { width: "100%", alignSelf: "center", },
    textInputView: { flexDirection: "row", borderColor: "#CCC", borderWidth: 1, width: "100%", borderRadius: 30, alignSelf: "center", height: 50, marginBottom: 15 },
    textInputsubView: { borderRightWidth: 1, borderColor: "#737373", height: 20, alignSelf: "center", justifyContent: "center", },
    textInput: { alignSelf: "center", fontSize: 15, paddingLeft: "4%", color: "#000000", fontFamily: Fonts.ProximaNovaLight, width: "85%" },
    textInputIcoon: { tintColor: "#8F8B8B", alignSelf: "center", height: 15, width: 15, alignSelf: "center", marginLeft: "7%" },
    checkBoxView: { flexDirection: "row", justifyContent: "center", alignItems: "center", alignSelf: "center", },
    checkBoxViewIcon: { height: 30, width: 30, borderRadius: 5, tintColor: "#707070" },
    checkBoxText: { color: "#000000", fontFamily: Fonts.ProximaNovaLight, fontSize: wp("3.5%") },
    checkBoxText2: { color: Colors.appcolor, fontFamily: Fonts.ProximaNovaLight, fontSize: wp("3.5%") },
    continuebtn: { backgroundColor: "rgba(36, 95, 199, 1)", alignItems: "center", borderRadius: 20, height: 45, justifyContent: "center", marginVertical: 25 },
    continuebtnText: { color: "#ffffff", fontFamily: Fonts.ProximaNovaSemibold, fontSize: 15 },
    detailbutton: { flexDirection: "row", justifyContent: "center", marginBottom: 10, alignItems: "center", },
    detailbuttonText1: { color: "#000000", fontSize: wp("4.5%"), fontFamily: Fonts.ProximaNovaRegular, },
    sigininTextButton: { color: Colors.appcolor, fontSize: wp("4.5%"), fontFamily: Fonts.ProximaNovaSemibold, },
    dropdownSubView: { justifyContent: "space-between", flexDirection: "row", alignItems: "center", width: "89%", paddingHorizontal: 20 },
    textSpacilist: { fontSize: 15, color: "#999", fontFamily: Fonts.ProximaNovaLight, },
    dropdownIcon: { tintColor: "#000", height: 25, width: 25 },
    inputAndroid: {
        fontSize:20,
        color:'#000',
        fontFamily: Fonts.ProximaNovaLight,
        paddingLeft:20,
        height:50,
       
      },
      inputIOS: {
        width: "100%",
        height: 50,
        color: "#565656",
        paddingLeft: 10,
      },
      placeholder: {
        fontSize:20,
        color:Colors.grey,
        fontFamily: Fonts.ProximaNovaLight,
      },
})



export default styles;

