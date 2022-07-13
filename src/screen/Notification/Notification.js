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
            Barbara Michelle
            {/* {item.detail} */}
            <Text style={[styles.RequestText]}>confirmed your</Text>
          </Text>
          <Text style={[styles.RequestText]}>booking request </Text>
          <View style={styles.VideoView}>
            <Image
              style={styles.Imagealram}
              resizeMode="contain"
              source={Imagepath.alarm_clock}
            />
            <Text style={[styles.PhotoText, {color: Colors.black}]}>
              {String.Alram}12-07-2022
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.background}>
      <Header title={"Notifications"} isback={isTrue} />
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
