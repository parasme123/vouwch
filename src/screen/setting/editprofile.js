import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    ImageBackground,
    Image,
    TextInput
} from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Imagepath from '../../common/imagepath';
import Fonts from '../../common/Fonts';
import String from '../../common/String';
import { Header } from '../../common/Header';
import Colors from '../../common/Colors';
import ApiCall from '../../Lib/ApiCall';
import Constants from '../../Lib/Constants';
import SortUrl from '../../Lib/SortUrl';
import { Validators } from '../../Lib/Validators';
// import styles from './styles';
// const { width, height } = Dimensions.get("window");






const Editprofile = ({ navigation }) => {
const [dactorName,setDoctorname ] = useState();
const [Satification,setSatification] = useState();
const [loaderVisible, setloaderVisible] = useState(false)


const Signin_Validators = () => {
    if (Validators.checkNotNull("Doctor Name", 2, 20, dactorName) 
    ) { }
    else{
        Account_SettingApi()
    }
}
    

    const Account_SettingApi = () => {
        let data = {
            business_name: dactorName,
            category_id: Satification,
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
            <Header title={String.edit}  isback={"bottomtab"}/>

            <Text style={styles.textInputHeader}>Doctor name</Text>
            <TextInput
                style={styles.textInput}
                keyboardType="default"
                placeholder='name'
                placeholderTextColor={"#737373"}
                onChangeText={(text) => { setDoctorname(text) }}
            />

            <Text style={styles.textInputHeader}>Satification</Text>
            <TextInput
                style={styles.textInput}
                keyboardType="default"
                placeholder='Satificaton'
                placeholderTextColor={"#737373"}
                onChangeText={(text) => { setSatification(text) }}
            />
                 

            <TouchableOpacity style={styles.button} onPress={()=>Signin_Validators()}>
                <Text style={styles.textButton}>Submit</Text>

            </TouchableOpacity>

        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    imagebg: { flex: 1 },
    containerView: { height: 65, width: "100%", backgroundColor: Colors.appcolor, },
    arrowiconView: { flexDirection: "row", alignItems: "center", paddingVertical: 20, width: "90%", alignSelf: "center" },
    arrowicon: { height: 21, width: 31 },
    headerView: { flexDirection: "row", alignItems: "center", width: "90%", alignSelf: "center", justifyContent: "center", position: "absolute", paddingTop: 20 },
    headerText: { color: "#ffffff", paddingLeft: 35, fontSize: 20, fontWeight: "500" },
    button:{ marginHorizontal:20, backgroundColor:Colors.appcolor, height:45, justifyContent:"center", alignItems:"center", borderRadius:10, marginTop:30},
    textButton:{color:'#fff',fontSize:16,fontFamily:Fonts.ProximaNovaSemibold},
    textInputHeader: { color: "#000", fontSize: 16, marginHorizontal: 20, fontFamily: Fonts.ProximaNovaBold, marginVertical: 15, },
    textInput: { borderWidth: 1, borderColor: "#CECECE", fontSize: 16, borderRadius: 10, marginHorizontal: 20, paddingLeft: 10, fontFamily: Fonts.ProximaNovaMedium, height: 45 },


})

export default Editprofile;