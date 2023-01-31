import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import Imagepath from '../../common/imagepath';
import styles from './css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { allUserList, startChatWithNewUser } from '../../reduxStore/action/firebaseActions';
import { CustomLoader, AsyncStorageHelper } from "@lib";
import MsgChat from './MsgChat/MsgChat';

const NewChat = (props) => {
    const [activeTab, setActiveTab] = useState("MsgChat");
    const [firebaseUsersList, setFirebaseUsersList] = useState([]);
    const [loaderVisible, setloaderVisible] = useState(false);

    useEffect(() => {
        let { actions } = props;
        // async function fun() {
        //     let firebaseUserData = await AsyncStorageHelper.getData("firebaseUserData");
        //     firebaseUserData = JSON.parse(firebaseUserData);
        //     console.log("firebaseUserData", firebaseUserData);
        // }
        // fun()
        actions.allUserList();
    }, [])

    useEffect(() => {
        let { allUsers } = props;
        setFirebaseUsersList(allUsers?.length ? allUsers : [])
    }, [props.allUsers])


    const handleStartChat = (chatUserData) => {
        let { actions } = props;
        actions.startChatWithNewUser(chatUserData.id, setloaderVisible, () => handleChatStart(chatUserData))
    }

    const handleChatStart = (chatUserData) => {
        props.navigation.navigate("Messeges", { chatUserData })
    }

    return (
        <View style={styles.container}>
            <View style={styles.UpperView}>
                <Text style={styles.chatTxt}>New Chats</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("Chat")}>
                    <Image source={Imagepath.cross}
                        style={styles.crossImg} />
                </TouchableOpacity>
            </View>

            <View style={styles.clinicView}>
                <TouchableOpacity style={[styles.inactiveTab, activeTab == "MsgChat" ? styles.activeTab : null]}
                    onPress={() => setActiveTab("MsgChat")} >
                    <Text style={[styles.inactiveTabTxt, activeTab == "MsgChat" ? styles.activeTabTxt : null]}>Drs and Hospitals directory</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    // onPress={() => setActiveTab("PersonalContact")}
                    style={[styles.inactiveTab, activeTab == "PersonalContact" ? styles.activeTab : null]}
                >
                    <Text style={[styles.inactiveTabTxt, activeTab == "PersonalContact" ? styles.activeTabTxt : null]}>Personal contacts</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexGrow: 1 }}>
                <MsgChat navigation={props.navigation} onUserClick={handleStartChat} userList={firebaseUsersList} />
            </View>
            <CustomLoader loaderVisible={loaderVisible} />
        </View >
    )
}

const mapStateToProps = state => ({
    allUsers: state?.firebaseData?.allUsers,
});

const ActionCreators = Object.assign(
    { allUserList },
    { startChatWithNewUser }
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewChat)

// export default NewChat;