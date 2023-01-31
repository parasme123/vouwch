import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView, TextInput, Alert, Modal, } from 'react-native';
import Imagepath from '../../common/imagepath';
import styles from './css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addExternalUser, getBussinessAddedUser, deleteAddedUser } from '../../reduxStore/action/firebaseActions';
import { CustomLoader, AsyncStorageHelper } from "@lib";
import firestore from '@react-native-firebase/firestore';

const MsgManagement = (props) => {
    const usersCollection = firestore().collection('Users');
    const [modalVisible, setModalVisible] = useState(false);
    const [ischecked, setischecked] = useState(false);
    const [empEmail, setEmpEmail] = useState("");
    const [empName, setEmpName] = useState("");
    const [empPassword, setEmpPassword] = useState("");
    const [loaderVisible, setloaderVisible] = useState(false);
    const [addedUsers, setAddedUsers] = useState([]);
    const [selectedId, setSelectedId] = useState();

    useEffect(() => {
        let { actions } = props;
        actions.getBussinessAddedUser()
    }, [])

    useEffect(() => {
        setAddedUsers(props.addedUserList)
    }, [props.addedUserList])

    const handleDeleteConfirm = (deleteId) => {
        setischecked(!ischecked)
        setSelectedId(deleteId);
    }

    const handleDeleteAddedUser = () => {
        let { actions } = props;
        actions.deleteAddedUser(selectedId, setloaderVisible, () => handleDeleteSuccess())
    }

    const handleDeleteSuccess = () => {
        Alert.alert("User Deleted Successfully")
        setischecked(false);
    }

    const DataList = (metaObj) => {
        return (
            <TouchableOpacity style={styles.rightTouch} key={metaObj.id}>
                <View style={{ flexDirection: "row" }}>
                    <Image
                        style={styles.maanImg}
                        source={metaObj.img ? metaObj.img : require('../../assect/images/default-user.png')} />
                    <View style={styles.infoMsg}>
                        <Text style={styles.wdWatson}>{metaObj.first_name}</Text>
                        <Text style={styles.weNeed}>{metaObj.description}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => handleDeleteConfirm(metaObj.id)}>
                    <Image style={styles.bin}
                        source={Imagepath.RecycleBin} />
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }

    const handleEmpEmail = (e) => {
        setEmpEmail(e);
    }

    const handleEmpName = (e) => {
        setEmpName(e);
    }

    const handleEmpPassword = (e) => {
        setEmpPassword(e);
    }

    const checkUserisNew = async () => {
        const querySnapshot = await usersCollection.where("email", "==", empEmail).limit(1).get();
        return querySnapshot.empty;
    }


    const addExternalUser = async () => {
        if (!empName || !empEmail) {
            Alert.alert("All Fields Are required")
            return
        }
        let isNew = await checkUserisNew();
        if (!isNew) {
            Alert.alert('This email already registered! Please try with another Email');
            return;
        }
        let { actions, userData } = props;
        let firebaseUserData = await AsyncStorageHelper.getData("firebaseUserData");
        firebaseUserData = JSON.parse(firebaseUserData)
        let apiData = {
            user_type: 'sub-user',
            first_name: empName,
            last_name: "",
            email: empEmail,
            password: empPassword ? empPassword : "12345678",
            addedBy: firebaseUserData.id
        };
        actions.addExternalUser(apiData, setloaderVisible, () => handleAddSuccess());
    }

    const handleAddSuccess = () => {
        setModalVisible(true);
        setEmpPassword("")
        setEmpName("")
        setEmpEmail("")
    }

    return (
        <View style={styles.container}>
            <View style={styles.upperView}>
                <Text style={styles.mgmtTxt}>Message Management</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 24, flexDirection: "row", paddingTop: 20, paddingBottom: 10 }}>
                    <Image style={styles.inviteImg}
                        source={Imagepath.invite} />
                    <View style={styles.signView}>
                        <Text style={styles.emp}>Sign up employee(employee personal user account)</Text>
                        <Text style={styles.admin}>( it user have admin privileges )</Text>
                    </View>
                </View>
                <View style={styles.signUPView}>
                    <Text style={styles.signTxt}>Sign Up</Text>
                    <Text style={styles.empTxt}>Employee email ( Username )</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType="email-address"
                        placeholder='Enter Email'
                        onChangeText={handleEmpEmail}
                        value={empEmail}
                    />
                    <Text style={styles.empTxt}>Employee Name</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType="email-address"
                        placeholder='Enter Name'
                        onChangeText={handleEmpName}
                        value={empName}
                    />
                    <Text style={styles.empTxt}>Password (Default Value 12345678)</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType='default'
                        placeholder='Enter Password'
                        secureTextEntry={true}
                        onChangeText={handleEmpPassword}
                        value={empPassword}
                    />
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>You Added User Successfully.</Text>
                                <TouchableOpacity
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Ok</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={ischecked}
                        onRequestClose={() => {
                            setischecked(!ischecked);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Are You sure to Delete.</Text>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => setischecked(!ischecked)}
                                    >
                                        <Text style={styles.textStyle}>No</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={handleDeleteAddedUser}
                                    >
                                        <Text style={styles.textStyle}>Yes</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <TouchableOpacity style={styles.signUpBtnView} onPress={addExternalUser}>
                        <Text style={styles.signUpTxt}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.removeListView}>
                    <Text style={styles.signTxt}>List of sign up employees</Text>
                </View>
                <View style={styles.ListView}>
                    <ScrollView style={{}}
                        showsVerticalScrollIndicator={false}>
                        {
                            addedUsers?.map((item, index) => {
                                return DataList(item)
                            })
                        }
                    </ScrollView>
                </View>
            </ScrollView >
            <CustomLoader loaderVisible={loaderVisible} />
        </View >
    )
}

const mapStateToProps = state => ({
    userData: state?.firebaseData?.userData,
    addedUserList: state?.firebaseData?.addedUserList,
});

const ActionCreators = Object.assign(
    { addExternalUser },
    { getBussinessAddedUser },
    { deleteAddedUser }
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MsgManagement)

// export default MsgManagement;