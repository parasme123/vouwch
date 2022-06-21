// import { NavigationContainer } from '@react-navigation/native';
// import React, { useState, useEffect } from 'react';
// import {
//     View,
//     Text,
//     StyleSheet,
//     TouchableOpacity,
//     Dimensions,
//     ScrollView,
//     ImageBackground,
//     Image,
//     TextInput
// } from 'react-native';
// // import { TextInput } from 'react-native-gesture-handler';
// import LinearGradient from 'react-native-linear-gradient';
// import Imagepath from '../../common/imagepath';
// import Fonts from '../../common/Fonts';
// import String from '../../common/String';
// import { Header } from '../../common/Header';
// import Colors from '../../common/Colors';
// import ApiCall from '../../Lib/ApiCall';
// import Constants from '../../Lib/Constants';
// import SortUrl from '../../Lib/SortUrl';
// import { Validators } from '../../Lib/Validators';
// // import styles from './styles';
// // const { width, height } = Dimensions.get("window");






// const Editprofile = ({ navigation }) => {
// const [dactorName,setDoctorname ] = useState();
// const [Satification,setSatification] = useState();
// const [loaderVisible, setloaderVisible] = useState(false)


// const Signin_Validators = () => {
//     if (Validators.checkNotNull("Doctor Name", 2, 20, dactorName) 
//     ) { }
//     else{
//         Account_SettingApi()
//     }
// }
    

//     const Account_SettingApi = () => {
//         let data = {
//             business_name: dactorName,
//             category_id: Satification,
//         };
//         setloaderVisible(true)
//         ApiCall.ApiMethod(SortUrl.SetDoctorAccount, Constants.POST, data)
//             .then((response) => {
//                 setloaderVisible(false)
//                 if (response.status == Constants.Success) {
//                     AsyncStorageHelper.setData(Constants.USER_DATA, response.data)
//                     AsyncStorageHelper.setData(Constants.TOKEN, response.token)
//                     // handleNavigation({ type: 'setRoot', page: 'bottomtab', navigation: navigation, });
//                 } else {
//                     setloaderVisible(false)
//                     Toast.show(response.message);
//                 }
//             })
//             .catch((err) => {
//                 setloaderVisible(false)
//             });
//     }
//     // console.log(CateList, "asd*****Catelist");



//     return (
//         <ImageBackground source={Imagepath.background} style={styles.imagebg}>
//             <Header title={String.edit}  isback={"bottomtab"}/>

//             <Text style={styles.textInputHeader}>Doctor name</Text>
//             <TextInput
//                 style={styles.textInput}
//                 keyboardType="default"
//                 placeholder='name'
//                 placeholderTextColor={"#737373"}
//                 onChangeText={(text) => { setDoctorname(text) }}
//             />

//             <Text style={styles.textInputHeader}>Satification</Text>
//             <TextInput
//                 style={styles.textInput}
//                 keyboardType="default"
//                 placeholder='Satificaton'
//                 placeholderTextColor={"#737373"}
//                 onChangeText={(text) => { setSatification(text) }}
//             />
                 

//             <TouchableOpacity style={styles.button} onPress={()=>Signin_Validators()}>
//                 <Text style={styles.textButton}>Submit</Text>

//             </TouchableOpacity>

//         </ImageBackground>

//     );
// }

// const styles = StyleSheet.create({
//     imagebg: { flex: 1 },
//     containerView: { height: 65, width: "100%", backgroundColor: Colors.appcolor, },
//     arrowiconView: { flexDirection: "row", alignItems: "center", paddingVertical: 20, width: "90%", alignSelf: "center" },
//     arrowicon: { height: 21, width: 31 },
//     headerView: { flexDirection: "row", alignItems: "center", width: "90%", alignSelf: "center", justifyContent: "center", position: "absolute", paddingTop: 20 },
//     headerText: { color: "#ffffff", paddingLeft: 35, fontSize: 20, fontWeight: "500" },
//     button:{ marginHorizontal:20, backgroundColor:Colors.appcolor, height:45, justifyContent:"center", alignItems:"center", borderRadius:10, marginTop:30},
//     textButton:{color:'#fff',fontSize:16,fontFamily:Fonts.ProximaNovaSemibold},
//     textInputHeader: { color: "#000", fontSize: 16, marginHorizontal: 20, fontFamily: Fonts.ProximaNovaBold, marginVertical: 15, },
//     textInput: { borderWidth: 1, borderColor: "#CECECE", fontSize: 16, borderRadius: 10, marginHorizontal: 20, paddingLeft: 10, fontFamily: Fonts.ProximaNovaMedium, height: 45 },


// })

// export default Editprofile;




import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, Image, TextInput, ScrollView, Modal, PermissionsAndroid, } from 'react-native';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';
import String from '../../common/String';
import { Header } from '../../common/Header';
import Fonts from '../../common/Fonts';
import Imagepath from '../../common/imagepath';
import CustomDropDown from '../../common/CustomDropDown';
import Colors from '../../common/Colors';
import ApiCall from '../../Lib/ApiCall';
import RNPickerSelect from 'react-native-picker-select';
import SortUrl from '../../Lib/SortUrl';
import Constants from '../../Lib/Constants';
import AsyncStorageHelper from '../../Lib/AsyncStorageHelper';
const { width, height } = Dimensions.get("window");
const Editprofile = ({ navigation, }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [DropDownSec, setDropDownSec] = useState(false);
    const [selectvalue, setselectvalue] = useState('Select');
    const [image, setImage] = useState('');
    const [Location, setLocation] = useState('');
    const [Hours, setHours] = useState('');
    const [Aboutus, setAboutus] = useState('');
    const [loaderVisible, setloaderVisible] = useState(false)
    const [CateList, setCateList] = useState([])
    const [CateId, setCateId] = useState()

    // const onChangesecond = (value) => {
    //     setDropDownSec(!DropDownSec)
    //     setselectvalue(value)
    // }

    // const onPickersecond = () => {
    //     setDropDownSec(!DropDownSec)
    // }

    // Api 

    // const Signin_Validators=()=>{
    //     if(
    //       Validators.checkNotNull("service_hours", Hours)&&
    //       Validators.checkNotNull("service_location", Hours)&&
    //       Validators.checkNotNull("about_us", Hours)

    //       ) {
    //         Account_SettingApi()    
    //     }
    //  }

    useEffect(() => {
        Get_Categroy()
    }, [])


    const Get_Categroy = () => {
        ApiCall.ApiMethod(SortUrl.Get_categories, 'GET',).then((response) => {
            if (response.status == true) {
                let arr = []
                response.data.categories.map((item, label) => {
                    arr.push({ label: item.name, value: item.id })
                    console.log("arr====>>>", arr)
                })
                setCateList(arr)
            } else {
            }
        }
        );
    }

  
    

    const Account_SettingApi = () => {
        let data = {
            services: CateId,
            service_hours: Hours,
            service_location: Location,
            about_us: Aboutus,
            profile_picture: image,
        };
        setloaderVisible(true)
        ApiCall.ApiMethod(SortUrl.SetDoctorAccount, Constants.POST, data)
            .then((response) => {
                setloaderVisible(false)
                if (response.status == Constants.Success) {
                    AsyncStorageHelper.setData(Constants.USER_DATA, response.data)
                    AsyncStorageHelper.setData(Constants.TOKEN, response.token)
                    // handleNavigation({ type: 'setRoot', page: 'bottomtab', navigation: navigation, });
                } else {
                    setloaderVisible(false)
                    Toast.show(response.message);
                }
            })
            .catch((err) => {
                setloaderVisible(false)
            });
    }
    // console.log(CateList, "asd*****Catelist");



    return (
        <ImageBackground source={Imagepath.background} style={styles.imagebg}>
            {/*  Header*/}
            <Header title={String.ProfileSetting} isback={"bottomtab"} />

            <View style={styles.headerView2}>
                <TouchableOpacity >
                    <Image style={styles.headerbuttonIcon} source={Imagepath.Edit} resizeMode='contain' />
                </TouchableOpacity>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 90, }}>
                {/* container */}
              

                {/* details */}
                <Text style={styles.textInputHeader}>Services</Text>
              
                <View style={{ marginHorizontal: 20, borderColor: "#CECECE", borderWidth: 1, borderRadius: 10, }} >
                    <RNPickerSelect
                        placeholder={{ label: 'Select Categroy', value: null }}
                        onValueChange={(value) => setCateId(value)}
                        // onClose={(value) =>setCateId(value)}
                        items={CateList}
                        style={styles}
                    />
                </View>

                <Text style={styles.textInputHeader}>Service Location</Text>
                <TextInput
                    style={styles.textInput}
                    keyboardType="default"
                    placeholder='Serivice Location'
                    placeholderTextColor={"#737373"}
                    onChangeText={(text) => { setLocation(text) }}
                />
                <Text style={styles.textInputHeader}>Business Hours</Text>
                <TextInput
                    style={styles.textInput}
                    keyboardType="default"
                    placeholder='hours'
                    placeholderTextColor={"#737373"}
                    onChangeText={(text) => { setHours(text) }}
                />
                <Text style={styles.textInputHeader}>About  Us</Text>
                <TextInput
                    style={styles.textInputAbout}
                    keyboardType="default"
                    placeholder='message'
                    placeholderTextColor={"#737373"}
                    onChangeText={(text) => { setAboutus(text) }}
                />

                <TouchableOpacity onPress={() => Account_SettingApi()} style={styles.button}>
                    <Text style={styles.textButton}>Submit</Text>

                </TouchableOpacity>
            </ScrollView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <View style={{ paddingVertical: 20, marginHorizontal: 10, borderRadius: 20, backgroundColor: Colors.appcolor, }}>
                        <TouchableOpacity hitSlop={{ top: 30, bottom: 30, right: 30, left: 30 }} onPress={() => { setModalVisible(!modalVisible); }} style={{ position: 'absolute', top: 10, right: 20 }}>
                            <Image style={[styles.CancleArrow, { tintColor: '#fff', }]} source={Imagepath.crose} resizeMode='contain' />
                        </TouchableOpacity>

                        <Text style={styles.SelecttextStyle}> Select image from...</Text>
                        <View style={styles.modalView}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => camera(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => Gallery(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>gallery</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>



        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    imagebg: { flex: 1, },
    containerView: {
        height: 65,
        width: "100%",
        backgroundColor: Colors.appcolor,
    },
    arrowiconView: { flexDirection: "row", alignItems: "center", paddingVertical: 20, width: "90%", alignSelf: "center" },
    arrowicon: { height: 21, width: 31 },
    headerView: { flexDirection: "row", alignItems: "center", width: "90%", alignSelf: "center", justifyContent: "center", position: "absolute", paddingTop: 20 },
    headerView2: { position: "absolute", top: 15, right: 10, },
    profileImageview: { alignItems: "center", position: "relative", marginTop: 20 },
    ProfileImage: { height: 120, width: 120, borderRadius: 100 },
    CameraButton: { position: "absolute", paddingLeft: 100, paddingTop: 20 },
    CameraImage: { height: 28, width: 28, },
    dropdownView: { borderWidth: 1, borderColor: "#CECECE", fontSize: 15, borderRadius: 10, marginHorizontal: 20, paddingLeft: 10, fontWeight: "600", height: 50, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    dropdownText: { fontSize: 16, fontFamily: Fonts.ProximaNovaMedium },
    downArrow: { height: 8, width: 12, paddingRight: 50 },
    headerbuttonIcon: { height: 30, width: 30 },
    headerText: { color: "#ffffff", paddingLeft: 35, fontSize: 20, fontWeight: "500" },
    textInputHeader: { color: "#000", fontSize: 16, marginHorizontal: 20, fontFamily: Fonts.ProximaNovaBold, marginVertical: 15, },
    textInput: { borderWidth: 1, borderColor: "#CECECE", fontSize: 16, borderRadius: 10, marginHorizontal: 20, paddingLeft: 10, fontFamily: Fonts.ProximaNovaMedium, height: 45 },
    textInputAbout: { borderWidth: 1, borderColor: "#CECECE", fontSize: 16, borderRadius: 10, marginHorizontal: 20, paddingLeft: 10, fontFamily: Fonts.ProximaNovaMedium, height: 100 },
    button: { marginHorizontal: 20, backgroundColor: Colors.appcolor, height: 45, justifyContent: "center", alignItems: "center", borderRadius: 10, marginVertical: 15, marginBottom: 0 },
    textButton: { color: '#fff', fontSize: 16, fontFamily: Fonts.ProximaNovaSemibold },
    modalView: { borderRadius: 20, paddingVertical: 20, marginHorizontal: 16, flexDirection: "row", justifyContent: "space-between" },
    buttonClose: { backgroundColor: "#38C348", width: "40%", },
    textStyle: { fontSize: 18, fontFamily: Fonts.ProximaNovaRegular, color: "white", textAlign: "center", },
    SelecttextStyle: { fontSize: 20, fontFamily: Fonts.ProximaNovaMedium, color: "white", textAlign: "center", },
    CancleArrow: { height: 15, width: 15 },
    DropDownView: { width: '90%', zIndex: 5, alignSelf: 'center', justifyContent: 'center', paddingHorizontal: 10, backgroundColor: '#fff', borderRadius: 5, position: 'absolute', top: height / 3.3 },

})
export default Editprofile;


