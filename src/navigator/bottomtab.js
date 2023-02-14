import React, { useEffect, useState } from 'react';
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { imagepath } from '@common';
import Reviewmodal from '../modal/Reviewmodal';
import Home from '../screen/homescreens/home';
import Chat from '../screen/Chat/Chat';
import Notification from '../screen/Notification/Notification';
import Profile from '../screen/setting/profile';
import Welcome from '../screen/welcome/welcome';
import Menu from '../screen/setting/menu';
import { Constants, AsyncStorageHelper, Helper } from '@lib';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PostUserProfile, getFollowData, handelNotification } from '../reduxStore/action/doctorAction';
import { unreadMessages } from '../reduxStore/action/firebaseActions';
import menu from '../screen/setting/menu';
import profile from '../screen/setting/profile';
import NotifyMsg from '../screen/NotifyMsg/NotifyMsg';

export const Bottomtab = props => {
  const [userData, setuserRcord] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [allUnreadMessage, setAllUnreadMessage] = useState(0);
  const [allNotificationCount, setAllNotificationCount] = useState(0);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (props?.allNotification?.notifcationDta?.user_type == 1) {
      let msgReplyNoti = props?.allNotification?.notifcationDta?.get_msg_reply?.length;
      let commentReply = props?.allNotification?.notifcationDta?.get_commant_reply?.length;
      let totalNotification = (msgReplyNoti ? msgReplyNoti : 0) + (commentReply ? commentReply : 0)
      setAllNotificationCount(totalNotification)
    } else {
      let msgNoti = props?.allNotification?.notifcationDta?.get_msg?.length;
      let cmntNoti = props?.allNotification?.notifcationDta?.get_commant?.length;
      let cardNoti = props?.allNotification?.notifcationDta?.get_card?.length;
      let totalNotification = (msgNoti ? msgNoti : 0) + (cmntNoti ? cmntNoti : 0) + (cardNoti ? cardNoti : 0)
      setAllNotificationCount(totalNotification)
    }
  }, [props?.allNotification?.notifcationDta])

  useEffect(() => {
    let { allChatMessages } = props;
    // console.log("allChatMessages", allChatMessages);
    async function unreadFilter() {
      let firebaseUserData = await AsyncStorageHelper.getData("firebaseUserData");
      let userData = JSON.parse(firebaseUserData);
      let setMsgArr = [];
      allChatMessages.map((item) => {
        setMsgArr = [...setMsgArr, ...item.message]
      })
      let unreadMsgArr = setMsgArr.filter(item => item.sendBy != userData.id && !item?.isRead)
      setAllUnreadMessage(unreadMsgArr.length)
    }
    unreadFilter()
    // console.log("setMsgArr", setMsgArr);
  }, [props.allChatMessages])

  useEffect(() => {
    if (isFocused) {
      let { actions } = props;
      actions.unreadMessages();
      AsyncStorageHelper.getData(Constants.USER_DATA).then(value => {
        if (value !== null) {
          setuserRcord(value);
          props.actions.PostUserProfile(value.id);
        }
      });
      AsyncStorageHelper.getData(Constants.TOKEN).then(value => {
        if (value !== null) {
          global.token = value;
          props.actions.getFollowData();
          props.actions.handelNotification();
        }
      });
    }
  }, [isFocused]);
  // useEffect(()=>{},[])
  const _renderIcon = (routeName, selectedTab) => {
    // console.log('routeName',routeName)
    let icon = '';

    switch (routeName) {
      case 'Chat':
        // icon = imagepath.Notfication_icon;
        icon = imagepath.chat;
        break;
      case 'Settingprofile':
        icon = imagepath.navmenu;
        break;
      // case 'Home':
      //   icon = imagepath.homeicon;
      //   break;
      case 'Account':
        icon = imagepath.User_Icon;
        break;
      case 'NotifyMsg':
        icon = imagepath.notify;
        break;
    }

    return (
      <View key={routeName}>
        <Image
          resizeMode="contain"
          style={{
            height: 20,
            width: 20,
            tintColor: routeName === selectedTab ? '#245FC7' : 'gray',
          }}
          source={icon}
        />
        {
          allUnreadMessage > 0 && (routeName == "Chat") ? (
            <Text style={{ backgroundColor: "red", position: "absolute", top: -8, right: -6, fontSize: 8, paddingHorizontal: 6, paddingVertical: 4, borderRadius: 8, color: "white" }}>{allUnreadMessage}</Text>
          ) : null
        }
        {
          allNotificationCount > 0 && (routeName == "NotifyMsg") ? (
            <Text style={{ backgroundColor: "red", position: "absolute", top: -8, right: -6, fontSize: 8, paddingHorizontal: 6, paddingVertical: 4, borderRadius: 8, color: "white" }}>{allNotificationCount}</Text>
          ) : null
        }
      </View>
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    // console.log('Before routeName===>>>>>',routeName)
    // if(routeName == "Account"){
    //   routeName = "Welcome";
    // }
    // console.log('After routeName===>>>>>',routeName)
    // console.log("selectedTab : ", selectedTab);
    return (
      <TouchableOpacity
        key={routeName}
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  const handlePlusTabIcon = () => {
    if (!userData) {
      Helper.loginPopUp(props.navigation);
    } else if (userData?.user_type !== 1) {
      alert('please login with personal account');
    } else {
      setModalVisible(true)
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <CurvedBottomBar.Navigator
        style={styles.bottomBar}
        strokeWidth={0.5}
        height={55}
        circleWidth={55}
        bgColor="white"
        initialRouteName="Home"
        borderTopLeftRight
        swipeEnabled={false}
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View
            style={[styles.btnCircle, { backgroundColor: '#245FC7' }]}>
            <TouchableOpacity
              style={{ flex: 1, justifyContent: 'center' }}
              onPress={() => handlePlusTabIcon()}>
              <View>
                <Image
                  resizeMode="contain"
                  style={{ height: 20, width: 20, tintColor: '#fff' }}
                  source={imagepath.plus}
                />
              </View>
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        {/* <CurvedBottomBar.Screen
          name="Home"
          position="LEFT"
          options={{ headerShown: false }}
          component={Home}
        /> */}

        <CurvedBottomBar.Screen
          name="Chat"
          component={userData ? Chat : Chat}
          position="LEFT"
          options={{ headerShown: false }}
        />

        <CurvedBottomBar.Screen
          name="Account"
          component={userData ? profile : Welcome}
          position="RIGHT"
          options={{ headerShown: false }}
        />

        {/* <CurvedBottomBar.Screen
          name="Notification"
          component={userData ? Notification : Welcome}
          position="RIGHT"
          options={{ headerShown: false }}
        /> */}
        <CurvedBottomBar.Screen
          name="NotifyMsg"
          position="LEFT"
          options={{ headerShown: false }}
          component={Notification}
        />

        <CurvedBottomBar.Screen
          name="Settingprofile"
          component={menu}
          position="RIGHT"
          options={{ headerShown: false }}
        />
      </CurvedBottomBar.Navigator>
      <View style={{ position: 'absolute' }}>
        <Reviewmodal
          modalVisible={modalVisible}
          Hidemodal={() => {
            setModalVisible(!modalVisible);
          }}
          AddReview={() => {
            setModalVisible(!modalVisible), props.navigation.navigate('review');
          }}
          startChat={() => {
            setModalVisible(!modalVisible), props.navigation.navigate('NewChat');
          }}
          AddBravoCard={() => {
            setModalVisible(!modalVisible),
              props.navigation.navigate('Bravocard');
          }}
        />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {},
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 30,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  img: {
    width: 30,
    height: 30,
  },

  // MOdule
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    // opacity:9
  },
  centeredView1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    backgroundColor: '#00000090',
    opacity: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView2: {
    width: '92%',
    height: 255,
    borderRadius: 15,
    alignSelf: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 1,
  },
  headerView: {
    height: 50,
    backgroundColor: '#245FC7',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  headerText: { color: '#fff', fontSize: 15 },
  headerIcon: { height: 30, width: 30 },
  buttonView: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 65,
    paddingHorizontal: 10,
  },
  buttonFirst: {
    width: 149,
    height: 45,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#245FC7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTwo: {
    width: 149,
    height: 45,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#245FC7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTwoText: { color: '#fff', fontSize: 15, marginLeft: 5 },
});

const mapStateToProps = state => ({
  setData: state.doctor.setData,
  allChatMessages: state.firebaseData.allChatMessages,
  allNotification: state.doctor.allNotification,
});

const ActionCreators = Object.assign(
  { PostUserProfile },
  { getFollowData },
  { unreadMessages },
  { handelNotification }
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bottomtab);
