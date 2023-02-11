import React, { useEffect, useState, } from 'react';
import Popover, { PopoverMode, PopoverPlacement } from 'react-native-popover-view';
import { StyleSheet, TouchableOpacity, View, Image, Text, TextInput, FlatList, ScrollView, Animated, Easing, Icon, Modal } from 'react-native';
import { Fonts, Fontsize, Colors } from '@common';
import Imagepath from '../../common/imagepath';
import styles from './css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chatList, saveMessagesList, groupList, clearFirebaseChat, deleteFirebaseChat } from '../../reduxStore/action/firebaseActions';
import { useIsFocused } from '@react-navigation/native';
import { CustomLoader, AsyncStorageHelper } from "@lib";

const Chat = (props) => {
  const isFocused = useIsFocused();

  const [userList, setUserList] = useState([]);
  const [groupList, setGroupList] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [clearChatConfirm, setClearChatConfirm] = useState(false);
  const [deleteChatConfirm, setDeleteChatConfirm] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const [loaderVisible, setloaderVisible] = useState(false);

  useEffect(() => {
    const { actions, userData } = props;
    if (isFocused) {
      actions.chatList(setloaderVisible);
      // actions.groupList(userData);
    }
  }, [isFocused])

  useEffect(() => {
    setUserList(props.chatData)
  }, [props.chatData])

  useEffect(() => {
    setGroupList(props.groupData)
  }, [props.groupData])

  const handleChatMsg = (chatUserData) => {
    const { actions } = props;
    actions.saveMessagesList({})
    props.navigation.navigate("Messeges", { chatUserData })
  }

  const handleGroupChat = (chatGroupData) => {
    const { actions } = props;
    actions.saveMessagesList({})
    props.navigation.navigate("GroupMesseges", { chatGroupData })
  }

  const MsgList = (msgObj) => {
    return (
      <View style={{ backgroundColor: Colors.white }} key={msgObj.id}>
        <TouchableOpacity style={styles.infoTouch}
          onPress={msgObj?.isGroup ? () => handleGroupChat(msgObj) : () => handleChatMsg(msgObj)}>
          <View style={styles.subView}>
            <Image
              style={styles.maanImg}
              source={msgObj?.profile_picture ? { uri: msgObj.profile_picture } : require('../../assect/images/default-user.png')} />
            <View style={styles.infoMsg}>
              <Text style={styles.wdWatson}>{msgObj?.isGroup ? msgObj?.groupName : msgObj.first_name}</Text>
              <Text style={styles.weNeed}>{msgObj.description}</Text>
            </View>

          </View>
          {/* <View style={styles.updateView}>
            <Text style={styles.timeShowTxt}>{msgObj.time}</Text>
            <Image style={styles.readStatus}
              source={Imagepath.read} />
          </View> */}
        </TouchableOpacity>
      </View>
    )
  }

  const userGroupsRender = (item) => {
    return (
      <View style={{ backgroundColor: Colors.white }} key={item.id}>
        <TouchableOpacity style={styles.infoTouch}
          onPress={() => handleGroupChat(item)}>
          <View style={styles.subView}>
            <Image
              style={styles.maanImg}
              source={item?.profile_picture ? { uri: item.profile_picture } : require('../../assect/images/default-user.png')} />
            <View style={styles.infoMsg}>
              <Text style={styles.wdWatson}>{item.groupName}</Text>
              <Text style={styles.weNeed}>{item.description}</Text>
            </View>
          </View>
          {/* <View style={styles.updateView}>
            <Text style={styles.timeShowTxt}>{item.time}</Text>
            <Image style={styles.readStatus}
              source={Imagepath.read} />
          </View> */}
        </TouchableOpacity>
      </View>
    )
  }

  const handleSearch = (e) => {
    setSearchVal(e);
    let { groupData, chatData } = props;
    // setGroupList(groupData.filter((item) => item.groupName.toLowerCase().includes(e.toLowerCase())))
    setUserList(chatData.filter((item) => item?.first_name?.toLowerCase()?.includes(e?.toLowerCase()) || item?.groupName?.toLowerCase()?.includes(e?.toLowerCase())))
  }

  const confirmClearChat = () => {
    setClearChatConfirm(true);
    setShowPopover(false)
  }

  const handleClearChat = () => {
    let { actions } = props;
    actions.clearFirebaseChat(setloaderVisible, () => handleClearChatSuccess())
  }

  const handleClearChatSuccess = () => {
    setClearChatConfirm(false);
  }

  const confirmDeleteChat = () => {
    setDeleteChatConfirm(true);
    setShowPopover(false)
  }

  const handleDeleteChat = () => {
    let { actions } = props;
    actions.deleteFirebaseChat(setloaderVisible, () => handleDeleteChatSuccess())
  }

  const handleDeleteChatSuccess = () => {
    setDeleteChatConfirm(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.chatsView}>
        <Text style={styles.chatss} >Chats</Text>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={() => props.navigation.navigate("NewChat")} >
            <Image source={Imagepath.editor}
              style={styles.editor} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={Imagepath.threeDots}
              style={styles.perCoonct} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.clinicView}>
          <TouchableOpacity style={styles.clinic}>
            <Text style={styles.hospitals}>Contacts for Dr, clinics, & hospitals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactView}>
            <Text style={styles.contect}>Contacts</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.txtinputView}>
          <View style={styles.searchSection}>
            <Image style={styles.searchI}
              source={Imagepath.serachIcon} />
            <TextInput
              style={styles.input}
              placeholder="Staff Directory  |  Name  |  City State"
              underlineColorAndroid="transparent"
              onChangeText={handleSearch}
              value={searchVal}
            />
          </View>
          <Popover
            isVisible={showPopover}
            onRequestClose={() => setShowPopover(false)}
            popoverStyle={{ borderRadius: 8, elevation: 10, }}
            backgroundStyle={{ opacity: 0.001, }}
            arrowSize={{ width: 30, height: 20, }}
            arrowShift={-0.001}
            placement={PopoverPlacement.BOTTOM}
            animationConfig={{ duration: 1, easing: Easing.circle }}
            from={(
              <TouchableOpacity style={styles.SquareShapeView} onPress={() => setShowPopover(true)} >
                <Image style={styles.menuIcon}
                  source={Imagepath.menu} />
              </TouchableOpacity>
            )}>
            <TouchableOpacity style={styles.popoverBtn} onPress={confirmClearChat}>
              <Text style={styles.touchKeys}>Clear All Chats</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.popoverBtn} onPress={confirmDeleteChat}>
              <Text style={styles.touchKeys}>Delete All Chats</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity>
                <Text style={styles.touchKeys}>Archive All Chats</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.touchKeys}>Invite a Friend</Text>
              </TouchableOpacity> */}
          </Popover>
        </View>
        {/* </View> */}
        {/* <View style={[styles.broadBtnView, { paddingTop: 12, marginTop: 12 }]}>
          <TouchableOpacity>
            <Text style={styles.broadBtnTxt}>Group List</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("NewGroup")}>
            <Text style={styles.broadBtnTxt}>New Group</Text>
          </TouchableOpacity>
        </View>
        {
          groupList?.map((item, index) => {
            return userGroupsRender(item)
          })
        } */}

        {/* <View style={[styles.broadBtnView, { paddingTop: 12, marginTop: 12 }]}> */}
        {/* <TouchableOpacity>
            <Text style={styles.broadBtnTxt}>Users List</Text>
          </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={() => props.navigation.navigate("NewGroup")}>
            <Text style={styles.broadBtnTxt}>New Group</Text>
          </TouchableOpacity> */}
        {/* </View> */}

        {
          userList?.map((item, index) => {
            return MsgList(item)
          })
        }
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={clearChatConfirm}
        onRequestClose={() => {
          setClearChatConfirm(!clearChatConfirm);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are You Sure to Clear All Chat.</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setClearChatConfirm(!clearChatConfirm)}
              >
                <Text style={styles.textStyle}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={handleClearChat}
              >
                <Text style={styles.textStyle}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={deleteChatConfirm}
        onRequestClose={() => {
          setDeleteChatConfirm(!deleteChatConfirm);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are You Sure to Delete All Chat.</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setDeleteChatConfirm(!deleteChatConfirm)}
              >
                <Text style={styles.textStyle}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={handleDeleteChat}
              >
                <Text style={styles.textStyle}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <CustomLoader loaderVisible={loaderVisible} />
    </View >

  )
}


const mapStateToProps = state => ({
  userData: state?.firebaseData?.userData,
  groupData: state?.firebaseData?.groupData,
  chatData: state?.firebaseData?.chatData,
});

const ActionCreators = Object.assign(
  { chatList },
  { saveMessagesList },
  { groupList },
  { clearFirebaseChat },
  { deleteFirebaseChat }
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat)

// export default Chat;