import React, { Component } from 'react';
import {
    Alert, FlatList, Image, ImageBackground, ScrollView, Share, Text, TextInput, TouchableOpacity, View
} from 'react-native';
// import { useBatteryLevel } from 'react-native-device-info';
import styles from './styles';
import Imagepath from '../../common/imagepath';
import Colors from '../../common/Colors';

export  default Bravocard =(props)=> {

    
        return (
            <View key={props.item.id}
            style={[styles.cardContainer, { backgroundColor: props.index % 2 == 0 ? Colors.lightBlue : Colors.skinColor }]}>
            <View style={styles.cardIconView} >
                <Image style={styles.cardIcon} source={Imagepath.Bravo} />
            </View>
            {/*  Button of Share , Comment and Mesage  */}
            <View style={styles.shareCardView}>
                <TouchableOpacity style={styles.shareButton} onPress={() => { props.onpress_Comment(props.item.id) }}>
                    <Image style={styles.shareButtonImage} source={Imagepath.commenticon} />
                    <Text numberOfLines={1} style={styles.shareButtonText}>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareButton} onPress={() => {props.onpress_Message(props.item.id) }}>
                    <Image style={styles.shareButtonImage} source={Imagepath.Messageicon} />
                    <Text numberOfLines={1}  style={styles.shareButtonText}>Message</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareButton} onPress={()=>{props.onpress_Share(props.item.id)}}>
                    <Image style={styles.shareButtonImage} source={Imagepath.Share} />
                    <Text numberOfLines={1} style={styles.shareButtonText}>share</Text>
                </TouchableOpacity>
            </View>
    
            {/* Hospital name and details   */}
            <View style={styles.cardHospitalView}>
                <Text style={styles.hospitalName}>{props.bravo_Card_name}</Text>
                <Text style={styles.cardHospitalViewText}>{props.bravo_Card_Details}</Text>
                {/* photo & Videos Btn */}
                <View style={styles.cardHospitalViewButton}>
                    <TouchableOpacity style={styles.cardPhotoButton} onPress={()=>{props.onpress_Photo}} >
                        <Image style={styles.cardPhotoImage} source={Imagepath.Photo} />
                        <Text style={styles.cardPhotoVideoText}>Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.videoButton} onPress={()=>{props.onpress_Video}}>
                        <Image style={styles.cardVideoIcon} source={Imagepath.Video} />
                        <Text style={styles.cardPhotoVideoText}>Video</Text>
                    </TouchableOpacity>
                </View>
            </View>
    
            </View>
            
        );
    }

  