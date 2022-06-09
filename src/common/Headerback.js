import React from 'react';
import {Text, View,Image,StyleSheet,TouchableOpacity} from 'react-native';
import Fonts from './Fonts';
import Imagepath from './imagepath';

export const Headerback = (props) => {
        return (
           <View style={styles.Header_view}>
               {props.isback?
               <TouchableOpacity style={{flex:0.5,left:20,}}>
                <Image style={styles.backIcon} resizeMode='contain' source={Imagepath.back}  />
                </TouchableOpacity>:null
                }
                <View style={{flex:1,alignItems:"center"}}>
                <Text style={styles.TextStyles}>{props.title}</Text>
               </View>
          </View>   
        );
    }

const styles = StyleSheet.create({
        Header_view: {flexDirection:'row',justifyContent:'center',alignItems:'center', backgroundColor: "#245FC7",height:60 },
        backIcon:{height:20,width:20,tintColor:'#fff'},
        TextStyles:{fontSize:18, color: "#fff",fontFamily:Fonts.ProximaNovaMedium}
    })
