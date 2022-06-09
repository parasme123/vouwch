import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, } from 'react-native';

import Imagepath from '../../common/imagepath';
import Fonts from '../../common/Fonts';
import String from '../../common/String';
import MessageBox from '../../common/MessegeBox';
import ApiCall from '../../Lib/ApiCall';
import SortUrl from '../../Lib/SortUrl';
import CustomLoader from '../../Lib/CustomLoader';
import Colors from '../../common/Colors';

const Message = ({ navigation, index }) => {
    const [Reply, setReply] = useState("");

    useEffect(() => {
        Call_DataCardApi();
      
    }, []);
    const [loaderVisible, setloaderVisible] = useState(false)
    const onChangesecond = (value) => {
        if (Reply == value) {
            setReply("")
        }
        else {
            setReply(value)
        }
    }

    const [DataCardList, setDataCardList] = useState("");
    const Call_DataCardApi = () => {
        setloaderVisible(true)
        ApiCall.ApiMethod(SortUrl.AllServices, 'Get',).then(
            (response) => {
                setloaderVisible(false)
                console.log("Response==========", JSON.stringify(response));
                if (response.status == true) {
                    setloaderVisible(false)
                    setDataCardList(response.data.services)
                } else {
                    setloaderVisible(false)
                }
            }
        );
    }

    const NotificationItem = ({ item, index }) => {
        return (
            <View key={index} style={styles.messageBoxContainer} >
                <View style={[styles.ContentView, { borderTopLeftRadius: index  == 0 ? 15 : 0,borderTopRightRadius: index  == 0 ? 15 : 0, borderBottomLeftRadius: index + 1 == DataCardList.length ? 15 : 0, borderBottomRightRadius: index + 1 == DataCardList.length ? 15 : 0,    }]}>
                    <View style={styles.mainSubview}>
                        <Text style={styles.namedoctor}>Dr.Jenny Wilson</Text>
                        <Text style={styles.time}>5 Min ago</Text>
                    </View>
                    <Text style={styles.namedoctordetails}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    <TouchableOpacity onPress={() => { onChangesecond(item.id) }} style={styles.replyView}>
                        <Image style={styles.replyIcon} source={Imagepath.replyIcons} />
                        <Text style={styles.replyText}>Reply</Text>
                    </TouchableOpacity>
                </View>
                {Reply == item.id &&
                    <MessageBox />
                }

            </View>
        )
    }

    return (
        <View source={Imagepath.background} style={{ flex: 1, paddingTop: 15, paddingBottom: 10 }}>
            <FlatList
                data={DataCardList}
                keyExtractor={(item, index) => item.key}
                renderItem={NotificationItem}
                showsVerticalScrollIndicator={false}
                style={{ marginBottom: 5 }}
            />
            <CustomLoader loaderVisible={loaderVisible} />

        </View>

    );
}

const styles = StyleSheet.create({
    button: { height: 40, width: 168, justifyContent: "center", alignItems: "center", borderRadius: 20 },

    ContentView: { backgroundColor: "#fff", shadowColor: "#929397", shadowRadius: 10, elevation: 10, paddingVertical: 20, paddingLeft: 15, paddingRight: 15, marginBottom: 2 },
    mainSubview: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    namedoctor: { color: Colors.appcolor, fontSize: 18, fontFamily: Fonts.ProximaNovaSemibold },
    time: { color: Colors.appcolor, justifyContent: "flex-end", fontSize: 10, fontFamily: Fonts.ProximaNovaRegular },
    namedoctordetails: { color: "#929397", fontSize: 12, fontFamily: Fonts.ProximaNovaRegular, paddingVertical: 15 },
    replyView: { flexDirection: "row", alignItems: "flex-end", width: 90 },
    replyIcon: { height: 20, width: 30 },
    replyText: { color: Colors.appcolor, paddingLeft: 10 },
    messageBoxContainer: { marginLeft: 15, marginRight: 15, elevation: 4 ,borderRadius:15},



})

export default Message;