import React, { useState, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, TextInput, Modal, Alert, SafeAreaView, FlatList, ImageBackground } from 'react-native';
import { Fonts, Fontsize, Colors } from '@common';
import Imagepath from '../../common/imagepath';
import RBSheet from "react-native-raw-bottom-sheet";
import ImagePicker from 'react-native-image-crop-picker';
import styles from './css';

const AddSubNewGrp = (props) => {

    const Name = ([
        { id: 1, title: "Wendy Watson", img: Imagepath.maan },
        { id: 2, title: "Connie Lane", img: Imagepath.proMam },
        { id: 3, title: "Kathryn Alexander", img: Imagepath.proWoman },
        { id: 4, title: "Bernard Nguyen", img: Imagepath.googleMan },
        { id: 5, title: "Connie Lane", img: Imagepath.googleWomen },
        { id: 6, title: "Wendy Watson", img: Imagepath.maan },
        { id: 7, title: "Connie Lane", img: Imagepath.proMam },
        { id: 8, title: "Kathryn Alexander", img: Imagepath.proWoman },
        { id: 9, title: "Bernard Nguyen", img: Imagepath.googleMan },
        { id: 10, title: "Connie Lane", img: Imagepath.googleWomen },
    ]);
    const Lonovo = ({ item, index }) => {
        return (

            <View style={styles.selectedImg}>
                <View style={styles.imageOnImg}>
                    <Image source={item?.img}
                        style={styles.personImg}>
                    </Image>

                    <Text style={{ color: Colors.black }}>{item?.title}</Text>
                </View>
            </View>

        )
    };
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
                <TouchableOpacity
                    style={styles.smileView}>
                    <Image style={styles.smileImg}
                        source={Imagepath.smile} />
                </TouchableOpacity>
            </View>


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

                    <View style={styles.bottomSlide}>
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

            <View style={styles.participants}>
                <Text style={styles.participantTxt}>Participants:</Text>
                <Text style={styles.participantTxt}>1</Text>
            </View>

            <View style={styles.upperSlctedImg}>

                <FlatList
                    data={Name}
                    renderItem={Lonovo}
                    keyExtractor={item => item.index}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

            </View>


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