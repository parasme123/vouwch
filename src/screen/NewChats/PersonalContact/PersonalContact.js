import React, { useState, } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView } from 'react-native';
import { Fonts, Fontsize, Colors } from '@common';
import Imagepath from '../../../common/imagepath';
import styles from './css';

const PersonalContact = (props) => {

    const [data, setData] = useState([
        { id: "A", title: "Abdul Mughni", description: "How about pie project?", img: Imagepath.abdul },
        { id: "B", title: "Baadal", description: "Great work!", img: Imagepath.badal },
        { id: "C", title: "Cadmus", description: "You're welcome!", img: Imagepath.cadmus },
        { id: "D", title: "Daamodar", description: "Please Check Notion!", img: Imagepath.daamodar },
    ]);

    const ChatList = (dataObj) => {
        return (
            <View style={{}}>
                <TouchableOpacity style={styles.infoTouch} onPress={() => { props.navigation.navigate("Messeges") }}>
                    <Text style={styles.singleTxt}>{dataObj.id}</Text>
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
               <ScrollView style={{  paddingHorizontal: 5,}}
                showsVerticalScrollIndicator={false}>
                {
                    data?.map((item, index) => {
                        return ChatList(item)
                    })
                }
                <View style={{ height: 10 }}></View>
            </ScrollView>
           
        </View>
    )
}
export default PersonalContact
    ;