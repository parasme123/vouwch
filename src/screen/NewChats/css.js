import { StyleSheet } from 'react-native';
import { Colors, Fontsize, Fonts, } from "@common";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.offWite
    },
    UpperView: {
        backgroundColor: Colors.white,
        paddingVertical: 16,
        paddingRight: 24,
        paddingHorizontal: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    chatTxt: {
        fontSize: Fontsize.fontFifteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium,
    },
    crossImg: {
        height: 24,
        width: 24,
        resizeMode: "contain",
        tintColor: Colors.appcolor,
        // marginRight: -10,
        // flex: 1,
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
        paddingVertical: 12,
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
    },
    searchSection: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 24,
        backgroundColor: Colors.white,
        paddingHorizontal: 12,
        marginBottom: 12,
        borderRadius: 30
    },
    input: {
        height: 40,
        marginLeft: 6,
        flex: 1
    }

})
export default styles;