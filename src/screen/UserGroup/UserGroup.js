import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView, Easing, FlatList, Modal, PermissionsAndroid } from 'react-native';
import Imagepath from '../../common/imagepath';
import styles from './css';
import { Fonts, Fontsize, Colors } from '@common';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGroupParticipiants, removeUserFromGroup, updateGroupProfile } from '../../reduxStore/action/firebaseActions';
import { CustomLoader, AsyncStorageHelper } from "@lib";
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';

const UserGroup = (props) => {
  let groupDataParam = props?.route?.params?.chatGroupData;

  const [modalVisible, setModalVisible] = useState(false);
  const [groupList, setGroupList] = useState([]);
  const [userData, setUserData] = useState({})
  const [ischecked, setischecked] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [chatGroupData, setchatGroupData] = useState({})
  const [firebaseImagePath, setFirebaseImagePath] = useState();

  useEffect(() => {
    async function getUserData() {
      let firebaseUserData = await AsyncStorageHelper.getData("firebaseUserData");
      setUserData(JSON.parse(firebaseUserData))
    }
    getUserData();
  }, [])

  useEffect(() => {
    let { actions, groupData } = props;
    let dataOfGroup = groupData.find((item) => item.id == groupDataParam.id)
    setchatGroupData(dataOfGroup)
    actions.getGroupParticipiants(dataOfGroup.participiants)
  }, [groupDataParam])

  useEffect(() => {
    setGroupList(props.participiantsList)
  }, [props.participiantsList])

  const handleDeleteConfirm = (deleteId) => {
    setischecked(!ischecked)
    setSelectedId(deleteId);
  }

  const handleRemoveUser = () => {
    let { actions } = props;
    actions.removeUserFromGroup(selectedId, chatGroupData.id, groupList, () => handleRemoveSuccess())
  }

  const handleRemoveSuccess = () => {
    setischecked(!ischecked)
  }

  const requestCamera = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        camera(!modalVisible)
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const camera = async () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setModalVisible(!modalVisible);
      // setImage(image);
      uploadImage(image, "img")
    }).catch((err) => {
      console.log("Error in OPen Camera : ", err)
    });
  };
  const Gallery = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setModalVisible(!modalVisible);
      // setImage(image);
      uploadImage(image, "img")
    });
  };

  const uploadImage = async (photo, type) => {
    let filetype = "";
    if (photo.mime.includes("image")) {
      filetype = "imageFirebaseUser"
    } else {
      filetype = "FileFirebaseUser"
    }
    let photoUri = photo.path;
    let realFileName = type == "img" ? photoUri.substring(photoUri.lastIndexOf('/') + 1) : photo.name;
    const filename = type == "img" ? filetype + "-" + realFileName : filetype + "-" + photo.name;
    console.log('filename', type);
    const uploadUri = Platform.OS === 'ios' ? photoUri.replace('file://', '') : photoUri;
    console.log('uploadUri', uploadUri)
    const task = storage().ref(`group-profile/${filename}`).putFile(uploadUri);
    task.on('state_changed',
      snapshot => {
        // setTransferred(
        //   Math.round(snapshot.bytesTransferred / snapshot.totalBytes)
        // );
      },
      error => {
        console.log('error', error);
        // setError({ message: 'Something went wrong, please try again ' })
      },
      () => {
        task.snapshot.ref.getDownloadURL().then(url => {
          console.log('URL', url);
          console.log('realFileName', realFileName);
          setchatGroupData({ ...chatGroupData, profile_picture: url })
          updateGroupProfile(url)
        })
      }
    );
    try {
      await task;
    } catch (e) {
      console.error(e);
    }
  }

  const updateGroupProfile = (url) => {
    let { actions } = props;
    actions.updateGroupProfile(url, chatGroupData.id, () => groupProfileSuccess(url))
  }

  const groupProfileSuccess = (url) => {
    setchatGroupData({ ...chatGroupData, profile_picture: url })
  }

  const Lonovo = ({ item, index }) => {
    return (
      <View style={styles.infoTouch} key={item.id}>
        <View style={styles.infoMsg}>
          <Image style={styles.maanImg}
            source={item?.profile_picture ? { uri: item.profile_picture } : require('../../assect/images/default-user.png')} />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.wdWatson}>{item.id === userData.id ? "You" : item.first_name}</Text>
            <Text style={styles.weNeed}>{item.about}</Text>
          </View>
        </View>
        {
          item.id !== userData.id && chatGroupData.admin === userData.id ? (
            <TouchableOpacity
              onPress={() => handleDeleteConfirm(item.id)}
            >
              <Image style={styles.bin}
                source={Imagepath.RecycleBin} />
            </TouchableOpacity>
          ) : null
        }
      </View>
    )
  };
  // const ChatList = (dataObj) => {
  //   return (
  //     <TouchableOpacity
  //       // onPress={() => { props.navigation.navigate("Messeges") }}
  //       style={styles.infoTouch}>

  //       <Image
  //         style={styles.maanImg}
  //         source={dataObj.img} />
  //       <View style={styles.infoMsg}>
  //         <Text style={styles.wdWatson}>{dataObj.title}</Text>
  //         <Text style={styles.weNeed}>{dataObj.description}</Text>
  //       </View>
  //     </TouchableOpacity>
  //   )
  // }
  return (
    <View style={styles.container}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      {/* Header */}
      <View style={styles.upperView}>
        <View style={styles.editorsView}>
          <TouchableOpacity onPress={() => { props.navigation.navigate("GroupMesseges", { chatGroupData }) }}>
            <Image style={styles.preImg}
              source={Imagepath.previous} />
          </TouchableOpacity>
          {/* <TouchableOpacity
            // onPress={() => { props.navigation.navigate("DoctorGrpMsg") }}
            style={styles.editView} >
            <Image source={Imagepath.editor}
              style={styles.editor} />
            <Text style={styles.editTxt}>Edit</Text>
          </TouchableOpacity> */}
        </View>
        <View style={{ alignItems: "center" }}>
          <Image style={styles.groupImg}
            source={chatGroupData?.profile_picture ? { uri: chatGroupData?.profile_picture } : Imagepath.group} />
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.CameraButton}>
            <Image
              style={styles.CameraImage}
              source={Imagepath.camera}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <Text style={styles.user}>{chatGroupData.groupName}</Text>
          <Text style={styles.paticipants}>Group : {chatGroupData?.participiants?.length} Participants</Text>
        </View>
      </View>

      {/* Add participiants */}
      {/* <View style={styles.addGrpView}> */}
      <View style={styles.addView}>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.persConnct}
            source={Imagepath.personConnect} />
          <TouchableOpacity
            style={styles.memberView}>
            <Text style={styles.addGrp}>
              Add Group Members/Participants
            </Text>
            <Text style={styles.adminTxt}>
              (it user have admin privileges)
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.searchIconBtn}>
          <Image style={styles.searchIcon}
            source={Imagepath.search} />
        </TouchableOpacity>
      </View>
      {/* </View> */}
      {/* List of participiants */}
      {/* <View style={styles.listMainView}>
          {
            data?.map((item, index) => {
              return ChatList(item)
            })
          }
        </View> */}
      <View style={styles.upperSlctedImg}>
        <FlatList
          data={groupList}
          renderItem={Lonovo}
          keyExtractor={item => item.index}
        />
      </View>
      {/* </ScrollView> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={ischecked}
        onRequestClose={() => {
          setischecked(!ischecked);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are You sure to Remove.</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setischecked(!ischecked)}
              >
                <Text style={styles.textStyle}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={handleRemoveUser}
              >
                <Text style={styles.textStyle}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View
            style={{
              paddingVertical: 20,
              marginHorizontal: 10,
              borderRadius: 20,
              backgroundColor: Colors.appcolor,
            }}>
            <TouchableOpacity
              hitSlop={{ top: 30, bottom: 30, right: 30, left: 30 }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              style={{ position: 'absolute', top: 10, right: 20 }}>
              <Image
                style={[styles.CancleArrow1, { tintColor: Colors.white }]}
                source={Imagepath.crose}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <Text style={styles.SelecttextStyle1}> Select image from...</Text>
            <View style={styles.modalView1}>
              <TouchableOpacity
                style={[styles.button1, styles.buttonClose1]}
                onPress={() => { requestCamera() }}>
                <Text style={styles.textStyle}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button1, styles.buttonClose1]}
                onPress={() => Gallery(!modalVisible)}>
                <Text style={styles.textStyle}>gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  )
}

const mapStateToProps = state => ({
  participiantsList: state?.firebaseData?.participiantsList,
  groupData: state?.firebaseData?.groupData,
});

const ActionCreators = Object.assign(
  { getGroupParticipiants },
  { removeUserFromGroup },
  { updateGroupProfile }
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserGroup)
// export default UserGroup;