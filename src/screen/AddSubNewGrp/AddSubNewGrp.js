import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, TextInput, Modal, Alert, SafeAreaView, FlatList, ImageBackground } from 'react-native';
import { Fonts, Fontsize, Colors } from '@common';
import Imagepath from '../../common/imagepath';
import RBSheet from "react-native-raw-bottom-sheet";
import ImagePicker from 'react-native-image-crop-picker';
import styles from './css';
import { CustomLoader, AsyncStorageHelper } from "@lib";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createGroup } from '../../reduxStore/action/firebaseActions';

const AddSubNewGrp = (props) => {
    let selectedUser = props?.route?.params?.selectedUser || [];
    const [groupName, setGroupName] = useState("");
    const [loaderVisible, setloaderVisible] = useState(false);

    const Lonovo = ({ item, index }) => {
        return (
            <View style={styles.selectedImg}>
                <View style={styles.imageOnImg}>
                    <Image source={item?.img ? item?.img : require('../../assect/images/default-user.png')}
                        style={styles.personImg}>
                    </Image>
                    <Text style={{ color: Colors.black, fontSize: Fontsize.fontEleven, }}>{item?.first_name}</Text>
                </View>
            </View>
        )
    };

    const handleGroupCreate = async () => {
        let { actions } = props;
        let firebaseUserData = await AsyncStorageHelper.getData("firebaseUserData");
        let apiData = {
            admin: JSON.parse(firebaseUserData).id,
            createdAt: new Date(),
            deletedBy: [],
            isGroup: true,
            groupName: groupName,
            participiants: [...selectedUser.map((item) => item.id), JSON.parse(firebaseUserData).id],
            updatedAt: new Date()
        }
        actions.createGroup(apiData, setloaderVisible, () => redirectToChatList());
    }

    const redirectToChatList = () => {
        props.navigation.navigate("Chat")
    }

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

    const refRBSheet = useRef(null);
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
                <TouchableOpacity onPress={() => refRBSheet.current.open()} style={styles.ImgView}>
                    <Image style={styles.ClickImg} source={Imagepath.clickcamera} />
                </TouchableOpacity>
                <TextInput
                    style={styles.tiView}
                    placeholder="Type Group Subject"
                    underlineColorAndroid="transparent"
                    onChangeText={setGroupName}
                    value={groupName}
                />
                {/* <TouchableOpacity style={styles.smileView}>
                    <Image style={styles.smileImg} source={Imagepath.smile} />
                </TouchableOpacity> */}
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
                <Text style={styles.participantTxt}>Participants:{selectedUser.length}</Text>
                {/* <Text style={styles.participantTxt}>1</Text> */}
            </View>
            <View style={styles.upperSlctedImg}>
                <FlatList
                    data={selectedUser}
                    renderItem={Lonovo}
                    keyExtractor={item => item.index}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <TouchableOpacity onPress={handleGroupCreate}
                activeOpacity={0.5}
                style={styles.touchableOpacityStyle}>
                <Image
                    source={Imagepath.right}
                    style={styles.floatingButtonStyle}
                />
            </TouchableOpacity>
            <CustomLoader loaderVisible={loaderVisible} />
        </SafeAreaView>
    )
}

const mapStateToProps = state => ({
    allUsers: state?.firebaseData?.allUsers,
});

const ActionCreators = Object.assign(
    { createGroup }
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSubNewGrp)
