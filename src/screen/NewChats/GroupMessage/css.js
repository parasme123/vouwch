import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fontsize, Fonts, } from "@common";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.offWite,
    },
    upperView: {
        backgroundColor: Colors.white,
        padding: 4,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10
    },
    preImg: {
        height: 20,
        width: 20,
        tintColor: Colors.appcolor,
        // marginTop: 18,
        marginLeft: 10,
    },
    perView: {
        flexDirection: "row",
        marginHorizontal: 15,
    },
    gmanStyle: {
        height: 40,
        width: 40,
        resizeMode: "contain",
        borderRadius: 20
        // marginTop: 10
    },
    info: {
        // marginTop: 15,
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
        alignItems: "center",
        marginTop: 2
    },
    onlineTxt: {
        marginLeft: 5,
        fontSize: Fontsize.small,
        // marginTop: 1
    },
    circleImg: {
        height: 7,
        width: 7,
        tintColor: Colors.green,
        // marginTop: 6
    },
    dotsImg: {
        height: 15,
        width: 15,
        resizeMode: "contain",
        marginTop: 5,
        marginRight: 2
    },
    todayView: {
        backgroundColor: Colors.white,
        paddingHorizontal: 12,
        paddingVertical: 4,
        alignSelf: "center",
        // alignItems: "center",
        borderRadius: 20,
        marginTop: 10
    },
    quoteView: {
        flexDirection: "row",
        alignSelf: "center",
        paddingHorizontal: 5
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
        left: -20,
        top: 0,
        width: 0,
        height: 0,
        borderTopColor: "transparent",
        // borderBottomWidth: 5,
        borderRightWidth: 20,
        borderRightColor: Colors.white,
        borderBottomWidth: 20,
        borderBottomColor: "transparent",
        marginLeft: 10,
    },
    // talkBubbleSquareRight: {
    //     padding: 5,
    //     marginRight: 3,
    //     flex: 1,
    //     maxWidth: width - 80,
    //     borderLeftColor: Colors.appcolor,
    //     borderRadius: 20,
    // },

    talkBubbleSquareLeft: {
        flex: 1,
        maxWidth: width - 80,
        backgroundColor: Colors.white,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 15,
    },
    IpsumTxt: {
        fontSize: Fontsize.fontTwelve,
        color: Colors.white,
        fontFamily: Fonts.ProximaNovaMedium,
    },
    loreamTxt: {
        fontSize: Fontsize.fontTwelve,
        fontFamily: Fonts.ProximaNovaMedium,
        color: Colors.black
    },
    time: {
        marginTop: 30,
        marginLeft: 20,
        fontSize: Fontsize.fontFourteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium
    },
    sndTime: {
        // marginTop: 30,
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
        paddingHorizontal: 6,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "flex-end",
    },
    containerLeft: {
        paddingHorizontal: 6,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "flex-start",
    },
    talkBubbleRight: {
        backgroundColor: Colors.appcolor,
        paddingHorizontal: 8,
        paddingVertical: 10,
        maxWidth: width - 80,
        borderRadius: 6,
        paddingRight: 12,
        marginRight: 12
    },
    talkBubbleLeft: {
        backgroundColor: Colors.white,
        paddingHorizontal: 8,
        paddingVertical: 10,
        maxWidth: width - 80,
        borderRadius: 6,
        paddingLeft: 12,
        marginLeft: 12
    },
    talkBubbleSquareRight: {
        flex: 1,
        maxWidth: width - 80,
        borderRadius: 20,
    },
    talkBubbleTriangleRight: {
        position: "absolute",
        right: -10,
        top: 0,
        width: 0,
        height: 0,
        borderTopColor: "transparent",
        borderLeftWidth: 20,
        borderLeftColor: Colors.appcolor,
        borderBottomWidth: 20,
        borderBottomColor: "transparent",

    },
    readView: {
        flexDirection: "row",
        // marginTop: 10,
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
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: 30,
        margin: 12,
        paddingLeft: 12
    },
    selectFilesBtn: {
        paddingVertical: 12,
        // borderWidth: 1,
        paddingRight: 6,
    },
    cameraBtn: {
        paddingVertical: 12,
        // borderWidth: 1,
        paddingHorizontal: 6
    },
    imageStyle: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        tintColor: Colors.grey,
    },
    msgText: {
        flex: 1,
        lineHeight: 20,
        // marginLeft: 10,
        maxHeight: 140,
        // width: width - 150
    },
    sendBtn: {
        backgroundColor: Colors.appcolor,
        paddingVertical: 4,
        paddingHorizontal: 4,
        borderRadius: 30
    },
    sendBtnImg: {
        height: 28,
        width: 28
    }
}
)
export default styles;  