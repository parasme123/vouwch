import { StyleSheet } from 'react-native';
import { Colors, Fontsize, Fonts, } from "@common";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f7f9fc",

    },
    upperPartView: {
        backgroundColor: "#f7f9fc",
        padding: 10,
        height: 130
    },
    chatsView: {
        flexDirection: "row",

        backgroundColor: Colors.white,
        paddingHorizontal: 20,
        paddingVertical: 12,
        width: "100%",
        justifyContent: 'space-between',
        alignItems: "center"
    },

    chatss: {
        fontSize: Fontsize.fontEighteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium,
        marginLeft: -10
    },
    wdWatson: {
        fontSize: Fontsize.fontThirteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium
    },
    touchKeys: {
        fontSize: Fontsize.fontFourteen,
        color: Colors.darkslategrey,
        fontFamily: Fonts.ProximaNovaRegular,
        marginLeft: 15,
        marginBottom: 5,
        padding: 8
    },
    weNeed: {
        fontSize: Fontsize.fontTwelve,
        //color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium,
    },
    editor: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        marginRight: 15,
        tintColor: Colors.appcolor
    },
    perCoonct: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        marginRight: 4,
        tintColor: Colors.appcolor
    },
    newGroup: {
        fontSize: Fontsize.fontTwelve,
        color: Colors.appcolor,
        fontFamily: Fonts.ProximaNovaBold,
        marginTop: 5,
    },
    row: {
        // borderRadius: 20,
        backgroundColor: Colors.white,
        flexDirection: "row",
        marginTop: 22,
        flex: 1,


    },
    inputWrap: {
        flex: 1,
        padding: 10,
        marginLeft: -10,
        width: 20
    },
    inputdate: {
        backgroundColor: Colors.white,
        fontFamily: Fonts.ProximaNovaMedium,
        fontSize: Fontsize.fontTwelve,

    },
    inputcvv: {
        fontSize: 14,
        marginBottom: -15,
        color: "#6a4595",
        paddingEnd: 2,
        marginEnd: 15
    },
    label:
    {
        marginTop: 10
    },
    searchI: {
        height: 12,
        width: 12,
        resizeMode: "contain",
        // marginTop: 18,
        marginLeft: 10
    },
    textboxfield: {
        fontSize: Fontsize.Verysmall
    },
    verticleLine: {
        height: 20,
        width: 1,
        backgroundColor: Colors.grey,
        marginTop: 12,
        marginLeft: 3,
    },
    menuIcon: {
        height: 15,
        width: 15,
        resizeMode: "contain",
        tintColor: Colors.white,
    },
    rect: {
        height: 35,
        width: 35,
        resizeMode: "contain",
        marginTop: 25,
    },
    maanImg: {
        height: 45,
        width: 45,
        resizeMode: "contain",
        marginTop: 8,
        marginLeft: 10,
        borderRadius: 30
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: Colors.black,
        margin: 10,
    },
    infoTouch: {
        paddingHorizontal: 5,
        flexDirection: "row",
        paddingVertical: 5,
        alignItems: "center",
        backgroundColor: Colors.offwhite,
        borderTopWidth: 0.7,
        borderTopColor: Colors.grey,
        justifyContent: "space-between",
    },
    subView: {
        flexDirection: "row",
    },
    infoMsg: {
        marginTop: 17,
        marginLeft: 10,
    },
    Line: {
        borderBottomColor: '#CED2D7',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: 5,
        height: 1
    },

    lastLine: {
        borderBottomColor: '#CED2D7',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: 5,
        height: 1,
        margin: 200
    },
    clinicView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        marginHorizontal: 16,
        // paddingVertical: 10,
    },
    clinic: {
        flex: 1.5,
        backgroundColor: Colors.appcolor,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        marginHorizontal: 5,
        // paddingHorizontal:4
    },
    contactView: {
        flex: 0.6,
        backgroundColor: Colors.white,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5

    },
    hospitals: {
        fontSize: Fontsize.fontTwelve,
        color: Colors.white,
        fontFamily: Fonts.ProximaNovaMedium,
        // marginTop: 3,

    },
    contect: {
        fontSize: Fontsize.fontTwelve,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium,
        marginTop: 3
    },
    txtinputView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 18,
    },
    backColor: {
        backgroundColor: Colors.white,
        marginVertical: 10,

    },
    buttonView: {
        flexDirection: "row",
        marginRight: -20
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: 30,
        marginRight: 8
    },
    searchIcon: {
        // padding: 10,
    },
    input: {
        flex: 1,
        height: 35,
        fontSize: Fontsize.fontTwelve,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium,
    },
    SquareShapeView: {
        backgroundColor: Colors.appcolor,
        padding: 10,
        // marginTop: 22,
        // marginLeft: -10,
        borderRadius: 5,
        elevation: 10
    },
    updateView: {
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        marginTop: 10
    },
    timeShowTxt: {
        fontSize: Fontsize.fontTwelve,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaRegular
    },
    readStatus: {
        height: 12,
        width: 12,
        resizeMode: "contain",
        marginTop: 5,
        tintColor: Colors.green
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
    broadBtnTxt: {
        fontSize: Fontsize.fontFifteen,
        color: Colors.white,
        fontFamily: Fonts.ProximaNovaMedium,
    },
    broadBtnView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 12,
        alignItems:"center",
        // borderBottomWidth: 0.5,
        // borderBottomColor: Colors.grey,
        paddingVertical: 10,
        backgroundColor: Colors.appcolor
    }

}
)
export default styles;