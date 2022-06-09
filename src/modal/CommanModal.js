import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,FlatList, Alert, Modal} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Imagepath from '../common/imagepath';
import { useNavigation } from '@react-navigation/native';
export default CommanModal = (props) => {
    const navigation = useNavigation();
    // const [modalVisibleComment, setModalVisibleComment] = useState();
    return (
        <View  style={{ flex: 1 }}>
                
                {/* cOMMENT MODULE */}

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={props.modalVisibleComment}
                    // visible={visibile}
                    onRequestClose={() => {
                        // Alert.alert("Modal has been closed.");
                        // setModalVisibleComment(!modalVisibleComment);
                    props.Hidemodal()

                    }}
                >
                    <View style={styles.centeredView1}>
                        <View style={styles.centeredView2}>
                            <View style={styles.headerView}>
                                <Text style={styles.headerText}>{props.tittleText}</Text>
                                <TouchableOpacity onPress={() => props.Hidemodal()} style={styles.headerIcon}>
                                    <Image style={styles.headerIcon} resizeMode='contain' source={Imagepath.crose} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.buttonView}>
                            <TouchableOpacity  onPress={() =>props.AddReview()} style={styles.buttonFirst}>
                                <Image style={styles.headerIcon} resizeMode='contain' source={Imagepath.write} />
                                <Text style={styles.headerText}>Add Review</Text>

                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() =>props.AddBravoCard()} style={styles.buttonTwo}>
                                <Image style={styles.headerIcon} resizeMode='contain' source={Imagepath.addbravocard} />
                                <Text style={styles.buttonTwoText}>Add Bravo Card</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                    </View>
                </Modal>

                
            </View>









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
        backgroundColor: "#000000",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "#000000",
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

