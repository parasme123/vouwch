import { StyleSheet } from 'react-native';
import { Colors, Fontsize, Fonts, } from "@common";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    upperView: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.white,
        padding: 15,
        elevation: 10,
        borderBottomColor: Colors.grey
    },
    preImg: {
        height: 20,
        width: 20,
        tintColor: Colors.appcolor,
        // marginTop: 15,
    },
    newgrpVw: {
        marginLeft: 10,
        // marginTop: 3
    },
    newgrpTxt: {
        fontSize: Fontsize.fontFourteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaBold
    },
    addparticipantsTxt: {
        fontSize: Fontsize.fontTwelve,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium
    },
    TypeView: {
        backgroundColor: Colors.white,
        marginTop: 3,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        paddingHorizontal: 10,
    },
    ClickImg: {
        height: 30,
        width: 30,
        resizeMode: "contain",
        tintColor: Colors.appcolor
    },
    ImgView: {
        backgroundColor: Colors.steel,
        borderRadius: 30,
        padding: 10,
        marginRight: 6
    },
    smileView: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10
    },
    smileImg: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        tintColor: Colors.appcolor,
    },
    tiView: {
        borderBottomColor: Colors.appcolor,
        borderBottomWidth: 1,
        height: 35,
        flex: 1
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
    participants: {
        flexDirection: "row",
        marginTop: 10,
        marginLeft: 10
    },
    participantTxt: {
        fontSize: Fontsize.fontFourteen,
        fontFamily: Fonts.ProximaNovaMedium,
        color: Colors.black,
    },
    upperSlctedImg: {
        marginHorizontal: 3,
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: Colors.white,
        marginTop: 10,
        // paddingBottom: 5
    },
    selectedImg: {
        // backgroundColor: Colors.white,
        marginTop: 3,
        // flexDirection: "row",
        // justifyContent: "space-between",
        padding: 10,

    },
    imageOnImg: {
        justifyContent: 'center',
        alignItems: 'center'

    },
    personImg: {
        height: 50,
        width: 50,
        borderRadius: 20,
    },
    bottomSlide: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
        justifyContent: "space-evenly"
    }

}
)
export default styles;