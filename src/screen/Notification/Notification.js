import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from '@common';
import Imagepath from '../../common/imagepath';
// import String from '../../common/String';
import styles from './NotificationStyle';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handelNotification } from '../../reduxStore/action/doctorAction';
import Colors from '../../common/Colors';
import { CustomLoader, } from '@lib';
import Fontsize from '../../common/Fontsize';
import Fonts from '../../common/Fonts';
import moment from "moment";
const { width, height } = Dimensions.get('window');

const Notification = (props, { navigation, route }) => {
  const [loaderVisible, setloaderVisible] = useState(false);
  const [userType, setUserType] = useState()
  const isTrue = props.route.params ? props.route.params.isTrue : false;
  const [messagesNotification, setMessagesNotification] = useState([]);
  const [commentNotification, setCommentNotification] = useState([]);

  const NotificationApi = () => {
    let { actions } = props;
    actions.handelNotification(setloaderVisible);
  };

  useEffect(() => {
    NotificationApi();
  }, [])

  useEffect(() => {
    if (props?.allNotification?.notifcationDta?.user_type == 1) {
      // console.log("patient===================", props?.allNotification?.notifcationDta?.get_msg_reply)
      setMessagesNotification(props?.allNotification?.notifcationDta?.get_msg_reply)
      setCommentNotification(props?.allNotification?.notifcationDta?.get_commant_reply)
    } else {
      // console.log("business===================", props?.allNotification?.notifcationDta?.get_msg)
      setMessagesNotification(props?.allNotification?.notifcationDta?.get_msg)
      setCommentNotification(props?.allNotification?.notifcationDta?.get_commant)
      setBravoCardNotification(props?.allNotification?.notifcationDta?.get_card)
    }
    setUserType(props?.allNotification?.notifcationDta?.user_type)
  }, [props?.allNotification?.notifcationDta])
  const [bravoCardNotification, setBravoCardNotification] = useState([]);

  const NotificationItem = ({ item, index, type, Tab }) => {
    return (
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Reply", { actTab: Tab })}
            style={styles.headButton}
            key={index}>
            <View style={{ flex: 0.3 }}>
              <Image
                style={styles.Imageicon}
                resizeMode="cover"
                source={userType == 1 ?
                  { uri: item?.get_user?.profile_picture } : { uri: item?.get_user?.profile_picture }}
              />
            </View>
            <View style={{ flex: 0.8 }}>
              <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", flex: 1, }}>
                <Text style={[styles.UserNameText, { lineHeight: 20 }]}>
                  {userType == 2 ?
                    item.replybussiness.business_name : item?.get_user?.full_name
                  }</Text>
                <Text style={{ color: 'grey', fontFamily: Fonts.ProximaNovaRegular, fontSize: Fontsize.fontFifteen, lineHeight: 20, }}>
                  {type}
                </Text>
              </View>
              <Text style={[styles.RequestText]}>{item.detail}</Text>
              <View style={styles.VideoView}>
                <Image
                  style={styles.Imagealram}
                  resizeMode="contain"
                  source={Imagepath.alarm_clock} />
                <Text style={[styles.PhotoText, { color: Colors.black }]}>
                  {moment().format('MMMM Do YYYY, h:mm: a', item.created_at)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
    );
  };
  return (
    <View style={styles.background}>
      <Header title={"Notifications"} isback={isTrue} />
      <ScrollView>
        <View style={{ marginBottom: 50 }} >
          {messagesNotification?.map((item, index) => (
            NotificationItem({ item, index, type: "send a message", Tab: 1 })
          ))}
          {commentNotification?.map((item, index) => (
            NotificationItem({ item, index, type: "send a commment", Tab: 2 })
          ))}
          {/* {userType != 1 ? */}
          {/* <> */}
          {bravoCardNotification?.map((item, index) => (
            NotificationItem({ item, index, type: "send a bravo card", })
          ))}
          {/* </> */}
          {/* : null} */}
        </View>
      </ScrollView>
      <CustomLoader loaderVisible={loaderVisible} />
    </View>
  );
};

const mapStateToProps = state => ({
  allNotification: state.doctor.allNotification,
});

const ActionCreators = Object.assign(
  { handelNotification },
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
