import { StyleSheet } from 'react-native';
import { Colors, Fontsize, Fonts, } from "@common";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.offWite,

    },
    upperView: {
        backgroundColor: Colors.white,
        padding: 4,
        flexDirection: "row",
    },
    preImg: {
        height: 20,
        width: 20,
        tintColor: Colors.appcolor,
        marginTop: 18,
        marginLeft: 10
    },
    perView: {
        flexDirection: "row",
        marginHorizontal: 15,

    },
    gmanStyle: {
        height: 40,
        width: 40,
        resizeMode: "contain",
        marginTop: 10
    },
    info: {
        marginTop: 15,
        // marginLeft: 8
        justifyContent: "center"
    },
    alexTxt: {
        marginLeft: 8,
        fontSize: Fontsize.fontFourteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium
    },
    onlineView: {
        flexDirection: "row",
        marginLeft: 8,
        // justifyContent:"center"
    },
    onlineTxt: {
        marginLeft: 5,
        fontSize: Fontsize.small,
        marginTop: 1
    },
    circleImg: {
        height: 7,
        width: 7,
        tintColor: Colors.green,
        marginTop: 6
    },
    dotsImg: {
        height: 15,
        width: 15,
        resizeMode: "contain",
        // marginTop: 5,
        marginRight: 2
    },
    todayView: {
        width: 70,
        height: 40,
        backgroundColor: Colors.white,
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 20,
        marginTop: 10
    },
    quoteView: {
        flexDirection: "row",
        alignSelf: "center",
        marginBottom: 4
    },
    todayTxt: {
        color: Colors.black,
        justifyContent: "center",
        textAlign: "center",
        fontFamily: Fonts.ProximaNovaMedium
    },
    talkBubble: {
        //backgroundColor: "transparent",

    },
    talkBubbleSquare: {
        width: 230,
        // height: 100,
        backgroundColor: Colors.white,
        borderRadius: 10,
        flexDirection: "row",
        marginLeft: 10,
        padding: 8
    },
    talkBubbleTriangleLeft: {
        position: "absolute",
        left: -45,
        top: 6,
        width: 0,
        height: 0,
        borderTopColor: "transparent",
        borderBottomWidth: 5,
        borderRightWidth: 20,
        borderRightColor: Colors.white,
        borderBottomWidth: 30,
        borderBottomColor: "transparent",
        marginLeft: 10,
    },
    talkBubbleSquareLeft: {
        width: 200,
        // height: 130,
        backgroundColor: Colors.white,
        borderRadius: 7,
        // marginRight:15,
        // flexDirection: "row",
        padding: 10,
        marginLeft: 15
    },
    loreamTxt: {
        textAlign: "left",
        justifyContent: "center",
        flex: 1,
        fontSize: Fontsize.fontTwelve,
        // marginTop: 5,
        color: Colors.black
    },
    IpsumTxt: {
        textAlign: "right",
        fontSize: Fontsize.fontTwelve,
        // marginTop: ,
        color: Colors.white
    },
    time: {
        marginTop: 30,
        marginLeft: 20,
        fontSize: Fontsize.fontFourteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium
    },
    sndTime: {
        //marginTop: 30,
        marginLeft: 10,
        fontSize: Fontsize.fontFourteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium,

    },
    chatView: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    containerRight: {
        padding: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 5
    },
    talkBubbleRight: {
        backgroundColor: Colors.appcolor,
        // marginTop: 10,
        marginLeft: 6,
        borderRadius: 5,
        marginRight: 14,
        padding:5
    },
    talkBubbleSquareRight: {
        // width: 230,
        // backgroundColor: Colors.appcolor,
        // borderRadius: 6,
        padding: 5,
        marginRight: 3,
        width: 230,
        borderLeftColor: Colors.appcolor,
        borderRadius: 20,
        // elevation: 20
    },
    talkBubbleTriangleRight: {
        position: "absolute",
        right: -20,
        top: 5,
        width: 0,
        height: 0,
        borderTopColor: "transparent",
        borderTopWidth: 5,
        borderLeftWidth: 20,
        borderLeftColor: Colors.appcolor,
        borderBottomWidth: 30,
        borderBottomColor: "transparent",

    },
    talkBubbleLeft: {
        backgroundColor: Colors.white,
        marginTop: 10,
        borderRadius: 5,

    },
    readView: {
        flexDirection: "row",
        // marginTop: 48,
        marginRight: 5
    },
    readImg: {
        height: 15,
        width: 12,
        resizeMode: "contain",
        tintColor: Colors.grey,
        marginTop: 2,
        marginRight: -5
    },
    buttonView: {
        width: 150,
        marginTop: 5,
        paddingBottom: 5,
        paddingTop: 5,
        marginRight: 10

    },
    replayView: {
        // marginRight: 5,
        flexDirection: "row",
        justifyContent: "space-evenly",
        // padding: 7,
        justifyContent: "flex-start",
        textAlign: "center",
        padding: 7

    },
    replayImg: {
        height: 15,
        width: 15,
        resizeMode: "contain",
        marginLeft: 15
    },
    replayTxt: {
        fontSize: Fontsize.fontFourteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium,
        marginLeft: 15
    },

    forwordImg: {
        height: 15,
        width: 15,
        resizeMode: "contain"
    },


    copyImg: {
        marginRight: 3,
        height: 15,
        width: 15,
        resizeMode: "cover"
    },


    popoverCss: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        elevation: 10,
    },

    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: Colors.white,
        height: 50,
        borderRadius: 20,
        margin: 10,
    },
    imageStyle: {
        padding: 9,
        margin: 7,
        height: 2,
        width: 2,
        resizeMode: 'contain',
        alignItems: 'center',
        tintColor: Colors.grey,
    },
    nurseTxt: {
        color: Colors.white,
        textAlign: "right",
        fontFamily: Fonts.ProximaNovaMedium
    },
    DoctorTxt: {
        color: Colors.black,
        textAlign: "left",
        fontFamily: Fonts.ProximaNovaMedium
    },
    chainView: {
        flexDirection: "row",
        marginRight: 4
    }
}
)
export default styles;  