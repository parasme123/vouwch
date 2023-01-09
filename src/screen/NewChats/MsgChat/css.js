import { StyleSheet } from 'react-native';
import { Colors, Fontsize, Fonts, } from "@common";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.offWite
    },
    infoTouch: {
        paddingHorizontal: 5,
        flexDirection: "row",
        paddingVertical:1,
        alignItems: "center",
        backgroundColor: Colors.offwhite,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.grey,
        paddingBottom:10
    },
    singleTxt: {
        fontSize: Fontsize.fontThirteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaBold,
        marginTop: 10,
        alignSelf: "center",
        justifyContent: "center"
    },
    maanImg: {
        height: 40,
        width: 40,
        resizeMode: "contain",
        marginTop: 12,
        marginLeft: 10
    },
    infoMsg: {
        marginTop: 15,
        marginLeft: 10
    },
    wdWatson: {
        fontSize: Fontsize.fontThirteen,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium
    },
    weNeed: {
        fontSize: Fontsize.fontEleven,
        //color: Colors.black,
        fontFamily: Fonts.ProximaNovaMedium,
    },
    Line: {
        borderBottomColor: '#CED2D7',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: 16,
        height: 1
    },
}
)
export default styles;