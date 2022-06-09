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
import AsyncStorage from '@react-native-async-storage/async-storage';
let STORAGE_KEY = '@user_input';

const Home = () => {
    const [modalVisibleComment, setModalVisibleComment] = useState(false);
    const [modalVisibleMessage, setModalVisibleMessage] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [DoctorCardList, setDoctorCardList] = useState();
    const [loaderVisible, setloaderVisible] = useState(false);
    const [Follows, setFollow] = useState([]);
    const [ReviewModalPopup, setReviewModalPopup] = useState()
    const [commentModalPopup, setcommentModalPopup] = useState()
    const [followDetails, setFollowDetails] = useState();
    const [input, setInput] = useState('');

    // const saveData = async () => {
    //     try {
    //       await AsyncStorage.setDoctorCardList(STORAGE_KEY, id)
    //       alert('Data successfully saved')
    //     } catch (e) {
    //       alert('Failed to save the data to the storage')
    //     }
    //   }

    const MessagepropPage = (item, Index) => {
        setReviewModalPopup(!modalVisible)
        setModalVisible(!modalVisible)
    }
    const CommentpropPage = (item) => {
        setcommentModalPopup(!commentModalPopup)
        setModalVisibleComment(!modalVisibleComment)
        console.log("item", item)
    }
    console.log("Message--------", CommentpropPage)
    console.log("Message--------", MessagepropPage)


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
        Call_CategouryApi();
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
    // api   Doctor Card
    const Call_CategouryApi = () => {
        setloaderVisible(true)
        ApiCall.ApiMethod(SortUrl.AllServices, 'GET',).then(
            (response) => {

                if (response.status == true) {
                    setloaderVisible(false)
                    setDoctorCardList(response.data.services)
                    // setCall(response.data.cards)
                } else {
                    setloaderVisible(false)
                }
            }
        );
    }
// follow Api
    const Call_FollowApi = () => {
        const data = {
            business_id: DoctorCardList.id
        }
        ApiCall.ApiMethod(SortUrl.Follow, 'POST', data).then(
            (response) => {
                if (response.status == true) {
                    // setFollowDetails(response.data)
                    // console.log(followDetails, "response===========")
                    FollowButton(item.id);
                } else {
                    Alert.alert("something went wrong")
                }
            }
        );
    }


    // Doctor CARDS
    const DoctorCard = ({ item, index }) => {
        return (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('Doctordetails', { person: true, detail: DoctorCardList, doctorId: item, })} style={[styles.doctorCardContainer, { backgroundColor: index % 2 == 0 ? "#D7EFFB" : "#FBEBE2" }]}>
                {/* <View style={styles.doctorCardIconVIew}> */}
                <Image style={styles.doctorCardIcon} source={Imagepath.doctors} />
                {/* </View> */}
                {/* Button of Share , Comment and Mesage */}
                <View style={styles.DoctorCardShareView}>
                    <TouchableOpacity style={styles.DoctorCardShareButton} onPress={() => CommentpropPage(item.id)}>
                        <Image style={styles.DoctorCardShareButtonIcon} source={Imagepath.commenticon} />
                        <Text style={styles.DoctorCardShareButtonText}>Comment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.DoctorCardShareButton} onPress={() => { MessagepropPage(item.id) }}>
                        <Image style={styles.DoctorCardShareButtonIcon} source={Imagepath.Messageicon} />
                        <Text style={styles.DoctorCardShareButtonText}>Message</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.DoctorCardShareButton} onPress={() => Call_FollowApi(item.id)}>
                        <Image style={styles.DoctorCardShareButtonIcon} source={Follows?.includes(item.id) ? Imagepath.following : Imagepath.Followicon} />
                        {Follows?.includes(item.id) ? <Text style={styles.DoctorCardShareButtonText}>Following</Text> :
                            <Text style={styles.DoctorCardShareButtonText}>Follow</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.DoctorCardShareButton} onPress={onShare} >
                        <Image style={styles.DoctorCardShareButtonIcon} source={Imagepath.Share} />
                        <Text style={styles.DoctorCardShareButtonText}>share</Text>
                    </TouchableOpacity>
                </View>
                {/* Hospital name and details */}
                <View style={styles.doctorDetails}>

                    <Text style={styles.doctorname}>{item.name}</Text>
                    <Text style={styles.doctorProfile}>{item.description}</Text>
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
                        <Text style={styles.ratingText}>3.2
                            <Text style={styles.clinicianReview}>Clinician's Review</Text></Text>
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
                        <Text style={styles.ratingText}>3.2
                            <Text style={styles.clinicianReview}>Patient Review</Text></Text>

                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <ImageBackground
            source={Imagepath.homebg}
            resizeMode='cover'
            style={{ flex: 1, }} >
            <Header title={String.doctorcard} isback={true} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                {/* Header */}

                < FlatList
                    data={DoctorCardList}
                    style={{flex:1}}
                    renderItem={DoctorCard}
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


            </ScrollView>
            <CustomLoader loaderVisible={loaderVisible} />
        </ImageBackground>

    );
}

export default Home;

