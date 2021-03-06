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
import { Bravocard, BravocardList } from '@component';
import {
  ApiCall,
  SortUrl,
  CustomLoader,
  Constants,
  AsyncStorageHelper,
  Helper
} from '@lib';
import { bindActionCreators } from 'redux';
import { getBravoCardData, postMessge, postComment  ,postFollow} from '../../reduxStore/action/doctorAction';

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
  const [Follows, setFollow] = useState([]);
  const MessagepropPage = DataCardiList => {
    setmsgDocId(DataCardiList);
    if (!userType) {
      Helper.loginPopUp(props.navigation);
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
    actions.postMessge(apiData, setloaderVisible, () => PageNavigation());
  };
  const CommentpropPage = DataCardiList => {
    setmsgDocId(DataCardiList)
    if (!userType) {
      Helper.loginPopUp(props.navigation);
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
    actions.postComment(apiData, setloaderVisible, () => PageNavigation());
  };

  const PageNavigation = () => {
    // props.navigation.navigate("Hospotalbravocard");
    handleNavigation({
      type: 'setRoot',
      page: 'Hospotalbravocard',
      navigation: navigation,
    });
  }

  useEffect(() => {
    Call_DataCardApi();
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
  const onShare = () => {
    Helper.onShare();
  };
  // DAta
  const Call_DataCardApi = () => {
    let { actions } = props;
    actions.getBravoCardData(setloaderVisible);
  };

  const Follow_api = (msgDocId) => {
    if (!userType) {
      Helper.loginPopUp(props.navigation);
    }else{
      Call_FollowApi(msgDocId);
    }
  };
  const Call_FollowApi = (msgDocId) => {
    let { actions } = props;
    let apiData = {
      business_id: msgDocId,
    }
    // console.log("apiData------------------------", apiData);
    actions.postFollow(apiData);
  };
  // console.log('setuserType-------', userType);
  const handleAddBravoCardOrReview = (doctorid, navigationFor) => {
    if (!userType) {
      Helper.loginPopUp(props.navigation);
    } else if (userType?.user_type !== 1) {
      alert('please login with personal account');
    } else {
      navigation.navigate(navigationFor, { doctorid })
    }
  }

  // Card DATA Content
  const Card = ({ item, index }) => {
    return (
      // <Bravocard
      //   bravo_Card_name={item.name}
      //   bravo_Card_Details={item.department}
      //   onpress_Comment={CommentpropPage}
      //   onpress_Message={MessagepropPage}
      //   onpress_Share={onShare}
      //   item={item}
      //   // key={}
      //   index={index}
      // // onpress_Photo={}
      // // onpress_Video={}
      // />
      <BravocardList
        bravo_Card_name={item.name}
        bravo_Card_Details={item.department}
        onpress_Comment={CommentpropPage}
        onpress_Message={MessagepropPage}
        onpress_Share={onShare}
        item={item}
        // key={}
        index={index}
        handleAddBravoCardOrReview={handleAddBravoCardOrReview}
        onpress_DoctorCard_Follow={Follow_api}
        Follows={props.followData}
      // // onpress_Photo={}
      // // onpress_Video={}
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
  followData: state.doctor.followData,
});

const ActionCreators = Object.assign(
  { getBravoCardData },
  { postMessge },
  { postComment },
  {postFollow}

);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hospotalbravocard);
