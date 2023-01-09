import { StyleSheet } from 'react-native';
import { Colors, Fontsize, Fonts, } from "@common";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingTop: 8
    },
    upperView: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        marginBottom: 10,
    },
    editorsView: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    editTxt: {
        fontSize: Fontsize.fontFifteen,
        color: Colors.appcolor,
        fontFamily: Fonts.ProximaNovaMedium,
        marginTop:3
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
        marginRight:7
    },
    editView: {
        flexDirection: "row",
    },
    groupImg: {
        height: 50,
        width: 50,
        resizeMode: "cover",
        alignSelf: "center"
    },
    paticipants: {
        alignSelf: "center",
        fontSize: Fontsize.fontTwelve,
    },
    user: {
        fontSize: Fontsize.fontFourteen,
        color: Colors.appcolor,
        fontFamily: Fonts.ProximaNovaBold,
        alignSelf: "center",
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
        fontSize: Fontsize.fontFourteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium
    },
    infoMsg: {
        marginLeft: 10
    },
    maanImg: {
        height: 40,
        width: 40,
        resizeMode: "contain",
    },
    singleTxt: {
        fontSize: Fontsize.fontSixteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaBold,
    },
    listMainView: {
    },
    infoTouch: {
        paddingHorizontal: 16,
        flexDirection: "row",
        paddingVertical: 12,
        alignItems: "center",
        backgroundColor: Colors.offwhite,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.grey,
 },
 searchIconBtn:{
    height:20,
    width:20,
    borderRadius:5,
    alignItems:"center",
    justifyContent:"center",
    marginTop:5

 }


}
)
export default styles;