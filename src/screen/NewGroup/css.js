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
        // marginLeft: 10
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
    upperView: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: Colors.white,
        padding: 10,
        elevation:10
    },
    TouchView: {
        flexDirection: "row",
    },
    newgrpVw: {
        marginLeft: 10,
        marginTop: 3
    },
    imgSearchBtn: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        tintColor: Colors.appcolor,
        marginTop: 8
    },
    infoTouch: {
        paddingHorizontal: 5,
        flexDirection: "row",
        paddingVertical: 5,
        alignItems: "center",
        backgroundColor: Colors.offwhite,
        borderBottomWidth: 0.5,
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

}
)
export default styles;  