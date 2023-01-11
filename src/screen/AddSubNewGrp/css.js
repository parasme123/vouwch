import { StyleSheet } from 'react-native';
import { Colors, Fontsize, Fonts, } from "@common";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.offwhite,
    },
    upperView: {
        flexDirection: "row",
        backgroundColor: Colors.white,
        padding: 10,
        elevation: 10,
        borderBottomColor: Colors.grey
    },
    preImg: {
        height: 20,
        width: 20,
        tintColor: Colors.appcolor,
        marginTop: 15,
    },
    newgrpVw: {
        marginLeft: 10,
        marginTop: 3
    },
    newgrpTxt: {
        fontSize: Fontsize.fontSixteen,
        color: Colors.appcolor,
        fontFamily: Fonts.ProximaNovaBold
    },
    addparticipantsTxt: {
        fontSize: Fontsize.fontFourteen,
        color: Colors.appcolor,
        fontFamily: Fonts.ProximaNovaMedium
    },
    TypeView: {
        backgroundColor: Colors.white,
        marginTop: 3,
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    ClickImg: {
        height: 40,
        width: 40,
        resizeMode: "contain",
        tintColor: Colors.appcolor
    },
    ImgView: {
        height: 60,
        width: 60,
        backgroundColor: Colors.steel,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    smileView: {
        alignItems: "center",
        justifyContent: "center",
        flex: 0.1,
        marginLeft: 10
    },
    smileImg: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        tintColor: Colors.appcolor,
    },
    tiView: {
        flex: 0.9,
        borderBottomColor: Colors.appcolor,
        borderBottomWidth: 1,
        marginLeft: 5,
        height: 45,
    },
    clockImg: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        tintColor: Colors.appcolor
    },
    disAppearView: {
        backgroundColor: Colors.white,
        marginTop: 5,
        elevation: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        padding: 15
    },
    msgTxt: {
        fontSize: Fontsize.fontseventeen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium,
    },
    offTxt: {
        fontSize: Fontsize.fontFifteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium,
    },


    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: Colors.white,
        borderRadius: 10,
        padding: 20,
        alignItems: "flex-start",
        shadowColor: Colors.appcolor,
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 10,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: Colors.black,
        fontSize: Fontsize.fontFourteen,
        fontFamily: Fonts.ProximaNovaMedium,
    },
    signUpBtnView: {
        width: 100,
        height: 40,
        backgroundColor: Colors.appcolor,
        borderRadius: 20,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center"
    },

    buttonClose: {
        backgroundColor: Colors.appcolor,
        fontSize: Fontsize.fontThirteen,
        fontFamily: Fonts.ProximaNovaBold,
    },
    button: {
        borderRadius: 20,
        height: 40,
        width: 100,
        elevation: 10,
        shadowColor: Colors.appcolor,
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 10,
        shadowRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },
    textStyle: {
        color: Colors.white,
        fontSize: Fontsize.fontThirteen,
        fontFamily: Fonts.ProximaNovaBold,
        alignSelf: "center",
        justifyContent: "center",
    },
    DisappearMsg: {
        color: Colors.black,
        fontSize: Fontsize.fontFifteen,
        fontFamily: Fonts.ProximaNovaMedium,
        textAlign: "left"
    },
    NewMsg: {
        color: Colors.black,
        fontSize: Fontsize.fontThirteen,
        fontFamily: Fonts.ProximaNovaMedium,
        marginTop: 8
    },
    hoursTxt: {
        color: Colors.black,
        fontSize: Fontsize.fontSixteen,
        fontFamily: Fonts.ProximaNovaMedium,

    },
    btnImg: {
        height: 50,
        width: 50,
        resizeMode: "contain",
        marginHorizontal: 10,
        tintColor: Colors.appcolor,
        flex: 1

    },
    hrsView: {
        flexDirection: "row",
        marginTop: 10,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "center"

    },


    bottomSheetDetailText: {
        fontSize: Fontsize.fontEighteen,
        fontFamily: Fonts.ProximaNovaMedium,
        color: Colors.black,
        marginTop: 3,
        marginLeft: 5
    },
    selectImgSrc: {
        fontSize: Fontsize.fontEighteen,
        fontFamily: Fonts.ProximaNovaMedium,
        color: Colors.darkGrey,
        paddingLeft: 20,
        paddingTop: 20
    },
    CamViews: {
        height: 50,
        width: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.appcolor,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.steel
    },
    camImg: {
        height: 30,
        width: 30,
        resizeMode: "contain",
        tintColor: Colors.appcolor
    },
    crossImg: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        tintColor: Colors.appcolor
    },
    camTxt: {
        fontSize: Fontsize.fontSixteen,
        fontFamily: Fonts.ProximaNovaMedium,
        color: Colors.black,
        marginTop: 10
    },
    crossView: {
        paddingLeft: 20,
        paddingTop: 20,
        justifyContent: "flex-start",
        flexDirection: "row"
    },


    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 25,
        height: 25,
        tintColor: Colors.white
    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        backgroundColor: Colors.appcolor,
        borderRadius: 40,
        elevation: 10

    },
}
)
export default styles;