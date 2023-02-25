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
    addContact: {
        backgroundColor: Colors.appcolor,
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 18,
        marginHorizontal: 24,
        marginBottom: 12,
        alignSelf: "flex-end"
    },
    addContactTxt: {
        fontSize: Fontsize.fontTwelve,
        color: Colors.white,
        fontFamily: Fonts.ProximaNovaMedium,
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
    },
    newGrpBtn: {
        // backgroundColor: Colors.appcolor,
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 20
    },
    broadBtnTxt: {
        fontSize: Fontsize.fontFifteen,
        color: Colors.white,
        fontFamily: Fonts.ProximaNovaMedium,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
        // marginTop: 8,
        backgroundColor: "rgba(52, 52, 52, 0.8)"
    },
    modalView: {
        margin: 20,
        backgroundColor: Colors.white,
        borderRadius: 10,
        paddingVertical: 24,
        paddingHorizontal: 12
        // padding: 35,
        // alignItems: "center",
    },
    addUserInput: {
        borderWidth: 0.4,
        marginBottom:12,
        borderRadius:10,
        paddingLeft:12,
        height:45,
        fontSize: Fontsize.fontFourteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium,
    },
    addUserBtn: {
        backgroundColor: Colors.appcolor,
        marginTop: 24,
        alignItems: "center",
        paddingVertical: 12,
        borderRadius: 10
    },
    addUserBtnTxt:{
        fontSize: Fontsize.fontFourteen,
        color: Colors.white,
        fontFamily: Fonts.ProximaNovaMedium,
    }
})
export default styles;