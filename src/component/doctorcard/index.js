import React, { Component } from 'react';
import styles from './styles';
import Imagepath from '../../common/imagepath';
import {
    Alert, FlatList, Image, ImageBackground, ScrollView, Share, Text, TextInput, TouchableOpacity, View
} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Colors from '../../common/Colors';

export default Doctorcard = (props) => {

    return (
        <TouchableOpacity
            key={props.item.id}
            // onPress={() => { userType?.user_token && userType?.user_type == 1 ? navigation.navigate('Doctordetails', { person: true }) : alert("Please login with Personal Account") }}
            onPress={() => { props.onpress_DoctorCard(props.item.id) }}
            style={[styles.doctorCardContainer, { backgroundColor: props.index % 2 == 0 ? "#D7EFFB" : "#FBEBE2" }]}>
            <Image style={styles.doctorCardIcon} source={Imagepath.doctors} />
            {/* Button of Share , Comment and Mesage */}
            <View style={styles.DoctorCardShareView}>
                <TouchableOpacity style={styles.DoctorCardShareButton} onPress={() => { props.onpress_Comment(props.item.id) }}>
                    <Image style={styles.DoctorCardShareButtonIcon} source={Imagepath.commenticon} />
                    <Text numberOfLines={1} style={styles.DoctorCardShareButtonText}>Comment</Text>
                    
                </TouchableOpacity>
                <TouchableOpacity style={styles.DoctorCardShareButton} onPress={() => { props.onpress_Message(props.item.id) }}>
                    <Image style={styles.DoctorCardShareButtonIcon} source={Imagepath.Messageicon} />
                    <Text numberOfLines={1} style={styles.DoctorCardShareButtonText}>Message</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.DoctorCardShareButton} onPress={() => { props.onpress_DoctorCard_Follow() }} >
                    <Image style={styles.DoctorCardShareButtonIcon} source={props.Follows?.includes(props.item.id) ? Imagepath.following : Imagepath.Followicon} />
                    {props.Follows?.includes(props.item.id) ? <Text style={styles.DoctorCardShareButtonText}>Following</Text> :
                        <Text numberOfLines={1} style={styles.DoctorCardShareButtonText}>Follow</Text>}
                </TouchableOpacity>
                <TouchableOpacity style={styles.DoctorCardShareButton} onPress={() => { props.onpress_Share(props.item.id) }} >
                    <Image style={styles.DoctorCardShareButtonIcon} source={Imagepath.Share} />
                    <Text numberOfLines={1} style={styles.DoctorCardShareButtonText}>share</Text>
                </TouchableOpacity>
            </View>
            {/* Hospital name and details */}
            <View style={styles.doctorDetails}>
                <Text numberOfLines={1} style={styles.doctorname}>{props.Doctor_business_name}</Text>
                <Text numberOfLines={1} style={styles.doctorProfile}>{props.Doctorcard_Details}</Text>
                {/* photo & Videos Btn */}
                {/* Red Star Line */}
                <TouchableOpacity style={styles.ratingViewRed}>
                    <View style={styles.ratingViewmain}>
                        <Rating
                            type='custom'
                            max={5}
                            readonly="true"
                            ratingColor={Colors.red}
                            ratingBackgroundColor={Colors.white}
                            startingValue={props.ClinicianReview_Value}
                            imageSize={10}
                            iconWidth={10}
                            iconHeight={10}
                        />
                    </View>
                    <Text style={styles.ratingText}>{props.Clinician_Rating}
                        <Text  style={styles.clinicianReview}> Clinician's Review</Text>
                    </Text>
                </TouchableOpacity>

                {/* yellow Star Line */}
                <TouchableOpacity style={styles.yellowstarview} >
                    {/* onPress={() => navigation.navigate('Doctordetails', { personRed: true })} */}
                    <View style={styles.ratingViewmain}>
                        <Rating
                            max={5}
                            readonly="true"
                            startingValue={props.startingValue}
                            imageSize={10}
                            iconWidth={10}
                            iconHeight={10}
                        />
                    </View>
                    <Text style={styles.ratingText}>{props.patient_Rating}
                        <Text style={styles.clinicianReview}> Patient Review</Text></Text>

                </TouchableOpacity>
            </View>

        </TouchableOpacity>

    );
}




