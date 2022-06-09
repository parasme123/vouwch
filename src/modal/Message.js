import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
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
import Imagepath from '../common/imagepath';

export default function Message (props)  {
    // const [modalVisibleMessage, setModalVisibleMessage] = useState(false);
    const navigation = useNavigation();
    return (

        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={() => 
                    // Alert.alert("Modal has been closed.");
                    props.Hidemodal()
                }
            >
                <View style={styles.centeredView1}>
                    <View style={styles.centeredView2}>
                        <View style={styles.headerView}>
                            <Text style={styles.headerText}>Messages</Text>
                            <TouchableOpacity onPress={() => props.Hidemodal()} style={styles.headerIcon}>
                                <Image style={styles.headerIcon} resizeMode='contain' source={Imagepath.crose} />
                            </TouchableOpacity>
                        </View>

                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter Messages"
                            keyboardType="default"
                        />
                        <TouchableOpacity onPress={()=>{navigation.navigate('rate')}}  style={styles.messageButton}>
                            <Text style={styles.messageButtonText}>Send Messages</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
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
    centeredView2:{
        width: "92%", height: 255, borderRadius: 15, alignSelf: "center", backgroundColor: "#fff", shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.05,
        shadowRadius: 1,
        elevation: 1
    },
    headerView:{ height: 50, backgroundColor: "#245FC7", borderTopLeftRadius: 15, borderTopRightRadius: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15 },
    headerText:{ color: "#fff", fontSize: 15 },
    headerIcon:{ height: 30, width: 30 },
    textInput:{ borderWidth: 1, borderColor: "#929397", marginHorizontal: 15, borderRadius: 10, marginTop: 40, paddingLeft: 15 },
    messageButton:{ width: 149, height: 45, flexDirection: "row", borderRadius: 10, backgroundColor: "#245FC7", justifyContent: "center", alignItems: "center", alignSelf: "flex-end", marginRight: 15, marginTop: 20 },
    messageButtonText:{ color: "#fff", fontSize: 15 }



})




