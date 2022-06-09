import { StyleSheet,Dimensions } from "react-native";
import Colors from "../../common/Colors";
import Fonts from "../../common/Fonts";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Brovo_Styles = StyleSheet.create({
    mainView: { backgroundColor: "#fff", flex: 1,elevation:4,marginBottom:60, marginHorizontal:20,borderRadius:10,top:40},
    hightView:{backgroundColor:'#245FC7', position:'absolute',top:60,left:0,right:0,height:200,},
    ScrollViewStyle:{ flexGrow: 1, },
    input_main:{flex:1,paddingVertical:20,},
    TextStyles:{fontSize:16, color: "#000", fontFamily:Fonts.ProximaNovaMedium},
    PhotoText:{fontSize:14, color: "#fff",left:10,fontFamily:Fonts.ProximaNovaLight},
    Imageicon:{height:20,width:20},
    mainContPhoto:{flex:1,marginLeft:20,flex:1,marginLeft:20,},
    PhotosVideoView:{flexDirection:'row',marginVertical:10},
    PhotosView:{marginRight:10, alignSelf:'center',  flexDirection:'row',paddingHorizontal:20,paddingVertical:7,borderRadius:20,},
    // ,backgroundColor:Colors.bottonColors
    VideoView:{ alignSelf:'center', flexDirection:'row',paddingHorizontal:20,paddingVertical:7,borderRadius:20}
    // backgroundColor:Colors.light,


   
})
export default Brovo_Styles;