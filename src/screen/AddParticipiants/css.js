import { StyleSheet } from 'react-native';
import { Colors, Fontsize, Fonts, } from "@common";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    preImg: {
        height: 20,
        width: 20,
        tintColor: Colors.appcolor,
        // marginTop: 10,
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
        alignItems: "center",
        backgroundColor: Colors.white,
        padding: 17,
        elevation: 10
    },
    TouchView: {
        flexDirection: "row",
        alignItems: "center"
    },
    newgrpVw: {
        marginLeft: 10,
    },
    imgSearchBtn: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        tintColor: Colors.appcolor,
        marginTop: 6
    },
    infoTouch: {
        flexDirection: "row",
        paddingVertical: 12,
        alignItems: "center",
        backgroundColor: Colors.white,
        borderBottomWidth: 0.6,
        borderBottomColor: Colors.grey,
        paddingHorizontal: 24,
    },
    maanImg: {
        height: 50,
        width: 50,
        resizeMode: "contain",
        // marginLeft: 10,
        borderRadius: 25
    },
    infoMsg: {
        marginLeft: 10,
    },
    wdWatson: {
        fontSize: Fontsize.fontThirteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium,
        marginBottom: 4
    },
    weNeed: {
        fontSize: Fontsize.fontTwelve,
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
    imageOnImg: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 12
    },
    personImg: {
        height: 50,
        width: 50,
        borderRadius: 30,
    },
    colseImgView: {
        backgroundColor: Colors.appcolor,
        borderRadius: 12,
        position: "absolute",
        bottom: 4,
        right: -4,
        padding: 6
    },
    clsImg: {
        width: 8,
        height: 8,
        tintColor: Colors.white,
        resizeMode: "contain"
    },
    upperSlctedImg: {
        marginHorizontal: 3,
        backgroundColor: Colors.white,
        marginTop: 10,
    },
    participantsName: {
        marginTop: 6,
        color: Colors.black,
        fontSize: 12
    }
})
export default styles;  