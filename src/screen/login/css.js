import { StyleSheet } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// Login mail
const styles = StyleSheet.create({
    container: { width: "85%", alignSelf: "center", height: "100%", },
    headingView: { justifyContent: "flex-end", width: "100%", alignSelf: "center", flex: 0.2, },
    headingViewText: { color: "#000000", fontWeight: "600", fontSize: 30, },
    subHeadingView: { justifyContent: "center", width: "100%", alignSelf: "center", flex: 0.1, },
    userInputView: { width: "100%", alignSelf: "center", flex: 0.05, justifyContent: 'flex-end' },
    userView: { flexDirection: "row", borderColor: "#000000", borderWidth: 1, width: "100%", borderRadius: 30, alignSelf: "center", height: 48, },
    userSubview: { borderRightWidth: 1, borderColor: "#737373", height: 20, alignSelf: "center", justifyContent: "center", },
    //    subHeadingViewText:{ tintColor: "#8F8B8B", alignSelf: "center", height: 15, width: 15, alignSelf: "center", marginLeft: "7%" }
    subHeadingViewText: { color: "#737373", fontWeight: "400", fontSize: 17, },
    userIcon: { tintColor: "#8F8B8B", alignSelf: "center", height: 15, width: 15, alignSelf: "center", marginLeft: "7%" },
    userInput: { alignSelf: "center", fontSize: 15, paddingLeft: "4%", color: "#000000", fontWeight: "500", width: "85%" },
    passwordView: { width: "100%", alignSelf: "center", flex: 0.1, justifyContent: "flex-end" },
    passwordSubView: { flexDirection: "row", borderColor: "#000000", borderWidth: 1, width: "100%", borderRadius: 30, alignSelf: "center", height: 48, alignItems: "center", },
    passwordiconView: { borderRightWidth: 1, borderColor: "#737373", height: 20, alignSelf: "center", justifyContent: "center", },
    passwordIcon: { tintColor: "#8F8B8B", alignSelf: "center", height: 18, width: 18, alignSelf: "center", marginLeft: "7%" },
    passwordInput: { alignSelf: "center", fontSize: 15, paddingLeft: "4%", color: "#000000", fontWeight: "500", width: "75%" },
    eyeIcon: { width: 25, height: 25, },
    forgotText:{ color: "rgba(36, 95, 199, 1)", alignSelf: "flex-end", fontSize: 15, },
    loginOrLineView: { flex: 0.2, justifyContent: "center" },
    loginBtn:{ backgroundColor: "rgba(36, 95, 199, 1)", alignItems: "center", borderRadius: 30, height: 50, justifyContent: "center", marginBottom: 20 },
    loginbtnText:{ color: "#ffffff", fontSize: 16, fontWeight: "400" },
    socialView:{ flex: 0.1, flexDirection: "row", width: "85%", justifyContent: "space-between", alignSelf: "center", },
    googleIcon: { height: 18, width: 18, },
    googleView:{ borderColor: "#EA4335", width: 83, height: 48, borderRadius: 10, justifyContent: "center", alignItems: "center", borderWidth: 1 },
    fbView:{ borderColor: "#3B5998", width: 83, height: 48, borderRadius: 10, justifyContent: "center", alignItems: "center", borderWidth: 1 },
    fbIcon:{ height: 23, width: 23, },
    twitwrView:{ borderColor: "#27AAE2", width: 83, height: 48, borderRadius: 10, justifyContent: "center", alignItems: "center", borderWidth: 1 },
    twiterIcon:{ height: 33, width: 33, },
    registerView:{ flexDirection: "row", justifyContent: "center", },
    registerText:{ color: "#000000", fontSize: 17, fontWeight: "300" },
    registerBtnText:{ color: "#245FC7", fontSize: 17, fontWeight: "400" },










})

export default styles;