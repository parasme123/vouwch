import React, { useState, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, TextInput, Modal, Alert,SafeAreaView } from 'react-native';
import { Fonts, Fontsize, Colors } from '@common';
import Imagepath from '../../common/imagepath';
import RBSheet from "react-native-raw-bottom-sheet";
import ImagePicker from 'react-native-image-crop-picker';
import styles from './css';

const AddSubNewGrp = (props) => {
    const [ischecked, setischecked] = useState(false);
    const [ischecked1, setischecked1] = useState(false);
    const [ischecked2, setischecked2] = useState(false);
    const [ischecked3, setischecked3] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);


    const onSelectImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        });
    };

    const onCameraImage = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        });
    }


    const refRBSheet = useRef();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.upperView}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image style={styles.preImg}
                        source={Imagepath.previous} />
                </TouchableOpacity>
                <View style={styles.newgrpVw}>
                    <Text style={styles.newgrpTxt}>New Group</Text>
                    <Text style={styles.addparticipantsTxt}>Add Subject</Text>
                </View>
            </View>
            <View style={styles.TypeView}>
                <TouchableOpacity onPress={() => refRBSheet.current.open()}
                    style={styles.ImgView}>
                    <Image style={styles.ClickImg}
                        source={Imagepath.clickcamera} />
                </TouchableOpacity>



                <TextInput
                    style={styles.tiView}
                    placeholder="Type Group Subject"
                    underlineColorAndroid="transparent"
                />
                <TouchableOpacity style={styles.smileView}>
                    <Image style={styles.smileImg}
                        source={Imagepath.smile} />
                </TouchableOpacity>
            </View>




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
                        <View>
                            <Text style={styles.DisappearMsg}>Disappearing Messages</Text>
                            <Text style={styles.NewMsg}>All new messages in this chat will disappear after the selected duration.</Text>
                        </View>


                        <View style={styles.hrsView}>
                            <TouchableOpacity onPress={() => { setischecked(!ischecked) }}>
                                <Image
                                    source={ischecked ? Imagepath.radiobutton : Imagepath.redCircle}
                                    style={styles.btnImg}
                                />
                            </TouchableOpacity>
                            <Text style={styles.hoursTxt}>
                                24 Hours
                            </Text>
                        </View>

                        <View style={styles.hrsView}>
                            <TouchableOpacity onPress={() => { setischecked1(!ischecked1) }}>
                                <Image
                                    source={ischecked1 ? Imagepath.radiobutton : Imagepath.redCircle}
                                    style={styles.btnImg}
                                />
                            </TouchableOpacity>
                            <Text style={styles.hoursTxt}>
                                7 Days
                            </Text>
                        </View>

                        <View style={styles.hrsView}>
                            <TouchableOpacity onPress={() => { setischecked2(!ischecked2) }}>
                                <Image
                                    source={ischecked2 ? Imagepath.radiobutton : Imagepath.redCircle}
                                    style={styles.btnImg}
                                />
                            </TouchableOpacity>
                            <Text style={styles.hoursTxt}>
                                90 Days
                            </Text>
                        </View>

                        <View style={styles.hrsView}>
                            <TouchableOpacity onPress={() => { setischecked3(!ischecked3) }}>
                                <Image
                                    source={ischecked3 ? Imagepath.radiobutton : Imagepath.redCircle}
                                    style={styles.btnImg}
                                />
                            </TouchableOpacity>
                            <Text style={styles.hoursTxt}>
                                Off
                            </Text>
                        </View>



                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>

            <TouchableOpacity onPress={() => setModalVisible(true)}
                style={styles.disAppearView}>
                <View>
                    <Text style={styles.msgTxt}>
                        Disappearing Messages
                    </Text>
                    <Text style={styles.offTxt}>
                        off
                    </Text>
                </View>
                <TouchableOpacity>
                    <Image style={styles.clockImg}
                        source={Imagepath.wallclock} />
                </TouchableOpacity>
            </TouchableOpacity>



            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={false}
                closeOnPressMask={false}
                height={200}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
            >
                <View style={{}}>
                    <Text style={styles.selectImgSrc}>Select Group Icon From</Text>

                    <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center", justifyContent: "space-evenly" }}>
                        <View style={{}}>
                            <TouchableOpacity style={styles.CamViews} onPress={onCameraImage}>
                                <Image style={styles.camImg}
                                    source={Imagepath.clickcamera} />
                            </TouchableOpacity>
                            <Text style={styles.camTxt}>Camera</Text>
                        </View>
                        <View style={{}}>
                            <TouchableOpacity style={styles.CamViews} onPress={onSelectImage}>
                                <Image style={styles.camImg}
                                    source={Imagepath.picStore} />
                            </TouchableOpacity>
                            <Text style={styles.camTxt}>Gallery</Text>
                        </View>
                    </View>

                    <View style={{}}>
                        <TouchableOpacity style={styles.crossView}
                            onPress={() => refRBSheet.current.close()}>

                            <Image style={styles.crossImg}
                                source={Imagepath.cross} />
                            <Text style={styles.bottomSheetDetailText}>Cancel</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </RBSheet>


            <TouchableOpacity
                activeOpacity={0.5}
                // onPress={() => props.navigation.navigate("AddSubNewGrp")}
                style={styles.touchableOpacityStyle}>

                <Image
                    source={Imagepath.right}
                    style={styles.floatingButtonStyle}
                />
            </TouchableOpacity>


        </SafeAreaView>

    )
}
export default AddSubNewGrp;