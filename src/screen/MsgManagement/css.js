import { StyleSheet } from 'react-native';
import { Colors, Fontsize, Fonts, } from "@common";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.offwiite,
        // marginHorizontal: 5
    },
    upperView: {
        backgroundColor: Colors.white,
        padding: 10
    },
    mgmtTxt: {
        color: Colors.lightBlack,
        fontSize: Fontsize.fontSixteen,
        fontFamily: Fonts.ProximaNovaBold,
        alignSelf: "center"
    },
    inviteImg: {
        height: 23,
        width: 23,
        resizeMode: "cover",
    },
    signView: {
        // flexDirection: "row",
        // marginTop: 15,
        // padding: 5,
        marginLeft: 10
    },
    emp: {
        fontSize: Fontsize.fontThirteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium,
        // marginLeft: 4,
        // marginTop: -3
    },
    admin: {
        fontSize: Fontsize.fontEleven,
        color: Colors.darkGrey,
        fontFamily: Fonts.ProximaNovaMedium,
        // marginLeft: 26,
        marginTop: 5
    },
    signUPView: {
        backgroundColor: Colors.white,
        padding: 20,
        margin: 14,
    },

    removeListView: {
        backgroundColor: Colors.white,
        padding: 15,
        margin: 14,
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",

    },
    ListView: {
        backgroundColor: Colors.white,
        padding: 20,
        margin: 14,
        marginTop: -12
    },
    signTxt: {
        fontSize: Fontsize.fontFourteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaBold,
    },
    empTxt: {
        fontSize: Fontsize.fontTwelve,
        color: Colors.lightBlack,
        fontFamily: Fonts.ProximaNovaMedium,
        marginVertical: 12
    },
    textInput: {
        backgroundColor: Colors.offwhite,
        height: 40,
        borderWidth: 0.4,
        borderColor: Colors.gray,
        borderRadius: 5,
        // marginTop: 5
    },
    rightTouch: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.offwhite,
        marginTop: 5,
        paddingBottom: 5,
        paddingRight: 10,
        borderRadius: 10
    },
    infoTouch: {
        flexDirection: "row",
        backgroundColor: Colors.offwhite,
        marginTop: 5,
        paddingBottom: 5,
    },
    maanImg: {
        height: 40,
        width: 40,
        resizeMode: "contain",
        marginTop: 8,
        marginLeft: 10
    },
    infoMsg: {
        marginTop: 15,
        marginLeft: 10
    },
    wdWatson: {
        fontSize: Fontsize.fontFourteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium
    },
    weNeed: {
        fontSize: Fontsize.fontEleven,
        fontFamily: Fonts.ProximaNovaMedium,
    },
    circle: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        marginTop: 15,
        marginRight: 8
    },
    bin: {
        height: 15,
        width: 15,
        resizeMode: "contain",
        tintColor: Colors.red
    },
    delView: {
        flexDirection: "row",
        marginRight: -6
    },
    DelTxt: {
        fontSize: Fontsize.fontTwelve,
        fontFamily: Fonts.ProximaNovaMedium,
        color: Colors.red,
        marginTop: 3,
        marginLeft: 2
    },
    signUpBtnView: {
        // width: 100,
        // height: 40,
        alignSelf: "flex-start",
        backgroundColor: Colors.appcolor,
        borderRadius: 20,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 24
    },
    signUpTxt: {
        color: Colors.white,
        fontSize: Fontsize.fontThirteen,
        fontFamily: Fonts.ProximaNovaBold,
        alignSelf: "center",
        justifyContent: "center",

    },
    modalView: {
        margin: 20,
        backgroundColor: Colors.white,
        borderRadius: 10,
        padding: 35,
        alignItems: "center",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 8,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: Colors.black,
        fontSize: Fontsize.fontFourteen,
        fontFamily: Fonts.ProximaNovaMedium,
    },
    button: {
        // flex: 1,
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 24,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.appcolor,
        marginHorizontal: 12
    },
    textStyle: {
        color: Colors.white,
        fontSize: Fontsize.fontThirteen,
        fontFamily: Fonts.ProximaNovaBold,
        alignSelf: "center",
        justifyContent: "center",
        // marginTop: 11
    },
    checkboxContainer: {
        // flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },



}
)
export default styles;
