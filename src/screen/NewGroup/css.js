import { StyleSheet } from 'react-native';
import { Colors, Fontsize, Fonts, } from "@common";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.offWite,
    },
    preImg: {
        height: 20,
        width: 20,
        tintColor: Colors.appcolor,
        marginTop: 10,
        // padding:5
    },
    newgrpTxt: {
        fontSize: Fontsize.fontFourteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaBold
    },
    addparticipantsTxt: {
        fontSize: Fontsize.fontEleven,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium
    },
    upperView: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: Colors.white,
        padding: 17,
        elevation: 10
    },
    TouchView: {
        flexDirection: "row",
    },
    newgrpVw: {
        marginLeft: 10,
        // marginTop: 3,
        // padding:10
    },
    imgSearchBtn: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        tintColor: Colors.appcolor,
        marginTop: 6
    },
    infoTouch: {
        paddingHorizontal: 5,
        flexDirection: "row",
        paddingVertical: 5,
        alignItems: "center",
        backgroundColor: Colors.offwhite,
        borderBottomWidth: 0.6,
        borderBottomColor: Colors.grey,
        justifyContent: "space-between",
    },
    subView: {
        flexDirection: "row",
    },
    maanImg: {
        height: 45,
        width: 45,
        resizeMode: "contain",
        marginTop: 8,
        marginLeft: 10,
        borderRadius: 20
    },
    infoMsg: {
        marginTop: 17,
        marginLeft: 10,
    },
    wdWatson: {
        fontSize: Fontsize.fontThirteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium
    },
    weNeed: {
        fontSize: Fontsize.fontTwelve,
        //color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium,
    },
    updateView: {
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        marginTop: 10
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
    colseImgView: {
        // flex: 1,
        // justifyContent: 'flex-end',
        // alignItems: 'flex-end',
        backgroundColor: Colors.appcolor,
        borderRadius: 30,
        height: 18,
        width: 18,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        marginTop: 30,
        marginLeft: 35

    },
    clsImg: {
        width: 8,
        height: 8,
        alignItems: 'center',
        justifyContent: 'center',
        tintColor: Colors.white,
        resizeMode:"contain"

    },
    upperSlctedImg: {
        marginHorizontal: 3,
        // justifyContent: "space-between",
        // flexDirection: "row",
        backgroundColor: Colors.white,
        marginTop: 10,
        paddingBottom: 5
    }
}
)
export default styles;  