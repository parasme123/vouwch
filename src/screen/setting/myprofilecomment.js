import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
    ImageBackground,
    Image,
    FlatList
} from 'react-native';
import Imagepath from '../../common/imagepath';
import Fonts from '../../common/Fonts';
import { Rating, AirbnbRating } from 'react-native-ratings';
import ToggleSwitch from 'toggle-switch-react-native'
import Colors from '../../common/Colors';
export default Myprofilecomment = ({ navigation }) => {
    const [rating, setRating] = useState();
    return (
        <ImageBackground source={Imagepath.background} style={{ flex: 1 }}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.arrowView}>
                    <TouchableOpacity >
                        <Image style={styles.arrowicon} source={Imagepath.back} />
                    </TouchableOpacity>

                </View>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Profile Setting</Text>
                </View>

            </View>

            <View style={styles.container}>
                <Image style={styles.profileIcon} source={Imagepath.doctors} />
                {/* Button of Share , Comment and Mesage */}
                <View style={styles.moduleView}>
                    <TouchableOpacity style={styles.moduleButton}>
                        <Image style={styles.moduleIcon} source={Imagepath.voicecall} />
                        <Text style={styles.moduleText}>voice Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.moduleButton}>
                        <Image style={styles.moduleIcon} source={Imagepath.Messageicon} />
                        <Text style={styles.moduleText}>Message</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.moduleButton}>
                        <Image style={styles.moduleIcon} source={Imagepath.videocall} />
                        <Text style={styles.moduleText}>Video Call</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.doctorname}>Dr. Darren Elder</Text>
                <Text style={styles.field}>Medicine & Heart Spelist</Text>
                <Text style={styles.organization}>Good Health Clinic, MBBS, FCPS</Text>

                <Rating
                    rating={rating}
                    max={5}
                    style={styles.ratingView}
                    imageSize={30}
                    iconWidth={24}
                    iconHeight={24}
                    onRate={setRating}
                />

            </View>

            <View style={styles.container1}>

            <Text style={styles.pageText1}>About Serena</Text>
            <Text style={styles.pageText2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>

                
               
            </View>
            

        </ImageBackground >

    );
}

const styles = StyleSheet.create({
    button: { height: 40, width: 168, justifyContent: "center", alignItems: "center", borderRadius: 20, },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    container: {
        width: "90%", height: 375, alignSelf: "center", alignItems: "center",
        position: "absolute", backgroundColor: "#ffffff", borderRadius: 10, marginTop: 65,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#00000012',
        borderBottomWidth: 2,
        shadowColor: '#00000012',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.6,
        shadowRadius: 7,
    },
    container1: {
        width: "90%", alignSelf: "center", marginTop: 330,

    },
    header: { height: 130, width: "100%", backgroundColor:Colors.appcolor, },
    arrowView: { flexDirection: "row", alignItems: "center", paddingVertical: 15, width: "90%", alignSelf: "center" },
    arrowicon: { height: 21, width: 31 },
    headerTextView: { flexDirection: "row", alignItems: "center", width: "90%", alignSelf: "center", justifyContent: "center", position: "absolute", paddingTop: 15 },
    headerText: { color: "#ffffff", paddingLeft: 35, fontSize: 20, fontWeight: "500" },
    profileIcon: { height: 120, width: 120, borderRadius: 100, marginVertical: 20 },
    moduleView: { flexDirection: "row", width: "50%", justifyContent: "space-around", alignSelf: "center", },
    moduleIcon: { height: 29, width: 29 },
    moduleText: { color: "#929397", fontSize: 9, fontFamily:Fonts.ProximaNovaRegular },
    moduleButton: { alignItems: "center" },
    doctorname: { color:Colors.appcolor, fontSize: 25, fontFamily:Fonts.ProximaNovaSemibold },
    field: { color: "#000", fontSize: 18, fontFamily:Fonts.ProximaNovaSemibold, marginVertical: 10 },
    organization: { color: "#858585", fontSize: 14,fontFamily:Fonts.ProximaNovaRegular },
    ratingView: { marginVertical: 15, },
    pageText1: { color: "#000", fontSize: 20, marginHorizontal: 15,marginBottom:10, fontFamily:Fonts.ProximaNovaBold },
    pageText2: { color: "#000", fontSize: 14, marginHorizontal: 15,opacity:0.75, fontFamily:Fonts.ProximaNovaRegular }




})

