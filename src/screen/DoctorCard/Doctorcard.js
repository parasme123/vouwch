import React, { useState, useEffect } from 'react';
import { ImageBackground, FlatList, Share } from 'react-native';
import styles from './doctorcardcCss';

import { Header, imagepath } from "@common";
import { CustomLoader } from '@lib';
import { DoctorCardList, Searchresult } from "@component";
import { getDoctorData, postDoctorSearch, postMessge, postComment, postFollow } from '../../reduxStore/action/doctorAction';
import Message from '../../modal/Message';
import Comments from '../../modal/Comments';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AsyncStorageHelper, Constants, Helper } from '@lib';
import { handleNavigation } from '../../navigator/Navigator';

const Doctor_Card = (props) => {
    const searchProps = props.route?.params ? props.route?.params?.searchProps : null;

    const [modalVisibleComment, setModalVisibleComment] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [loaderVisible, setloaderVisible] = useState(false);
    const [ReviewModalPopup, setReviewModalPopup] = useState();
    const [commentModalPopup, setcommentModalPopup] = useState();
    const [messageText, setmessage] = useState();
    const [commentText, setcommentText] = useState();
    const [msgDocId, setmsgDocId] = useState();
    const [Follows, setFollow] = useState([]);
    const [userType, setuserType] = useState(null);
    const [userToken, setuserToken] = useState(null);


    // Button condition
    const MessagepropPage = DataCardiList => {
        setmsgDocId(DataCardiList);
        if (!userType) {
            Helper.loginPopUp(props.navigation);
        } else if (userType?.user_type !== 1) {
            alert('please login with personal account');
        } else {
            setReviewModalPopup(!modalVisible);
            setModalVisible(!modalVisible);
        }
    };

    // Message API
    const Call_MEssage_Api = () => {
        let { actions } = props;
        const apiData = {
            doctor_id: msgDocId,
            detail: messageText,
        };
        console.log(apiData, "apiData");
        actions.postMessge(apiData, setloaderVisible, () => PageNavigation());
    };

    // ?Commet api
    const CommentpropPage = DataCardiList => {
        setmsgDocId(DataCardiList)
        if (!userType) {
            Helper.loginPopUp(props.navigation);
        } else if (userType?.user_type !== 1) {
            alert('please login with personal account');
        } else {
            setcommentModalPopup(!commentModalPopup);
            setModalVisibleComment(!modalVisibleComment);
        }
    };

    const Call_Commet_Api = () => {
        let { actions } = props;
        const apiData = {
            doctor_id: msgDocId,
            detail: commentText,
        };
        console.log(apiData, "apiData");
        actions.postComment(apiData, setloaderVisible, () => PageNavigation());
    };

    const PageNavigation = () => {
        handleNavigation({
            type: 'setRoot',
            page: 'bottomtab',
            navigation: props.navigation,
        });
    }


    // Follow API

    const FollowButton = item => {
        let follows1 = [...Follows];
        if (!follows1.includes(item)) {
            //checking weather array contain the id
            follows1.push(item); //adding to array because value doesnt exists
            // Call_FollowApi(id);
        } else {
            follows1.splice(follows1.indexOf(item), 1); //deleting
            // Call_FollowApi(id);
        }
        setFollow(follows1);
    };

    const Call_FollowApi = (id) => {
        let { actions } = props;
        let apiData = {
            business_id: id,
        }
        // console.log("apiData------------------------",apiData);
        actions.postFollow(apiData);

    };

    const Follow_api = (id) => {
        if (!userType) {
            Helper.loginPopUp(props.navigation);
        } else if (userType?.user_type !== 1) {
            alert('please login with personal account');
        } else {
            Call_FollowApi(id);
            FollowButton(id);
        }
    };
    useEffect(() => {
        AsyncStorageHelper.getData(Constants.TOKEN).then(value => {
            if (value !== null) {
                setuserToken(value);
            }
            // console.log('UserToken------------', userToken);
        });
        AsyncStorageHelper.getData(Constants.USER_DATA).then(value => {
            if (value !== null) {
                setuserType(value);
            }
            //
        });
        // console.log('msgDocId------------', props.allHomeData.cards);
    }, []);

    useEffect(() => {
        // console.log(searchProps, "searchProps----------------------");
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

    const handleAddBravoCardOrReview = (doctorid, navigationFor) => {
        if (!userType) {
            Helper.loginPopUp(props.navigation);
        } else {
            navigation.navigate(navigationFor, { doctorid })
        }
    }

    // Doctor CARDS
    const DoctorCard_Cards = ({ item, index }) => {
        return (
            <DoctorCardList
                onpress_DoctorCard={DoctorNavigation}
                onpress_Comment={CommentpropPage}
                onpress_Message={MessagepropPage}
                onpress_Share={onShare}
                user_Type={userType}
                Follows={Follows}
                onpress_DoctorCard_Follow={Follow_api}
                item={item}
                index={index}
                Doctor_business_name={item?.business_name}
                Doctorcard_Details={item?.category?.name}
                Clinician_Rating={item?.clinical_rate}
                ClinicianReview_Value={item?.clinical_rate}
                patient_Rating={item?.patient_rate}
                startingValue={item?.patient_rate}
                handleAddBravoCardOrReview={handleAddBravoCardOrReview}
            />
        )
    }
    const DoctorNavigation = item => {
        props.navigation.navigate('Doctordetails', { person: true, doctorId: item });
    };



    return (
        <ImageBackground
            source={imagepath.homebg}
            resizeMode='cover'
            style={styles.image} >
            <Header title={"Doctor Card"} isback={true} />

            {/* Header */}


            {ReviewModalPopup && (
                <Message
                    modalVisible={modalVisible}
                    Hidemodal={MessagepropPage}
                    Message_Button={Call_MEssage_Api}
                    messageText={setmessage}
                />
            )}
            {commentModalPopup && (
                <Comments
                    modalVisible={modalVisibleComment}
                    Hidemodal={CommentpropPage}
                    Message_Button={Call_Commet_Api}
                    CmmentText={setcommentText}
                />
            )}
            {
                props.doctorList?.length > 0 ? (
                    <FlatList
                        data={props.doctorList}
                        style={{ flex: 1 }}
                        renderItem={DoctorCard_Cards}
                        keyExtractor={(item, index) => String(index)}
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
    { postDoctorSearch },
    { postMessge },
    { postComment },
    { postFollow }
);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Doctor_Card)
