import { NavigationContainer } from '@react-navigation/native';
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
import { handelAddDoctor, getCategories } from '../../reduxStore/action/doctorAction';
const Addhospital = (props) => {
  const navigation = useNavigation();
  const [loaderVisible, setloaderVisible] = useState(false);
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [phoneNo, setphoneNo] = useState();
  const [street, setstreet] = useState();
  const [city, setcity] = useState();
  const [state, setstate] = useState();
  const [postCode, setpostCode] = useState();
  const [country, setcountry] = useState();
  const [CateId, setCateId] = useState();
  const [CateList, setCateList] = useState([]);



  useEffect(() => {
    Get_Categroy();
    // console.log("getCategoriesljsalfja---------------", props.allCategories);
  }, []);
  // handelCategories

  const Get_Categroy = () => {
    let { actions } = props;
    actions.getCategories();
  };
  useEffect(() => {
    if (props.allCategories.status == true) {
      let arr = [];
      props.allCategories.data.categories.map((item, label) => {
        arr.push({ label: item.name, value: item.id });
        // console.log('arr== categories in signup==>>>', arr);
      });
      setCateList(arr);
    }
  }, [props.allCategories])

  const Signin_Validators = () => {
    if (
      Validators.checkNotNull('First Name', 2, 60, firstname) &&
      Validators.checkNotNull('Last Name', 2, 60, lastname) &&
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
      first_name: firstname,
      last_name: lastname,
      category: CateId,
      mobile_no: phoneNo,
      street: street,
      city: city,
      state: state,
      pincode: postCode,
      country: country,
    }
    // console.log("apiData------------------------",apiData);
    actions.handelAddDoctor(apiData, setloaderVisible,()=>PageNavigation());
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
        <Text style={styles.textInputHeader}>First Name</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="default"
          placeholder="Name"
          placeholderTextColor={Colors.imputborderColor}
          onChangeText={setfirstname}
        />
        <Text style={styles.textInputHeader}>Last Name</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="default"
          placeholder="Name"
          placeholderTextColor={Colors.imputborderColor}
          onChangeText={setlastname}
        />
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
            // onClose={(value) =>setCateId(value)}
            items={CateList}
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
        <Text style={styles.textInputHeader}>City</Text>
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
        />
        <Text style={styles.textInputHeader}>Post Code</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="number-pad"
          placeholder="Post Code"
          placeholderTextColor={Colors.imputborderColor}
          onChangeText={setpostCode}
        />
        <Text style={styles.textInputHeader}>Country</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="default"
          placeholder="Country"
          placeholderTextColor={Colors.imputborderColor}
          onChangeText={setcountry}
        />
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
});

const ActionCreators = Object.assign(
  { handelAddDoctor },
  { getCategories }
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Addhospital);