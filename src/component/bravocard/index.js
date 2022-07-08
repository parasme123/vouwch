import React, { useState } from 'react';
import {
    FlatList, Image, Modal, Text, TouchableOpacity, View
} from 'react-native'; import styles from './styles';
import { Colors, imagepath, svg } from '@common';
import { imgBaseUrl } from '../../reduxStore/action/webApiUrl';

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
                <View style={styles.centeredView1}>
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
                            style={{ marginVertical: 50 }}
                            data={props.item.card_image_media}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={(i) => {
                                return (
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={{ uri: `${imgBaseUrl}${i.item.media_url}` }} style={{ width: 300, marginHorizontal: 20, height: 200 }} />
                                        <Text>Description</Text>
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View>
            </Modal>
            <View style={styles.cardIconView} >
                <Image style={styles.cardIcon} source={imagepath.Bravo} />
            </View>
            {/*  Button of Share , Comment and Mesage  */}
            <View style={styles.shareCardView}>
                <TouchableOpacity style={styles.shareButton} onPress={() => { props.onpress_Comment(props.item.id) }}>
                    {svg.commentCircle(30, 30, Colors.appcolor)}
                    <Text numberOfLines={1} style={styles.shareButtonText}>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareButton} onPress={() => { props.onpress_Message(props.item.id) }}>
                    {svg.messageCircle(30, 30, Colors.appcolor)}
                    <Text numberOfLines={1} style={styles.shareButtonText}>Message</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareButton} onPress={() => { props.onpress_Share(props.item.id) }}>
                    {svg.shareCircle(30, 30, Colors.black, Colors.white)}
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