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
  const [Photos, setPhotos] = useState();
  const [Videos, setVideos] = useState();
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
      mediaType: 'video',
    }).then(video => {
      setVideos(true);
    });
  };

  const Gallery = async () => {
    ImagePicker.openPicker({
      multiple: true,
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {

      setPhotos(image.path);
      setPhotos(true);
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
      Validators.checkNotNull('Name', 2, 150, name) &&
      Validators.checkNotNull('Department', 2, 150, department) &&
      Validators.checkNotNull('hospital', 2, 150, hospital) &&
      Validators.checkNotNull('City', 2, 150, city) &&
      Validators.checkNotNull('State', 2, 150, state) &&
      Validators.checkNotNull('Detail', 2, 200, detail)
    ) {
      BravoCard();
    }
  };

  const BravoCard = () => {
    let { actions } = props;
    let apiData = {
      doctor_id: doctorId ?? props.allDoctorlist,
      name: name,
      department: department,
      hospital: hospital,
      city: city,
      state: state,
      detail: detail,
      files: [Photos, Videos]
    };
    actions.postBravo(apiData, setloaderVisible, () => PageNavigation());
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
        {
          console.log(props.allDoctorlist, "==================")    // ................log.............remove please

        }
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.ScrollViewStyle}>
          <View style={styles.input_main}>
            <View style={styles.mainContPhoto}>
              <Text style={styles.TextStyles}>{String.Add_Photos_Videos}</Text>
              <View style={styles.PhotosVideoView}>
                <TouchableOpacity
                  style={[
                    { backgroundColor: Photos ? '#245FC7' : '#FBECE3' },
                    styles.PhotosView,
                  ]}
                  onPress={() => PhotosButton()}>
                  <Image
                    style={[
                      { tintColor: Photos ? '#fff' : '#000' },
                      styles.Imageicon,
                    ]}
                    resizeMode="contain"
                    source={imagepath.Photos}
                  />
                  <Text
                    style={[
                      styles.PhotoText,
                      { color: Photos ? '#fff' : '#000' },
                    ]}>
                    {String.Photos}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    { backgroundColor: Videos ? '#245FC7' : '#FBECE3' },
                    styles.VideoView,
                  ]}
                  onPress={() => videosButton()}>
                  <Image
                    style={[
                      { tintColor: Photos ? '#fff' : '#000' },
                      styles.Imageicon,
                    ]}
                    resizeMode="contain"
                    source={imagepath.Videoicon}
                  />
                  <Text
                    style={[
                      styles.PhotoText,
                      { color: Videos ? '#fff' : '#000' },
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
