import React, { useState, } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView, SafeAreaView, ImageBackground, FlatList, } from 'react-native';
import { Fonts, Fontsize, Colors } from '@common';
import Imagepath from '../../common/imagepath';
import styles from './css';

const NewGroup = (props) => {
    const [data, setData] = useState([
        { id: 1, title: "Wendy Watson", description: "We need to meet today", img: Imagepath.maan },
        { id: 2, title: "Connie Lane", description: "Where are you?", img: Imagepath.proMam },
        { id: 3, title: "Kathryn Alexander", description: "Kathryn Alexander", img: Imagepath.proWoman },
        { id: 4, title: "Bernard Nguyen", description: "Bernard Nguyen", img: Imagepath.googleMan },
        { id: 5, title: "Connie Lane", description: "We need to meet today", img: Imagepath.googleWomen },
        { id: 6, title: "Wendy Watson", description: "We need to meet today", img: Imagepath.maan },
        { id: 7, title: "Connie Lane", description: "Where are you?", img: Imagepath.proMam },
        { id: 8, title: "Kathryn Alexander", description: "Kathryn Alexander", img: Imagepath.proWoman },
        { id: 9, title: "Bernard Nguyen", description: "Bernard Nguyen", img: Imagepath.googleMan },
        { id: 10, title: "Connie Lane", description: "We need to meet today", img: Imagepath.googleWomen },
    ]);

    let addParticipateUser = props?.route?.params?.selectedUser || [];

    const [selectedUser, setSelectedUser] = useState([]);

    const Tabfunction = (type) => {
        const Name = [...selectedUser]
        const findIndexdata = Name.findIndex((item) => item.id == type.id)
        if (findIndexdata !== -1) {          //checking weather array contain the id
            // Name.splice(findIndexdata, 1);  //deleting
        } else {
            Name.push(type);               //adding to array because value doesnt exists
        }
        setSelectedUser(Name)
    }

    const DelFunction = (type) => {
        const DelName = [...selectedUser]
        const findIndexDelName = DelName.findIndex((item) => item.id == type.id)
        DelName.splice(findIndexDelName, 1);  //deleting
        setSelectedUser(DelName)
    }

    const MsgList = (msgObj) => {
        return (
            <View style={{ backgroundColor: Colors.white }}>

                <TouchableOpacity
                    onPress={() => { Tabfunction(msgObj) }} style={styles.infoTouch} >
                    <View style={styles.subView}>
                        <Image
                            style={styles.maanImg}
                            source={msgObj.img} />
                        <View style={styles.infoMsg}>
                            <Text style={styles.wdWatson}>{msgObj.title}</Text>
                            <Text style={styles.weNeed}>{msgObj.description}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }



    const Lenovo = ({ item, index }) => {
        return (

            <View
                style={styles.selectedImg}>
                <View style={styles.imageOnImg}>
                    <ImageBackground source={item?.img}
                        style={styles.personImg}>

                        <TouchableOpacity onPress={() => { DelFunction(item) }}
                            style={styles.colseImgView}>
                            <Image
                                source={Imagepath.multi}
                                style={styles.clsImg} />
                        </TouchableOpacity>
                    </ImageBackground>

                    <Text style={{ color: Colors.black, fontSize: Fontsize.fontEleven, }}>{item?.title}</Text>
                </View>
            </View>

        )
    };



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.upperView}>
                <View style={styles.TouchView}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Image style={styles.preImg}
                            source={Imagepath.previous} />
                    </TouchableOpacity>
                    <View style={styles.newgrpVw}>
                        <Text style={styles.newgrpTxt}>New Group</Text>
                        <Text style={styles.addparticipantsTxt}>Add Participants</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Image style={styles.imgSearchBtn}
                        source={Imagepath.magnifier} />
                </TouchableOpacity>
            </View>

            <View style={styles.upperSlctedImg}>

                <FlatList
                    data={selectedUser}
                    renderItem={Lenovo}
                    keyExtractor={item => item.index}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={styles.upperSlctedImg}>

                <FlatList
                    data={addParticipateUser}
                    renderItem={Lenovo}
                    keyExtractor={item => item.index}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>


            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginHorizontal: 3, }}>
                    {
                        data?.map((item, index) => {
                            return MsgList(item)
                        })
                    }

                </View>
            </ScrollView><TouchableOpacity
                activeOpacity={0.5}
                onPress={() => props.navigation.navigate("AddSubNewGrp", { selectedUser })}
                style={styles.touchableOpacityStyle}>

                <Image
                    source={Imagepath.rightarrow}
                    style={styles.floatingButtonStyle}
                />
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default NewGroup;
