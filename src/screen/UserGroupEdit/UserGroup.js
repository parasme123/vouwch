import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView, Easing, FlatList, Modal, PermissionsAndroid, TextInput } from 'react-native';
import Imagepath from '../../common/imagepath';
import styles from './css';
import { Fonts, Fontsize, Colors } from '@common';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGroupParticipiants, removeUserFromGroup, updateGroupProfile } from '../../reduxStore/action/firebaseActions';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';

const UserGroupEdit = (props) => {
  let groupDataParam = props?.route?.params?.chatGroupData;

  const [modalVisible, setModalVisible] = useState(false);
  const [chatGroupData, setchatGroupData] = useState({})
  const [groupName, setGroupName] = useState("");

  useEffect(() => {
    let { actions, groupData, chatData } = props;
    let dataOfGroup = chatData.find((item) => item.id == groupDataParam.id)
    setchatGroupData(dataOfGroup)
    setGroupName(dataOfGroup.groupName)
    actions.getGroupParticipiants(dataOfGroup.participiants)
  }, [groupDataParam])

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
          // updateGroupProfile(url)
        })
      }
    );
    try {
      await task;
    } catch (e) {
      console.error(e);
    }
  }

  const updateGroupData = () => {
    let { actions } = props;
    actions.updateGroupProfile(chatGroupData.profile_picture, groupName, chatGroupData.id, () => groupProfileSuccess())
  }

  const groupProfileSuccess = () => {
    props.navigation.navigate("Chat");
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        <View style={styles.editorsView}>
          <TouchableOpacity onPress={() => { props.navigation.navigate("UserGroup", { chatGroupData }) }}>
            <Image style={styles.preImg}
              source={Imagepath.previous} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={updateGroupData}
            style={styles.editView} >
            <Text style={styles.editTxt}>Done</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", marginTop: 50 }}>
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

        </View>
        <View style={{ marginTop: 30 }}>
          <TextInput
            style={styles.input}
            placeholder="Group Name"
            underlineColorAndroid="transparent"
            onChangeText={setGroupName}
            value={groupName}
          />
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "transparent" }}>
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
  chatData: state?.firebaseData?.chatData,
});

const ActionCreators = Object.assign(
  { getGroupParticipiants },
  { removeUserFromGroup },
  { updateGroupProfile }
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserGroupEdit)
// export default UserGroup;