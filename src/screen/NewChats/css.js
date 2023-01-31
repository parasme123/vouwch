import { StyleSheet } from 'react-native';
import { Colors, Fontsize, Fonts, } from "@common";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.offWite
    },
    UpperView: {
        backgroundColor: Colors.white,
        padding: 13,
        justifyContent: "space-between",
        flexDirection: "row",
        justifyContent: "center",

    },
    chatTxt: {
        fontSize: Fontsize.fontFifteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium,
        textAlign: "center",
        justifyContent: "center",
        flex: 1,
        marginTop: 5

    },
    crossImg: {
        height: 30,
        width: 30,
        resizeMode: "contain",
        tintColor: Colors.appcolor,
        marginRight: -10,
        flex: 1,
    },
    clinicView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 16,
        marginHorizontal: 20,
    },
    clinic: {
        backgroundColor: Colors.appcolor,
        borderRadius: 22,
        padding: 15
    },
    contactView: {
        backgroundColor: Colors.white,
        borderRadius: 22,
        padding: 15,

    },
    hospitals: {
        fontSize: Fontsize.fontTwelve,
        color: Colors.white,
        fontFamily: Fonts.ProximaNovaMedium,
        marginTop: 3,

    },
    contect: {
        fontSize: Fontsize.fontTwelve,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium,
        marginTop: 3
    },
    Line: {
        borderBottomColor: '#CED2D7',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: 5,
        height: 1
    },

    maanImg: {
        height: 70,
        width: 70,
        resizeMode: "contain",
        marginTop: 8,
        marginLeft: 10
    },
    infoMsg: {
        marginTop: 28,
        marginLeft: 10
    },
    wdWatson: {
        fontSize: Fontsize.fontSixteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium
    },
    singleTxt: {
        fontSize: Fontsize.fontSixteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaBold,
        //marginTop:33
        alignSelf: "center",
        justifyContent: "center"
    },
    weNeed: {
        fontSize: Fontsize.fontTwelve,
        fontFamily: Fonts.ProximaNovaMedium,
    },
    activeTab: {
        backgroundColor: Colors.appcolor,
    },
    inactiveTab: {
        backgroundColor: Colors.white,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 18,
        marginHorizontal: 4,
    },
    activeTabTxt: {
        color: Colors.white,
    },
    inactiveTabTxt: {
        fontSize: Fontsize.fontTwelve,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium,
    }

})
export default styles;