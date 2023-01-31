import React, { useState, } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView, Easing } from 'react-native';
import { Fonts, Fontsize, Colors } from '@common';
import Popover, { PopoverMode, PopoverPlacement } from 'react-native-popover-view';
import Imagepath from '../../common/imagepath';
import styles from './css';

const NotifyMsg = () => {

    const [data, setData] = useState([
        { docId: 1, id: 1, title: "Wendy Watson", description: "We need to meet today", time: "15:20PM", status: "2", img: Imagepath.maan },
        { docId: 2, id: 2, title: "Connie Lane", description: "Where are you?", time: "15:20PM", status: "1", img: Imagepath.proMam },
        { docId: 3, id: 2, title: "Kathryn Alexander", description: "Kathryn Alexander", time: "15:20PM", status: "4", img: Imagepath.proWoman },
        { docId: 4, id: 1, title: "Bernard Nguyen", description: "Bernard Nguyen", time: "15:20PM", status: "3", img: Imagepath.googleMan },
        { docId: 5, id: 1, title: "Connie Lane", description: "We need to meet today", time: "15:20PM", status: "1", img: Imagepath.googleWomen },
        { docId: 6, id: 1, title: "Wendy Watson", description: "We need to meet today", time: "15:20PM", status: "2", img: Imagepath.maan },
        { docId: 7, id: 2, title: "Connie Lane", description: "Where are you?", time: "15:20PM", status: "", img: Imagepath.proMam },
        { docId: 8, id: 2, title: "Kathryn Alexander", description: "Kathryn Alexander", time: "15:20PM", status: "3", img: Imagepath.proWoman },
        { docId: 9, id: 1, title: "Bernard Nguyen", description: "Bernard Nguyen", time: "15:20PM", status: "5", img: Imagepath.googleMan },
        { docId: 10, id: 1, title: "Connie Lane", description: "We need to meet today", time: "15:20PM", status: "7", img: Imagepath.googleWomen },


    ]);

    const MsgList = (msgObj) => {
        return (
            <View style={{ backgroundColor: Colors.white, }} key={msgObj.docId}>
                {
                    msgObj.id == 1 ?
                        (
                            <View>
                                <TouchableOpacity style={styles.infoTouch}>
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
                                <TouchableOpacity style={styles.infoTouch}>
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
            <View style={styles.upperView}>
                <Text style={styles.notiTxt}>Notifications</Text>
            </View>
            <View style={styles.NotifyLine} />
            <ScrollView style={{}} showsVerticalScrollIndicator={false}>
                <View style={{ paddingBottom: 100 }}>
                    {
                        data?.map((item, index) => {
                            return MsgList(item)
                        })
                    }
                </View>
                {/* <View style={{ height: 70 }}></View> */}

            </ScrollView>

        </View>
    )
}
export default NotifyMsg;