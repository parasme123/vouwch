import React, { useState } from 'react';
import {
    View,
    Image,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
    KeyboardAvoidingView

} from 'react-native';
import Imagepath from '../../common/imagepath';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fonts from '../../common/Fonts';
import { Validators } from '../../Lib/Validators';
import ApiCall from '../../Lib/ApiCall';
import SortUrl from '../../Lib/SortUrl';
import Constants from '../../Lib/Constants';
import CustomLoader from '../../Lib/CustomLoader';
import { Header } from '../../common/Header';
import String from '../../common/String';
import Colors from '../../common/Colors';

export default function ForgotPassword({ navigation }) {
    const [loaderVisible, setloaderVisible] = useState(false)
    const [Email, setEmail] = useState('')

     const Signin_Validators=()=>{
        if(
          Validators.checkNotNull("Email",2,50, Email)
          ) {
            Signin_CallApi()    
        }
     }


     Signin_CallApi=()=>{
        let data = {
            email: Email,
        };
          setloaderVisible(true)

          ApiCall.ApiMethod(SortUrl.ForgotPassword, Constants.POST,data)
            .then((response) => {
               setloaderVisible(false)
              if (response.status==true) {console.log( "sand",response.status)
                // console.log("anillllllllllllllllll",)
                navigation.navigate('otppage',{Email:Email})
                //    Toast.show(response.message);
              } else {
                // navigation.navigate('bottomtab')
                // Toast.show(response.message);
              }
            })
            .catch((err) => {
                setloaderVisible(false)           
             });
     }   
    return (
        <ImageBackground source={Imagepath.background} style={{ flex: 1 }}>
            <Header title={String.forgot} isback={true}/>

            < ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flex: 1 }}
            >
                <KeyboardAvoidingView
                    behavior="padding"
                    style={{ flexGrow: 1 }}>
                    <View style={styles.container}>
                        {/* Heading */}
                        <Text style={styles.header}>Forgot Password</Text>
                      

                        {/* container  */}
                        <View style={styles.textInputMainView}>
                            {/* textInput usernsme */}
                            <View opacity={0.5} style={styles.textinputUsernameView} >
                                <View style={styles.textinputpasswordView}>
                                    <Image source={Imagepath.email} resizeMode="contain" style={styles.usernameIcon} />
                                </View>
                                <TextInput
                                    placeholder='Enter Email'
                                    style={styles.textInputname}
                                    onChangeText={(text)=>{setEmail(text)}}
                                    value={Email}
                                    maxLength={40}
                                    keyboardType="default" />

                            </View>
                        
                            {/* Login Button */}
                            <TouchableOpacity onPress={()=>Signin_Validators()} style={styles.loginButton}>
                                <Text style={styles.loginButtonText}>Next</Text>
                            </TouchableOpacity>

                        </View>
                        
                        


                        {/* Register text */}
                        <View style={styles.registerview} >
                            <Text style={styles.registerText} >Not a member? </Text>
                            <TouchableOpacity onPress={() => { navigation.navigate("signup") }}>
                                <Text style={styles.registerButtonText}> Register now</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </KeyboardAvoidingView>
            </ScrollView >
            <CustomLoader loaderVisible={loaderVisible} />
        </ImageBackground>

    );
}

const styles = StyleSheet.create({

    saperateLineView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp("50%"),
        alignSelf: "center",
        margin: hp("2%"),
    },
    line: {
        flex: 1,
        height: hp("0.15%"),
        backgroundColor: '#737373'
    },
    orText: {
        width: wp("10%"),
        textAlign: 'center',
        color: "#737373",
        fontSize: hp("2%"),
        // fontSize:15
    },

    container: { width: "85%", alignSelf: "center", height: "100%", },
    header: { color: "#000000", fontSize: 34, marginTop: hp("9%"), marginBottom: hp("2%"), fontFamily: Fonts.ProximaNovaBold },
    textInputMainView: { width: "100%", alignSelf: "center", marginTop:70 },
    textinputUsernameView: { flexDirection: "row", borderColor: "#000000", borderWidth: 1, width: "100%", borderRadius: 30, alignSelf: "center", height: 48, marginBottom: hp("1%") },
    textinputpasswordView: { borderRightWidth: 1, borderColor: "#737373", height: 20, alignSelf: "center", justifyContent: "center", },
    usernameIcon: { tintColor: "#8F8B8B", alignSelf: "center", height: 15, width: 15, alignSelf: "center", marginLeft: "7%" },
    textInputname: { alignSelf: "center", fontSize: 15, paddingLeft: "4%", color: "#000000", width: "85%", fontFamily: Fonts.ProximaNovaLight },
    loginButton: { backgroundColor: "rgba(36, 95, 199, 1)", alignItems: "center", borderRadius: 30, height: 50, justifyContent: "center", marginVertical:30 },
    loginButtonText: { color: "#ffffff", fontSize: 16, fontFamily: Fonts.ProximaNovaSemibold },
    registerview: { flexDirection: "row", justifyContent: "center", },
    registerText: { color: "#000000", fontSize: 17, fontFamily: Fonts.ProximaNovaRegular },
    registerButtonText: { color: Colors.appcolor, fontSize: 17, fontFamily: Fonts.ProximaNovaBold }














})
