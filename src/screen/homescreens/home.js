import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Share,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import Colors from '../../common/Colors';
import Imagepath from '../../common/imagepath';
import {
  ApiCall,
  SortUrl,
  CustomLoader,
  Constants,
  AsyncStorageHelper,
} from '@lib';
import Comments from '../../modal/Comments';
import Message from '../../modal/Message';
import styles from './homecss';
import {Bravocard, DoctorCard} from '@component';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getHomeData} from '../../reduxStore/action/doctorAction';
const Home = props => {
  const [modalVisibleComment, setModalVisibleComment] = useState(false);
  const [modalVisible, setModalVisible] = useState();
  const [categouryDataList, setcategouryDataList] = useState();
  const [DataCardList, setDataCardList] = useState();
  const [DoctorCardList, setDoctorCardList] = useState();
  const [loaderVisible, setloaderVisible] = useState(false);
  const [ReviewModalPopup, setReviewModalPopup] = useState();
  const [search, setsearch] = useState('');
  const [commentModalPopup, setcommentModalPopup] = useState();
  const [Follows, setFollow] = useState([]);
  const [followDetails, setFollowDetails] = useState();
  const [msgDocId, setmsgDocId] = useState();
  const [userType, setuserType] = useState();
  const [userToken, setuserToken] = useState();
  // const userTypeOne = () => { userToken && userType.user_type == 1 };
  const FollowButton = item => {
    let follows1 = [...Follows];
    if (!follows1.includes(item)) {
      //checking weather array contain the id
      follows1.push(item); //adding to array because value doesnt exists
    } else {
      follows1.splice(follows1.indexOf(item), 1); //deleting
    }
    setFollow(follows1);
  };

  const MessagepropPage = DataCardiList => {
    setmsgDocId(DataCardiList);
    if (!userType) {
      alert('Please Login');
    } else if (userType?.user_type !== 1) {
      alert('please login with personal account');
    } else {
      setReviewModalPopup(!modalVisible);
      setModalVisible(!modalVisible);
    }
  };

  const CommentpropPage = () => {
    if (!userType) {
      alert('Please Login');
    } else if (userType?.user_type !== 1) {
      alert('please login with personal account');
    } else {
      setcommentModalPopup(!commentModalPopup);
      setModalVisibleComment(!modalVisibleComment);
    }
  };

  useEffect(() => {
    Call_CategouryApi();
    Call_CategouryApis();
    console.log('homeData---------', props.getHomeData);
    AsyncStorageHelper.getData(Constants.TOKEN).then(value => {
      if (value !== null) {
      }
      setuserToken(value);
      console.log('UserToken------------', userToken);
    });
    AsyncStorageHelper.getData(Constants.USER_DATA).then(value => {
      if (value !== null) {
      }
      setuserType(value);
      console.log('setuserType-------', userType);
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

  // api  Home Page
  const Call_CategouryApis = () => {
    let {actions} = props;
    actions.getHomeData();
  };

  // api  Home Page
  const Call_CategouryApi = () => {
    setloaderVisible(true);
    ApiCall.ApiMethod(SortUrl.HomeData, 'GET').then(response => {
      if (response.status == true) {
        setloaderVisible(false);
        setcategouryDataList(response.data.categories);
        setDataCardList(response.data.cards);
        setDoctorCardList(response.data.reviews);
      } else {
        setloaderVisible(false);
      }
    });
  };

  // Follow API
  const Call_FollowApi = () => {
    const data = {
      business_id: DoctorCardList.id,
    };
    ApiCall.ApiMethod(SortUrl.Follow, 'POST', data).then(response => {
      if (response.status == true) {
        setFollowDetails(response.data);
        FollowButton(item.id);
      } else {
        setFollowDetails(response.data);
        FollowButton(item.id);
        Alert.alert('something went wrongs');
      }
    });
  };

  // Search API

  const Call_SearchApi = searchProps => {
    navigation.navigate('DoctorCard', {searchProps});
  };

  // Message API
  const Call_MEssage_Api = message_Text => {
    setloaderVisible(true);
    const data = {
      doctor_id: msgDocId,
      detail: message_Text,
    };
    // console.log("message_Text------------------------",data);
    ApiCall.ApiMethod(SortUrl.Message, 'POST', data).then(response => {
      // console.log("response=-------", response);

      if (response?.data?.detail?.length > 0) {
        setloaderVisible(false);
        // props.Hidemodal()
        alert('Message sent sucessfully');
      } else {
        setloaderVisible(false);
        alert('hii');
      }
    });
  };

  // api   Profile
  const Call_ProfileApi = () => {
    setloaderVisible(true);
    ApiCall.ApiMethod(SortUrl.Profile, 'GET').then(response => {
      if (response.status == true) {
        navigation.navigate('profilepage', {isBackTrue: true});
        setloaderVisible(false);
      } else {
        setloaderVisible(false);
        Toast.show(response.message);
      }
    });
  };

  const categoriesItemData = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => Call_SearchApi(item.name)}
        key={item.id}
        style={styles.categoFlatelistView}>
        <Text style={styles.categoFlatelistViewText}> {item.name} </Text>
      </TouchableOpacity>
    );
  };

  const DoctorNavigation = item => {
    navigation.navigate('Doctordetails', {person: true, doctorId: item});
  };

  const Follow_api = () => {
    Call_FollowApi;
  };

  // Card DATA Content   && Bravo card
  const Card = ({item, index}) => {
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

  /* // Doctor CARDS */
  const Doctor_Card = ({item, index}) => {
    return (
      <DoctorCard
        onpress_DoctorCard={DoctorNavigation}
        onpress_Comment={CommentpropPage}
        onpress_Message={MessagepropPage}
        onpress_Share={onShare}
        user_Type={userType}
        Follows={Follows}
        onpress_DoctorCard_Follow={Follow_api}
        item={item}
        index={index}
        Doctor_business_name={item?.business_name}
        Doctorcard_Details={item?.category?.name}
        Clinician_Rating={item?.clinical_rate}
        patient_Rating={item?.patient_rate}
        startingValue={item?.patient_rate}
        ClinicianReview_Value={item?.clinical_rate}
      />
    );
  };

  return (
    <ImageBackground
      source={Imagepath.homebg}
      resizeMode="cover"
      style={{flex: 1, paddingBottom: 20, zIndex: 80}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, paddingBottom: 40}}>
        {/* Header */}
        <ImageBackground
          source={Imagepath.headerbg}
          resizeMode="stretch"
          imageStyle={{}}
          style={styles.headerbgImage}>
          {/* Header View of profile notification */}
          <View style={styles.notificationHeaserView}>
            {/* navemenu Image */}
            <TouchableOpacity onPress={() => navigation.navigate('menue')}>
              <Image
                source={Imagepath.navmenu}
                resizeMode="contain"
                imageStyle={{}}
                style={styles.headerIconMenue}
              />
            </TouchableOpacity>
            {/* profile Notification */}
            <View style={styles.profileView}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Reply', {isBack: true})}
                style={styles.notificationbutton}>
                <Image
                  source={Imagepath.massege}
                  resizeMode="stretch"
                  imageStyle={{}}
                  style={styles.notificationIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Call_ProfileApi()}
                style={styles.profileButton}>
                <Image
                  source={Imagepath.profile}
                  resizeMode="stretch"
                  imageStyle={{}}
                  style={styles.profileButton}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* Search bar */}
          <View style={styles.searchView}>
            <TextInput
              style={styles.textInputStyles}
              placeholder="Search for a doctor, hospitalls etc"
              placeholderTextColor={'white'}
              onChangeText={text => {
                setsearch(text);
              }}
            />
            <TouchableOpacity onPress={() => Call_SearchApi(search)}>
              <Image
                source={Imagepath.searchbtn}
                resizeMode="stretch"
                imageStyle={{}}
                style={styles.searchImage}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/* Categouries: */}
        <View style={styles.categouryView}>
          <Text style={styles.categouryViewText}>Categories:</Text>
        </View>
        <View style={{marginLeft: 15}}>
          <FlatList
            // data={props.homeData.data.categories}
            data={categouryDataList}
            renderItem={categoriesItemData}
            keyExtractor={item => item}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>

        {/* Categouries Bravo card: */}
        <View style={styles.bravoCategoury}>
          <Text style={styles.bravoCategouryText}>Bravo Card</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Hospotalbravocard')}>
            <Text style={styles.bravoCategouryButtonText}>See All</Text>
          </TouchableOpacity>
        </View>
        {/* Bravo Card */}
        <View style={{marginHorizontal: 5}}>
          <FlatList
            // data={props.homeData.data.cards}
            data={DataCardList}
            renderItem={Card}
            keyExtractor={item => item}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Featured Doctors */}
        <View style={styles.featuredView}>
          <Text style={styles.featuredViewText}>Featured Doctors</Text>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              navigation.navigate('DoctorCard');
            }}>
            <Text style={styles.featuredViewButtonText}>See All</Text>
          </TouchableOpacity>
        </View>
        {/* Card of Doctors */}
        <View style={{marginHorizontal: 5}}>
          <FlatList
            // data={props.homeData.data.reviews}
            data={DoctorCardList}
            renderItem={Doctor_Card}
            keyExtractor={item => item}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {ReviewModalPopup && (
          <Message
            modalVisible={modalVisible}
            Hidemodal={MessagepropPage}
            Message_Button={Call_MEssage_Api}
          />
        )}
        {commentModalPopup && (
          <Comments
            modalVisible={modalVisibleComment}
            Hidemodal={CommentpropPage}
            Message_Button={Call_MEssage_Api}
          />
        )}
      </ScrollView>
      <CustomLoader loaderVisible={loaderVisible} />
    </ImageBackground>
  );
};

const mapStateToProps = state => ({
  homeData: state.doctor.homeData,
});

const ActionCreators = Object.assign({getHomeData});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
