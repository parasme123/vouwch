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
import Toast from 'react-native-simple-toast';
import Imagepath from '../../common/imagepath';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fonts from '../../common/Fonts';
import { Validators } from '../../Lib/Validators';
import ApiCall from '../../Lib/ApiCall';
import SortUrl from '../../Lib/SortUrl';
import Constants from '../../Lib/Constants';
import CustomLoader from '../../Lib/CustomLoader';
import AsyncStorageHelper from '../../Lib/AsyncStorageHelper';
import { handleNavigation } from '../../navigator/navigator';
import Colors from '../../common/Colors';

export default function Login({ navigation, route }) {
    const [securepasswordIcon, setSecurepassworddIcon] = useState(true)
    const [loaderVisible, setloaderVisible] = useState(false)
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    // const  personal  = route.params;
    const  personal  = route.params?route.params.personal:false;

    const securepassworddIcon = () => {
         setSecurepassworddIcon(!securepasswordIcon)
     }

     const Signin_Validators=()=>{
        if(
          Validators.checkNotNull("Email",2,20, Email)&&
          Validators.checkNotNull("Password",2,20, Password)
          ) {
            Check_User()    
        }
     }

     const Check_User=()=>{
        let data = {
            Email: Email,
        };
          setloaderVisible(true)
          ApiCall.ApiMethod(SortUrl.CheckUser, Constants.POST,data)
            .then((response) => {
              console.log('=====Check',response)
              if (response.user_status==Constants.success) {
                 Signin_CallApi() 
                setloaderVisible(false) 
               } 
               else {
                setloaderVisible(false)
                Toast.show(response.message);
              }
            })
            .catch((err) => {
                setloaderVisible(false)           
             });
    
        } 
    
      const Signin_CallApi=()=>{
        let data = {
            email: Email,
            password : Password,
            device_token :12345,
            device_type:"Android"
        };
          setloaderVisible(true)
          ApiCall.ApiMethod(SortUrl.UserLogin, Constants.POST,data)
            .then((response) => {
               setloaderVisible(false)
              if (response.status==Constants.Success) {
                    AsyncStorageHelper.setData(Constants.USER_DATA, response.data)
                    AsyncStorageHelper.setData(Constants.TOKEN, response.token)
                    // AsyncStorageHelper.setData(Constants.UserType, response.data.)
                    handleNavigation({ type: 'setRoot', page: 'bottomtab', navigation: navigation, });
              } else {
                  setloaderVisible(false)
                  Toast.show(response.message);
              }
            })
            .catch((err) => {
                setloaderVisible(false)           
             });
         }

         const Registernow=()=>{
            if(route.params.UserType=='PERSONAL'){
               navigation.navigate("signup")
            }else{
             navigation.navigate("business")
            }
       
        }
     
     
     
    return (
        <ImageBackground source={Imagepath.background} style={{ flex: 1 }}>
            < ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flex: 1 }}
            >
                <KeyboardAvoidingView
                    behavior="padding"
                    style={{ flexGrow: 1 }}>
                    <View style={styles.container}>
                        {/* Heading */}
                        {/* <View style={{ justifyContent: "center", width: "100%", alignSelf: "center" }}> */}
                        <Text style={styles.header}>Login Account</Text>
                        {/* sub heading */}
                        <Text style={styles.subHeader}>Hello, Welcome back to our {'\n'} account</Text>
                        {/* </View> */}

                        {/* container  */}
                        <View style={styles.textInputMainView}>
                            {/* textInput usernsme */}
                            <View  style={styles.textinputUsernameView} >
                                <View style={styles.textinputpasswordView}>
                                    <Image source={Imagepath.user} resizeMode="contain" style={styles.usernameIcon} />
                                </View>
                                <TextInput
                                    placeholder='Enter Username'
                                    style={styles.textInputname}
                                    onChangeText={(text)=>{setEmail(text)}}
                                    value={Email}
                                    maxLength={40}
                                    keyboardType="default" />

                            </View>
                            {/* textInput password */}
                            <View  style={styles.textInputPasswordView} >
                                <View style={styles.textinputpasswordView}>
                                    <Image source={Imagepath.lock} resizeMode="contain" style={styles.passwordIcon} />
                                </View>
                                <TextInput
                                    placeholder='Enter Password'
                                    style={styles.textinputPassword}
                                    keyboardType="default"
                                    onChangeText={(text)=>{setPassword(text)}}
                                    value={Password}
                                    maxLength={20}
                                    blurOnSubmit={false} secureTextEntry={securepasswordIcon ? true : false}
                                // ref={one}
                                />
                                <TouchableOpacity onPress={() => securepassworddIcon()} >
                                    <Image source={securepasswordIcon ? Imagepath.eyehide :
                                        Imagepath.eye}tintColor="#CCC"
                                        style={{ width: 25, height: 25, }}
                                    />
                                </ TouchableOpacity>

                            </View>

                            {/* Forgot password */}
                            <TouchableOpacity style={styles.forgotButton} onPress={()=>navigation.navigate("forgotpassword")}>
                                <Text style={styles.forgotButtontext} >Forgot password?</Text>
                            </TouchableOpacity>
                            {/* Login Button */}
                            <TouchableOpacity onPress={() =>Signin_Validators() } style={styles.loginButton}>
                                <Text style={styles.loginButtonText}>LOGIN</Text>
                            </TouchableOpacity>

                        </View>
                        {/* Or line */}
                        <View style={styles.orLineView}>
                            <View style={styles.subView} />
                            <View>
                                <Text style={styles.orText}>or continue with</Text>
                            </View>
                            <View style={styles.subView} />
                        </View>
                        {/* social button */}
                        <View style={styles.socialButtonView}>
                            <TouchableOpacity style={styles.googleButton}>
                                <Image style={styles.googleIcon} source={Imagepath.google} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.fbButton}>
                                <Image style={styles.fbIcon} source={Imagepath.fb} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.twiterButton}>
                                <Image style={styles.twiterIcon} source={Imagepath.twitter} />
                            </TouchableOpacity>

                        </View>

                        {/* Register text */}
                        <View style={styles.registerview} >
                            <Text style={styles.registerText} >Not a member? </Text>
                            <TouchableOpacity onPress={() => {Registernow()}}>
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
    subHeader: { color: "#737373", fontSize: 17, marginBottom: hp("5%"), fontFamily: Fonts.ProximaNovaRegular },
    textInputMainView: { width: "100%", alignSelf: "center", },
    textinputUsernameView: { flexDirection: "row", borderColor: "#CCC", borderWidth: 1, width: "100%", borderRadius: 30, alignSelf: "center", height: 48, marginBottom: hp("1%") },
    textinputpasswordView: { borderRightWidth: 1, borderColor: "#CCC", height: 20, alignSelf: "center", justifyContent: "center", },
    usernameIcon: { tintColor: "#8F8B8B", alignSelf: "center", height: 15, width: 15, alignSelf: "center", marginLeft: "7%" },
    textInputname: { alignSelf: "center", fontSize: 15, paddingLeft: "4%", color: "#000000", width: "85%", fontFamily: Fonts.ProximaNovaLight },
    textInputPasswordView: { flexDirection: "row", borderColor: "#CCC", borderWidth: 1, width: "100%", borderRadius: 30, alignSelf: "center", height: 48, marginVertical: hp("3%"), alignItems: "center" },
    passwordIcon: { tintColor: "#8F8B8B", alignSelf: "center", height: 18, width: 18, alignSelf: "center", marginLeft: "7%" },
    textinputPassword: { alignSelf: "center", fontSize: 15, paddingLeft: "4%", color: "#000000", width: "75%", fontFamily: Fonts.ProximaNovaLight },
    forgotButton: { marginBottom: hp("3%"), alignSelf: "flex-end", },
    forgotButtontext: { color: "rgba(36, 95, 199, 1)", fontSize: 15, fontFamily: Fonts.ProximaNovaMedium },
    loginButton: { backgroundColor: "rgba(36, 95, 199, 1)", alignItems: "center", borderRadius: 30, height: 50, justifyContent: "center" },
    loginButtonText: { color: "#ffffff", fontSize: 16, fontFamily: Fonts.ProximaNovaSemibold },
    orLineView: { flexDirection: 'row', alignItems: 'center', width: "65%", alignSelf: "center", marginTop: hp("4%"), },
    subView: { flex: 1, height: 1, backgroundColor: '#929397' },
    orText: { width: 150, textAlign: 'center', color: "#929397", fontSize: 16, fontFamily: Fonts.ProximaNovaRegular },
    socialButtonView: { flexDirection: "row", width: "85%", justifyContent: "space-between", alignSelf: "center", marginVertical: hp("5%"), },
    googleButton: { borderColor: "#EA4335", width: 83, height: 48, borderRadius: 10, justifyContent: "center", alignItems: "center", borderWidth: 1 },
    googleIcon: { height: 18, width: 18, },
    fbButton: { borderColor: "#3B5998", width: 83, height: 48, borderRadius: 10, justifyContent: "center", alignItems: "center", borderWidth: 1 },
    fbIcon: { height: 23, width: 23, },
    twiterButton: { borderColor: "#27AAE2", width: 83, height: 48, borderRadius: 10, justifyContent: "center", alignItems: "center", borderWidth: 1 },
    twiterIcon: { height: 33, width: 33, },
    registerview: { flexDirection: "row", justifyContent: "center", },
    registerText: { color: "#000000", fontSize: 17, fontFamily: Fonts.ProximaNovaRegular },
    registerButtonText: { color:Colors.appcolor, fontSize: 17, fontFamily: Fonts.ProximaNovaBold }














})
