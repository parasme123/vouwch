import React from 'react';
import { StyleSheet, View, Modal,Animated,Easing } from 'react-native';
import Colors from '../common/Colors';
import Imagepath from '../common/imagepath';

export default class CustomLoader extends React.Component {
    constructor() {
        super();
        this.spinValue = new Animated.Value(0);

    }
    componentDidMount() {
        this.spin();

    }
    spin() {
        this.spinValue.setValue(0);
        Animated.timing(this.spinValue, {
            toValue: 1,
            duration: 1600,
            useNativeDriver: true,
            easing: Easing.linear,
        }).start(() => this.spin()
        );
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        return (
            <View style={{flex:1,position:'absolute'}}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.props.loaderVisible}
                onRequestClose={() => {console.log("back press"); }}>
                <View style={styles.container}>
                 <View style={{backgroundColor:'#fff',paddingHorizontal:40,paddingVertical:40,borderRadius:20,}}>
                    <Animated.Image
                        style={[styles.ImgCss, { tintColor:Colors.bottonColors, transform: [{ rotate: spin }] }]}
                        source={Imagepath.loading} />                    
                 </View>   
                </View>
               
            </Modal> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#00000090"},
    ImgCss: {width: 50, height: 50, resizeMode: "contain"},
    Img: {width: 40, height: 40, resizeMode: "contain"},

});