import React, { useState, } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView } from 'react-native';
import { Fonts, Fontsize, Colors } from '@common';
import Imagepath from '../../common/imagepath';
import styles from './css';
import MsgChat from './MsgChat/MsgChat';
import PersonalContact from './PersonalContact/PersonalContact';

const NewChat = (props) => {

    const [activeTab, setActiveTab] = useState("MsgChat")

    return (
        <View style={styles.container}>
            <View style={styles.UpperView}>
                <Text style={styles.chatTxt}>New Chats</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("Chat")}>
                    <Image source={Imagepath.cross}
                        style={styles.crossImg} />
                </TouchableOpacity>
            </View>

            <View style={styles.clinicView}>
                <TouchableOpacity style={{
                    backgroundColor: activeTab == "MsgChat" ? Colors.appcolor : Colors.white,
                    borderRadius: 18,
                    justifyContent: "center",
                    alignItems: "center",
                    // paddingVertical: 13,
                    marginHorizontal: 5,
                    flex: 1.3,
                    padding:5
                    
                }}
                    onPress={() => {
                        setActiveTab("MsgChat")
                    }}>
                    <Text style={{
                        fontSize: Fontsize.fontTwelve,
                        color: activeTab == "MsgChat" ? Colors.white : Colors.black,
                        fontFamily: Fonts.ProximaNovaMedium,
                        marginTop: 3,
                    }}>Drs and Hospitals directory</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setActiveTab("PersonalContact")
                    }}
                    style={{
                        backgroundColor: activeTab == "PersonalContact" ? Colors.appcolor : Colors.white,
                        borderRadius: 22,
                        padding: 10,
                        color: activeTab == "PersonalContact" ? Colors.white : Colors.black,
                        flex: 1,
                        borderRadius: 18,
                        justifyContent: "center",
                        alignItems: "center",
                        marginHorizontal: 5
                    }}
                >
                    <Text style={{
                        fontSize: Fontsize.fontTwelve,
                        color: activeTab == "PersonalContact" ? Colors.white : Colors.black,
                        fontFamily: Fonts.ProximaNovaMedium,
                        marginTop: 3,
                    }}>Personal contacts</Text>
                </TouchableOpacity>


            </View>
{/* 
            <TouchableOpacity style={{marginLeft:20}}>
                <Text style={styles.newGrpTxt}>New Group</Text>
            </TouchableOpacity> */}


            <View style={styles.Line} />




            <View style={{ flexGrow: 1 }}>

                {activeTab == "MsgChat" ? <MsgChat navigation={props.navigation} /> : activeTab == "PersonalContact" ? <PersonalContact navigation={props.navigation} /> : null}
            </View>

        </View >
    )
}
export default NewChat;