import React, { Component } from 'react';
import {
    Alert, FlatList, Image, ImageBackground, ScrollView, Share, Text, TextInput, TouchableOpacity, View
} from 'react-native';
// import { useBatteryLevel } from 'react-native-device-info';
import styles from './styles';
import { Colors, imagepath, svg } from '@common';

export default Bravocard = (props) => {
    return (
        <View key={props.index}
            style={[styles.cardContainer, { backgroundColor: props.index % 2 == 0 ? Colors.lightBlue : Colors.skinColor }]}>
            <View style={styles.cardIconView} >
                <Image style={styles.cardIcon} source={imagepath.Bravo} />
            </View>
            {/*  Button of Share , Comment and Mesage  */}
            <View style={styles.shareCardView}>
                <TouchableOpacity style={styles.shareButton} onPress={() => { props.onpress_Comment(props.item.id) }}>
                    {svg.commentCircle(30, 30, Colors.appcolor)}
                    {/* <Image style={styles.shareButtonImage} source={imagepath.commenticon} /> */}
                    <Text numberOfLines={1} style={styles.shareButtonText}>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareButton} onPress={() => { props.onpress_Message(props.item.id) }}>
                    {svg.messageCircle(30, 30, Colors.appcolor)}
                    {/* <Image style={styles.shareButtonImage} source={imagepath.Messageicon} /> */}
                    <Text numberOfLines={1} style={styles.shareButtonText}>Message</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareButton} onPress={() => { props.onpress_Share(props.item.id) }}>
                    {svg.shareCircle(30, 30, Colors.black, Colors.white)}
                    {/* <Image style={styles.shareButtonImage} source={imagepath.Share} /> */}
                    <Text numberOfLines={1} style={styles.shareButtonText}>share</Text>
                </TouchableOpacity>
            </View>

            {/* Hospital name and details   */}
            <View style={styles.cardHospitalView}>
                <Text style={styles.hospitalName}>{props.bravo_Card_name}</Text>
                <Text style={styles.cardHospitalViewText}>{props.bravo_Card_Details}</Text>
                <Text style={styles.cardHospitalViewText}>{props.bravo_Card_Details}</Text>
                {/* photo & Videos Btn */}
                <View style={styles.cardHospitalViewButton}>
                    <TouchableOpacity style={styles.cardPhotoButton} onPress={() => { props.onpress_Photo }} >
                        <Image style={styles.cardPhotoImage} source={imagepath.Photo} />
                        <Text style={styles.cardPhotoText}>Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.videoButton} onPress={() => { props.onpress_Video }}>
                        <Image style={styles.cardVideoIcon} source={imagepath.Video} />
                        <Text style={[styles.cardPhotoText, styles.cardVideoText]}>Video</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}