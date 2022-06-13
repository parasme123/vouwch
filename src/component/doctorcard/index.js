import React, { Component } from 'react';
import styles from './styles';
import Imagepath from '../../common/imagepath';
import {
    Alert, FlatList, Image, ImageBackground, ScrollView, Share, Text, TextInput, TouchableOpacity, View
} from 'react-native';

export default function  Doctor_card (){
    return (
        <TouchableOpacity key={props.item.id}
        // onPress={() => { userType?.user_token && userType?.user_type == 1 ? navigation.navigate('Doctordetails', { person: true }) : alert("Please login with Personal Account") }}
        onPress={() => {props.onpress_DoctorCard}}
        style={[styles.doctorCardContainer, { backgroundColor: index % 2 == 0 ? "#D7EFFB" : "#FBEBE2" }]}>
        <Image style={styles.doctorCardIcon} source={Imagepath.doctors} />
        {/* Button of Share , Comment and Mesage */}
        <View style={styles.DoctorCardShareView}>
            <TouchableOpacity style={styles.DoctorCardShareButton}  onPress={() => {props.onpress_DoctorCard_Comment}}>
                <Image style={styles.DoctorCardShareButtonIcon} source={Imagepath.commenticon} />
                <Text style={styles.DoctorCardShareButtonText}>Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.DoctorCardShareButton}  onPress={() => {props.onpress_DoctorCard_Message}}>
                <Image style={styles.DoctorCardShareButtonIcon} source={Imagepath.Messageicon} />
                <Text style={styles.DoctorCardShareButtonText}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.DoctorCardShareButton} onPress={() => {props.onpress_DoctorCard_Follow }} >
                <Image style={styles.DoctorCardShareButtonIcon} source={Follows?.includes(item.id) ? Imagepath.following : Imagepath.Followicon} />
                {Follows?.includes(item.id) ? <Text style={styles.DoctorCardShareButtonText}>Following</Text> :
                    <Text style={styles.DoctorCardShareButtonText}>Follow</Text>}
            </TouchableOpacity>
            <TouchableOpacity style={styles.DoctorCardShareButton}  onPress={() => {props.onpress_DoctorCard_Share}} >
                <Image style={styles.DoctorCardShareButtonIcon} source={Imagepath.Share} />
                <Text style={styles.DoctorCardShareButtonText}>share</Text>
            </TouchableOpacity>
        </View>
        {/* Hospital name and details */}
        <View style={styles.doctorDetails}>
            <Text style={styles.doctorname}>{props.Doctor_business_name}</Text>
            <Text style={styles.doctorProfile}>{props.Doctorcard_Details}</Text>
            {/* photo & Videos Btn */}
            {/* Red Star Line */}
            <TouchableOpacity style={styles.ratingViewRed} onPress={() => navigation.navigate('Doctordetails', { personRed: true })}>
                <View style={styles.ratingViewmain}>
                    <Image style={styles.star} source={Imagepath.redstar} />
                    <Image style={styles.star} source={Imagepath.redstar} />
                    <Image style={styles.star} source={Imagepath.redstar} />
                    <Image style={styles.star} source={Imagepath.redstar} />
                    <Image style={styles.star} source={Imagepath.redstar} />
                </View>
                <Text style={styles.ratingText}>{props.Clinician_Rating}
                    <Text style={styles.clinicianReview}>Clinician's Review</Text>
                </Text>
            </TouchableOpacity>

            {/* yellow Star Line */}
            <TouchableOpacity style={styles.yellowstarview} onPress={() => navigation.navigate('Doctordetails', { personRed: true })}>
                <View style={styles.ratingViewmain}>
                    <Image style={styles.star} source={Imagepath.yellowstar} />
                    <Image style={styles.star} source={Imagepath.yellowstar} />
                    <Image style={styles.star} source={Imagepath.yellowstar} />
                    <Image style={styles.star} source={Imagepath.yellowstar} />
                    <Image style={styles.star} source={Imagepath.yellowstar} />
                </View>
                <Text style={styles.ratingText}>{props.patient_Rating}
                    <Text style={styles.clinicianReview}>Patient Review</Text></Text>

            </TouchableOpacity>
        </View>

    </TouchableOpacity>
        
    );
}




