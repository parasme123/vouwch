import { StyleSheet } from "react-native";
import { Fonts, Colors, Fontsize } from '@common';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        flex: 1
    },
    header: {
        color: Colors.black,
        fontSize: Fontsize.fontThirtyfour,
        marginTop: 70,
        marginBottom: 10,
        fontFamily: Fonts.ProximaNovaBold,
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
  
    otpview: { flexDirection: 'row', 
    justifyContent: 'center',
    marginVertical:80

},
    otpText1234: {
        fontSize: Fontsize.fontTwentyfour,
        padding: 0,
        textAlign: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10,
        width: 50,
    },
    otpBox: {
        borderRadius: 5,
        borderColor: '#CCC',
        borderWidth: 1,
        margin: 10,
    },
});
export default styles;
