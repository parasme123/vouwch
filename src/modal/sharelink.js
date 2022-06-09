import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    ImageBackground,
    Image,
    FlatList, Alert, Modal
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Imagepath from '../common/imagepath';
// import styles from './styles';
// const { width, height } = Dimensions.get("window");

export default Sharelink = ({ navigation }) => {
    const [modalVisibleLink, setModalVisibleLink] = useState(false);


    return (
        < View style={styles.centeredView} >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleLink}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisibleLink(!modalVisibleLink);
                }}
            >
                <View style={styles.centeredView1}>
                    <View style={styles.centeredView2}>
                        <View style={styles.headerView}>
                            <Text style={styles.headerText}>Share</Text>
                            <TouchableOpacity onPress={() => setModalVisibleLink(!modalVisibleLink)} style={styles.iconImage}>
                                <Image style={styles.iconImage} resizeMode='contain' source={Imagepath.crose} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.textline}>Share this link via</Text>
                        <View style={styles.shareIconView}>
                            <TouchableOpacity style={{}}>
                                <Image style={styles.shareIcon} resizeMode='contain' source={Imagepath.whatshupicon} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{}}>
                                <Image style={styles.shareIcon} resizeMode='contain' source={Imagepath.facebookicon} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{}}>
                                <Image style={styles.shareIcon} resizeMode='contain' source={Imagepath.twitericon} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{}}>
                                <Image style={styles.shareIcon} resizeMode='contain' source={Imagepath.instaicon} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{}}>
                                <Image style={styles.shareIcon} resizeMode='contain' source={Imagepath.mailicon} />
                            </TouchableOpacity>

                        </View>
                        <View style={styles.shareLinkView}>
                            <View style={styles.SharelinkSubView}>
                                <Image style={styles.sharelinkIcon} resizeMode='contain' source={Imagepath.attach} />
                                <Text style={styles.sharelinkIconText}>Share link</Text>
                            </View>
                            <TouchableOpacity style={styles.copyButton}>
                                <Text style={styles.copyText}>Copy</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>
            </Modal>
            {/* button of modal start */}
            <TouchableOpacity
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisibleLink(true)}
            >
                <Text style={styles.textStyle}>Show Modal</Text>
            </TouchableOpacity>
        </View>








    );
}

const styles = StyleSheet.create({
    button: { height: 40, width: 168, justifyContent: "center", alignItems: "center", borderRadius: 20 },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        // opacity:9
    },
    centeredView1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22,
        backgroundColor: "#00000090",
        opacity: 5
    },
    centeredView2: {
        width: "92%", height: 255, borderRadius: 15, alignSelf: "center", backgroundColor: "#fff", shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.05,
        shadowRadius: 1,
        elevation: 1
    },

    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    headerView: { height: 50, backgroundColor: "#245FC7", borderTopLeftRadius: 15, borderTopRightRadius: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15 },
    headerText: { color: "#fff", fontSize: 15 },
    iconImage: { height: 30, width: 30 },
    textline: { color: "#000", fontSize: 18, paddingHorizontal: 20, marginVertical: 15 },
    shareIconView: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, marginVertical: 5 },
    shareIcon: { height: 44, width: 44 },
    shareLinkView: { borderWidth: 1, borderColor: "#CECECE", flexDirection: "row", alignItems: "center", height: 45, marginHorizontal: 20, borderRadius: 10, justifyContent: "space-between", marginVertical: 15, paddingHorizontal: 5 },
    SharelinkSubView: { flexDirection: "row", alignItems: "center", paddingLeft: 5 },
    sharelinkIcon: { height: 12, width: 12 },
    sharelinkIconText:{ fontSize: 14, color: "#000", paddingLeft: 10 },
    copyButton:{ width: 90, height: 35, flexDirection: "row", borderRadius: 10, backgroundColor: "#245FC7", justifyContent: "center", alignItems: "center", },
    copyText:{ color: "#fff", fontSize: 15 },





})





























