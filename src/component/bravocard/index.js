import React, { useState } from 'react';
import {
    FlatList, Image, Modal, Text, TouchableOpacity, View
} from 'react-native'; import styles from './styles';
import { Colors, imagepath, svg } from '@common';
import { imgBaseUrl } from '../../reduxStore/action/webApiUrl';
// import VideoPlayer from "react-native-video-player "
export default Bravocard = (props) => {
    const [showPhotoModal, setShowPhotoModal] = useState(false);
    const [showModalFor, setShowModalFor] = useState("Photos");
    const handlePhotoModal = (callFor) => {
        setShowPhotoModal(true);
        setShowModalFor(callFor)
    }
    return (
        <View key={props.index}
            style={[styles.cardContainer, props.index % 2 == 0 ? { backgroundColor: Colors.lightBlue } : { backgroundColor: Colors.skinColor }]}>
            <Modal
                backgroundColor="transparent"
                visible={showPhotoModal}
                animationType="slide"
                transparent={true}
            >
                <View
                    onPress={() => setShowPhotoModal(false)}
                    style={styles.centeredView1}>
                    <View style={styles.centeredView2}>
                        <View style={styles.headerView}>
                            <Text style={styles.headerText}>{showModalFor}</Text>
                            <TouchableOpacity onPress={() => setShowPhotoModal(false)} >
                                <Image
                                    style={styles.headerIcon}
                                    resizeMode="contain"
                                    source={imagepath.crose}
                                />
                                {/* <VideoPlayer
                                    video={{ uri: 'https://www.youtube.com/watch?v=jGWUCl2plck' }}
                                    videoWidth={1600}
                                    videoHeight={900}
                                    thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                                /> */}
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            style={{ marginVertical: 50 }}
                            data={props.item.card_image_media}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={(i) => {
                                return (
                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                        <Image source={{ uri: `${imgBaseUrl}${i.item.media_url}` }} style={{ width: 300, marginHorizontal: 20, height: 200 }} />
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View >
            </Modal>
            <View style={styles.cardIconView} >
                <Image style={styles.cardIcon} source={imagepath.Bravo} />
            </View>
            {/*  Button of Share , Comment and Mesage  */}

            {props.hideButtons ? null :
                <>
                    <View style={styles.shareCardView}>
                        <TouchableOpacity style={styles.shareButton} onPress={() => { props.onpress_Comment(props.item.doctor_id) }}>
                            {svg.commentCircle(30, 30, Colors.appcolor)}
                            <Text numberOfLines={1} style={styles.shareButtonText}>Comment</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.shareButton} onPress={() => { props.onpress_Message(props.item.doctor_id) }}>
                            {svg.messageCircle(30, 30, Colors.appcolor)}
                            <Text numberOfLines={1} style={styles.shareButtonText}>Message</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.shareButton} onPress={() => { props.onpress_Share(props.item.id) }}>
                            {svg.shareCircle(30, 30, Colors.black, Colors.white)}
                            <Text numberOfLines={1} style={styles.shareButtonText}>share</Text>
                        </TouchableOpacity>
                    </View>
                </>
            }

            {/* Hospital name and details   */}
            <View style={styles.cardHospitalView}>
                <Text style={styles.hospitalName}>{props.item.name}</Text>
                <Text style={styles.cardHospitalViewText} numberOfLines={3}>{props.item?.detail}</Text>
                <Text style={[styles.cardHospitalViewText, { marginTop: 5 }]}><Text style={{ fontWeight: "bold", fontSize: 12 }}>{props.item?.users?.full_name}</Text> added a bravo card for <Text style={{ fontWeight: "bold", fontSize: 12 }}>{props.item.name}</Text></Text>
                {/* photo & Videos Btn */}
                <View style={styles.cardHospitalViewButton}>
                    <TouchableOpacity style={styles.cardPhotoButton} onPress={() => handlePhotoModal("Photos")} >
                        <Image style={styles.cardPhotoImage} source={imagepath.Photo} />
                        <Text style={styles.cardPhotoText}>Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.videoButton} onPress={() => handlePhotoModal("Videos")}>
                        <Image style={styles.cardVideoIcon} source={imagepath.Video} />
                        <Text style={[styles.cardPhotoText, styles.cardVideoText]}>Video</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}