import { StyleSheet } from 'react-native';
import { Colors, Fontsize, Fonts, } from "@common";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    upperView: {
        // flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        marginBottom: 10,
    },
    editorsView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 12
    },
    editTxt: {
        fontSize: Fontsize.fontFifteen,
        color: Colors.appcolor,
        fontFamily: Fonts.ProximaNovaMedium,
        marginTop: 3
    },
    preImg: {
        height: 20,
        width: 20,
        tintColor: Colors.appcolor,
    },
    // editImg: {
    //     height: 20,
    //     width: 20,
    //     tintColor: Colors.appcolor,
    // },
    editor: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        tintColor: Colors.appcolor,
        marginRight: 7
    },
    editView: {
        flexDirection: "row",
    },
    groupImg: {
        height: 70,
        width: 70,
        resizeMode: "cover",
        borderRadius: 40
    },
    paticipants: {
        fontSize: Fontsize.fontTwelve,
    },
    user: {
        fontSize: Fontsize.fontFourteen,
        color: Colors.appcolor,
        fontFamily: Fonts.ProximaNovaBold,
    },
    persConnct: {
        height: 30,
        width: 30,
        tintColor: Colors.appcolor,
        resizeMode: "contain",
    },
    addGrp: {
        color: Colors.appcolor,
        fontFamily: Fonts.ProximaNovaMedium,
        fontSize: Fontsize.fontThirteen,
    },
    memberView: {
        marginLeft: 12
    },
    addView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 24,
        marginTop: 24,
    },
    adminTxt: {
        fontFamily: Fonts.ProximaNovaMedium,
        fontSize: Fontsize.fontThirteen,
    },
    searchIcon: {
        height: 30,
        width: 30,
        resizeMode: "contain",
        tintColor: Colors.appcolor,
    },
    Line: {
        borderBottomColor: '#CED2D7',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    Lineee: {
        borderBottomColor: '#CED2D7',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    addGrpView: {
        paddingTop: 20,
        paddingBottom: 15,
        paddingHorizontal: 16,
        backgroundColor: Colors.offwhite,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.grey
    },
    weNeed: {
        fontSize: Fontsize.fontEleven,
        fontFamily: Fonts.ProximaNovaMedium,
    },
    wdWatson: {
        fontSize: Fontsize.fontTwelve,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium
    },
    infoMsg: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        // marginTop: 10
    },
    subView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    maanImg: {
        height: 40,
        width: 40,
        resizeMode: "contain",
        borderRadius: 30
    },
    singleTxt: {
        fontSize: Fontsize.fontSixteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaBold,
    },
    groupAdminTxt: {
        fontSize: 8,
        color: Colors.appcolor,
        fontFamily: Fonts.ProximaNovaBold,
    },
    // listMainView: {
    // },
    infoTouch: {
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        alignItems: "center",
        backgroundColor: Colors.offwhite,
        borderBottomWidth: 0.6,
        borderBottomColor: Colors.grey,
    },
    searchIconBtn: {
        height: 20,
        width: 20,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5

    },
    selectedImg: {
        marginTop: 3,
        padding: 10,
    },
    imageOnImg: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    personImg: {
        height: 70,
        width: 70,
        borderRadius: 20,
    },
    upperSlctedImg: {
        marginHorizontal: 3,
        // justifyContent: "space-between",
        flexDirection: "column",
        backgroundColor: Colors.white,
        marginTop: 24,
        paddingBottom: 5
    },
    bin: {
        height: 15,
        width: 15,
        resizeMode: "contain",
        tintColor: Colors.red
    },
    modalView: {
        margin: 20,
        backgroundColor: Colors.white,
        // borderRadius: 10,
        paddingVertical:24
        // padding: 35,
        // alignItems: "center",
    },
    handleUserBtn: {
        paddingHorizontal: 12,
        paddingVertical: 12,
        // borderBottomWidth: 0.4
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
        // marginTop: 8,
        backgroundColor: "rgba(52, 52, 52, 0.8)"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: Colors.black,
        fontSize: Fontsize.fontFourteen,
        fontFamily: Fonts.ProximaNovaMedium,
    },
    button: {
        flex: 1,
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 24,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.appcolor,
        marginHorizontal: 12
    },
    textStyle: {
        color: Colors.white,
        fontSize: Fontsize.fontThirteen,
        fontFamily: Fonts.ProximaNovaBold,
        alignSelf: "center",
        justifyContent: "center",
        // marginTop: 11
    },
    CameraButton: {
        position: 'absolute',
        right: 120,
        top: 0
    },
    CameraImage: {
        height: 28,
        width: 28
    },
    CancleArrow1: { height: 15, width: 15 },
    SelecttextStyle1: {
        fontSize: 20,
        fontFamily: Fonts.ProximaNovaMedium,
        color: 'white',
        textAlign: 'center',
    },
    modalView1: {
        borderRadius: 20,
        paddingVertical: 20,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button1: {
        marginHorizontal: 20,
        backgroundColor: Colors.appcolor,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 15,
        marginBottom: 0,
    },
    buttonClose1: { backgroundColor: '#38C348', width: '40%' },
    textStyle1: {
        fontSize: 18,
        fontFamily: Fonts.ProximaNovaRegular,
        color: 'white',
        textAlign: 'center',
    },

})

export default styles;