import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
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
  Modal,
  Alert,
  TextInput,
  Share,
} from 'react-native';
import styles from './hospitalecss';
import { useNavigation } from '@react-navigation/native';
import Imagepath from '../../common/imagepath';
import { Header } from '@common';
// import String from '../../common/String';
import { handleNavigation } from '../../navigator/Navigator';
import Message from '../../modal/Message';
import { connect } from 'react-redux';
import Comments from '../../modal/Comments';
import { Bravocard } from '@component';
import {
  ApiCall,
  SortUrl,
  CustomLoader,
  Constants,
  AsyncStorageHelper,
  Helper
} from '@lib';
import { bindActionCreators } from 'redux';
import { getBravoCardData, postMessge, postComment } from '../../reduxStore/action/doctorAction';

const Hospotalbravocard = (props) => {
  const [loaderVisible, setloaderVisible] = useState(false);
  const [modalVisibleComment, setModalVisibleComment] = useState(false);
  const [modalVisibleMessage, setModalVisibleMessage] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [DataCardList, setDataCardList] = useState(false);
  const [ReviewModalPopup, setReviewModalPopup] = useState();
  const [commentModalPopup, setcommentModalPopup] = useState();
  const [userType, setuserType] = useState();
  const [userToken, setuserToken] = useState();
  const [msgDocId, setmsgDocId] = useState();
  const [messageText, setmessage] = useState();
  const [commentText, setcommentText] = useState();

  const MessagepropPage = DataCardiList => {
    setmsgDocId(DataCardiList);
    if (!userType) {
      Helper.loginPopUp(props.navigation);
    } else if (userType?.user_type !== 1) {
      alert('please login with personal account');
    } else {
      setReviewModalPopup(!modalVisible);
      setModalVisible(!modalVisible);
    }
  };

  // Message API
  const Call_MEssage_Api = () => {
    let { actions } = props;
    const apiData = {
      doctor_id: msgDocId,
      detail: messageText,
    };
    console.log(apiData, "apiData");
    actions.postMessge(apiData, setloaderVisible, () => PageNavigation());
  };
  const CommentpropPage = DataCardiList => {
    setmsgDocId(DataCardiList)
    if (!userType) {
      Helper.loginPopUp(props.navigation);
    } else if (userType?.user_type !== 1) {
      alert('please login with personal account');
    } else {
      setcommentModalPopup(!commentModalPopup);
      setModalVisibleComment(!modalVisibleComment);
    }
  };

  const Call_Commet_Api = () => {
    let { actions } = props;
    const apiData = {
      doctor_id: msgDocId,
      detail: commentText,
    };
    console.log(apiData, "apiData");
    actions.postComment(apiData, setloaderVisible, () => PageNavigation());
  };

  const PageNavigation = () => {
    handleNavigation({
      type: 'setRoot',
      page: 'bottomtab',
      navigation: navigation,
    });
  }



  useEffect(() => {
    Call_DataCardApi();
    // console.log("props.getBravoCardData.name", props?.allBravoCardDataLIst.name);

    AsyncStorageHelper.getData(Constants.TOKEN).then(value => {
      if (value !== null) {
      }
      setuserToken(value);
      // console.log('UserToken------------', userToken);
    });
    AsyncStorageHelper.getData(Constants.USER_DATA).then(value => {
      if (value !== null) {
      }
      setuserType(value);
      // console.log('setuserType-------', userType);
    });
  }, []);
  const navigation = useNavigation();
  // share module
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  // DAta
  const Call_DataCardApi = () => {
    let { actions } = props;
    actions.getBravoCardData();
  };


  // Card DATA Content
  const Card = ({ item, index }) => {
    return (
      <Bravocard
        bravo_Card_name={item.name}
        bravo_Card_Details={item.department}
        onpress_Comment={CommentpropPage}
        onpress_Message={MessagepropPage}
        onpress_Share={onShare}
        item={item}
        // key={}
        index={index}
      // onpress_Photo={}
      // onpress_Video={}
      />
    );
  };

  return (
    <ImageBackground
      source={Imagepath.homebg}
      resizeMode="cover"
      style={styles.image}>
      <Header title={"Bravo Card"} isback={true} />
      {/* Card of hospitals */}
      <FlatList
        data={props?.allBravoCardDataLIst}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        style={{}}
        renderItem={Card}
        keyExtractor={(item, index) => String(index)}
      />

      {ReviewModalPopup && (
        <Message
          modalVisible={modalVisible}
          Hidemodal={MessagepropPage}
          Message_Button={Call_MEssage_Api}
          messageText={setmessage}
        />
      )}
      {commentModalPopup && (
        <Comments
          modalVisible={modalVisibleComment}
          Hidemodal={CommentpropPage}
          Message_Button={Call_Commet_Api}
          CmmentText={setcommentText}
        />
      )}
      <CustomLoader loaderVisible={loaderVisible} />
    </ImageBackground>
  );
};


const mapStateToProps = state => ({
  allBravoCardDataLIst: state.doctor.allBravoCardDataLIst,
});

const ActionCreators = Object.assign(
  { getBravoCardData },
  { postMessge },
  { postComment }
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hospotalbravocard);
