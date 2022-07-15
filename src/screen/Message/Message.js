import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import { imagepath, Colors, String, Fonts } from '@common';
import { Helper } from '@lib';
import MessageBox from '../../common/MessegeBox';
import Fontsize from '../../common/Fontsize';

const Message = (props) => {
  const [Reply, setReply] = useState(0);

  const onChangesecond = (value) => {
    if (Reply == value) value = 0;
    setReply(value);
  };

  const DataCardList = props.dataMsg;

  const NotificationItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.messageBoxContainer}>
        <View
          style={[
            styles.ContentView, index == 0 ? styles.topBorderRound : index + 1 == DataCardList.length ? styles.bottomBorderRound : null
          ]}>
          <View style={styles.mainSubview}>
            <Text style={styles.namedoctor}>{item.get_user.full_name}</Text>
            <Text style={styles.time}>{Helper.setDateFormat(item.created_at)}</Text>
          </View>
          <Text style={styles.namedoctordetails}>
            {item.detail}
          </Text>
          {/* //Repply  */}
          {item?.reply_msg ?
            <View style={styles.ReplyForword}>
              <Image style={styles.replyForwordIcon} source={imagepath.forword} />
              <View style={styles.forwordView}>
                <Text style={styles.namedoctor}>{item?.reply_msg?.full_name}</Text>
                <Text style={styles.forwordText}> {item?.reply_msg?.reply_msg}</Text>
              </View>
            </View> :
            <TouchableOpacity
              onPress={() => { onChangesecond(item.id) }}
              style={styles.replyView}>
              <Image style={styles.replyIcon} source={imagepath.replyIcons} />
              <Text style={styles.replyText}>Reply</Text>
            </TouchableOpacity>
          }
        </View>
        {
          Reply == item.id &&
          <MessageBox 
          item={item} 
          typeDetail={props.typeDetail}
          handleReply={props.handleReply} />

        }
      </View>
    );
  };

  return (
    <View
      source={imagepath.background}
      style={{ flex: 1, paddingTop: 15, paddingBottom: 10 }}>
      <FlatList
        data={DataCardList}
        keyExtractor={(item, index) => item.key}
        renderItem={NotificationItem}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 5 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 168,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  topBorderRound: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  bottomBorderRound: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  ContentView: {
    backgroundColor: Colors.white,
    shadowColor: '#929397',
    shadowRadius: 10,
    elevation: 10,
    paddingHorizontal: 20,
    paddingLeft: 15,
    marginBottom: 2,
    paddingVertical: 15
  },
  mainSubview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  namedoctor: {
    color: Colors.appcolor,
    fontSize: Fontsize.fontEighteen,
    fontFamily: Fonts.ProximaNovaSemibold,
  },
  time: {
    color: Colors.appcolor,
    justifyContent: 'flex-end',
    fontSize: Fontsize.fontTwelve,
    fontFamily: Fonts.ProximaNovaRegular,
  },
  namedoctordetails: {
    color: '#929397',
    fontSize: Fontsize.fontTwelve,
    fontFamily: Fonts.ProximaNovaRegular,
    paddingVertical: 15,
  },
  replyView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    // width: 90
  },
  replyIcon: {
    height: 20,
    width: 30
  },
  replyText: {
    color: Colors.appcolor,
    paddingLeft: 10
  },
  messageBoxContainer: {
    marginHorizontal: 15,
    borderRadius: 15,
  },
  ReplyForword: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  replyForwordIcon: {
    height: 25,
    width: 32,
  },
  forwordView: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    marginLeft: 15,
    borderRadius: 5
  },
  forwordText: {
    textAlign: "justify",
    lineHeight: 20,
    fontSize: Fontsize.fontTwelve,
    color: "#929397",
    paddingLeft: 10
  }
});


export default Message;
