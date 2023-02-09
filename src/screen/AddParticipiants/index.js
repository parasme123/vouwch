import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Image, Text, ScrollView, SafeAreaView, FlatList, } from 'react-native';
import Imagepath from '../../common/imagepath';
import styles from './css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { allUserList, getGroupParticipiants, addParticipiants } from '../../reduxStore/action/firebaseActions';
import { CustomLoader, AsyncStorageHelper } from "@lib";

const AddParticipans = (props) => {
    let groupDataParam = props?.route?.params?.chatGroupData;
    const [selectedUser, setSelectedUser] = useState([]);
    const [firebaseUsersList, setFirebaseUsersList] = useState([]);
    const [chatGroupData, setchatGroupData] = useState({})
    const [loaderVisible, setloaderVisible] = useState(false);

    useEffect(() => {
        let { actions, groupData } = props;
        let dataOfGroup = groupData.find((item) => item.id == groupDataParam.id)
        setchatGroupData(dataOfGroup)
        // actions.getGroupParticipiants(dataOfGroup.participiants)
    }, [groupDataParam])

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

    const handleAddParticipiants = () => {
        let { actions } = props;
        actions.addParticipiants(selectedUser, chatGroupData, setloaderVisible, () => handleAddSuccess());
    }

    const handleAddSuccess = () => {
        props.navigation.navigate("GroupMesseges", { chatGroupData })
    }

    const MsgList = (msgObj) => {
        return (
            <TouchableOpacity onPress={() => addParticipans(msgObj)} style={styles.infoTouch}
                disabled={chatGroupData?.participiants?.includes(msgObj.id)}
            >
                <Image style={styles.maanImg}
                    source={msgObj?.profile_picture ? { uri: msgObj?.profile_picture } : require('../../assect/images/default-user.png')} />
                <View style={styles.infoMsg}>
                    <Text style={styles.wdWatson}>{msgObj.first_name}</Text>
                    <Text style={styles.weNeed}>{chatGroupData?.participiants?.includes(msgObj.id) ? "Already Added in this group" : msgObj.about}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const Lenovo = ({ item, index }) => {
        return (
            <View style={styles.imageOnImg}>
                <View>
                    <Image style={styles.maanImg}
                        source={item?.profile_picture ? { uri: item?.profile_picture } : require('../../assect/images/default-user.png')} />
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
                        <Text style={styles.newgrpTxt}>{chatGroupData.groupName}</Text>
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
            </ScrollView>
            {
                selectedUser?.length > 0 ? (
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={handleAddParticipiants}
                        style={styles.touchableOpacityStyle}>
                        <Image
                            source={Imagepath.rightarrow}
                            style={styles.floatingButtonStyle}
                        />
                    </TouchableOpacity>
                ) : null
            }
            <CustomLoader loaderVisible={loaderVisible} />
        </SafeAreaView>
    )
}

const mapStateToProps = state => ({
    allUsers: state?.firebaseData?.allUsers,
    groupData: state?.firebaseData?.groupData,
});

const ActionCreators = Object.assign(
    { allUserList },
    { getGroupParticipiants },
    { addParticipiants }
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddParticipans)

