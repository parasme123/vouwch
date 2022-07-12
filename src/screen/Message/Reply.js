import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Header, imagepath, Fonts, String, Colors, Fontsize } from '@common';
import { CustomLoader } from '@lib';
import { NoRecordFound } from '@component';
import Message from './Message';
import { getMessageAndComment, postMessageReply } from '../../reduxStore/action/doctorAction';

const Reply = (props) => {
  const [typeOfData, setTypeOfData] = useState(1);
  const [loaderVisible, setloaderVisible] = useState(false);

  const MessagePage = () => {
    setTypeOfData(1);
    handleMessageAndComment(1);
  };

  const CommentpropPage = () => {
    setTypeOfData(2);
    handleMessageAndComment(2);
  };

  const handleMessageAndComment = (callFor) => {
    let { actions } = props;
    actions.getMessageAndComment(callFor)
  }

  useEffect(() => {
    handleMessageAndComment(1)
  }, []);

  const handelMessageReply = (item, message) => {
    let { actions } = props;
    let apiData = {};
    if (typeOfData == 1) {
      apiData = {
        doctor_id: item.business_id,
        user_id: item.user_id,
        msg_id: item.id,
        detail: message
      }
    } else {
      apiData = {
        doctor_id: item.business_id,
        user_id: item.user_id,
        comment_id: item.id,
        detail: message
      }
    }
    actions.postMessageReply(apiData, typeOfData);

  }

  return (
    <ImageBackground source={imagepath.background} style={{ flex: 1 }}>
      <View
        style={{ height: 115, width: '100%', backgroundColor: Colors.appcolor }}>
        <Header title={String.message} isback={'bottomtab'} />
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 24,
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'center',
            fontFamily: Fonts.ProximaNovaSemibold,
          }}>
          <TouchableOpacity
            onPress={() => {
              MessagePage();
            }}
            style={[
              { backgroundColor: typeOfData == 1 ? '#19428A' : null },
              styles.button,
            ]}>
            <Text style={{ color: Colors.white, fontSize: 13 }}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              CommentpropPage();
            }}
            style={[
              {
                backgroundColor: typeOfData == 2 ? '#19428A' : null,
                fontFamily: Fonts.ProximaNovaSemibold,
              },
              styles.button,
            ]}>
            <Text style={{ color: Colors.white, fontSize: Fontsize.fontThirteen }}>Comment</Text>
          </TouchableOpacity>
        </View>
      </View>
      {
        props.messageAndComment.length > 0 ? (
          <Message dataMsg={props.messageAndComment} handleReply={handelMessageReply} />
        ) : (
          <NoRecordFound />
        )
      }
      <CustomLoader loaderVisible={loaderVisible} />
    </ImageBackground>
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
  replyView: { flexDirection: 'row', alignItems: 'flex-end', width: 90 },
  replyIcon: { height: 20, width: 30 },
  replyText: { color: Colors.appcolor, paddingLeft: 10 },
});


const mapStateToProps = state => ({
  messageAndComment: state.doctor.messageAndComment,
});

const ActionCreators = Object.assign(
  { getMessageAndComment },
  { postMessageReply }
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Reply);

