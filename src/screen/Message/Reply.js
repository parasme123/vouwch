import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
  Image,
  FlatList,
  Alert,
  Modal,
} from 'react-native';
import {Header} from '../../common/Header';
import Imagepath from '../../common/imagepath';
import Fonts from '../../common/Fonts';
import String from '../../common/String';
import MessageBox from '../../common/MessegeBox';
import Message from './Message';
import Comment from './Comment';
import Colors from '../../common/Colors';

const Reply = ({navigation}) => {
  const [mark, setMark] = useState();
  const [Massageprop, setMassageprop] = useState();
  const [Commentprop, setCommentprop] = useState();
  const [loaderVisible, setloaderVisible] = useState(false);
  // const [modalVisible, setModalVisible] = useState(false);
  const chexkBox = () => {
    setMark(!mark);
  };
  const MessagePage = () => {
    setMassageprop(true);
    setCommentprop(false);
  };

  const CommentpropPage = () => {
    setMassageprop(false);
    setCommentprop(true);
  };
  useEffect(() => {
    CommentpropPage();
  }, []);
  const [DropDownSec, setDropDownSec] = useState(false);
  const [selectvalue, setselectvalue] = useState('Select');
  const onChangesecond = () => {
    setDropDownSec(!DropDownSec);
  };

  //    const onPickersecond = () => {
  //       setDropDownSec(!DropDownSec)
  // }

  return (
    <ImageBackground source={Imagepath.background} style={{flex: 1}}>
      <View
        style={{height: 115, width: '100%', backgroundColor: Colors.appcolor}}>
        <Header title={String.message} isback={'bottomtab'} />
        <View
          style={{
            flexDirection: 'row',
            width: '85%',
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
              {backgroundColor: Massageprop ? '#19428A' : null},
              styles.button,
            ]}>
            <Text style={{color: '#ffffff', fontSize: 13}}>Massage</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              CommentpropPage();
            }}
            style={[
              {
                backgroundColor: Commentprop ? '#19428A' : null,
                fontFamily: Fonts.ProximaNovaSemibold,
              },
              styles.button,
            ]}>
            <Text style={{color: '#ffffff', fontSize: 13}}>Comment</Text>
          </TouchableOpacity>
        </View>
      </View>

      {Massageprop && <Message />}
      {Commentprop && <Comment />}
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
  replyView: {flexDirection: 'row', alignItems: 'flex-end', width: 90},
  replyIcon: {height: 20, width: 30},
  replyText: {color: Colors.appcolor, paddingLeft: 10},
});

export default Reply;
