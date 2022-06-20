import React, { useState } from 'react';
import { View, Image, Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput, ScrollView, ToastAndroid } from 'react-native';
import Imagepath from '../../common/imagepath';
import Toast from 'react-native-simple-toast';
import { Validators } from '../../Lib/Validators';
import ApiCall from '../../Lib/ApiCall';
import Constants from '../../Lib/Constants';
import SortUrl from '../../Lib/SortUrl';
import CustomLoader from '../../Lib/CustomLoader';
import { handleNavigation } from '../../navigator/Navigator';
import styles from './css';
const Signup = ({ navigation }) => {
    const [mark, setMark] = useState()
    const [loaderVisible, setloaderVisible] = useState(false)
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')

    const chexkBox = () => {
        setMark(!mark)
    }
    const Signin_Validators = () => {
        if (Validators.checkNotNull("First Name", 2, 20, firstname) &&
            Validators.checkNotNull("Last Name", 2, 20, lastname) &&
            Validators.checkNotNull("Email", 2, 20, email) &&
            Validators.checkPassword("Password", 7, 15, password) &&
            Validators.checkNotNull("Confirm Password", 2, 20, ConfirmPassword) &&
            Validators.checkMatch("Password", password, 'Confirm Password', ConfirmPassword)
        ) {
            if (!mark) {
                Toast.show('Please Select Terms of Services and Privacy Policy');
            } else {
                Check_User()
            }
            // Signup_CallApi()    
        }
    }
    //  
    const Check_User = () => {
        let data = {
            Email: email,
        };
        setloaderVisible(true)
        ApiCall.ApiMethod(SortUrl.CheckUser, Constants.POST, data)
            .then((response) => {
                if (response.status == Constants.Success) {
                    Signup_CallApi()
                }
                else {
                    Toast.show(response.message);
                }
            })
            .catch((err) => {
            });

    }
    const Signup_CallApi = () => {
        let Data = {
            user_type: 'User',
            first_name: firstname,
            last_name: lastname,
            email: email,
            password: password,
            confirm_password: ConfirmPassword,
            device_type: "Android",
            device_token: "User",


        };

        setloaderVisible(true)
        ApiCall.ApiMethod(SortUrl.Register, Constants.POST, Data)
            .then((response) => {
                setloaderVisible(false)
                if (response.status == true) {
                    handleNavigation({ type: 'setRoot', page: 'login', navigation: navigation, });
                    //    Toast.show(response.message);
                } else {

                    Toast.show(response.message);

                }
            })
            .catch((err) => {
                setloaderVisible(false)
            });
    }


    return (
        <ImageBackground source={Imagepath.background} style={{ flex: 1 }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                 >

                <View style={styles.container}>
                    <Text style={styles.headerText}>Sign up</Text>
                    <Text style={styles.headerSubText}>Create your personal account</Text>
                    <View style={styles.subContainer}>
                        <View style={styles.textInputView} >
                            <View style={styles.textInputSubView}>
                                <Image source={Imagepath.user} resizeMode="contain" style={styles.textinputIcon} />
                            </View>
                            <TextInput
                                placeholder='Enter your first name'
                                style={styles.textInputText}
                                onChangeText={(text) => { setfirstname(text) }}
                                value={firstname}
                                maxLength={40}
                                keyboardType="default" />

                        </View>
                        <View style={styles.textInputView} >
                            <View style={styles.textInputSubView}>
                                <Image source={Imagepath.user} resizeMode="contain" style={styles.textinputIcon} />
                            </View>
                            <TextInput
                                placeholder='Enter your last name'
                                style={styles.textInputText}
                                onChangeText={(text) => { setlastname(text) }}
                                value={lastname}
                                maxLength={40}
                                keyboardType="default" />

                        </View>
                        <View style={styles.textInputView} >
                            <View style={styles.textInputSubView}>
                                <Image source={Imagepath.email} resizeMode="contain" style={styles.emailIcon} />
                            </View>
                            <TextInput
                                placeholder='Enter your email address'
                                style={styles.textInputText}
                                onChangeText={(text) => { setemail(text) }}
                                value={email}
                                maxLength={40}
                                keyboardType="default" />

                        </View>
                        <View style={styles.textInputView} >
                            <View style={styles.textInputSubView}>
                                <Image source={Imagepath.lock} resizeMode="contain" style={styles.emailIcon} />
                            </View>
                            <TextInput
                                placeholder='Enter your  Password'
                                style={styles.textInputText}
                                onChangeText={(text) => { setpassword(text) }}
                                value={password}
                                maxLength={8}
                                keyboardType="default" />
                        </View>
                        <View style={styles.textInputView} >
                            <View style={styles.textInputSubView}>
                                <Image source={Imagepath.lock} resizeMode="contain" style={styles.emailIcon} />
                            </View>
                            <TextInput
                                placeholder='Enter Confirm Password'
                                style={styles.textInputText}
                                onChangeText={(text) => { setConfirmPassword(text) }}
                                value={ConfirmPassword}
                                maxLength={8}
                                keyboardType="default" />
                        </View>
                        <View style={styles.privacyView}>
                            <TouchableOpacity onPress={() => chexkBox()} style={{ paddingRight: 5 }}>
                                <Image source={mark ? require('../../assect/icon/yes.png') : require('../../assect/icon/check.png')}
                                    style={styles.checkbox} resizeMode="cover" />
                            </TouchableOpacity>
                            <Text style={styles.checkBoxText}>I agree to </Text>
                            <TouchableOpacity>
                                <Text style={styles.checkBoxText2}>Terms of Services </Text>
                            </TouchableOpacity>
                            <Text style={styles.checkBoxText}>and </Text>
                            <TouchableOpacity>
                                <Text style={styles.checkBoxText2}>Privacy Policy</Text>
                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity onPress={() => { Signin_Validators() }} style={styles.signupButton}>
                            <Text style={styles.signupButtonText}>SIGNUP</Text>
                        </TouchableOpacity>

                    </View>


                    {/* {/ Register text /} */}
                    <View style={styles.signinView} >
                        <Text style={styles.textsignin} >Already have an account? </Text>
                        <TouchableOpacity onPress={() => { navigation.navigate("login", { UserType: 'PERSONAL' }) }}>
                            <Text style={styles.button}>Sign in</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView >
            <CustomLoader loaderVisible={loaderVisible} />

        </ImageBackground>

    );
}

export default Signup