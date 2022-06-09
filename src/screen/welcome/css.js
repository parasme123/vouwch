import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fonts from "../../common/Fonts";
import Colors from "../../common/Colors";
// Welcome css
const styles = StyleSheet.create({
   backgroundimg: { flex: 1 },
   headerTextView:{ flex: 0.15, justifyContent: "center", width: "85%", alignSelf: "center" },
   headerText:{ fontSize: 34, fontFamily:Fonts.ProximaNovaBold, color: "#000000", marginTop: "15%",  },
   headersubTextView:{ flex: 0.1, width: "85%", alignSelf: "center" },
   headersubText:{ fontSize: 15, color:"#737373", fontFamily:Fonts.ProximaNovaRegular  },
   categouryButton:{ flex: 0.25,alignItems:"center", flexDirection: "row", justifyContent: "space-between", width: "85%", alignSelf: "center", },
   touchablePersonalButton:{  height: 135, width: 148, borderRadius: 15, justifyContent: "center", alignItems: "center", },
   personIconText: { fontSize: 16, fontFamily:Fonts.ProximaNovaMedium },
   personIconView:{height:58, width:58, marginBottom:10,borderRadius:80, justifyContent:"center", alignItems:"center",},
   personicon: {height:35, width:35,},
   doctorIconTextSub:{ fontSize: 8, fontFamily:Fonts.ProximaNovaMedium },
   doctorIconTexthead:{  fontSize: 16, fontFamily:Fonts.ProximaNovaMboldedium },
   doctorIcon:{height:35,width:35,},
   doctorIconbtn:{  height: 135, width: 148, borderRadius: 15, justifyContent: "center", alignItems: "center", },
   loginText:{ color: Colors.appcolor, fontSize: 16,fontFamily:Fonts.ProximaNovaSemibold},
   loginButton:{ borderColor: Colors.appcolor, height: 45, justifyContent: "center", alignItems: "center", width: "100%", borderRadius: 20, borderWidth: 1, },
   loginBtnView:{ flex: 0.075, width: "85%", alignSelf: "center",marginVertical:15 },
   signupViewButton:{ flex: 0.075, width: "85%", alignSelf: "center", justifyContent:"flex-end",  },
   signupButton:{ backgroundColor: Colors.appcolor, height: 45, justifyContent: "center", alignItems: "center", width: "100%", borderRadius: 20,},
   signupButtonText:{ color: "#ffffff", fontSize: 16,fontFamily:Fonts.ProximaNovaSemibold},
   bottomImage:{ flex: 0.35, justifyContent: "flex-end" },
   bottomImageIcon:{ width: "100%", height: 300, alignSelf: "center", },
})

export default styles;