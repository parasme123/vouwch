import React from 'react';
import styles from './styles';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Rating } from 'react-native-ratings';
import { Colors, imagepath, svg } from '@common';

export default DoctorcardList = props => {
  return (
    <TouchableOpacity
      key={props.index}
      // onPress={() => { userType?.user_token && userType?.user_type == 1 ? navigation.navigate('Doctordetails', { person: true }) : alert("Please login with Personal Account") }}
      onPress={() => {
        props.onpress_DoctorCard(props.item.id);
      }}
      style={[
        styles.doctorCardContainer,
        { backgroundColor: props.index % 2 == 0 ? '#D7EFFB' : '#FBEBE2' },
      ]}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Image style={styles.doctorCardIcon} source={props.item.business_profile ? props.item.business_profile : imagepath.doctor} />
        </View>
        {/* Hospital name and details */}
        <View style={styles.doctorDetails}>
          <Text numberOfLines={1} style={styles.doctorname}>
            {props.Doctor_business_name}
          </Text>
          <Text numberOfLines={1} style={styles.doctorProfile}>
            {props.Doctorcard_Details}
          </Text>
          {/* photo & Videos Btn */}
          {/* Red Star Line */}
          <View style={styles.ratingViewRed}>
            <View style={styles.ratingViewmain}>
              <Rating
                type="custom"
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
            <Text style={styles.ratingText}>
              {props.Clinician_Rating}
              <Text style={styles.clinicianReview}> Clinician's Review</Text>
            </Text>
          </View>

          {/* yellow Star Line */}
          <View style={styles.yellowstarview}>
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
            <Text style={styles.ratingText}>
              {props.patient_Rating}
              <Text style={styles.clinicianReview}> Patient Review</Text>
            </Text>
          </View>

        </View>
      </View>
      <View style={styles.DoctorCardShareView}>
        <TouchableOpacity
          style={styles.DoctorCardShareButton}
          onPress={() => {
            props.onpress_Comment(props.item.id);
          }}>
          {svg.commentCircle(30, 30, Colors.appcolor)}
          {/* <Image
            style={styles.DoctorCardShareButtonIcon}
            source={imagepath.commenticon}
          /> */}
          <Text numberOfLines={1} style={styles.DoctorCardShareButtonText}>
            Comment
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.DoctorCardShareButton}
          onPress={() => {
            props.onpress_Message(props.item.id);
          }}>
          {svg.messageCircle(30, 30, Colors.appcolor)}
          {/* <Image
            style={styles.DoctorCardShareButtonIcon}
            source={imagepath.Messageicon}
          /> */}
          <Text numberOfLines={1} style={styles.DoctorCardShareButtonText}>
            Message
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.DoctorCardShareButton}
          onPress={() => {
            props.onpress_DoctorCard_Follow();
          }}>
          {svg.followCircle(30, 30, Colors.black, Colors.white)}
          {/* <Image
            style={styles.DoctorCardShareButtonIcon}
            source={
              props.Follows?.includes(props.item.id)
                ? imagepath.following
                : imagepath.Followicon
            }
          /> */}
          {props.Follows?.includes(props.item.id) ? (
            <Text style={styles.DoctorCardShareButtonText}>Following</Text>
          ) : (
            <Text numberOfLines={1} style={styles.DoctorCardShareButtonText}>
              Follow
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.DoctorCardShareButton}
          onPress={() => {
            props.onpress_Share(props.item.id);
          }}>
          {svg.shareCircle(30, 30, Colors.black, Colors.white)}
          <Text numberOfLines={1} style={styles.DoctorCardShareButtonText}>
            share
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={[styles.addBravoCardBtn, { marginRight: 5 }]}>
          {svg.addBravo(15, 15, Colors.white)}
          <Text style={styles.addBravoCardTxt}>Add Bravo Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.addBravoCardBtn, { marginLeft: 5 }]}>
          {svg.addReview(15, 15, Colors.white)}
          <Text style={styles.addBravoCardTxt}>Add A Review</Text>
        </TouchableOpacity>
      </View>
      {/* Button of Share , Comment and Mesage */}
    </TouchableOpacity>
  );
};
