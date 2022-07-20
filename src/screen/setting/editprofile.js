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
import { HandlDocProfil, getCategories, getAllCountry, getStateAndCity } from '../../reduxStore/action/doctorAction';
import { handleNavigation } from '../../navigator/Navigator';
import Picker from '../../modal/picker';
import Fontsize from '../../common/Fontsize';
import CustomLoader from '../../Lib/CustomLoader';


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
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [stateModalVisible, setStateModalVisible] = useState(false);
  const [selectedState, setSelectedState] = useState([]);
  const [cityModalVisible, setCityModalVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState([]);
  // console.log(mark,"mark");

  useEffect(() => {
    // console.log("props.setData", props.setData);
    setAboutus(props.setData?.business?.about_us);
    setLocation(props.setData?.business?.service_location);
    setHours(props.setData?.business?.service_hours);
    setSelectedCountry([{ name: props.setData?.business?.country }])
    setSelectedState([{ name: props.setData?.business?.state }])
    setSelectedCity([{ name: props.setData?.business?.city }])
  }, [props.setData]);

  const chexkBox = (item) => {
    let follows1 = [...mark];
    if (follows1.findIndex(data => data.id == item.id) !== -1) {
      follows1.splice(follows1.findIndex(data => data.id == item.id), 1);
    } else {
      follows1.push(item);
    }
    setMark(follows1);
  };

  const addSelectedCountry = (item) => {
    setSelectedCountry([item]);
    setSelectedState([]);
    setSelectedCity([]);
    setCountryModalVisible(!countryModalVisible);
    getStateCity(1, item.id);
  }

  const addSelectedState = (item) => {
    setSelectedState([item]);
    setSelectedCity([]);
    setStateModalVisible(!stateModalVisible);
    getStateCity(2, item.id);
  }

  const addSelectedCity = (item) => {
    setSelectedCity([item]);
    setCityModalVisible(!cityModalVisible);
  }

  const getStateCity = (findType, itemId) => {
    let { actions } = props;
    let apiData = {
      find_type: findType,
      c_s_id: itemId
    }
    actions.getStateAndCity(apiData);
  }

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
    actions.getAllCountry();
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
      country: selectedCountry[0]?.name,
      state: selectedState[0]?.name,
      city: selectedCity[0]?.name
    };
    console.log("apiData", apiData);
    actions.HandlDocProfil(apiData, () => setloaderVisible(), () => PageNavigation());

  };
  const PageNavigation = () => {
    handleNavigation({
      type: 'setRoot',
      page: 'bottomtab',
      navigation: navigation,
    });
  }

  const countryModal = () => {
    setCountryModalVisible(!countryModalVisible);
  }

  const stateModal = () => {
    if (props.allState.length > 0) {
      setStateModalVisible(!stateModalVisible);
    } else {
      alert("Please select country first");
    }
  }

  const cityModal = () => {
    if (props.allState.length > 0) {
      setCityModalVisible(!cityModalVisible);
    } else {
      alert("Please select state first");
    }
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

        <Text style={styles.textInputHeader}>Services</Text>
        <TouchableOpacity
          onPress={() => ListModal()}
          style={styles.listModalBtn}>
          <Text style={styles.serviceText}>{mark.length > 0 ? mark.map(item => item.name).join(', ') : "Select Services"}</Text>
          <Image style={styles.arrowDown} source={imagepath.plus} />
        </TouchableOpacity>

        <Text style={styles.textInputHeader}>Select Country</Text>
        <TouchableOpacity onPress={() => countryModal()}
          style={styles.listModalBtn}>
          <Text style={styles.serviceText}>{selectedCountry.length > 0 ? selectedCountry.map(item => item.name).join(', ') : "Select Country"}</Text>
        </TouchableOpacity>

        <Text style={styles.textInputHeader}>Select State</Text>
        <TouchableOpacity onPress={() => stateModal()}
          style={styles.listModalBtn}>
          <Text style={styles.serviceText}>{selectedState.length > 0 ? selectedState.map(item => item.name).join(', ') : "Select State"}</Text>
        </TouchableOpacity>

        <Text style={styles.textInputHeader}>Select City</Text>
        <TouchableOpacity onPress={() => cityModal()}
          style={styles.listModalBtn}>
          <Text style={styles.serviceText}>{selectedCity.length > 0 ? selectedCity.map(item => item.name).join(', ') : "Select City"}</Text>
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
          showCheckBox={true}
          listTitle={"Services"}
        />
      )}

      <Picker
        modalVisible={countryModalVisible}
        Hidemodal={countryModal}
        data={props.allCountries}
        slectData={selectedCountry}
        chexkBoxFnc={addSelectedCountry}
        showCheckBox={false}
        listTitle={"Countries"}
      />

      <Picker
        modalVisible={stateModalVisible}
        Hidemodal={stateModal}
        data={props.allState}
        slectData={selectedState}
        chexkBoxFnc={addSelectedState}
        showCheckBox={false}
        listTitle={"Countries"}
      />

      <Picker
        modalVisible={cityModalVisible}
        Hidemodal={cityModal}
        data={props.allCity}
        slectData={selectedCity}
        chexkBoxFnc={addSelectedCity}
        showCheckBox={false}
        listTitle={"Cities"}
      />

      <CustomLoader loaderVisible={loaderVisible} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imagebg: { flex: 1 },
  listModalBtn: {
    marginHorizontal: 20,
    borderColor: Colors.imputborderColor,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 45,
    paddingHorizontal: 10
  },
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
    textAlign: "center"

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
  allCountries: state.doctor.allCountries,
  allState: state.doctor.allState,
  allCity: state.doctor.allCity
});

const ActionCreators = Object.assign(
  { HandlDocProfil },
  { getCategories },
  { getAllCountry },
  { getStateAndCity }
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Editprofile);
