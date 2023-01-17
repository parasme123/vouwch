import React, { useState, } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView, Easing, FlatList } from 'react-native';
import Imagepath from '../../common/imagepath';
import styles from './css';
import { Fonts, Fontsize, Colors } from '@common';

const UserGroup = (props) => {

  let selectedUser = props?.route?.params?.selectedUser || [];
  

  const Lonovo = ({ item, index }) => {
    return (

      <View style={{ backgroundColor: Colors.white}}>
        <TouchableOpacity style={styles.infoTouch} >
          <View style={styles.subView}>
            <Image
              style={styles.maanImg}
              source={item.img} />
            <View style={styles.infoMsg}>
              <Text style={styles.wdWatson}>{item.title}</Text>
              <Text style={styles.weNeed}>{item.description}</Text>
            </View>
          </View>
        </TouchableOpacity>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.upperView}>
          <View style={styles.editorsView}>
            <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
              <Image style={styles.preImg}
                source={Imagepath.previous} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { props.navigation.navigate("DoctorGrpMsg") }}
              style={styles.editView} >
              <Image source={Imagepath.editor}
                style={styles.editor} />
              <Text style={styles.editTxt}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <TouchableOpacity
              onPress={() => { props.navigation.navigate("UserGrpMsg") }}
            >
              <Image style={styles.groupImg}
                source={Imagepath.group} />
            </TouchableOpacity>
            <Text style={styles.user}>User Group</Text>
            <Text style={styles.paticipants}>Group:40 Participants</Text>
          </View>
        </View>

        {/* Add participiants */}
        <View style={styles.addGrpView}>
          <View style={styles.addView}>
            <View style={{ flexDirection: "row" }}>
              <Image style={styles.persConnct}
                source={Imagepath.personConnect} />
              <TouchableOpacity style={styles.memberView}>
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
        </View>

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
            data={selectedUser}
            renderItem={Lonovo}
            keyExtractor={item => item.index}
            horizontal
            showsHorizontalScrollIndicator={false}
          />

        </View>


      </ScrollView>
    </View>
  )
}
export default UserGroup;