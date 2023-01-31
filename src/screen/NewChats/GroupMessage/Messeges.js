import React, { useRef, useEffect, useState, } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView, Easing, TextInput, FlatList } from 'react-native';
import { Fonts, Fontsize, Colors } from '@common';
import Popover, { PopoverMode, PopoverPlacement } from 'react-native-popover-view';
import Imagepath from '../../../common/imagepath';
import styles from './css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { groupMessageList, addMessage } from '../../../reduxStore/action/firebaseActions';
import { CustomLoader, AsyncStorageHelper } from "@lib";

const GroupMessage = (props) => {
    let groupDataParam = props?.route?.params?.chatGroupData;
    const flatListRef = useRef();

    const [messagesList, setMessageList] = useState([])
    const [userData, setUserData] = useState({})
    const [typeTxt, setTypeText] = useState("")
    const [loaderVisible, setloaderVisible] = useState(false);
    const [chatGroupData, setchatGroupData] = useState({})

    useEffect(() => {
        async function getUserData() {
            let firebaseUserData = await AsyncStorageHelper.getData("firebaseUserData");
            setUserData(JSON.parse(firebaseUserData))
        }
        getUserData();
    }, [])

    useEffect(() => {
        const { actions, groupData } = props;
        setMessageList([]);
        setchatGroupData(groupData.find((item) => item.id == groupDataParam.id))
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
        return (
            <View key={msgObj.messageId}>
                {
                    msgObj.sendBy == userData.id ? (
                        <View style={styles.containerRight}>
                            {/* <View style={styles.readView}> */}
                            {/* <Image style={styles.readImg}
                                    source={Imagepath.read} /> */}
                            {/* <Text style={styles.sndTime}>{new Date(msgObj.createdAt).getDate()}</Text> */}
                            {/* </View> */}
                            <View style={styles.talkBubbleRight}>
                                <Text style={styles.IpsumTxt}>{msgObj.textMsg}</Text>
                                <View style={styles.talkBubbleTriangleRight} />
                            </View>
                        </View>
                    ) : (
                        <View style={styles.containerLeft}>
                            {/* <View style={styles.readView}>
                            <Image style={styles.readImg}
                                    source={Imagepath.read} />
                            <Text style={styles.sndTime}>{new Date(msgObj.createdAt).getDate()}</Text>
                            </View> */}
                            <View style={styles.talkBubbleLeft}>
                                <Text style={styles.loreamTxt}>{msgObj.textMsg}</Text>
                                <View style={styles.talkBubbleTriangleLeft} />
                            </View>
                        </View>
                        // <View style={styles.containerLeft}>
                        //     <View style={styles.talkBubbleLeft}>
                        //         <View style={styles.talkBubbleSquareLeft} >
                        //             <View style={styles.talkBubbleTriangleLeft} />
                        //             <Text style={styles.loreamTxt}>{msgObj.textMsg}</Text>
                        //             <Popover
                        //                 popoverStyle={styles.popoverCss}
                        //                 backgroundStyle={{ opacity: 0.001, }}
                        //                 arrowSize={{ width: 30, height: 20, }}
                        //                 arrowShift={-0.9}
                        //                 placement={PopoverPlacement.LEFT}
                        //                 animationConfig={{ duration: 200, easing: Easing.circle }}
                        //                 from={(
                        //                     <TouchableOpacity>
                        //                         <Image style={styles.dotsImg}
                        //                             source={Imagepath.threeDots} />
                        //                     </TouchableOpacity>
                        //                 )}>
                        //                 <View style={styles.buttonView}>
                        //                     <TouchableOpacity style={styles.replayView}>
                        //                         <Image source={Imagepath.curvedBack} style={styles.replayImg} />
                        //                         <Text style={styles.replayTxt}>Replay</Text>
                        //                     </TouchableOpacity>

                        //                     <TouchableOpacity style={styles.replayView}>
                        //                         <Image source={Imagepath.forworrdd} style={styles.replayImg} />
                        //                         <Text style={styles.replayTxt}>Forward</Text>
                        //                     </TouchableOpacity>

                        //                     <TouchableOpacity style={styles.replayView}>
                        //                         <Image source={Imagepath.coppyy} style={styles.replayImg} />
                        //                         <Text style={styles.replayTxt}>Copy</Text>
                        //                     </TouchableOpacity>

                        //                     <TouchableOpacity style={styles.replayView}>
                        //                         <Image source={Imagepath.bin} style={styles.replayImg} />
                        //                         <Text style={styles.replayTxt}>Delete</Text>
                        //                     </TouchableOpacity>

                        //                     <TouchableOpacity style={styles.replayView}>
                        //                         <Image source={Imagepath.info} style={styles.replayImg} />
                        //                         <Text style={styles.replayTxt}>Info</Text>
                        //                     </TouchableOpacity>
                        //                 </View>

                        //             </Popover>
                        //         </View>
                        //     </View>
                        //     <View>
                        //         <Text style={styles.time}>{msgObj.time}</Text>
                        //     </View>
                        // </View>
                    )
                }
            </View >
        )
    }

    const handleTypeTxt = (e) => {
        setTypeText(e);
    }

    const handleSendMsg = () => {
        let { actions, messageUserList } = props;
        let apiData = {
            createdAt: new Date(),
            isRead: false,
            messageId: messagesList.length + 1,
            sendBy: userData.id,
            textMsg: typeTxt
        }
        // let newMsgList = [...messagesList, apiData];
        // console.log("newMsgList", newMsgList);
        // setMessageList(newMsgList);
        // setTypeText("")
        actions.addMessage(apiData, chatGroupData.id, messageUserList.messageCollectionId, setloaderVisible, true);
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
                    <TouchableOpacity style={styles.selectFilesBtn}>
                        <Image source={Imagepath.chain} style={styles.imageStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cameraBtn}>
                        <Image source={Imagepath.clickcamera} style={styles.imageStyle} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.sendBtn} onPress={handleSendMsg}>
                    <Image source={Imagepath.sendImg} style={styles.sendBtnImg} />
                </TouchableOpacity>
            </View>
            <CustomLoader loaderVisible={loaderVisible} />
        </View>
    )
}

const mapStateToProps = state => ({
    messageUserList: state?.firebaseData?.messageUserList,
    groupData: state?.firebaseData?.groupData,
});

const ActionCreators = Object.assign(
    { groupMessageList },
    { addMessage }
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupMessage)


// export default Messeges;