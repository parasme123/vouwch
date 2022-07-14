import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { } from "@common";
import { Validators, CustomLoader } from '@lib';
import CoustomButton from '../../common/CommanBotton';
import { String, InputCommon, imagepath, Header, Colors, svg } from '@common';
import styles from './Brovo_Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postBravo, getDoctorList } from '../../reduxStore/action/doctorAction';
import { handleNavigation } from '../../navigator/Navigator';
import DoctorList from '../../modal/DoctorList';

const Bravocard = (props) => {
  const [Photos, setPhotos] = useState([]);
  const [Videos, setVideos] = useState([]);
  const [name, setname] = useState();
  const [department, setdepartment] = useState();
  const [hospital, sethospital] = useState();
  const [city, setcity] = useState();
  const [state, setstate] = useState();
  const [detail, setdetail] = useState();
  const [files, setfiles] = useState();
  const [loaderVisible, setloaderVisible] = useState(false);
  const [docPicList, setdocPicList] = useState();
  const [modalVisible, setModalVisible] = useState();
  const [mark, setMark] = useState(false);
  const [doctId, setdoctId] = useState({});
  const doctorId = props.route.params ? props.route.params.doctorid : null;
  const PhotosButton = () => {
    Gallery();
  };
  const videosButton = () => {
    VideoRecoder();
  };
  const VideoRecoder = async () => {
    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'video',
    }).then(video => {
      setVideos(video);
    });
  };

  const Gallery = async () => {
    ImagePicker.openPicker({
      multiple: true,
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setPhotos(image);
    });
  };


  const ListModal = () => {
    setdocPicList(!modalVisible);
    setModalVisible(!modalVisible);
  };

  const ServiceData = (item) => {
    setdoctId(item)
    setModalVisible(!modalVisible);
  };

  // doctor list data

  const handelDoctorList = () => {
    let { actions } = props;
    actions.getDoctorList();
  };


  // Bravo card API

  const Signin_Validators = () => {
    if (
      Validators.checkNull('Name', 2, name) &&
      Validators.checkNull('Department', 2, department) &&
      Validators.checkNull('hospital', 2, hospital) &&
      Validators.checkNull('City', 2, city) &&
      Validators.checkNull('State', 2, state) &&
      Validators.checkNull('Detail', 2, detail)
    ) {
      BravoCard();
    }
  };

  const BravoCard = () => {
    let { actions } = props;
    const data = new FormData();
    data.append('doctor_id', doctorId ?? props.allDoctorlist);
    data.append('name', name);
    data.append('department', department);
    data.append('hospital', hospital);
    data.append('city', city);
    data.append('state', state);
    data.append('detail', detail);
    if (Photos.length > 0) {
      for (var i = 0; i < Photos.length; i++) {
        const photo = Photos[i];
        let fileName = photo.path.split("/");
        let imgUploadObj = {
          name: fileName[fileName.length - 1],
          type: photo.mime,
          uri: Platform.OS === "ios" ? photo.path.replace("file://", "") : photo.path,
        }
        data.append('files[]', imgUploadObj);
      }
    }
    if (Videos.length > 0) {
      for (var i = 0; i < Videos.length; i++) {
        const photo = Videos[i];
        let fileName = photo.path.split("/");
        let imgUploadObj = {
          name: fileName[fileName.length - 1],
          type: photo.mime,
          uri: Platform.OS === "ios" ? photo.path.replace("file://", "") : photo.path,
        }
        data.append('files[]', imgUploadObj);
      }
    }
    actions.postBravo(data, () => setloaderVisible(), () => PageNavigation());
  };

  const PageNavigation = () => {
    handleNavigation({
      type: 'setRoot',
      page: 'bottomtab',
      navigation: props.navigation,
    });
  }

  useEffect(() => {
    handelDoctorList();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Header title={String.Bravo_Head_title} isback="asjdfla" />
      <View style={styles.hightView}></View>
      <View style={styles.mainView}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.ScrollViewStyle}>
          <View style={styles.input_main}>
            <View style={styles.mainContPhoto}>
              <Text style={styles.TextStyles}>{String.Add_Photos_Videos}</Text>
              <View style={styles.PhotosVideoView}>
                <TouchableOpacity
                  style={[
                    { backgroundColor: Photos.length > 0 ? '#245FC7' : '#FBECE3' },
                    styles.PhotosView,
                  ]}
                  onPress={() => PhotosButton()}>
                  <Image
                    style={[
                      { tintColor: Photos.length > 0 ? '#fff' : '#000' },
                      styles.Imageicon,
                    ]}
                    resizeMode="contain"
                    source={imagepath.Photos}
                  />
                  <Text
                    style={[
                      styles.PhotoText,
                      { color: Photos.length > 0 ? '#fff' : '#000' },
                    ]}>
                    {String.Photos}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    { backgroundColor: Videos.length > 0 ? '#245FC7' : '#FBECE3' },
                    styles.VideoView,
                  ]}
                  onPress={() => videosButton()}>
                  <Image
                    style={[
                      { tintColor: Videos.length > 0 ? '#fff' : '#000' },
                      styles.Imageicon,
                    ]}
                    resizeMode="contain"
                    source={imagepath.Videoicon}
                  />
                  <Text
                    style={[
                      styles.PhotoText,
                      { color: Videos.length > 0 ? '#fff' : '#000' },
                    ]}>
                    {String.Videos}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {
              doctorId == null ?
                <>
                  <Text
                    style={styles.imputHeader}>
                    Select Doctors List
                  </Text>

                  <TouchableOpacity
                    onPress={() => ListModal()}
                    style={[styles.dropdownView, { marginBottom: 15 }]}>
                    <Text style={styles.dropdownText}>{doctId.id ? doctId.business_name : "Select Doctors"}</Text>
                    <Image
                      style={styles.downArrow}
                      source={imagepath.down}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </> : null
            }

            <InputCommon
              title={String.title}
              placeHolder={String.title}
              placeholderTextColor={Colors.inputplaceholder}
              returnKeyType={'next'}
              onChangeText={(text) => { setname(text) }}
            />
            <InputCommon
              title={String.Department}
              placeHolder={String.Department_input}
              placeholderTextColor={Colors.inputplaceholder}
              returnKeyType={'next'}
              onChangeText={(text) => { setdepartment(text) }}

            />
            <InputCommon
              title={String.Hospital}
              placeHolder={String.Hospital}
              placeholderTextColor={Colors.inputplaceholder}
              returnKeyType={'next'}
              onChangeText={(text) => { sethospital(text) }}

            />
            <InputCommon
              title={String.City}
              placeHolder={String.City}
              placeholderTextColor={Colors.inputplaceholder}
              returnKeyType={'next'}
              onChangeText={(text) => { setcity(text) }}

            />
            <InputCommon
              title={String.State}
              placeHolder={String.State}
              placeholderTextColor={Colors.inputplaceholder}
              returnKeyType={'next'}
              onChangeText={(text) => { setstate(text) }}

            />
            <InputCommon
              isMassage
              title={"Detail"}
              placeHolder={"Detail"}
              multiline={true}
              placeholderTextColor={Colors.inputplaceholder}
              returnKeyType={'next'}
              onChangeText={(text) => { setdetail(text) }}

            />
            <View style={{ marginTop: 20 }}>
              <CoustomButton
                onPress={() => { Signin_Validators() }}
                MargH={30}
                backgroundColor={Colors.bottonColors}
                borderColor={Colors.blue}
                color={Colors.white}
                title={String.Save}
                fontSize={20}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      {docPicList && (
        <DoctorList
          modalVisible={modalVisible}
          Hidemodal={ListModal}
          data={props.allDoctorlist}
          slectData={mark}
          chexkBoxFnc={ServiceData}
        />
      )}
      <CustomLoader loaderVisible={loaderVisible} />
    </View>
  );
};



const mapStateToProps = state => ({
  allDoctorlist: state.doctor.allDoctorlist
});

const ActionCreators = Object.assign(
  { postBravo },
  { getDoctorList }
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bravocard);
