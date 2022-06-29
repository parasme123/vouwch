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
import String from '../../common/String';
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
import { getBravoCardData } from '../../reduxStore/action/doctorAction';

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

  const CommentpropPage = () => {
    if (!userType) {
      Helper.loginPopUp(props.navigation);
    } else if (userType?.user_type !== 1) {
      alert('please login with personal account');
    } else {
      setcommentModalPopup(!commentModalPopup);
      setModalVisibleComment(!modalVisibleComment);
    }
  };
  
  useEffect(() => {
    Call_DataCardApi();
    console.log("props.getBravoCardData.name", props?.allBravoCardDataLIst.name);

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


  // DataCardApi
  const Call_DataCardApi45 = () => {
    setloaderVisible(true);
    ApiCall.ApiMethod(SortUrl.AllCards, 'Get').then(response => {
      setloaderVisible(false);
      console.log('Response==========', response);
      if (response.status == true) {
        setloaderVisible(false);
        setDataCardList(response.data.cards);
      } else {
        setloaderVisible(false);
      }
    });
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
      <Header title={String.Bravocard} isback={true} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        {/* Card of hospitals */}
        <FlatList
          data={props?.allBravoCardDataLIst}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          style={{}}
          renderItem={Card}
          keyExtractor={items => items}
        />

        {ReviewModalPopup && (
          <Message modalVisible={modalVisible} Hidemodal={MessagepropPage} />
        )}
        {commentModalPopup && (
          <Comments
            modalVisible={modalVisibleComment}
            Hidemodal={CommentpropPage}
          />
        )}
      </ScrollView>
      <CustomLoader loaderVisible={loaderVisible} />
    </ImageBackground>
  );
};


const mapStateToProps = state => ({
  allBravoCardDataLIst: state.doctor.allBravoCardDataLIst,
});

const ActionCreators = Object.assign(
  { getBravoCardData },
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hospotalbravocard);
