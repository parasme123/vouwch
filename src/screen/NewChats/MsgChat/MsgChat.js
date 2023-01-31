import React, {  } from 'react';
import { TouchableOpacity, View, Image, Text, ScrollView } from 'react-native';
import styles from './css';

const MsgChat = (props) => {
    const ChatList = (dataObj) => {
        return (
            <TouchableOpacity
                onPress={() => props.onUserClick(dataObj)}
                style={styles.infoTouch}
                key={dataObj.id}
            >
                <Text style={styles.singleTxt}>{dataObj.sequence}</Text>
                <Image
                    style={styles.maanImg}
                    source={dataObj?.img ? dataObj?.img : require('../../../assect/images/default-user.png')} />
                <View style={styles.infoMsg}>
                    <Text style={styles.wdWatson}>{dataObj.first_name}</Text>
                    <Text style={styles.weNeed}>{dataObj.about}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <ScrollView style={{ paddingHorizontal: 5, }}
                showsVerticalScrollIndicator={false}>
                {
                    props?.userList?.map((item, index) => {
                        return ChatList(item)
                    })
                }
                <View style={{ height: 50 }}></View>
            </ScrollView>
        </View>
    )
}

export default MsgChat;