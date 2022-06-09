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
import LinearGradient from 'react-native-linear-gradient';
import String from '../../common/String';
import { Header } from '../../common/Header';
import Imagepath from '../../common/imagepath';
import { useNavigation } from '@react-navigation/native';
import Fonts from '../../common/Fonts';
import Colors from '../../common/Colors';
const Searchresult = () => {
    const navigation = useNavigation();


    return (
        <ImageBackground source={Imagepath.background} style={styles.imagebg}>
            {/* Header */}
          <Header title={String.searchresult}  isback={"bottomtab"} />
            <Image style={styles.imageHospital} source={Imagepath.hospital} />
            <Text style={styles.textdata}>No Data Found</Text>

            <TouchableOpacity onPress={()=>navigation.navigate("hospital")} style={styles.button}>
                <Text style={styles.textButton}>Add doctor/hospital and write a review</Text>

            </TouchableOpacity>

        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    imagebg: { flex: 1 },
    headerText: { color: "#ffffff", paddingLeft: 35, fontSize: 20, fontWeight: "500" },
    imageHospital:{height:196,width:216, borderRadius:100, alignSelf:"center", marginTop:80},
    textdata:{fontSize:20, color:"#000", fontFamily:Fonts.ProximaNovaBold,textAlign:"center", marginVertical:15},
    button: { marginHorizontal: 20, backgroundColor:Colors.appcolor, height: 45, justifyContent: "center", alignItems: "center", borderRadius: 10, marginTop: 5 },
    textButton: { color: '#fff', fontSize: 16,fontFamily:Fonts.ProximaNovaMedium }




})

export default Searchresult