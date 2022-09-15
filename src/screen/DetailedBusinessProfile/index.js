import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Image,
    FlatList,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, Fonts, imagepath, Fontsize } from '@common';
import { Bravocard, DoctorCard } from '@component';
import { Helper } from '@lib';
import { Rating } from 'react-native-ratings';
import Header from '../../common/Header'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getdoctordetails } from '../../reduxStore/action/doctorAction';
import String from '../../common/String';
import Imagepath from '../../common/imagepath';

const styles = StyleSheet.create({
    feedBackTypeBtn: {
        backgroundColor: Colors.darkSkyBlue,
        paddingVertical: 16,
        flex: 1,
        paddingHorizontal: 8,
        marginLeft: 6,
        borderRadius: 10
    },
    feedBackTypeBtnActive: {
        backgroundColor: Colors.appcolor,
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 8,
        marginLeft: 6,
        borderRadius: 10
    },
    feedBackTypeBtnTxt: {
        color: Colors.black,
        fontSize: Fontsize.fontTwelve,
        textAlign: "center"
    },
    feedBackTypeBtnTxtActive: {
        color: Colors.white,
    },
    listMainViewFlatlist: {
        borderBottomWidth: 0.5,
        borderColor: Colors.grey,
        // width: '100%',
        paddingVertical: 10,
        flex: 1,
        marginHorizontal: 15
    },
    subViewflatelist: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
    },
    profileuserfeedback: {
        height: 49,
        width: 49,
        borderRadius: 100
    },
    detailsView: {
        flexDirection: 'column',
        marginHorizontal: 15,
        flex: 1
    },
    userNameFeed: {
        fontSize: Fontsize.fontTwelve,
        color: Colors.black,
        fontFamily: Fonts.ProximaNovaBold,
    },
})
const DetailedBusinessProfile = (props) => {
    const navigation = useNavigation();
    const [activeFeedbackTab, setActiveFeedbackTab] = useState("p");
    const Review = activeFeedbackTab == "p" ? props.allDetailsDoc?.patient_reviews : props.allDetailsDoc?.clinical_reviews;


    const [loaderVisible, setloaderVisible] = useState();
    useEffect(() => {
        Call_Details_Api();
    }, []);

    const Call_Details_Api = () => {
        let { actions } = props;
        const apiData = {
            id: props.setData.id,
        };
        actions.getdoctordetails(apiData, setloaderVisible);
    };

    const Feedback = ({ item, index }) => {
        return (
            <View
                style={styles.listMainViewFlatlist} key={index}>
                <View
                    style={styles.subViewflatelist}>
                    {/* doctor Image */}
                    <TouchableOpacity
                        onPress={() => { navigation.navigate("FeedbackUserProfile", { userId: item?.users?.id }) }}>
                        <Image
                            style={styles.profileuserfeedback}
                            //  source={}
                            source={item.users.profile_picture == null ? imagepath.doctor : { uri: item.users.profile_picture }}
                        />
                    </TouchableOpacity>

                    {/* feedback details */}
                    <View style={styles.detailsView}>

                        {/* name of feedback user */}
                        <View style={{
                            flexDirection: 'row', paddingTop: 10, justifyContent: "space-between",
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10 }}>
                                <Text
                                    style={[styles.userNameFeed]}>
                                    {/* {item.NameFeedback} */}
                                    {item.is_anonym == 1 ? "anonymous" : item.users.full_name}
                                </Text>
                                <Image
                                    style={{ height: 11, width: 11, marginLeft: 10 }}
                                    source={imagepath.bluetick}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, }}>
                                <Image
                                    style={{ height: 15, width: 15, marginRight: 5 }}
                                    source={imagepath.calender}
                                />
                                <Text
                                    style={{
                                        fontSize: Fontsize.fontTwelve,
                                        color: Colors.grey,
                                        paddingVertical: 3,
                                        fontFamily: Fonts.ProximaNovaRegular,
                                        justifyContent: "flex-end"
                                    }}>
                                    {Helper.setDateFormat(item.created_at)}
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                // flex: 1,
                            }}>
                            {/* Review given */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        backgroundColor: Colors.white,
                                        borderRadius: 10,
                                        justifyContent: 'center',
                                        paddingHorizontal: 10,
                                        paddingVertical: 3,
                                        borderWidth: 0.5,
                                        borderColor: "#B5B5B5"
                                    }}>
                                    <Rating
                                        type="custom"
                                        max={5}
                                        readonly="true"
                                        ratingColor={activeFeedbackTab == "p" ? "#FAC917" : Colors.red}
                                        ratingBackgroundColor={Colors.white}
                                        startingValue={item.rate}
                                        imageSize={12}
                                        iconWidth={15}
                                        iconHeight={15}
                                    />


                                </View>

                            </View>
                            <Text
                                style={{
                                    fontSize: Fontsize.fontTwelve,
                                    color: Colors.grey,
                                    // paddingLeft: 20,
                                    fontFamily: Fonts.ProximaNovaLight,
                                    // marginVertical: 10
                                }}>
                                {item.review}
                            </Text>

                            {/*           View recomended   by user*/}
                            <View
                                // onPress={() => navigation.navigate('profile')}s
                                style={{ flexDirection: "row", alignItems: 'center', justifyContent: "flex-end" }}>
                                <Image
                                    style={{ height: 14, width: 14 }}
                                    source={imagepath.likeicon}
                                />
                                {
                                    activeFeedbackTab == "p" ? (
                                        <Text
                                            style={{
                                                fontSize: Fontsize.fontTwelve,
                                                color: Colors.appcolor,
                                                marginLeft: 5,
                                                lineHeight: 15,
                                                fontFamily: Fonts.ProximaNovaRegular,
                                                marginRight: 10
                                            }}>
                                            {item.is_recommend == 1 ? "I recommended this doctor" : "Not recommended this doctor"}
                                        </Text>
                                    ) : null
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    const BravoCard = ({ item, index }) => {
        return (
            <Bravocard
                bravo_Card_name={item.name}
                bravo_Card_Details={item.department}
                hideButtons={true}
                item={item}
                index={index}
            />
        )
    };


    return (
        <ImageBackground
            source={Imagepath.homebg}
            resizeMode="cover"
            style={{ flex: 1, paddingBottom: 20, zIndex: 80 }}>

            {/* Card of Feedback */}
            <Header title={String.DetailedBusinessProfile} isback={"isBackTrue"} />
            <View style={{ flexDirection: "row", justifyContent: 'center', marginVertical: 12, marginHorizontal: 10 }}>
                <TouchableOpacity onPress={() => setActiveFeedbackTab("p")} style={[styles.feedBackTypeBtn, activeFeedbackTab == "p" ? styles.feedBackTypeBtnActive : null]}>
                    <Text style={[styles.feedBackTypeBtnTxt, activeFeedbackTab == "p" ? styles.feedBackTypeBtnTxtActive : null]}>Patient Feedback</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveFeedbackTab("c")} style={[styles.feedBackTypeBtn, activeFeedbackTab == "c" ? styles.feedBackTypeBtnActive : null]}>
                    <Text style={[styles.feedBackTypeBtnTxt, activeFeedbackTab == "c" ? styles.feedBackTypeBtnTxtActive : null]}>Clinician Feedback</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveFeedbackTab("b")} style={[styles.feedBackTypeBtn, activeFeedbackTab == "b" ? styles.feedBackTypeBtnActive : null]}>
                    <Text style={[styles.feedBackTypeBtnTxt, activeFeedbackTab == "b" ? styles.feedBackTypeBtnTxtActive : null]}>Bravo Card</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {activeFeedbackTab == "p" || activeFeedbackTab == "c" ?
                    <>
                        {Review?.map((item, index) => (
                            Feedback({ item, index })
                        ))
                        }
                    </>
                    : null
                }

                {activeFeedbackTab == "b" ?
                    // <>
                    //   {props.data?.business?.get_card.map((item, index) => (
                    //     BravoCard({ item, index })
                    //   ))
                    //   }
                    // </>
                    < FlatList
                        data={props?.allDetailsDoc?.business?.get_card}
                        renderItem={BravoCard}
                        // horizontal
                        style={{ alignSelf: "center", }}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => { item, index }}
                    />
                    : null
                }
            </ScrollView>
        </ImageBackground>
    );
};


const mapStateToProps = state => ({
    allDetailsDoc: state.doctor.allDetailsDoc,
    setData: state.doctor.setData,
    allUserPostData: state.doctor.allUserPostData
});

const ActionCreators = Object.assign(
    { getdoctordetails }
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailedBusinessProfile);
