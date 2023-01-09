import React, { useState, } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView } from 'react-native';
import { Fonts, Fontsize, Colors } from '@common';
import Imagepath from '../../../common/imagepath';
import styles from './css';

const MsgChat = (props) => {

    const [data, setData] = useState([
        { sequence: "A", title: "Abdul Mughni", description: "How about pie project?", img: Imagepath.abdul },
        { sequence: "B", title: "Baadal", description: "Great work!", img: Imagepath.badal },
        { sequence: "C", title: "Cadmus", description: "You're welcome!", img: Imagepath.cadmus },
        { sequence: "D", title: "Daamodar", description: "Please Check Notion!", img: Imagepath.daamodar },
        { sequence: "E", title: "Edgarton", description: "We need to meet today", img: Imagepath.edgarton },
        { sequence: "F", title: "Fadil", description: "Alright", img: Imagepath.fadil },
        { sequence: "G", title: "Gannon", description: "We need to meet today", img: Imagepath.gannon },
        { sequence: "H", title: "Haarsh", description: "We need to meet today", img: Imagepath.edgarton },

    ]);

    const ChatList = (dataObj) => {
        return (
            <View style={{}}>
                <TouchableOpacity onPress={() => { props.navigation.navigate("Messeges") }} style={styles.infoTouch}>
                    <Text style={styles.singleTxt}>{dataObj.sequence}</Text>
                    <Image
                        style={styles.maanImg}
                        source={dataObj.img} />
                    <View style={styles.infoMsg}>
                        <Text style={styles.wdWatson}>{dataObj.title}</Text>
                        <Text style={styles.weNeed}>{dataObj.description}</Text>
                    </View>
                </TouchableOpacity>


            </View>


        )
    }
    return (
        <View style={styles.container}>
            <ScrollView style={{ paddingHorizontal: 5, }}
                showsVerticalScrollIndicator={false}>
                {
                    data?.map((item, index) => {
                        return ChatList(item)
                    })
                }
                <View style={{ height: 50 }}></View>
            </ScrollView>
        </View>
    )
}
export default MsgChat;