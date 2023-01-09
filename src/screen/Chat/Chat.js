import React, { useState, } from 'react';
import Popover, { PopoverMode, PopoverPlacement } from 'react-native-popover-view';
import { StyleSheet, TouchableOpacity, View, Image, Text, TextInput, FlatList, ScrollView, Animated, Easing, Icon } from 'react-native';
import { Fonts, Fontsize, Colors } from '@common';
import Imagepath from '../../common/imagepath';
import styles from './css';
import { postBravo } from '../../reduxStore/action/doctorAction';



const Chat = (props) => {

  const [number, onChangeNumber] = React.useState(null);

  const [data, setData] = useState([
    { id: 1, title: "Wendy Watson", description: "We need to meet today", time: "15:20PM", status: "2", img: Imagepath.maan },
    { id: 2, title: "Connie Lane", description: "Where are you?", time: "15:20PM", status: "1", img: Imagepath.proMam },
    { id: 2, title: "Kathryn Alexander", description: "Kathryn Alexander", time: "15:20PM", status: "4", img: Imagepath.proWoman },
    { id: 1, title: "Bernard Nguyen", description: "Bernard Nguyen", time: "15:20PM", status: "3", img: Imagepath.googleMan },
    { id: 1, title: "Connie Lane", description: "We need to meet today", time: "15:20PM", status: "1", img: Imagepath.googleWomen },
    { id: 1, title: "Wendy Watson", description: "We need to meet today", time: "15:20PM", status: "2", img: Imagepath.maan },
    { id: 2, title: "Connie Lane", description: "Where are you?", time: "15:20PM", status: "", img: Imagepath.proMam },
    { id: 2, title: "Kathryn Alexander", description: "Kathryn Alexander", time: "15:20PM", status: "3", img: Imagepath.proWoman },
    { id: 1, title: "Bernard Nguyen", description: "Bernard Nguyen", time: "15:20PM", status: "5", img: Imagepath.googleMan },
    { id: 1, title: "Connie Lane", description: "We need to meet today", time: "15:20PM", status: "7", img: Imagepath.googleWomen },


  ]);
  const MsgList = (msgObj) => {
    return (
      <View style={{ backgroundColor: Colors.white }}>
        {
          msgObj.id == 1 ?
            (
              <View>
                <TouchableOpacity style={styles.infoTouch} onPress={() => props.navigation.navigate("Messeges")}>
                  <View style={styles.subView}>
                    <Image
                      style={styles.maanImg}
                      source={msgObj.img} />
                    <View style={styles.infoMsg}>
                      <Text style={styles.wdWatson}>{msgObj.title}</Text>
                      <Text style={styles.weNeed}>{msgObj.description}</Text>
                    </View>
                  </View>
                  <View style={styles.updateView}>
                    <Text style={styles.timeShowTxt}>{msgObj.time}</Text>
                    <View style={styles.timeView}>
                      <Text style={styles.timeTxt}>{msgObj.status}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )
            :
            (
              <View>
                <TouchableOpacity style={styles.infoTouch} onPress={() => props.navigation.navigate("Messeges")}>
                  <View style={styles.subView}>
                    <Image
                      style={styles.maanImg}
                      source={msgObj.img} />
                    <View style={styles.infoMsg}>
                      <Text style={styles.wdWatson}>{msgObj.title}</Text>
                      <Text style={styles.weNeed}>{msgObj.description}</Text>
                    </View>

                  </View>
                  <View style={styles.updateView}>
                    <Text style={styles.timeShowTxt}>{msgObj.time}</Text>
                    <Image style={styles.readStatus}
                      source={Imagepath.read} />
                  </View>
                </TouchableOpacity>
              </View>
            )
        }
      </View>
    )
  }
  return (
    <View style={styles.container}>

      {/* <View style={styles.upperPartView}> */}

      <View style={styles.chatsView}>
        <Text style={styles.chatss} >Chats</Text>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={() => props.navigation.navigate("MsgManagement")} >
            <Image source={Imagepath.editor}
              style={styles.editor} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={Imagepath.threeDots}
              style={styles.perCoonct} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.clinicView}>
          <TouchableOpacity onPress={() => props.navigation.navigate("NewChat")} style={styles.clinic}>
            <Text style={styles.hospitals}>Contacts for Dr, clinics, & hospitals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactView}>
            <Text style={styles.contect}> Contacts</Text>
          </TouchableOpacity>

        </View>


        <View style={styles.txtinputView}>
          <View style={styles.searchSection}>
            <Image style={styles.searchI}
              source={Imagepath.serachIcon} />
            <TextInput
              style={styles.input}
              placeholder="Staff Directory | Name | City State"
              underlineColorAndroid="transparent"
            />
          </View>

          <Popover
            popoverStyle={{ borderRadius: 8, elevation: 10, }}
            backgroundStyle={{ opacity: 0.001, }}
            arrowSize={{ width: 30, height: 20, }}
            arrowShift={-0.001}
            placement={PopoverPlacement.BOTTOM}
            animationConfig={{ duration: 100, easing: Easing.circle }}

            from={(
              <TouchableOpacity style={styles.SquareShapeView} >
                <Image style={styles.menuIcon}
                  source={Imagepath.menu} />

              </TouchableOpacity>
            )}>
            <View style={{ height: 155, width: 150, marginTop: 10, }}>
              <TouchableOpacity><Text style={styles.touchKeys}>Clear All Chats</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.touchKeys}>Delete All Chats</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.touchKeys}>Archive All Chats</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.touchKeys}>Invite a Friend</Text></TouchableOpacity>
            </View>
          </Popover>
        </View>
        {/* </View> */}
        <View style={styles.broadBtnView}>
          <TouchableOpacity>
            <Text style={styles.broadBtnTxt}>Chat List</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("NewGroup")}>
            <Text style={styles.broadBtnTxt}>New Group</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginHorizontal: 3, }}>
          {
            // data && data.value ? data.value.map((item, index)=>{}) : null 
            // data?.value?.map((item, index) => {
            //   return ChatList(item, "hello", index)
            data?.map((item, index) => {
              return MsgList(item)
            })
          }
          <View style={{ height: 100 }}></View>

        </View>


      </ScrollView>
    </View >

  )
}

export default Chat;