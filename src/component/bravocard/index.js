import React, { useState } from 'react';
import {
    FlatList, Image, Modal, Text, TouchableOpacity, View
} from 'react-native'; import styles from './styles';
import { Colors, imagepath, svg } from '@common';
import { imgBaseUrl } from '../../reduxStore/action/webApiUrl';
import VideoPlayer from 'react-native-video-controls';
export default Bravocard = (props) => {
    const [showPhotoModal, setShowPhotoModal] = useState(false);
    const [videoBtn, setvideoBtn] = useState(false);
    const [showModalFor, setShowModalFor] = useState("Photos");
    const mediaurl = videoBtn ?  props.item.card_video_media :props.item.card_image_media 

    const handlePhotoModal = (callFor, videoBtn) => {
        setShowPhotoModal(true);
        setShowModalFor(callFor);
        setvideoBtn(videoBtn)
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
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            // style={{ marginVertical: 50 }}
                            data={mediaurl}
                            horizontal
                            showsHorizontalScrollIndicator={true}
                            renderItem={(i) => {
                                return (
                                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: "row" }}>
                                        {videoBtn == true ?
                                            <View style={{ margin: 10 }}>
                                                <VideoPlayer
                                                    source={{ uri: `${imgBaseUrl}${i.item.media_url}` }} />
                                            </View> :
                                            <Image source={{ uri: `${imgBaseUrl}${i.item.media_url}` }} style={{ width: 300, marginHorizontal: 20, height: 200 }} />

                                        }
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
                        {/* <TouchableOpacity
                            style={styles.DoctorCardShareButton}
                            onPress={() => {
                                props.onpress_DoctorCard_Follow(props.item.doctor_id);
                            }}>
                            {
                                props.Follows?.findIndex((data) => data.business_id === props.item.doctor_id) !== -1 ?
                                    svg.followCircle(30, 30, Colors.white, Colors.appcolor) :
                                    svg.followCircle(30, 30, Colors.black, Colors.white)
                            }

                            {props.Follows?.findIndex((data) => data.business_id === props.item.doctor_id) !== -1 ? (
                                <Text style={styles.DoctorCardShareButtonText}>Following</Text>
                            ) : (
                                <Text numberOfLines={1} style={styles.DoctorCardShareButtonText}>
                                    Follow
                                </Text>
                            )}
                        </TouchableOpacity> */}
                        <TouchableOpacity style={styles.shareButton} onPress={() => { props.onpress_Share(props.item.doctor_id) }}>
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
                    <TouchableOpacity style={styles.cardPhotoButton} onPress={() => handlePhotoModal("Photos", false)} >
                        <Image style={styles.cardPhotoImage} source={imagepath.Photo} />
                        <Text style={styles.cardPhotoText}>Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.videoButton} onPress={() => handlePhotoModal("Videos", true )}>
                        <Image style={styles.cardVideoIcon} source={imagepath.Video} />
                        <Text style={[styles.cardPhotoText, styles.cardVideoText]}>Video</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.handleAddBravoCardOrReview(props.item.doctor_id, 'Bravocard')}
                        style={[styles.cardPhotoButton2, { marginRight: 5 }]}>
                        {svg.addBravo(15, 15, Colors.white)}
                        <Text style={styles.cardPhotoText}>Add Bravo Card</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}