import { StyleSheet } from "react-native";
import Fonts from '../../common/Fonts';
import Colors from '../../common/Colors';
import Fontsize from "../../common/Fontsize";


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        flex: 1
    },
    header: {
        color: Colors.black,
        fontSize: Fontsize.fontThirtyfour,
        marginTop: 70,
        marginBottom: 80,
        fontFamily: Fonts.ProximaNovaBold,
    },

    textInputView: {
        flexDirection: 'row',
        borderColor: Colors.imputborderColor,
        borderWidth: 1,
        borderRadius: 30,
        marginBottom: 15,
      },
      textInputSubView: {
        borderRightWidth: 1,
        borderColor: Colors.imputborderColor,
        alignSelf: 'center',
        paddingHorizontal:15
      },
      textInputText: {
        alignSelf: 'center',
        fontSize:Fontsize.fontFifteen,
        paddingLeft: 15,
        color:Colors.black,
        fontFamily: Fonts.ProximaNovaLight,
        flex:1
      },
      loginButton: {
        backgroundColor: Colors.appcolor,
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'center',
        marginVertical: 25,
        paddingVertical: 15
      },
      loginButtonText: {
        color: Colors.white,
        fontFamily: Fonts.ProximaNovaSemibold,
        fontSize: Fontsize.fontSixteen,
      },
   
});

export default styles;
