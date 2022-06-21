import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, ImageBackground, Image, FlatList, Modal, Alert, TextInput, Share } from 'react-native';
import styles from './doctorcardcCss';
import { useNavigation } from '@react-navigation/native';
import Imagepath from '../../common/imagepath';
import Fonts from '../../common/Fonts';
import { Header } from '../../common/Header';
import String from '../../common/String';
import ApiCall from '../../Lib/ApiCall';
import SortUrl from '../../Lib/SortUrl';
import CustomLoader from '../../Lib/CustomLoader';
import Message from '../../modal/Message';
import Comments from '../../modal/Comments';
import { DoctorCard, Searchresult } from "@component";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDoctorData, postDoctorSearch } from '../../reduxStore/action/doctorAction';
// let STORAGE_KEY = '@user_input';

const Doctor_Card = (props, { route }) => {
    const searchProps = props.route?.params ? props.route?.params?.searchProps : null;

    const [modalVisibleComment, setModalVisibleComment] = useState(false);
    const [modalVisibleMessage, setModalVisibleMessage] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [DoctorCardList, setDoctorCardList] = useState();
    const [loaderVisible, setloaderVisible] = useState(false);
    const [Follows, setFollow] = useState([]);
    const [ReviewModalPopup, setReviewModalPopup] = useState()
    const [commentModalPopup, setcommentModalPopup] = useState()
    const [followDetails, setFollowDetails] = useState();
    const [searchComponent, setsearchComponent] = useState(false);

    const MessagepropPage = (item, Index) => {
        setReviewModalPopup(!modalVisible)
        setModalVisible(!modalVisible)
    }
    const CommentpropPage = (item) => {
        setcommentModalPopup(!commentModalPopup)
        setModalVisibleComment(!modalVisibleComment)
        // console.log("item", item)
    }

    const Component_search = () => {
        setsearchComponent(!searchComponent)
    }


    const FollowButton = (item) => {
        let follows1 = [...Follows];
        if (!follows1.includes(item)) {          //checking weather array contain the id
            follows1.push(item);               //adding to array because value doesnt exists
        } else {
            follows1.splice(follows1.indexOf(item), 1);  //deleting
        }
        console.log('hello', follows1)
        setFollow(follows1)
    }

    useEffect(() => {
        console.log(searchProps,"searchProps----------------------");
        if (searchProps == null) {
            Call_CategouryApi();
        }
        else {
            Call_SearchApi();
        }
    }, []);

    const navigation = useNavigation();
    // share module
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    // api  of all Doctor Card
    const Call_CategouryApi = () => {
        let { actions } = props;
        actions.getDoctorData();
    }


    
    // Search API
    const Call_SearchApi = () => {
        let { actions } = props;
        let apiData = {
            keyword: searchProps,
        }
        actions.postDoctorSearch(apiData);
      
    };



    // // Search API
    const Call_SearchApis = () => {
        setloaderVisible(true)
       
        console.log(searchProps,"searchProps");
        ApiCall.ApiMethod(SortUrl.searchDoctor, 'POST', data).then(
            (response) => {
                if (response?.data?.data?.length > 0) {
                    setloaderVisible(false);
                    setDoctorCardList(response?.data?.data)
                } else {
                    setloaderVisible(false)
                    Component_search()
                }
            }
        );
    };


    // follow Api
    const Call_FollowApi = () => {
        const data = {
            business_id: DoctorCardList.id
        }
        ApiCall.ApiMethod(SortUrl.Follow, 'POST', data).then(
            (response) => {
                console.log(response, "response===========")
                if (response.status == true) {
                    // setFollowDetails(response.data)

                    FollowButton(item.id);
                } else {
                    alert("something went wrong")
                }
            }
        );
    }




    // Doctor CARDS
    const DoctorCard_Cards = ({ item, index }) => {
        return (

            <DoctorCard
                onpress_Comment={CommentpropPage}
                onpress_Message={MessagepropPage}
                onpress_Share={onShare}
                // user_Type={userType}
                // Follows={Follows}
                // onpress_DoctorCard_Follow={Follow_api}
                item={item}
                index={index}
                Doctor_business_name={item?.business_name}
                Doctorcard_Details={item?.category?.name}
                Clinician_Rating={item?.clinical_rate}
                ClinicianReview_Value={item?.clinical_rate}
                patient_Rating={item?.patient_rate}
                startingValue={item?.patient_rate}

            />
        )
    }

    return (
        <ImageBackground
            source={Imagepath.homebg}
            resizeMode='cover'
            style={styles.image} >
            <Header title={String.doctorcard} isback={true} />
          
                {/* Header */}

                < FlatList
                    data={props.doctorList}
                    style={{ flex: 1 }}
                    renderItem={DoctorCard_Cards}
                    numColumns={2}
                    keyExtractor={(item, index) => item.key}
                    showsVerticalScrollIndicator={false}

                />



                {ReviewModalPopup &&
                    <Message
                        modalVisible={modalVisible}
                        Hidemodal={MessagepropPage}
                    />
                }
                {commentModalPopup &&
                    <Comments
                        modalVisible={modalVisibleComment}
                        Hidemodal={CommentpropPage}
                    />
                }

                {searchComponent &&

                    <Searchresult />
                }


       
            <CustomLoader loaderVisible={loaderVisible} />
        </ImageBackground>

    );
}

const mapStateToProps = state => ({
    doctorList: state.doctor.doctorList,
});

const ActionCreators = Object.assign(
    { getDoctorData },
    {postDoctorSearch}
);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Doctor_Card)
