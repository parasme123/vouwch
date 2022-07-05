import { StyleSheet } from "react-native";
import { Fontsize, Colors,Fonts } from '@common';


const styles = StyleSheet.create({
    centeredView1: {
      flex: 1,
      backgroundColor: Colors.transparentBlack,
      opacity: 5,
      justifyContent:'center'
    },
    modalView: {
      backgroundColor: Colors.white,
      borderRadius: 20,
      padding: 35,
      elevation: 5,
    },
    centeredView2: {
      borderRadius: 15,
      backgroundColor: Colors.white,
      elevation: 1,
      margin:24,
      marginVertical:40
    },
    headerView: {
      height: 50,
      backgroundColor: Colors.bottonColors,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15,
    },
    headerText: {
      color: Colors.white,
      fontSize: Fontsize.fontFifteen,
    },
    headerIcon: {
      height: 30,
      width: 30,
    },
    dataListView: {
      flexDirection:"row",
      alignItems:"center",
      paddingHorizontal:10,
      borderBottomWidth:0.5,
      borderColor:Colors.grey,
      padding:8,
      justifyContent:"space-between",
    },
    datalistText: {
      color:Colors.black,
      backgroundColor:Colors.white,
      Fontsize:Fontsize.fontFourteen,
      fontFamily:Fonts.ProximaNovaRegular
    },
    checkbox: { height: 30, width: 30, borderRadius: 5, tintColor: Colors.checkboxColor },
  
  
  });
  

  export default styles