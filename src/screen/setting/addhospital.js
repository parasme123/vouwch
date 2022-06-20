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
import { Header } from '../../common/Header';
import String from '../../common/String';
import Fonts from '../../common/Fonts';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../common/Colors';
const Addhospital = () => {

    const navigation = useNavigation();

    return (
        <ImageBackground source={Imagepath.background} style={styles.imagebg}>
           {/* header */}
           <Header title={String.addhospital} isback={"bottomtab"} />
            {/* container for Text input */}
            <ScrollView
            showsHorizontalScrollIndicator="false"
            style={{flexGrow:1}}>
            <Text style={styles.textInputHeader}>Name</Text>
            <TextInput
                style={styles.textInput}
                keyboardType="default"
                placeholder='Name'
                placeholderTextColor={"#737373"}
            />
            <Text style={styles.textInputHeader}>Address</Text>
            <TextInput
                style={styles.textInput}
                keyboardType="default"
                placeholder='Address'
                placeholderTextColor={"#737373"}
            />
            <Text style={styles.textInputHeader}>Phone No.</Text>
            <TextInput
                style={styles.textInput}
                keyboardType='number-pad'
                placeholder='Phone No.'
                placeholderTextColor={"#737373"}
            />
            <Text style={styles.textInputHeader}>Street</Text>
            <TextInput
                style={styles.textInput}
                keyboardType="default"
                placeholder='Street'
                placeholderTextColor={"#737373"}
            />
            <Text style={styles.textInputHeader}>City</Text>
            <TextInput
                style={styles.textInput}
                keyboardType="default"
                placeholder='City'
                placeholderTextColor={"#737373"}
            />
            <Text style={styles.textInputHeader}>State</Text>
            <TextInput
                style={styles.textInput}
                keyboardType="default"
                placeholder='State'
                placeholderTextColor={"#737373"}
            />
            <Text style={styles.textInputHeader}>Post Code</Text>
            <TextInput
                style={styles.textInput}
                keyboardType='number-pad'
                placeholder='Post Code'
                placeholderTextColor={"#737373"}
            />
            <Text style={styles.textInputHeader}>Country</Text>
            <TextInput
                style={styles.textInput}
                keyboardType="default"
                placeholder='Country'
                placeholderTextColor={"#737373"}
            />
            <TouchableOpacity onPress={()=>navigation.navigate('bottomtab')} style={styles.button}>
                <Text style={styles.textButton}>Submit</Text>
            </TouchableOpacity>
            </ScrollView>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    imagebg: { flex: 1 },
    textInputHeader: { color: "#000", fontSize: 16, marginHorizontal: 20, fontFamily:Fonts.ProximaNovaBold, marginBottom: 5,marginTop:10  },
    textInput: { borderWidth: 1, borderColor: "#CECECE", fontSize: 15, borderRadius: 10, marginHorizontal: 20, paddingLeft: 10,height:45, fontFamily:Fonts.ProximaNovaLight },
    button: { marginHorizontal: 20, backgroundColor:Colors.appcolor, height: 45, justifyContent: "center", alignItems: "center", borderRadius: 10, marginTop: 15 },
    textButton: { color: '#fff', fontSize: 16,fontFamily:Fonts.ProximaNovaMedium }




})

export default Addhospital