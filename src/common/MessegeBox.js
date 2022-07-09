import React, { useState } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, FlatList, View } from 'react-native';
import fonts from './Fonts';
import { TextInput } from 'react-native-gesture-handler';
import Fonts from './Fonts';
const MessageBox = (props) => {
    const [message, setMessage] = useState("");
    return (
        <View style={{ backgroundColor: "#EEEEEE", height: 225, width: "100%", marginLeft: 15, marginRight: 15, alignSelf: "center", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
            <TextInput
                style={styles.textInputstyle}
                keyboardType='default'
                placeholder='Message'
                placeholderTextColor={"#000"}
                value={message}
                multiline
                numberOfLines={5}
                onChangeText={setMessage}
            />
            <TouchableOpacity style={styles.buttonSubmit} onPress={()=>props.handleReply(props.item, message)}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

        </View>
    );
}

export default MessageBox;

const styles = StyleSheet.create({
    textInputstyle: { height: 143, margin: 10, backgroundColor: "#fff", textAlign: "center", color: "#000", fontSize: 14, fontFamily: fonts.ProximaNovaMedium },
    buttonSubmit: { backgroundColor: "#245FC7", width: 141, height: 40, borderRadius: 10, justifyContent: "center", alignItems: "center", marginLeft: 10 },
    buttonText: { color: "#fff", fontSize: 14, fontFamily: Fonts.ProximaNovaMedium },
})