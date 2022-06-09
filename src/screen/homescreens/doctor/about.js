import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

import Fonts from '../../../common/Fonts';
// import styles from '../homecss';



export default Aboutapp = (props)  => {
    return (
        <SafeAreaView >
            <View style={{padding:25}}>
                <Text style={styles.name}>{props.name}</Text>
                <Text  style={styles.details}>{props.aboutDetail}</Text>
            </View>
        </SafeAreaView>
    );
};
const styles =StyleSheet.create({
    name:{fontSize:16, color:"#000", paddingBottom:5, fontFamily:Fonts.ProximaNovaBold},
    details:{fontSize:10, color:"#929397", width:"90%", justifyContent:"center",fontFamily:Fonts.ProximaNovaRegular},
})
