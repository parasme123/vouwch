import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, Modal } from 'react-native';
import Imagepath from '../common/imagepath';
// import styles from './ReviewmodalCss';
import { Fontsize, Colors } from '@common';

const Reviewmodal = (props) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView1}>
                    <View style={styles.centeredView2}>
                        <View style={styles.headerView}>
                            <Text style={styles.headerText}>Review & Bravo Card</Text>
                            <TouchableOpacity onPress={() => props.Hidemodal()} style={styles.headerIcon}>
                                <Image style={styles.headerIcon} resizeMode='contain' source={Imagepath.crose} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity onPress={() => props.AddReview()} style={styles.buttonFirst}>
                                <Image style={styles.headerIcon} resizeMode='contain' source={Imagepath.write} />
                                <Text style={styles.headerText}>Add Review</Text>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.AddBravoCard()} style={styles.buttonTwo}>
                                <Image style={styles.headerIcon} resizeMode='contain' source={Imagepath.addbravocard} />
                                <Text style={styles.buttonTwoText}>Add Bravo Card</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    )
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    centeredView1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.transparentBlack,
        opacity: 5
    },
    modalView: {
        margin: 20,
        backgroundColor: Colors.white,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        elevation: 5
    },
    centeredView2: {
        width: "92%", height: 255,
        borderRadius: 15,
        alignSelf: "center",
        backgroundColor:  Colors.white,
        elevation: 1
    },
    headerView: {
        height: 50, backgroundColor: Colors.bottonColors,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15
    },
    headerText: {
        color:  Colors.white,
        fontSize: Fontsize.fontFifteen
    },
    headerIcon: {
        height: 30,
        width: 30
    },
    buttonView: {
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 65,
        paddingHorizontal: 10
    },
    buttonFirst: {
        
        flexDirection: "row",
        borderRadius: 10, backgroundColor:Colors.bottonColors,
        justifyContent: "center", alignItems: "center",
        padding:10
    },
    buttonTwo: {
         flexDirection: "row",
        borderRadius: 10,
         backgroundColor:Colors.bottonColors,
        justifyContent: "center", 
        alignItems: "center",padding:10
    },
    buttonTwoText: {
        color:  Colors.white, 
        fontSize: Fontsize.fontFifteen,
        marginLeft: 5,
    }
});


export default Reviewmodal