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
export default DoctorcardList = (props) => {
  const navigation = useNavigation();
  // console.log(props.item)
  return (
    <TouchableOpacity
      key={props.index}
      onPress={() => {
        props.onpress_DoctorCard(props.item.id);
      }}
      style={[
        styles.doctorCardContainer,
        { backgroundColor: props.index % 2 == 0 ? '#D7EFFB' : '#FBEBE2' },
      ]}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Image style={styles.doctorCardIcon} source={props?.item?.business_profile ? props?.item?.business_profile : imagepath.doctor} />
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
          <TouchableOpacity
            onPress={() => { props.onpress_DoctorCard(props.item.id, "feedback") }}
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
            {props?.item?.cr_count}
              <Text style={styles.clinicianReview}> Clinician's Review</Text>
            </Text>
          </TouchableOpacity>

          {/* yellow Star Line */}
          <TouchableOpacity
            onPress={() => { props.onpress_DoctorCard(props.item.id, "feedback") }}
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
              {props?.item?.pr_count}
              <Text style={styles.clinicianReview}> Patient Review</Text>
            </Text>
          </TouchableOpacity>

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
            props.onpress_DoctorCard_Follow(props.item.id);
          }}>
          {
            props.Follows?.findIndex((data) => data.business_id === props.item.id) !== -1 ?
              svg.followCircle(30, 30, Colors.white, Colors.appcolor) :
              svg.followCircle(30, 30, Colors.black, Colors.white)
          }

          {props.Follows?.findIndex((data) => data.business_id === props.item.id) !== -1 ? (
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
          onPress={() => props.handleAddBravoCardOrReview(props.item.id, 'Bravocard')}
          style={[styles.addBravoCardBtn, { marginRight: 5 }]}>
          {svg.addBravo(15, 15, Colors.white)}
          <Text style={styles.addBravoCardTxt}>Add Bravo Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.handleAddBravoCardOrReview(props.item.id, 'review')}
          style={[styles.addBravoCardBtn, { marginLeft: 5 }]}>
          {svg.addReview(15, 15, Colors.white)}
          <Text style={styles.addBravoCardTxt}>Add A Review</Text>
        </TouchableOpacity>
      </View>
      {/* Button of Share , Comment and Mesage */}
    </TouchableOpacity>
  );
};
