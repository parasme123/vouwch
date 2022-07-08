import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { String, Header, Fonts, imagepath, Colors, } from '@common';
import { Validators } from '@lib';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HandlDocProfil, getCategories } from '../../reduxStore/action/doctorAction';
import { handleNavigation } from '../../navigator/Navigator';
import Picker from '../../modal/picker';
import Fontsize from '../../common/Fontsize';


const Editprofile = (props) => {

  const [Location, setLocation] = useState('');
  const [Hours, setHours] = useState();
  const [Aboutus, setAboutus] = useState('');
  const [loaderVisible, setloaderVisible] = useState(false);
  const [ReviewModalPopup, setReviewModalPopup] = useState();
  const [modalVisible, setModalVisible] = useState();
  const navigation = useNavigation();
  const [editText, seteditText] = useState(false);
  const [mark, setMark] = useState([]);
  // console.log(mark,"mark");

  useEffect(() => {
    console.log("props.setData", props);
        setAboutus(props.setData?.business?.about_us);
        setLocation(props.setData?.business?.service_location);
        setHours(props.setData?.business?.service_hours);
  }, [props.setData]);

  const chexkBox = (item) => {
    let follows1 = [...mark];
    if (!follows1.includes(item)) {
      //checking weather array contain the id
      follows1.push(item); //adding to array because value doesnt exists
      // Call_FollowApi(id);
    } else {
      follows1.splice(follows1.indexOf(item), 1); //deleting
      // Call_FollowApi(id);
    }
    setMark(follows1);
    // console.log(mark, "mark");
  };


  useEffect(() => {
    Get_Categroy();
  }, []);

  const ListModal = () => {
    setReviewModalPopup(!modalVisible);
    setModalVisible(!modalVisible);
  };

  const Get_Categroy = () => {
    let { actions } = props;
    actions.getCategories();
  };

  const Account_SettingApi = () => {
    if (
      Validators.checkNull('Service Location', 1, Hours) &&
      Validators.checkNull('Location', 3, Location) &&
      Validators.checkNull('Aboutus', 2, Aboutus)
    ) {
      Signin_Validators();
    }
  }

  const Signin_Validators = () => {
    let { actions } = props;
    let apiData = {
      bussiness_services: mark.map(item => item.id),
      bussiness_hours: Hours,
      location: Location,
      about_us: Aboutus,
    };
    // console.log("apiData", apiData)
    // return;
    actions.HandlDocProfil(apiData, () => setloaderVisible(), () => PageNavigation());

  };
  const PageNavigation = () => {
    handleNavigation({
      type: 'setRoot',
      page: 'bottomtab',
      navigation: navigation,
    });
  }
  return (
    <ImageBackground source={imagepath.background} style={styles.imagebg}>
      {/*  Header*/}
      <Header title={String.ProfileSetting} isback={'bottomtab'} />

      <View style={styles.headerView2}>
        <TouchableOpacity onPress={() => seteditText(true)} >
          <Image
            style={styles.headerbuttonIcon}
            source={imagepath.Edit}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 90 }}>
        {/* container */}

        {/* details */}
        <Text style={styles.textInputHeader}>Services</Text>
        {/*      placeholderTextColor={Colors.imputborderColor} */}
        <TouchableOpacity
          onPress={() => ListModal()}
          style={{
            marginHorizontal: 20,
            borderColor: Colors.imputborderColor,
            borderWidth: 1,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: 45,
            paddingHorizontal: 10
          }}>

          <Text style={styles.serviceText}>{mark.length > 0 ? mark.map(item => item.name).join(', ') : "Select Services"}</Text>

          <Image style={styles.arrowDown} source={imagepath.plus} />
        </TouchableOpacity>

        <Text style={styles.textInputHeader}>Service Location</Text>
        <TextInput
          editable={editText}
          style={styles.textInput}
          keyboardType="default"
          placeholder="Serivice Location"
          placeholderTextColor={Colors.imputborderColor}
          onChangeText={text => {
            setLocation(text);
          }}
          value={Location}
        />
        <Text style={styles.textInputHeader}>Business Hours</Text>
        <TextInput
          editable={editText}
          style={styles.textInput}
          keyboardType="default"
          placeholder="hours"
          placeholderTextColor={Colors.imputborderColor}
          onChangeText={text => {
            setHours(text);
          }}
          value={Hours}
        />
        <Text style={styles.textInputHeader}>About Us</Text>
        <TextInput
          editable={editText}
          style={styles.textInputAbout}
          keyboardType="default"
          placeholder="Message"
          multiline={true}
          numberOfLines={8}
          placeholderTextColor={Colors.imputborderColor}
          onChangeText={text => {
            setAboutus(text);
          }}
          value={Aboutus}
        />

        <TouchableOpacity
          onPress={() => Account_SettingApi()}
          style={styles.button}>
          <Text style={styles.textButton}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
      {ReviewModalPopup && (
        <Picker
          modalVisible={modalVisible}
          Hidemodal={ListModal}
          data={props.allServices}
          slectData={mark}
          chexkBoxFnc={chexkBox}
        />
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imagebg: { flex: 1 },

  headerView2: { position: 'absolute', top: 15, right: 10 },
  headerbuttonIcon: { height: 30, width: 30 },
  textInputHeader: {
    color: Colors.black,
    fontSize: Fontsize.fontSixteen,
    marginHorizontal: 20,
    fontFamily: Fonts.ProximaNovaBold,
    marginVertical: 15,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.imputborderColor,
    fontSize: Fontsize.fontSixteen,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingLeft: 10,
    fontFamily: Fonts.ProximaNovaMedium,
    height: 45,
  },
  textInputAbout: {
    borderWidth: 1,
    borderColor: Colors.imputborderColor,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingLeft: 10,
    fontFamily: Fonts.ProximaNovaMedium,
    textAlignVertical: "top",

  },
  button: {
    marginHorizontal: 20,
    backgroundColor: Colors.appcolor,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 15,
  },
  textButton: {
    color: Colors.white,
    fontSize: Fontsize.fontSixteen,
    fontFamily: Fonts.ProximaNovaSemibold,
  },
  arrowDown: {
    tintColor: Colors.imputborderColor,
    height: 15,
    width: 15,

  }
});

const mapStateToProps = state => ({
  setData: state.doctor.setData,
  allCategories: state.doctor.allCategories,
  allServices: state.doctor.allServices,
});

const ActionCreators = Object.assign(
  { HandlDocProfil },
  { getCategories },
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Editprofile);
