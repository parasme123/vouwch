import React, { useEffect } from 'react';
import { View, Image, Text, ImageBackground, StyleSheet } from 'react-native';
import Svg, {
    Use,
    // Image,
} from 'react-native-svg';
// import index from "./index";
// import css ,{styles} from "./css"; back
import Imagepath from '../../common/imagepath';
import AsyncStorageHelper from '../../Lib/AsyncStorageHelper';
import Constants from '../../Lib/Constants';
import { handleNavigation } from '../../navigator/Navigator';
import styles from './css';
import { Colors, imagepath, svg } from '@common';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { getUnreadMsg } from '../../reduxStore/action/firebaseActions';

const Splash = (props) => {
    let { navigation, actions } = props;
    useEffect(() => {
        // actions.getUnreadMsg();
        setTimeout(() => {
            AsyncStorageHelper.getData("firebaseUserData").then((GesstData) => {
                if (!GesstData) {
                    handleNavigation({ type: 'setRoot', page: 'welcome', navigation: navigation, });
                }
                else {
                    handleNavigation({ type: 'setRoot', page: 'bottomtab', navigation: navigation, });
                    // AsyncStorageHelper.getData(Constants.USER_DATA).then((responseData) => {
                    //     if (responseData) {
                    //         AsyncStorageHelper.setData(Constants.USER_DATA, responseData.data)
                    //         AsyncStorageHelper.setData(Constants.TOKEN, responseData.token)
                    //         handleNavigation({ type: 'setRoot', page: 'bottomtab', navigation: navigation, });
                    //     } else {
                    //         handleNavigation({ type: 'setRoot', page: 'welcome', navigation: navigation, });
                    //     }
                    // })
                }
            })
        }, 1000);
    }, []);
    return (

        <ImageBackground
            source={Imagepath.background}
            resizeMode="cover"
            style={styles.bg}>
            <Image
                style={styles.logo}
                resizeMode="cover"
                source={Imagepath.Vouwch}
            />
            {/* {svg.vOWCHiCON(30, 30, Colors.appcolor)} */}
        </ImageBackground>
    );
}


const mapStateToProps = state => ({
    allUsers: state?.firebaseData?.allUsers,
});

const ActionCreators = Object.assign(
    {}
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash)



