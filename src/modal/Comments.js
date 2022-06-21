import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
  Modal,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Imagepath from '../common/imagepath';
import {useNavigation} from '@react-navigation/native';
import {Fontsize, Colors} from '@common';

export default Comments = props => {
  const navigation = useNavigation();
  const [message_Text, setmessage_Text] = useState();
  // const [modalVisibleComment, setModalVisibleComment] = useState();
  return (
    <View style={{flex: 1}}>
      {/* cOMMENT MODULE */}

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.modalVisibleComment}
          // visible={visibile}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            // setModalVisibleComment(!modalVisibleComment);
            props.Hidemodal();
          }}>
          <View style={styles.centeredView1}>
            <View style={styles.centeredView2}>
              <View style={styles.headerView}>
                <Text style={styles.headerText}>Comment</Text>
                <TouchableOpacity
                  onPress={() => props.Hidemodal()}
                  style={styles.headerIcon}>
                  <Image
                    style={styles.headerIcon}
                    resizeMode="contain"
                    source={Imagepath.crose}
                  />
                </TouchableOpacity>
              </View>

              <TextInput
                style={styles.textInput}
                placeholder="Enter Comment"
                keyboardType="default"
                onChangeText={text => setmessage_Text(text)}
              />
              <TouchableOpacity
                onPress={() => props.Message_Button(message_Text)}
                style={styles.messageButton}>
                <Text style={styles.messageButtonText}>Send Comment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  centeredView1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    backgroundColor: Colors.transparentBlack,
    opacity: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  centeredView2: {
    width: '92%',
    height: 255,
    borderRadius: 15,
    alignSelf: 'center',
    backgroundColor: Colors.white,
    elevation: 1,
  },
  headerView: {
    height: 50,
    backgroundColor: Colors.bottonColors,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  headerText: {
    color: Colors.white,
    fontSize: Fontsize.fontFifteen,
  },
  headerIcon: {
    height: 30,
    width: 30,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.grey,
    marginHorizontal: 15,
    borderRadius: 10,
    marginTop: 40,
    paddingLeft: 15,
  },
  messageButton: {
    width: 149,
    height: 45,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: Colors.bottonColors,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 15,
    marginTop: 20,
  },
  messageButtonText: {
    color: Colors.white,
    fontSize: Fontsize.fontFifteen,
  },
});
