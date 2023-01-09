import React, { useState, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView, TextInput, Alert, Modal, } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import RBSheet from "react-native-raw-bottom-sheet";
import Imagepath from '../../common/imagepath';
import styles from './css';

const MsgManagement = () => {
    const [modalVisible, setModalVisible] = useState(false);

    // const refRBSheet = useRef();

    const [ischecked, setischecked] = useState();
    const [meta, setMeta] = useState([
        { id: 1, title: "Abdul Mughni", description: "How about pie project?", img: Imagepath.abdul },
        { id: 2, title: "Baadal", description: "Great work!", img: Imagepath.badal },
        { id: 3, title: "Cadmus", description: "You're welcome!", img: Imagepath.cadmus },
        { id: 4, title: "Daamodar", description: "Please Check Notion!", img: Imagepath.daamodar },
        { id: 5, title: "Edgarton", description: "We need to meet today", img: Imagepath.edgarton },
    ]);

    const DataList = (metaObj) => {
        return (
            <View style={{}}>

                <TouchableOpacity style={styles.rightTouch}>
                    <View style={{ flexDirection: "row" }}>
                        <Image
                            style={styles.maanImg}
                            source={metaObj.img} />
                        <View style={styles.infoMsg}>
                            <Text style={styles.wdWatson}>{metaObj.title}</Text>
                            <Text style={styles.weNeed}>{metaObj.description}</Text>
                        </View>
                    </View>
                    { /*<View style={styles.checkboxContainer}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                        />
                        <Text style={styles.label}>Do you like React Native?</Text>
                    </View> */}

                    <TouchableOpacity onPress={() => { setischecked(!ischecked) }}>
                        <Image style={styles.bin}
                            source={Imagepath.RecycleBin} />
                    </TouchableOpacity>



                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>

            <View style={styles.upperView}>
                <Text style={styles.mgmtTxt}>Message Management</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 24, flexDirection: "row", paddingTop: 20, paddingBottom: 10 }}>
                    <Image style={styles.inviteImg}
                        source={Imagepath.invite} />
                    <View style={styles.signView}>
                        <Text style={styles.emp}>Sign up employee(employee personal user account)</Text>
                        <Text style={styles.admin}>( it user have admin privileges )</Text>
                    </View>
                </View>


                <View style={styles.signUPView}>
                    <Text style={styles.signTxt}>Sign Up</Text>
                    <Text style={styles.empTxt}>Employee email ( Username )</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType="default"
                    />
                    <Text style={styles.empTxt}>Default Password (123)</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType="numeric"
                    />


                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}>


                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>You SignedUp Successfully.</Text>
                                <TouchableOpacity
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Hide</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </Modal>

                    <TouchableOpacity style={styles.signUpBtnView} onPress={() => setModalVisible(true)}>
                        {/* // onPress={() => refRBSheet.current.open()} */}
                        <Text style={styles.signUpTxt}>Sign Up</Text>
                    </TouchableOpacity>

                </View>
                {/* 
                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={false}
                    closeOnPressMask={false}
                    height={550}
                    customStyles={{
                        wrapper: {
                            backgroundColor: "transparent"
                        },
                        draggableIcon: {
                            backgroundColor: "red"
                        }
                    }}
                > */}

                <View style={styles.removeListView}>
                    <Text style={styles.signTxt}>List of sign up employees</Text>
                    {/* <TouchableOpacity style={styles.delView}>
                        <Image style={styles.bin}
                            source={Imagepath.RecycleBin} />
                        <Text style={styles.DelTxt}>Delete Select</Text>
                    </TouchableOpacity> */}
                </View>
                <View style={styles.ListView}>

                    <ScrollView style={{}}
                        showsVerticalScrollIndicator={false}>
                        {
                            meta?.map((item, index) => {
                                return DataList(item)
                            })
                        }
                    </ScrollView>
                </View>


                {/* </RBSheet> */}

            </ScrollView >
        </View >
    )
}
export default MsgManagement;