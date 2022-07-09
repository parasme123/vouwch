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
          <TouchableOpacity
            onPress={() => {
              onChangesecond(item.id);
            }}
            style={styles.replyView}>
            <Image style={styles.replyIcon} source={imagepath.replyIcons} />
            <Text style={styles.replyText}>Reply</Text>
          </TouchableOpacity>
        </View>
        {Reply == item.id && <MessageBox item={item} handleReply={props.handleReply} />}
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
    backgroundColor: '#fff',
    shadowColor: '#929397',
    shadowRadius: 10,
    elevation: 10,
    paddingVertical: 20,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 2,
  },
  mainSubview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  namedoctor: {
    color: Colors.appcolor,
    fontSize: 18,
    fontFamily: Fonts.ProximaNovaSemibold,
  },
  time: {
    color: Colors.appcolor,
    justifyContent: 'flex-end',
    fontSize: 10,
    fontFamily: Fonts.ProximaNovaRegular,
  },
  namedoctordetails: {
    color: '#929397',
    fontSize: 12,
    fontFamily: Fonts.ProximaNovaRegular,
    paddingVertical: 15,
  },
  replyView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: 90
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
});

export default Message;
