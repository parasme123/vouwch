import React, { useEffect, useState, } from 'react';
import Popover, { PopoverMode, PopoverPlacement } from 'react-native-popover-view';
import { StyleSheet, TouchableOpacity, View, Image, Text, TextInput, FlatList, ScrollView, Animated, Easing, Icon } from 'react-native';
import { Fonts, Fontsize, Colors } from '@common';
import Imagepath from '../../common/imagepath';
import styles from './css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chatList, saveMessagesList, groupList } from '../../reduxStore/action/firebaseActions';
import { useIsFocused } from '@react-navigation/native';

const Chat = (props) => {
  const isFocused = useIsFocused();

  const [userList, setUserList] = React.useState([]);
  const [groupList, setGroupList] = React.useState([]);

  useEffect(() => {
    const { actions, userData } = props;
    actions.chatList(userData);
    actions.groupList(userData);
  }, [isFocused])

  useEffect(() => {
    setUserList(props.userChatList)
  }, [props.userChatList])

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
          onPress={() => handleChatMsg(msgObj)}>
          <View style={styles.subView}>
            <Image
              style={styles.maanImg}
              source={msgObj?.profile_picture ? { uri: msgObj.profile_picture } : require('../../assect/images/default-user.png')} />
            <View style={styles.infoMsg}>
              <Text style={styles.wdWatson}>{msgObj.first_name}</Text>
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

  return (
    <View style={styles.container}>
      <View style={styles.chatsView}>
        <Text style={styles.chatss} >Chats</Text>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={() => props.navigation.navigate("MsgManagement")} >
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
          <TouchableOpacity onPress={() => props.navigation.navigate("NewChat")} style={styles.clinic}>
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
              placeholder="Search"
              underlineColorAndroid="transparent"
            />
          </View>
          <Popover
            popoverStyle={{ borderRadius: 8, elevation: 10, }}
            backgroundStyle={{ opacity: 0.001, }}
            arrowSize={{ width: 30, height: 20, }}
            arrowShift={-0.001}
            placement={PopoverPlacement.BOTTOM}
            animationConfig={{ duration: 10, easing: Easing.circle }}
            from={(
              <TouchableOpacity style={styles.SquareShapeView} >
                <Image style={styles.menuIcon}
                  source={Imagepath.menu} />
              </TouchableOpacity>
            )}>
            <View style={{ height: 155, width: 150, marginTop: 10, }}>
              <TouchableOpacity><Text style={styles.touchKeys}>Clear All Chats</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.touchKeys}>Delete All Chats</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.touchKeys}>Archive All Chats</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.touchKeys}>Invite a Friend</Text></TouchableOpacity>
            </View>
          </Popover>
        </View>
        {/* </View> */}
        <View style={[styles.broadBtnView, { paddingTop: 12, marginTop: 12 }]}>
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
        }

        <View style={[styles.broadBtnView, { paddingTop: 12, marginTop: 12 }]}>
          <TouchableOpacity>
            <Text style={styles.broadBtnTxt}>Users List</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => props.navigation.navigate("NewGroup")}>
            <Text style={styles.broadBtnTxt}>New Group</Text>
          </TouchableOpacity> */}
        </View>

        {
          userList?.map((item, index) => {
            return MsgList(item)
          })
        }
      </ScrollView>
    </View >

  )
}


const mapStateToProps = state => ({
  userData: state?.firebaseData?.userData,
  groupData: state?.firebaseData?.groupData,
  userChatList: state?.firebaseData?.chatData,
});

const ActionCreators = Object.assign(
  { chatList },
  { saveMessagesList },
  { groupList }
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat)

// export default Chat;