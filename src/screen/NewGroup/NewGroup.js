import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView, SafeAreaView, ImageBackground, FlatList, } from 'react-native';
import { Fonts, Fontsize, Colors } from '@common';
import Imagepath from '../../common/imagepath';
import styles from './css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { allUserList } from '../../reduxStore/action/firebaseActions';

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

    const [selectedUser, setSelectedUser] = useState([]);
    const [firebaseUsersList, setFirebaseUsersList] = useState([]);

    useEffect(() => {
        let { actions } = props;
        actions.allUserList()
    }, [])

    useEffect(() => {
        let { allUsers } = props;
        setFirebaseUsersList(allUsers?.length ? allUsers : [])
    }, [props.allUsers])

    const addParticipans = (type) => {
        const participants = [...selectedUser]
        const findIndexdata = participants.findIndex((item) => item.id == type.id)
        if (findIndexdata !== -1) {          //checking weather array contain the id
            participants.splice(findIndexdata, 1);  //deleting
        } else {
            participants.push(type);               //adding to array because value doesnt exists
        }
        setSelectedUser(participants)
    }

    const MsgList = (msgObj) => {
        return (
            <TouchableOpacity onPress={() => { addParticipans(msgObj) }} style={styles.infoTouch} >
                <Image style={styles.maanImg}
                    source={msgObj?.img ? msgObj?.img : require('../../assect/images/default-user.png')} />
                <View style={styles.infoMsg}>
                    <Text style={styles.wdWatson}>{msgObj.first_name}</Text>
                    <Text style={styles.weNeed}>{msgObj.about}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const Lenovo = ({ item, index }) => {
        return (
            <View style={styles.imageOnImg}>
                <View>
                    <Image style={styles.maanImg}
                        source={item?.img ? item?.img : require('../../assect/images/default-user.png')} />
                    <TouchableOpacity onPress={() => { addParticipans(item) }} style={styles.colseImgView}>
                        <Image source={Imagepath.multi} style={styles.clsImg} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.participantsName}>{item?.first_name}</Text>
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

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginHorizontal: 3, }}>
                    {
                        firebaseUsersList?.map((item, index) => {
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

const mapStateToProps = state => ({
    allUsers: state?.firebaseData?.allUsers,
});

const ActionCreators = Object.assign(
    { allUserList }
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewGroup)

