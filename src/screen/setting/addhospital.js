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
  TextInput,
} from 'react-native';
import { Header, imagepath, String, Fonts, Fontsize, Colors } from '@common';
import { Validators, CustomLoader } from '@lib';
import { useNavigation } from '@react-navigation/native';
import { handleNavigation } from '../../navigator/Navigator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RNPickerSelect from 'react-native-picker-select';
import { handelAddDoctor, getCategories, getAllCountry, getStateAndCity } from '../../reduxStore/action/doctorAction';
const Addhospital = (props) => {
  const navigation = useNavigation();
  const [loaderVisible, setloaderVisible] = useState(false);
  const [bName, setBName] = useState();
  const [phoneNo, setphoneNo] = useState();
  const [street, setstreet] = useState();
  const [city, setcity] = useState();
  const [state, setstate] = useState();
  const [postCode, setpostCode] = useState();
  const [country, setcountry] = useState();
  const [CateId, setCateId] = useState();
  const [CateList, setCateList] = useState([]);
  const [CountryList, setCountryList] = useState([]);
  const [StateList, setStateList] = useState([]);
  const [CityList, setCityList] = useState([]);

  useEffect(() => {
    Get_Categroy();
  }, []);

  const Get_Categroy = () => {
    let { actions } = props;
    actions.getCategories();
    actions.getAllCountry();
  };

  const addSelectedCountry = (item) => {
    let countryItem = props.allCountries.find(data => data.id == item);
    setcountry(countryItem?.name)
    setstate("");
    setcity("");
    getStateCity(1, item);
  }

  const addSelectedState = (item) => {
    let stateItem = props.allState.find(data => data.id == item);
    setstate(stateItem?.name);
    setcity("");
    getStateCity(2, item);
  }

  const addSelectedCity = (item) => {
    let cityItem = props.allCity.find(data => data.id == item);
    setcity(cityItem?.name);
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
    if (props.allCategories.status == true) {
      let arr = [];
      props.allCategories.data.categories?.map((item, label) => {
        arr.push({ label: item.name, value: item.id });
      });
      setCateList(arr);
    }
  }, [props.allCategories])

  useEffect(() => {
    if (props.allCountries.length > 0) {
      let arr = [];
      props.allCountries?.map((item) => {
        arr.push({ label: item.name, value: item.id });
      });
      setCountryList(arr);
    }
  }, [props.allCountries])

  useEffect(() => {
    if (props.allState.length > 0) {
      let arr = [];
      props.allState?.map((item) => {
        arr.push({ label: item.name, value: item.id });
      });
      setStateList(arr);
    }
  }, [props.allState])

  useEffect(() => {
    if (props.allCity.length > 0) {
      let arr = [];
      props.allCity?.map((item) => {
        arr.push({ label: item.name, value: item.id });
      });
      setCityList(arr);
    }
  }, [props.allCity])

  const Signin_Validators = () => {
    if (
      Validators.checkNotNull('Business Name', 2, 60, bName) &&
      Validators.checkNotNull('phoneNo', 7, 15, phoneNo) &&
      Validators.checkNotNull('street', 2, 60, street) &&
      Validators.checkNotNull('city', 2, 60, city) &&
      Validators.checkNotNull('state', 2, 60, state) &&
      Validators.checkNotNull('postCode', 2, 60, postCode) &&
      Validators.checkNotNull('country', 2, 60, country)
    ) {
      handelDoctor();
    }
  }

  const handelDoctor = () => {
    let { actions } = props;
    let apiData = {
      b_name: bName,
      category: CateId,
      mobile_no: phoneNo,
      street: street,
      city: city,
      state: state,
      pincode: postCode,
      country: country,
    }
    // console.log("apiData------------------------",apiData);
    actions.handelAddDoctor(apiData, setloaderVisible, () => PageNavigation());
  };
  const PageNavigation = () => {
    handleNavigation({
      type: 'setRoot',
      page: 'bottomtab',
      navigation: navigation,
    });
    alert("Doctor added sucessfully")
  }

  return (
    <ImageBackground source={imagepath.background} style={styles.imagebg}>
      {/* header */}
      <Header title={String.addhospital} isback={'goback'} />
      {/* container for Text input */}
      <ScrollView showsHorizontalScrollIndicator="false"
        showsVerticalScrollIndicator={false}
        style={{ flexGrow: 1, paddingHorizontal: 24, paddingTop: 16, }}>
        <Text style={styles.textInputHeader}>Business Name</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="default"
          placeholder="Business name"
          placeholderTextColor={Colors.imputborderColor}
          onChangeText={setBName}
        />
        {/* <Text style={styles.textInputHeader}>Last Name</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="default"
          placeholder="Name"
          placeholderTextColor={Colors.imputborderColor}
          onChangeText={setlastname}
        /> */}
        <Text style={styles.textInputHeader}>Phone No.</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="number-pad"
          placeholder="Phone No."
          placeholderTextColor={Colors.imputborderColor}
          onChangeText={setphoneNo}
        />
        <Text style={styles.textInputHeader}>Category</Text>
        <View
          style={[{ justifyContent: "center" }, styles.textInput]}>
          <RNPickerSelect
            placeholderTextColor={Colors.imputborderColor}
            placeholder={{ label: 'Select Categroy', value: null }}
            onValueChange={value => setCateId(value)}
            items={CateList}
            style={styles}
          />
        </View>
        <Text style={styles.textInputHeader}>Country</Text>
        <View
          style={[{ justifyContent: "center" }, styles.textInput]}>
          <RNPickerSelect
            placeholderTextColor={Colors.imputborderColor}
            placeholder={{ label: 'Select Country', value: null }}
            onValueChange={addSelectedCountry}
            items={CountryList}
            style={styles}
          />
        </View>
        <Text style={styles.textInputHeader}>State</Text>
        <View
          style={[{ justifyContent: "center" }, styles.textInput]}>
          <RNPickerSelect
            placeholderTextColor={Colors.imputborderColor}
            placeholder={{ label: 'Select State', value: null }}
            onValueChange={(value) => addSelectedState(value)}
            items={StateList}
            style={styles}
          />
        </View>
        <Text style={styles.textInputHeader}>City</Text>
        <View
          style={[{ justifyContent: "center" }, styles.textInput]}>
          <RNPickerSelect
            placeholderTextColor={Colors.imputborderColor}
            placeholder={{ label: 'Select City', value: null }}
            onValueChange={(value) => addSelectedCity(value)}
            items={CityList}
            style={styles}
          />
        </View>
        <Text style={styles.textInputHeader}>Street</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="default"
          placeholder="Street"
          placeholderTextColor={Colors.imputborderColor}
          onChangeText={setstreet}
        />
        {/* <Text style={styles.textInputHeader}>City</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="default"
          placeholder="City"
          placeholderTextColor={Colors.imputborderColor}
          onChangeText={setcity}
        />
        <Text style={styles.textInputHeader}>State</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="default"
          placeholder="State"
          placeholderTextColor={Colors.imputborderColor}
          onChangeText={setstate}
        /> */}
        <Text style={styles.textInputHeader}>Post Code</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="number-pad"
          placeholder="Post Code"
          placeholderTextColor={Colors.imputborderColor}
          onChangeText={setpostCode}
        />
        {/* <Text style={styles.textInputHeader}>Country</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="default"
          placeholder="Country"
          placeholderTextColor={Colors.imputborderColor}
          onChangeText={setcountry}
        /> */}
        <TouchableOpacity
          onPress={() => { Signin_Validators() }}
          style={styles.button}>
          <Text style={styles.textButton}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
      <CustomLoader loaderVisible={loaderVisible} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imagebg: {
    flex: 1,
  },
  textInputHeader: {
    color: Colors.black,
    fontSize: Fontsize.fontSixteen,
    fontFamily: Fonts.ProximaNovaBold,
    marginBottom: 5,
    marginTop: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.inputcolor,
    fontSize: Fontsize.fontFifteen,
    borderRadius: 10,
    paddingLeft: 10,
    height: 45,
    fontFamily: Fonts.ProximaNovaLight,
  },
  button: {
    backgroundColor: Colors.appcolor,
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 15,
    marginBottom: 50
  },
  textButton: {
    color: Colors.white,
    fontSize: Fontsize.fontSixteen,
    fontFamily: Fonts.ProximaNovaMedium,
  },
});
const mapStateToProps = state => ({
  // allRegisterData: state.doctor.allRegisterData,
  allCategories: state.doctor.allCategories,
  allCountries: state.doctor.allCountries,
  allState: state.doctor.allState,
  allCity: state.doctor.allCity
});

const ActionCreators = Object.assign(
  { handelAddDoctor },
  { getCategories },
  { getAllCountry },
  { getStateAndCity }
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Addhospital);