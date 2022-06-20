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
    FlatList, Alert, Modal, ImagePropTypes
} from 'react-native';
import Imagepath from '../../common/imagepath';
import Fonts from '../../common/Fonts';
import MessageBox from '../../common/MessegeBox';
import Colors  from '../../common/Colors';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// import {incNumber, decNumber } from '../../reduxStore/action/DoctorAction';
// import {add_message} from '../../reduxStore/action/DoctorAction'

const Comment = ({ navigation }) => {
    // redux
    const myState = useSelector((state)=>state.ChangeTheNumber )

    const dispatch = useDispatch();
    // 
    const [NotificationList, setNotificationList] = useState([1, 2, 3, 4]);

    const [DropDownSec, setDropDownSec] = useState(false);
    const onChangesecond = (index) => {
        setDropDownSec(!DropDownSec)

    }
    const NotificationItem = (index, item) => {
        return (
            <View key={index} style={{ marginLeft: 15, marginRight:15 }}>
                <View style={styles.ContentView}>
                    <View style={styles.mainSubview}>
                    <Text style={styles.namedoctor}>Dr.Jenny Wilson</Text>
                    <Text style={styles.time}>5 Min ago</Text>
                    </View>
                    <Text style={styles.namedoctordetails}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    <TouchableOpacity onPress={() => { onChangesecond(index) }} style={styles.replyView}>
                        <Image style={styles.replyIcon} source={Imagepath.replyIcons} />
                        <Text style={styles.replyText}>Reply</Text>
                    </TouchableOpacity>
                    {/* <View style={styles.replyPrintBox}>
                    <Image style={styles.replyIcon} source={Imagepath.forwordIcon} />
                    <Text style={styles.mesageText}>Hello</Text>
                </View> */}
                {/* <View style={{flexDirection:"row", alignItems:"center", backgroundColor:"red", flex:1,justifyContent:"center"}}>
                <TouchableOpacity  onPress={()=>dispatch(incNumber(index==index))} style={{backgroundColor:"green", paddingHorizontal:20}}>
                    <Text style={{fontSize:20,color:"#000"}}>+</Text>
                    </TouchableOpacity>
                    <Text style={{paddingHorizontal:20, backgroundColor:"#fff"}}>{myState}</Text>
                    <TouchableOpacity  onPress={()=>dispatch(decNumber(index==index))}   style={{backgroundColor:"green", paddingHorizontal:20}}>
                    <Text style={{fontSize:20,color:"#000"}}>-</Text>
                    </TouchableOpacity>
                </View> */}
                </View>
                {DropDownSec &&
                    <MessageBox />
                }
                
            </View>

        )
    }

    return (
        <ImageBackground source={Imagepath.background} style={{ flex: 1 , paddingTop:15}}>
            <FlatList
                data={NotificationList}
                keyExtractor={(item,index)=>item }
                renderItem={NotificationItem}
                // key="index"
                // index={index}
                showsVerticalScrollIndicator={false}
            />
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    ContentView: { backgroundColor: "#fff", shadowColor: "#929397", shadowRadius: 10, elevation: 10, paddingVertical: 20, paddingHorizontal: 15,  marginBottom: 2 },
    mainSubview: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    namedoctor: { color:Colors.appcolor, fontSize: 18, fontFamily: Fonts.ProximaNovaSemibold },
    time: { color:Colors.appcolor, justifyContent: "flex-end", fontSize: 10, fontFamily: Fonts.ProximaNovaRegular },
    namedoctordetails: { color: "#929397", fontSize: 12, fontFamily: Fonts.ProximaNovaRegular, paddingVertical: 15 },
    replyView: { flexDirection: "row",  widthalignItems:"center", alignItems:"center"},
    replyIcon: { height: 10, width: 14 },
    replyText: { color:Colors.appcolor, paddingLeft: 10 },
    replyPrintBox:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:15
    },
    mesageText:{
        backgroundColor:"#F5F5F5", 
        flex:1,
        padding:5,
        marginLeft:10

    }



})

export default Comment;