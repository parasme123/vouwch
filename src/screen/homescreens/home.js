
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, Image, FlatList, Modal, Alert, TextInput, Share } from 'react-native';
import styles from './homecss';
import { useNavigation } from '@react-navigation/native';
import Imagepath from '../../common/imagepath';
import ApiCall from '../../Lib/ApiCall';
import SortUrl from '../../Lib/SortUrl';
import CustomLoader from '../../Lib/CustomLoader';
import Comments from '../../modal/Comments';
import Message from '../../modal/Message';
import Constants from '../../Lib/Constants';
import Toast from 'react-native-simple-toast';
const Home = () => {
    const [modalVisibleComment, setModalVisibleComment] = useState(false);
    const [modalVisible, setModalVisible] = useState();
    const [categouryDataList, setcategouryDataList] = useState();
    const [DataCardList, setDataCardList] = useState();
    const [DoctorCardList, setDoctorCardList] = useState();
    const [loaderVisible, setloaderVisible] = useState(false)
    const [ReviewModalPopup, setReviewModalPopup] = useState()
    const [search, setsearch] = useState()
    const [commentModalPopup, setcommentModalPopup] = useState()
    const [Follows, setFollow] = useState([]);
    const [followDetails, setFollowDetails] = useState();
    const [searchData, setSearchData] = useState();

    const FollowButton = (item) => {
        let follows1 = [...Follows];
        if (!follows1.includes(item)) {          //checking weather array contain the id
            follows1.push(item);               //adding to array because value doesnt exists
        } else {
            follows1.splice(follows1.indexOf(item), 1);  //deleting
        }
        setFollow(follows1)
    }
    const MessagepropPage = (item) => {
        setReviewModalPopup(!modalVisible)
        setModalVisible(!modalVisible)
    }
    const CommentpropPage = (item) => {
        setcommentModalPopup(!commentModalPopup)
        setModalVisibleComment(!modalVisibleComment)
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
    // api  Home Page 
    const Call_CategouryApi = () => {
        setloaderVisible(true)
        ApiCall.ApiMethod(SortUrl.HomeData, 'GET',).then(
            (response) => {

                if (response.status == true) {
                    setloaderVisible(false)
                    setcategouryDataList(response.data.categories)
                    setDataCardList(response.data.cards)
                    setDoctorCardList(response.data.cards)
                } else {
                    setloaderVisible(false);

                }
            }
        );
    }


    // Follow API
    const Call_FollowApi = () => {
        const data = {
            business_id: DoctorCardList.id
        }
        ApiCall.ApiMethod(SortUrl.Follow, 'POST', data).then(
            (response) => {
                if (response.status == true) {
                    setFollowDetails(response.data)
                    FollowButton(item.id);
                } else {
                    Alert.alert("something went wrong")
                }
            }
        );
    };

    // Search API
    const Call_SearchApi = (search) => {
        setloaderVisible(true)
        const data = {
            keyword: search
        }
        ApiCall.ApiMethod(SortUrl.searchDoctor, 'POST', data).then(
            (response) => {
                if (response?.data?.data?.length > 0) {
                    setSearchData(response.data.data)
                    setloaderVisible(false);
                    // navigation.navigate('Doctordetails')
                } else {
                    setloaderVisible(false)
                    navigation.navigate('search')
                    Toast.show(response.message);
                    // console.log(searchData, "searchdata=======")
                    // console.log(search,"search============")
                }
                console.log(searchData, "search============")
            }
        );
    };


    // api   Profile 
    const Call_ProfileApi = () => {
        setloaderVisible(true)
        ApiCall.ApiMethod(SortUrl.Profile, 'GET').then(
            (response) => {
                if (response.status == true) {
                    navigation.navigate('profilepage', { isBackTrue: true })
                    setloaderVisible(false)
                } else {
                    setloaderVisible(false)
                    Toast.show(response.message);
                }
            }
        );
    }
    const SearchDetails = ({ item, index }) => {
        return (
            <TouchableOpacity key={item.id} style={[styles.searchkey, { borderTopLeftRadius: index == 0 ? 15 : 0, borderTopRightRadius: index == 0 ? 15 : 0, borderBottomLeftRadius: index - 2 == DataCardList.length ? 15 : 0, borderBottomRightRadius: index - 2 == DataCardList.length ? 15 : 0, }]} >
                <Text style={styles.searchName}>{item.business_name}</Text>
            </TouchableOpacity>
        )
    }

    const categoriesItemData = ({ item, index }) => {
        return (
            <TouchableOpacity key={item.id} style={styles.categoFlatelistView} >
                <Text style={styles.categoFlatelistViewText}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    // Card DATA Content
    const Card = ({ item, index }) => {
        return (
            <TouchableOpacity key={item.id}
                onPress={() => { navigation.navigate('Bravocard') }}
                style={[styles.cardContainer, { backgroundColor: index / 2 == index ? "#245FC714" : "#FEF8E4" }]}>
                <View style={styles.cardIconView} >
                    <Image style={styles.cardIcon} source={Imagepath.Bravo} />
                </View>
                {/*  Button of Share , Comment and Mesage  */}
                <View style={styles.shareCardView}>
                    <TouchableOpacity style={styles.shareButton} onPress={() => CommentpropPage(item.id)}>
                        <Image style={styles.shareButtonImage} source={Imagepath.commenticon} />
                        <Text style={styles.shareButtonText}>Comment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shareButton} onPress={() => { MessagepropPage(item.id) }}>
                        <Image style={styles.shareButtonImage} source={Imagepath.Messageicon} />
                        <Text style={styles.shareButtonText}>Message</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shareButton} onPress={onShare}>
                        <Image style={styles.shareButtonImage} source={Imagepath.Share} />
                        <Text style={styles.shareButtonText}>share</Text>
                    </TouchableOpacity>
                </View>

                {/* Hospital name and details   */}
                <View style={styles.cardHospitalView}>
                    <Text style={styles.hospitalName}>{item.hospital}</Text>
                    <Text style={styles.cardHospitalViewText}>{item.detail}</Text>
                    {/* photo & Videos Btn */}
                    <View style={styles.cardHospitalViewButton}>
                        <TouchableOpacity style={styles.cardPhotoButton}>
                            <Image style={styles.cardPhotoImage} source={Imagepath.Photo} />
                            <Text style={styles.cardPhotoVideoText}>Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.videoButton}>
                            <Image style={styles.cardVideoIcon} source={Imagepath.Video} />
                            <Text style={styles.cardPhotoVideoText}>Video</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }

    // Doctor CARDS
    const DoctorCard = ({ item, index }) => {
        return (
            <TouchableOpacity key={item.id}
                onPress={() => navigation.navigate('Doctordetails', { person: true })}
                style={[styles.doctorCardContainer, { backgroundColor: index / 2 == 0 ? "#D7EFFB" : "#FBEBE2" }]}>
                <Image style={styles.doctorCardIcon} source={Imagepath.doctors} />
                {/* Button of Share , Comment and Mesage */}
                <View style={styles.DoctorCardShareView}>
                    <TouchableOpacity style={styles.DoctorCardShareButton} onPress={() => CommentpropPage(item.id)}>
                        <Image style={styles.DoctorCardShareButtonIcon} source={Imagepath.commenticon} />
                        <Text style={styles.DoctorCardShareButtonText}>Comment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.DoctorCardShareButton} onPress={() => { MessagepropPage(item.id) }} >
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
                    <Text style={styles.doctorname}>Dr. Anthony</Text>
                    <Text style={styles.doctorProfile}>Emergency medicine</Text>
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
            style={{ flex: 1, paddingBottom: 20, zIndex: 80 }} >
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}>

                {/* Header */}
                <ImageBackground
                    source={Imagepath.headerbg}
                    resizeMode='stretch'
                    imageStyle={{}}
                    style={styles.headerbgImage}>
                    {/* Header View of profile notification */}
                    <View style={styles.notificationHeaserView}>
                        {/* navemenu Image */}
                        <TouchableOpacity onPress={() => navigation.navigate('menue')}>
                            <Image
                                source={Imagepath.navmenu}
                                resizeMode="contain"
                                imageStyle={{}}
                                style={styles.headerIconMenue} />
                        </TouchableOpacity>
                        {/* profile Notification */}
                        <View style={styles.profileView}>
                            <TouchableOpacity onPress={() => navigation.navigate('Reply', { isBack: true })} style={styles.notificationbutton}>
                                <Image
                                    source={Imagepath.massege}
                                    resizeMode='stretch'
                                    imageStyle={{}}
                                    style={styles.notificationIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Call_ProfileApi()} style={styles.profileButton}>
                                <Image
                                    source={Imagepath.profile}
                                    resizeMode='stretch'
                                    imageStyle={{}}
                                    style={styles.profileButton} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Search bar */}
                    <View style={styles.searchView}>
                        <TextInput
                            style={styles.textInputStyles}
                            placeholder="Search for a doctor, hospitalls etc"
                            placeholderTextColor={"white"}
                            onChangeText={(text) => {
                                setsearch(text)
                            }}
                            onShare={() => Call_SearchApi()}
                        />
                        <TouchableOpacity onPress={() => Call_SearchApi()} >
                            <Image
                                source={Imagepath.searchbtn}
                                resizeMode='stretch'
                                imageStyle={{}}
                                style={styles.searchImage} />
                        </TouchableOpacity>

                    </View>


                </ImageBackground>

                {/* Categouries: */}
                <View style={styles.categouryView}>
                    <Text style={styles.categouryViewText}>Categories:</Text>
                    <TouchableOpacity style={{}}>
                        <Text style={styles.categouryViewButtonText}>See All</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: "4%" }}>
                    < FlatList
                        data={categouryDataList}
                        style={{}}
                        // numColumns={2}
                        renderItem={categoriesItemData}
                        keyExtractor={item => item}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                    />
                </View>

                {/* Categouries: */}
                <View style={styles.bravoCategoury}>
                    <Text style={styles.bravoCategouryText}>Bravo Card</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Hospotalbravocard')}>
                        <Text style={styles.bravoCategouryButtonText}>See All</Text>
                    </TouchableOpacity>
                </View>
                {/* Bravo Card */}
                <View style={{ marginLeft: "4%" }}>
                    < FlatList
                        data={DataCardList}
                        style={{ flex: 1 }}
                        renderItem={Card}
                        numColumns={2}
                        keyExtractor={item => item}
                    />
                </View>

                {/* Featured Doctors */}
                <View style={styles.featuredView}>
                    <Text style={styles.featuredViewText}>Featured Doctors</Text>
                    <TouchableOpacity style={{}} onPress={() => { navigation.navigate("DoctorCard") }}>
                        <Text style={styles.featuredViewButtonText}>See All</Text>
                    </TouchableOpacity>
                </View>
                {/* Card of Doctors */}
                <View style={{ marginLeft: "4%" }}>
                    < FlatList
                        data={DoctorCardList}
                        style={{}}
                        renderItem={DoctorCard}
                        keyExtractor={item => item}
                        numColumns={2}
                    />
                </View>
                { 
                    <FlatList
                        data={searchData}
                        renderItem={SearchDetails}
                        keyExtractor={item => item}
                        style={{ width: "100%", zIndex: 100, position: "absolute", marginTop: 140 }}
                    />

                }

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