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
import { useNavigation } from '@react-navigation/native';
export default Doctorcard = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      key={props.index}
      // onPress={() => { userType?.user_token && userType?.user_type == 1 ? navigation.navigate('Doctordetails', { person: true }) : alert("Please login with Personal Account") }}
      onPress={() => {
        props.onpress_DoctorCard(props.item.id, "about");
      }}
      style={[
        styles.doctorCardContainer,
        { backgroundColor: props.index % 2 == 0 ? '#D7EFFB' : '#FBEBE2' },
      ]}>
      <Image style={styles.doctorCardIcon} source={props?.item?.business_profile ? props.item.business_profile : imagepath.doctor} />
      {/* Button of Share , Comment and Mesage */}
      <View style={styles.DoctorCardShareView}>
        <TouchableOpacity
          style={styles.DoctorCardShareButton}
          onPress={() => {
            props.onpress_Comment(props.item.user_id);
          }}>
          {svg.commentCircle(30, 30, Colors.appcolor)}
          <Text numberOfLines={1} style={styles.DoctorCardShareButtonText}>
            Comment
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.DoctorCardShareButton}
          onPress={() => {
            props.onpress_Message(props.item.user_id);
          }}>
          {svg.messageCircle(30, 30, Colors.appcolor)}
          <Text numberOfLines={1} style={styles.DoctorCardShareButtonText}>
            Message
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.DoctorCardShareButton}
          onPress={() => {
            props.onpress_DoctorCard_Follow(props.item.id);
          }}>
          {svg.followCircle(30, 30, props.Follows?.includes(props.item.id) ? Colors.white : Colors.black, props.Follows?.includes(props.item.id) ? Colors.appcolor : Colors.white)}

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

      <View style={{ flex: 1, flexDirection: 'row', marginVertical: 15 }}>
        <TouchableOpacity
          onPress={() => props.handleAddBravoCardOrReview(props.item.user_id, 'Bravocard')}
          style={[styles.addBravoCardBtn, { marginRight: 2 }]}>
          {svg.addBravo(15, 15, Colors.white)}
          <Text style={styles.addBravoCardTxt}>Add Bravo Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.handleAddBravoCardOrReview(props.item.user_id, 'review')}
          style={[styles.addBravoCardBtn, { marginLeft: 2 }]}>
          {svg.addReview(15, 15, Colors.white)}
          <Text style={styles.addBravoCardTxt}>Add A Review</Text>
        </TouchableOpacity>
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
        <TouchableOpacity onPress={() => {
          props.onpress_DoctorCard(props.item.id ,"feedback")
        }}
          style={styles.ratingViewRed}>
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
        </TouchableOpacity>

        {/* yellow Star Line */}
        <TouchableOpacity
          onPress={() => {
            props.onpress_DoctorCard(props.item.id,"review");
          }}
          style={styles.yellowstarview}>

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
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
