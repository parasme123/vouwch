// import React, { useState } from 'react';
// import {
//     View,
//     Image,
//     Text,
//     ImageBackground,
//     StyleSheet,
//     TouchableOpacity,
//     TextInput,
//     ScrollView,
//     KeyboardAvoidingView,
//     CheckBox

// } from 'react-native';
// import Imagepath from '../../common/imagepath';
// import LinearGradient from 'react-native-linear-gradient';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// // import styles from './css';
// // const one = useRef(null)
// // const [Password, setPassword] = useState('');
// // const [securepasswordIcon, setSecurepassworddIcon] = useState(true)
// // const securepassworddIcon = () => {
// //     setSecurepassworddIcon(!securepasswordIcon)
// // }

// import Fonts from '../../common/Fonts';

// const Signup = ({ navigation }) => {
//     const [mark, setMark] = useState()
//     const chexkBox = () => {
//         setMark(!mark)
//     }
//     return (
//         <ImageBackground source={Imagepath.background} style={{ flex: 1 }}>

//             < ScrollView
//                 showsVerticalScrollIndicator={false}
//                 contentContainerStyle={{ flexGrow: 1 }}
//             >

//                 <View style={styles.container}>
//                     {/* Heading */}
//                     {/* <View style={{ justifyContent: "center", width: "100%", alignSelf: "center" }}> */}
//                     <Text style={styles.headerText}>Sign up</Text>
//                     {/* sub heading */}
//                     <Text style={styles.headerSubText}>Create your personal account</Text>
//                     {/* </View> */}

//                     {/* container  */}
//                     <View style={styles.subContainer}>
//                         {/* textInput First name */}
//                         <View opacity={0.5} style={styles.textInputView} >
//                             <View style={styles.textInputSubView}>
//                                 <Image source={Imagepath.user} resizeMode="contain" style={styles.textinputIcon} />
//                             </View>
//                             <TextInput
//                                 placeholder='Enter your first name'
//                                 style={styles.textInputText}
//                                 keyboardType="default" />

//                         </View>
//                         {/* textInput last name */}
//                         <View opacity={0.5} style={styles.textInputView} >
//                             <View style={styles.textInputSubView}>
//                                 <Image source={Imagepath.user} resizeMode="contain" style={styles.textinputIcon} />
//                             </View>
//                             <TextInput
//                                 placeholder='Enter your last name'
//                                 style={styles.textInputText}
//                                 keyboardType="default" />

//                         </View>
//                         {/* textInput email address */}
//                         <View opacity={0.5} style={styles.textInputView} >
//                             <View style={styles.textInputSubView}>
//                                 <Image source={Imagepath.email} resizeMode="contain" style={styles.emailIcon} />
//                             </View>
//                             <TextInput
//                                 placeholder='Enter your email address'
//                                 style={styles.textInputText}
//                                 keyboardType="default" />

//                         </View>
//                         {/* textInput password*/}
//                         <View opacity={0.5} style={styles.textInputView} >
//                             <View style={styles.textInputSubView}>
//                                 <Image source={Imagepath.lock} resizeMode="contain" style={styles.emailIcon} />
//                             </View>
//                             <TextInput
//                                 placeholder='Enter your  password'
//                                 style={styles.textInputText}
//                                 keyboardType="default" />

//                         </View>
//                         {/* textInput password */}
//                         <View opacity={0.5} style={styles.textInputView} >
//                             <View style={styles.textInputSubView}>
//                                 <Image source={Imagepath.lock} resizeMode="contain" style={styles.emailIcon} />
//                             </View>
//                             <TextInput
//                                 placeholder='Enter your password'
//                                 style={styles.textInputText}
//                                 keyboardType="default" />

//                         </View>
//                         <View style={styles.privacyView}>
//                             <TouchableOpacity onPress={() => chexkBox()} style={{ paddingRight: 5 }}>
//                                 <Image source={mark ? require('../../assect/icon/yes.png') : require('../../assect/icon/check.png')}
//                                     style={styles.checkbox} resizeMode="cover" />
//                             </TouchableOpacity>
//                             <Text style={styles.checkBoxText}>I agree to </Text>
//                             <TouchableOpacity>
//                                 <Text style={styles.checkBoxText2}>Terms of Services </Text>
//                             </TouchableOpacity>
//                             <Text style={styles.checkBoxText}>and </Text>
//                             <TouchableOpacity>
//                                 <Text style={styles.checkBoxText2}>Privacy Policy</Text>
//                             </TouchableOpacity>

//                         </View>

//                         <TouchableOpacity style={styles.signupButton}>
//                             <Text style={styles.signupButtonText}>SIGNUP</Text>
//                         </TouchableOpacity>

//                     </View>

//                     {/* Register text */}
//                     <View style={styles.signinView} >
//                         <Text style={styles.textsignin} >Already have an account? </Text>
//                         <TouchableOpacity onPress={() => { navigation.navigate("login") }}>
//                             <Text style={styles.button}> Sign in</Text>
//                         </TouchableOpacity>
//                     </View>

//                 </View>
//             </ScrollView >
//         </ImageBackground>

//     );
// }

// const styles = StyleSheet.create({
//     saperateLineView: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         width: wp("50%"),
//         alignSelf: "center",
//         margin: hp("2%"),
//     },
//     line: {
//         flex: 1,
//         height: hp("0.15%"),
//         backgroundColor: '#737373'
//     },
//     orText: {
//         width: wp("10%"),
//         textAlign: 'center',
//         color: "#737373",
//         fontSize: hp("2%"),
//         // fontSize:15
//     },
//     container: { width: "85%", alignSelf: "center", height: "100%", flexGrow: 1 },
//     headerText: { color: "#000000", fontSize: 34, marginTop: "18%", marginBottom: "4%", fontFamily: Fonts.ProximaNovaBold },
//     headerSubText: { color: "#737373", fontSize: 17, marginBottom: "10%", fontFamily: Fonts.ProximaNovaRegular },
//     subContainer: { width: "100%", alignSelf: "center", },
//     textInputView: { flexDirection: "row", borderColor: "#000000", borderWidth: 1, width: "100%", borderRadius: 30, alignSelf: "center", height: 50, marginBottom: "7%" },
//     textInputSubView: { borderRightWidth: 1, borderColor: "#737373", height: 20, alignSelf: "center", justifyContent: "center", },
//     textinputIcon: { tintColor: "#8F8B8B", alignSelf: "center", height: 15, width: 15, alignSelf: "center", marginLeft: "7%" },
//     textInputText: { alignSelf: "center", fontSize: 15, paddingLeft: "4%", color: "#000000", fontFamily: Fonts.ProximaNovaLight, width: "85%" },
//     emailIcon: { tintColor: "#8F8B8B", alignSelf: "center", height: 15, width: 15, alignSelf: "center", marginLeft: "7%" },
//     privacyView: { flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: "6%", width: "85%", alignSelf: "center" },
//     checkbox: { height: 30, width: 30, borderRadius: 5, tintColor: "#707070" },
//     checkBoxText: { color: "#000000", fontFamily: Fonts.ProximaNovaRegular, fontSize: 15 },
//     checkBoxText2: { color: "#245FC7", fontFamily: Fonts.ProximaNovaRegular, fontSize: 15 },
//     signupButton: { backgroundColor: "rgba(36, 95, 199, 1)", alignItems: "center", borderRadius: 20, height: "10%", justifyContent: "center" },
//     signupButtonText: { color: "#ffffff", fontFamily: Fonts.ProximaNovaSemibold, fontSize: 15 },
//     signinView: { flexDirection: "row", justifyContent: "center", },
//     textsignin: { color: "#000000", fontSize: 20, fontFamily: Fonts.ProximaNovaRegular },
//     button: { color: "#245FC7", fontSize: 20, fontFamily: Fonts.ProximaNovaSemibold },

// })
// export default Signup
