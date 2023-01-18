import { StyleSheet } from 'react-native';
import { Colors, Fontsize, Fonts, } from "@common";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    upperView: {
        // backgroundColor: Colors.white,
        padding: 10,
        paddingVertical:15
        // elevation: 50
    },
    notiTxt: {
        fontSize: Fontsize.fontseventeen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium,
        alignSelf: "center",
        justystifyContent: "center"
    },
    infoTouch: {
        paddingHorizontal: 5,
        flexDirection: "row",
        paddingVertical: 5,
        alignItems: "center",
        backgroundColor: Colors.offwhite,
        borderBottomWidth: 0.4,
        borderBottomColor: Colors.grey,
        justifyContent: "space-between",
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
    Line: {
        borderBottomColor: '#CED2D7',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: 5,
        height: 1
    },
    NotifyLine: {
        borderBottomColor: '#CED2D7',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 1
    },
    subView: {
        flexDirection: "row",

    },
    updateView: {
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        marginTop: 10
    },
    timeView: {
        backgroundColor: Colors.appcolor,
        height: 18,
        width: 18,
        borderRadius: 30,
        marginTop: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    timeTxt: {
        color: Colors.white,
        fontSize: Fontsize.small,
    },
    readStatus: {
        height: 12,
        width: 12,
        resizeMode: "contain",
        marginTop: 5,
        tintColor: Colors.green
    },
    timeShowTxt: {
        fontSize: Fontsize.fontTwelve,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaRegular
    }
}
)
export default styles;