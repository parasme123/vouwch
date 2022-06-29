import React, { useState, useEffect } from 'react';
import { ImageBackground, FlatList, Share } from 'react-native';
import styles from './doctorcardcCss';

import { Header, String, imagepath } from "@common";
import { CustomLoader } from '@lib';
import { DoctorCardList, Searchresult } from "@component";
import { getDoctorData, postDoctorSearch } from '../../reduxStore/action/doctorAction';
import Message from '../../modal/Message';
import Comments from '../../modal/Comments';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Doctor_Card = (props) => {
    const searchProps = props.route?.params ? props.route?.params?.searchProps : null;

    const [modalVisibleComment, setModalVisibleComment] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [loaderVisible, setloaderVisible] = useState(false);
    const [Follows, setFollow] = useState([]);
    const [ReviewModalPopup, setReviewModalPopup] = useState();
    const [commentModalPopup, setcommentModalPopup] = useState();

    const MessagepropPage = () => {
        setReviewModalPopup(!modalVisible)
        setModalVisible(!modalVisible)
    }
    const CommentpropPage = (item) => {
        setcommentModalPopup(!commentModalPopup)
        setModalVisibleComment(!modalVisibleComment)
        // console.log("item", item)
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
        console.log(searchProps, "searchProps----------------------");
        if (searchProps == null) {
            Call_CategouryApi();
        }
        else {
            Call_SearchApi();
        }
    }, []);

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
        actions.postDoctorSearch(apiData, setloaderVisible);
    };

    // Doctor CARDS
    const DoctorCard_Cards = ({ item, index }) => {
        return (
            <DoctorCardList
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
            source={imagepath.homebg}
            resizeMode='cover'
            style={styles.image} >
            <Header title={String.doctorcard} isback={true} />

            {/* Header */}

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
            {
                props.doctorList.length > 0 ? (
                    <FlatList
                        data={props.doctorList}
                        style={{ flex: 1 }}
                        renderItem={DoctorCard_Cards}
                        // numColumns={2}
                        keyExtractor={(item, index) => item.key}
                        showsVerticalScrollIndicator={false}
                    />
                ) : <Searchresult />
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
    { postDoctorSearch }
);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Doctor_Card)
