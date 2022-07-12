import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import {Header} from '@common';
import Imagepath from '../../common/imagepath';
// import String from '../../common/String';
import styles from './NotificationStyle';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handelNotification } from '../../reduxStore/action/doctorAction';
import Colors from '../../common/Colors';

const {width, height} = Dimensions.get('window');

const Notification = (props,{navigation, route}) => {
  // const [isback , setIsback] = useState(true);
  const [NotificationList, setNotificationList] = useState([1, 2, 3, 4]);
  const [activeFeedbackTab, setActiveFeedbackTab] = useState("p");
  const isTrue = props.route.params ? props.route.params.isTrue : false;
 

  useEffect(()=>{
    NotificationApi();
    // console.log("allNotification===================",props.allNotification);
  },[])
  const NotificationApi = () => {
    let { actions } = props;
    actions.handelNotification();
  };


  const NotificationItem = ({item, index}) => {
    return ( 
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          marginHorizontal: 10,
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 10,
          elevation: 2,
          backgroundColor:Colors.white,
        }}
        key={index}>
        <View style={{flex: 0.3}}>
          <Image
            style={styles.Imageicon}
            resizeMode="cover"
            source={Imagepath.doctor}
          />
        </View>
        <View style={{flex: 0.8}}>
          <Text style={[styles.UserNameText]}>
            Barbara Michelle{item.detail}
            <Text style={[styles.RequestText]}>confirmed your</Text>
          </Text>
          <Text style={[styles.RequestText]}>booking request </Text>
          <View style={styles.VideoView}>
            <Image
              style={styles.Imagealram}
              resizeMode="contain"
              source={Imagepath.alarm_clock}
            />
            <Text style={[styles.PhotoText, {color: '#000'}]}>
              {String.Alram}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.background}>
      <Header title={"Notifications"} isback={isTrue} />
      {/* sub Notification tabb */}
      <View style={{  flexDirection: "row",  marginVertical: 15, marginVertical:24 }}>
        <TouchableOpacity onPress={() => setActiveFeedbackTab("p")} style={[styles.feedBackTypeBtn, activeFeedbackTab == "p" ? styles.feedBackTypeBtnActive : null]}>
          <Text style={[styles.feedBackTypeBtnTxt, activeFeedbackTab == "p" ? styles.feedBackTypeBtnTxtActive : null]}>Patient Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveFeedbackTab("c")} style={[styles.feedBackTypeBtn, activeFeedbackTab == "c" ? styles.feedBackTypeBtnActive : null]}>
          <Text style={[styles.feedBackTypeBtnTxt, activeFeedbackTab == "c" ? styles.feedBackTypeBtnTxtActive : null]}>Clinician Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveFeedbackTab("b")} style={[styles.feedBackTypeBtn, activeFeedbackTab == "b" ? styles.feedBackTypeBtnActive : null]}>
          <Text style={[styles.feedBackTypeBtnTxt, activeFeedbackTab == "b" ? styles.feedBackTypeBtnTxtActive : null]}>Bravo Card</Text>
        </TouchableOpacity>
      </View>
      {activeFeedbackTab == "p" ?
        < FlatList
          data={props?.allNotification?.notifcationDta?.get_commant}
          style={{ paddingHorizontal: 8 }}
          renderItem={NotificationItem}
          keyExtractor={(item, index) => String(index)}
        /> : null

      }

      {activeFeedbackTab == "c" ?
        <FlatList
          data={props.data?.business?.get_card}
          renderItem={NotificationItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
        /> : null
      }
      {/* <Text>{isTrue}</Text> */}
      <View style={{flex: 1}}>
        <View style={{marginBottom: 70}}>
          <FlatList
            data={props?.allNotification?.notifcationDta?.get_commant_reply}    /////////////////see this first
            keyExtractor={item => item}
            renderItem={NotificationItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
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
