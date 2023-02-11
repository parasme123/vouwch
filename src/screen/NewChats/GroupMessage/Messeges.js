import React, { useRef, useEffect, useState, } from 'react';
import { TouchableOpacity, View, Image, Text, TextInput, FlatList, Modal, PermissionsAndroid, Easing, Clipboard } from 'react-native';
import Imagepath from '../../../common/imagepath';
import styles from './css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { groupMessageList, addMessage, deleteMessage, setReadMsg } from '../../../reduxStore/action/firebaseActions';
import { CustomLoader, AsyncStorageHelper } from "@lib";
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import { Colors, Fontsize, Fonts, } from "@common";
import moment from "moment";
import Popover, { PopoverPlacement } from 'react-native-popover-view';

const GroupMessage = (props) => {
    let groupDataParam = props?.route?.params?.chatGroupData;
    const flatListRef = useRef();

    const [modalVisible, setModalVisible] = useState(false);
    const [messagesList, setMessageList] = useState([])
    const [userData, setUserData] = useState({})
    const [typeTxt, setTypeText] = useState("")
    const [loaderVisible, setloaderVisible] = useState(false);
    const [chatGroupData, setchatGroupData] = useState({})
    const [showPopover, setShowPopover] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState("")

    useEffect(() => {
        async function getUserData() {
            let firebaseUserData = await AsyncStorageHelper.getData("firebaseUserData");
            setUserData(JSON.parse(firebaseUserData))
        }
        getUserData();
    }, [])

    useEffect(() => {
        if (messagesList?.length > 0) {
            let readMessageList = messagesList.map((item) => {
                if (item?.sendBy !== userData.id && !item?.isRead?.includes(userData.id)) {
                    return { ...item, isRead: [...item.isRead, userData.id] }
                } else {
                    return { ...item }
                }
            })
            setAllMessageRead(readMessageList)
        }
    }, [messagesList])

    const setAllMessageRead = (allMsg) => {
        const { actions, messageUserList } = props;
        actions.setReadMsg(allMsg, messageUserList.messageCollectionId)
    }

    useEffect(() => {
        const { actions, groupData, chatData } = props;
        setMessageList([]);
        setchatGroupData(chatData.find((item) => item.id == groupDataParam.id))
        let chatWithId = groupDataParam.id;
        actions.groupMessageList(chatWithId, setloaderVisible)
    }, [groupDataParam])

    useEffect(() => {
        const { messageUserList } = props;
        setMessageList(messageUserList?.message?.length ? messageUserList?.message : []);
        setTypeText("")
    }, [props.messageUserList])

    const MsgList = ({ item }) => {
        let msgObj = item;
        let createdDate = msgObj.createdAt.toDate();
        return (
            <View key={msgObj.messageId}>
                {
                    msgObj.sendBy == userData.id ? (
                        <View style={styles.containerRight}>
                            <View style={styles.readView}>
                                <Image style={msgObj?.isRead?.length >= chatGroupData?.participiants?.length ? styles.readImg : styles.unreadImg}
                                    source={Imagepath.read} />
                                <Text style={styles.sndTime}>{moment(createdDate).format('hh:mm a')}</Text>
                            </View>
                            <View style={styles.talkBubbleRight}>
                                <Popover
                                    isVisible={showPopover && selectedMessage == msgObj.messageId}
                                    onRequestClose={() => setShowPopover(false)}
                                    popoverStyle={styles.popoverCss}
                                    backgroundStyle={{ opacity: 0.001, }}
                                    // arrowSize={{ width: 30, height: 20, }}
                                    // arrowShift={-0.9}
                                    placement={PopoverPlacement.BOTTOM}
                                    animationConfig={{ duration: 200, easing: Easing.circle }}
                                    from={(
                                        <TouchableOpacity onPress={() => {
                                            setShowPopover(true)
                                            setSelectedMessage(msgObj.messageId)
                                        }}>
                                            <Image style={[styles.dotsImg, { tintColor: "white" }]}
                                                source={Imagepath.threeDotsHorizontal} />
                                        </TouchableOpacity>
                                    )}>
                                    <View style={styles.buttonView}>
                                        <TouchableOpacity style={styles.replayView} onPress={() => {
                                            Clipboard.setString(msgObj.textMsg);
                                            setShowPopover(false);
                                        }}>
                                            <Image source={Imagepath.coppyy} style={styles.replayImg} />
                                            <Text style={styles.replayTxt}>Copy</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.replayView} onPress={() => handleDeleteMsg(msgObj)}>
                                            <Image source={Imagepath.bin} style={styles.replayImg} />
                                            <Text style={styles.replayTxt}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>

                                </Popover>
                                {
                                    msgObj?.isFile ? (
                                        <Image style={styles.chatImage} source={{ uri: msgObj.textMsg }} />
                                    ) : (
                                        <Text style={styles.IpsumTxt}>{msgObj.textMsg}</Text>
                                    )
                                }
                                <View style={styles.talkBubbleTriangleRight} />
                            </View>
                        </View>
                    ) : (
                        <View style={styles.containerLeft}>
                            <View style={styles.talkBubbleLeft}>
                                <Popover
                                    isVisible={showPopover && selectedMessage == msgObj.messageId}
                                    onRequestClose={() => setShowPopover(false)}
                                    popoverStyle={styles.popoverCss}
                                    backgroundStyle={{ opacity: 0.001, }}
                                    // arrowSize={{ width: 30, height: 20, }}
                                    // arrowShift={-0.9}
                                    placement={PopoverPlacement.BOTTOM}
                                    animationConfig={{ duration: 200, easing: Easing.circle }}
                                    from={(
                                        <TouchableOpacity onPress={() => {
                                            setShowPopover(true)
                                            setSelectedMessage(msgObj.messageId)
                                        }}>
                                            <Image style={styles.dotsImg}
                                                source={Imagepath.threeDotsHorizontal} />
                                        </TouchableOpacity>
                                    )}>
                                    <View style={styles.buttonView}>
                                        <TouchableOpacity style={styles.replayView} onPress={() => {
                                            Clipboard.setString(msgObj.textMsg);
                                            setShowPopover(false);
                                        }}>
                                            <Image source={Imagepath.coppyy} style={styles.replayImg} />
                                            <Text style={styles.replayTxt}>Copy</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.replayView} onPress={() => handleDeleteMsg(msgObj)}>
                                            <Image source={Imagepath.bin} style={styles.replayImg} />
                                            <Text style={styles.replayTxt}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>

                                </Popover>
                                {
                                    msgObj?.isFile ? (
                                        <Image style={styles.chatImage}
                                            source={{ uri: msgObj.textMsg }} />
                                    ) : (
                                        <Text style={styles.loreamTxt}>{msgObj.textMsg}</Text>
                                    )
                                }
                                <View style={styles.talkBubbleTriangleLeft} />
                            </View>
                            <View style={styles.readView}>
                                {/* <Image style={styles.readImg}
                                    source={Imagepath.read} /> */}
                                <Text style={styles.sndTime}>{moment(createdDate).format('hh:mm a')}</Text>
                            </View>
                        </View>
                    )
                }
            </View >
        )
    }

    const handleTypeTxt = (e) => {
        setTypeText(e);
    }

    const requestCamera = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Cool Photo App Camera Permission",
                    message:
                        "Cool Photo App needs access to your camera " +
                        "so you can take awesome pictures.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                camera(!modalVisible)
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const camera = async () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log("image", image)
            setModalVisible(!modalVisible);
            // setImage(image);
            uploadImage(image, "img")
        }).catch((err) => {
            console.log("Error in OPen Camera : ", err)
        });
    };
    const Gallery = async () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log("image", image)
            setModalVisible(!modalVisible);
            // setImage(image);
            uploadImage(image, "img")
        });
    };

    const uploadImage = async (photo, type) => {
        let filetype = "";
        if (photo.mime.includes("image")) {
            filetype = "imageFirebaseUser"
        } else {
            filetype = "FileFirebaseUser"
        }
        let photoUri = photo.path;
        let realFileName = type == "img" ? photoUri.substring(photoUri.lastIndexOf('/') + 1) : photo.name;
        const filename = type == "img" ? filetype + "-" + realFileName : filetype + "-" + photo.name;
        console.log('filename', type);
        const uploadUri = Platform.OS === 'ios' ? photoUri.replace('file://', '') : photoUri;
        console.log('uploadUri', uploadUri)
        const task = storage().ref(`chat-image/${filename}`).putFile(uploadUri);
        task.on('state_changed',
            snapshot => {
                // setTransferred(
                //   Math.round(snapshot.bytesTransferred / snapshot.totalBytes)
                // );
            },
            error => {
                console.log('error', error);
                // setError({ message: 'Something went wrong, please try again ' })
            },
            () => {
                task.snapshot.ref.getDownloadURL().then(url => {
                    console.log('URL', url);
                    console.log('realFileName', realFileName);
                    handleSendImage(url)
                    // setchatGroupData({ ...chatGroupData, profile_picture: url })
                    // updateGroupProfile(url)
                })
            }
        );
        try {
            await task;
        } catch (e) {
            console.error(e);
        }
    }

    const handleSendImage = (img) => {
        let { actions, messageUserList } = props;
        let apiData = {
            createdAt: new Date(),
            isRead: [userData.id],
            messageId: messagesList.length + 1,
            sendBy: userData.id,
            isFile: true,
            textMsg: img
        }
        actions.addMessage(apiData, chatGroupData.id, messageUserList.messageCollectionId, setloaderVisible, true);
    }

    const handleSendMsg = () => {
        let { actions, messageUserList } = props;
        let apiData = {
            createdAt: new Date(),
            isRead: [userData.id],
            messageId: messagesList.length > 0 ? messagesList[messagesList.length - 1].messageId + 1 : 1,
            sendBy: userData.id,
            isFile: false,
            textMsg: typeTxt
        }
        // let newMsgList = [...messagesList, apiData];
        // console.log("newMsgList", newMsgList);
        // setMessageList(newMsgList);
        // setTypeText("")
        if (typeTxt && typeTxt != "") {
            actions.addMessage(apiData, chatGroupData.id, messageUserList.messageCollectionId, setloaderVisible, true);
        }
    }

    const handleDeleteMsg = (msgObj) => {
        let { actions, messageUserList } = props;
        setShowPopover(false);
        actions.deleteMessage(msgObj, chatGroupData.id, messageUserList.messageCollectionId, setloaderVisible, true);
        console.log("msgObj", msgObj);
    }

    return (
        <View style={styles.container}>
            <View style={styles.upperView}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Chat')}>
                    <Image style={styles.preImg} source={Imagepath.previous} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.perView}
                    onPress={() => props.navigation.navigate('UserGroup', { chatGroupData })}
                >
                    <Image
                        style={styles.gmanStyle}
                        source={chatGroupData.profile_picture ? { uri: chatGroupData.profile_picture } : require('../../../assect/images/default-user.png')} />
                    <View style={styles.info}>
                        <Text style={styles.alexTxt}>{chatGroupData.groupName}</Text>
                        {/* <View style={styles.onlineView}>
                            <Image style={styles.circleImg}
                                source={Imagepath.circle} />
                            <Text style={styles.onlineTxt}>Online Now</Text>
                        </View> */}
                    </View>
                </TouchableOpacity>
            </View>
            {/* <View style={styles.todayView}>
                <Text style={styles.todayTxt}>Today</Text>
            </View> */}
            <View style={{ flex: 1 }}>
                {
                    messagesList?.length ? (
                        <FlatList
                            ref={flatListRef}
                            onContentSizeChange={() => setTimeout(() => flatListRef?.current?.scrollToEnd(), 200)}
                            showsVerticalScrollIndicator={false}
                            data={messagesList}
                            keyboardShouldPersistTaps="handled"
                            scrollEnabled={true}
                            keyExtractor={(item) => {
                                return item.messageId;
                            }}
                            renderItem={MsgList}
                        />
                    ) : null
                }
            </View>
            {/* <ScrollView showsVerticalScrollIndicator={false}>
                {
                    messagesList?.map((item, index) => {
                        return MsgList(item)
                    })
                }
            </ScrollView> */}
            {/* <View style={{ height: 10 }}></View> */}
            <View style={styles.sectionStyle}>
                <TextInput
                    style={styles.msgText}
                    placeholder="Type..."
                    keyboardType='email-address'
                    onChangeText={handleTypeTxt}
                    multiline
                    value={typeTxt}
                />
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={styles.selectFilesBtn} onPress={() => setModalVisible(true)}>
                        <Image source={Imagepath.chain} style={styles.imageStyle} />
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.cameraBtn}>
                        <Image source={Imagepath.clickcamera} style={styles.imageStyle} />
                    </TouchableOpacity> */}
                </View>
                <TouchableOpacity style={styles.sendBtn} onPress={handleSendMsg}>
                    <Image source={Imagepath.sendImg} style={styles.sendBtnImg} />
                </TouchableOpacity>
            </View>
            <CustomLoader loaderVisible={loaderVisible} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <View
                        style={{
                            paddingVertical: 20,
                            marginHorizontal: 10,
                            borderRadius: 20,
                            backgroundColor: Colors.appcolor,
                        }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 24 }}>
                            <Text style={styles.SelecttextStyle1}> Select image from...</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                                style={{}}>
                                <Image
                                    style={[styles.CancleArrow1, { tintColor: Colors.white }]}
                                    source={Imagepath.crose}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.modalView1}>
                            <TouchableOpacity
                                style={[styles.button1, styles.buttonClose1]}
                                onPress={() => { requestCamera() }}>
                                <Text style={styles.textStyle}>Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button1, styles.buttonClose1]}
                                onPress={() => Gallery(!modalVisible)}>
                                <Text style={styles.textStyle}>gallery</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const mapStateToProps = state => ({
    messageUserList: state?.firebaseData?.messageUserList,
    groupData: state?.firebaseData?.groupData,
    chatData: state?.firebaseData?.chatData,
});

const ActionCreators = Object.assign(
    { groupMessageList },
    { addMessage },
    { deleteMessage },
    { setReadMsg }
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupMessage)


// export default Messeges;