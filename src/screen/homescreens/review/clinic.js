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
  FlatList,
} from 'react-native';
import {
  ApiCall,
  SortUrl,
  CustomLoader,
  Constants,
  AsyncStorageHelper,
} from '@lib';
import { TextInput } from 'react-native-gesture-handler';
import Imagepath from '../../../common/imagepath';
import { useNavigation } from '@react-navigation/native';
import { CustomDropDown,Header, imagepath, Fonts, String, Colors, Fontsize } from '@common';
import { Validators } from '@lib';
import DoctorList from '../../../modal/DoctorList';
const { width, height } = Dimensions.get('window');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postBravo, getDoctorList } from '../../../reduxStore/action/doctorAction';



const Clinic = (props) => {
  const navigation = useNavigation();
  const [DropDownSec, setDropDownSec] = useState(false);
  const [selectvalue, setselectvalue] = useState('Select');
  const [recomendation, setRecomendation] = useState();
  const [docPicList, setdocPicList] = useState();
  const [modalVisible, setModalVisible] = useState();
  const [mark, setMark] = useState(false);
  const [doctId, setdoctId] = useState();
  const onChangesecond = value => {
    setDropDownSec(!DropDownSec);
    setselectvalue(value);
  };
  const onPickersecond = () => {
    setDropDownSec(!DropDownSec);
  };
  const chexkBox = () => {
    setMark(!mark);
  };
  let DishesData = [
    { label: 'First Choice', value: '5 Star' },
    { label: 'Second Choice', value: '4 Star' },
    { label: 'Third Choice', value: '3 Star' },
    { label: 'Maybe', value: '2 Star' },
    { label: 'Emergency only', value: '1 Star' },
  ];

  const ListModal = () => {
    setdocPicList(!modalVisible);
    setModalVisible(!modalVisible);
  };

  const ServiceData = (item) => {
    setdoctId(item)
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
  }, []);

  const Call_ClinicialApi = () => {
    let apiData = {
      business_id: doctId.id,
      review_type: "Clinical",
      rate: selectvalue,
      review: recomendation,
      is_anonym:mark ? 1 : 0 ,
      // friendness_rate: state,
      // treatment_rate: detail,
      // wait_rate: doctorId,
      // experience_rate: name,
      // money_rate: department,
      // wait_period: hospital,
      // is_recommend: city
    }
    if (
      Validators.checkNotNull('Doctor Id', 1, 20, doctId.id) &&
      Validators.checkNotNull('Recommendation', 2, 20, recomendation) 
    ) {
      props.Review_Validators(apiData)
    }
  }

  return (
    <ImageBackground source={Imagepath.background} style={{ flex: 1 }}>
      <Text
        style={styles.headerText}>
        Should you, your family or friends seek care at this provider, what is
        your recommendation?
      </Text>

      {/* {props.docId == null ?
        <> */}
          <Text
            style={styles.imputHeader}>
            Select Doctors List
          </Text>

          <TouchableOpacity
            onPress={() => ListModal()}
            style={[styles.dropdownView, { marginBottom: 15 }]}>
            <Text style={styles.dropdownText}>{doctId != null ? doctId.business_name : "Select Doctors"}</Text>
            <Image
              style={styles.downArrow}
              source={Imagepath.down}
              resizeMode="contain"
            />
          </TouchableOpacity>
        {/* </> : null
      } */}

      <Text
        style={styles.imputHeader}>
        Slect your recommendation
      </Text>

      <TouchableOpacity
        onPress={() => {
          onPickersecond();
        }}
        style={styles.dropdownView}>
        <Text style={styles.dropdownText}>{selectvalue}</Text>
        <Image
          style={styles.downArrow}
          source={Imagepath.down}
          resizeMode="contain"
        />
      </TouchableOpacity>
      {DropDownSec && (
        <View style={styles.DropDownView}>
          <CustomDropDown
            marginVertical={5}
            items={DishesData}
            placeholder={selectvalue}
            onChangeItem={item => onChangesecond(item.label)}
            onOpen={() => onPickersecond()}
            ImagePath={Imagepath.downArrow}
            colour={Colors.bottonColors}
            isDropDownSec={DropDownSec}
          />
        </View>
      )}
      <Text
        style={{
          color: Colors.black,
          marginHorizontal: 24,

          marginTop: 28,
          fontSize: Fontsize.fontFifteen,
          fontFamily: Fonts.ProximaNovaSemibold,
        }}>
       Share your experience
      </Text>
      <TextInput
        placeholder="Share your experiance"
        placeholderTextColor="#929397"
        style={{
          paddingLeft: 15,
          height: 120,
          borderColor: 'CECECE',
          borderWidth: 0.5,
          marginHorizontal: 24,
          borderRadius: 10,
          marginTop: 10,
          textAlign: 'center',
          fontFamily: Fonts.ProximaNovaSemibold,
        }}
        keyboardType="default"
        multiline={true}
        onChangeText={text => {
          setRecomendation(text);
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 15,
          marginVertical: 15,
        }}>
        <TouchableOpacity
          onPress={() => chexkBox()}
          style={{ paddingRight: '2%' }}>
          <Image
            source={mark ? Imagepath.yes : Imagepath.check}
            style={{
              height: 30,
              width: 30,
              borderRadius: 5,
              tintColor: '#707070',
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: Fontsize.fontFifteen,
            color: Colors.black,
            fontFamily: Fonts.ProximaNovaRegular,
          }}>
          Keep this feedback publicity anonymous
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => Call_ClinicialApi()}
        style={{
          backgroundColor: '#245FC7',
          paddingVertical: 15,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginHorizontal: 24,
          marginVertical: 10,
        }}>
        <Text
          style={{
            fontSize: Fontsize.fontSixteen,
            color: Colors.white,
            fontFamily: Fonts.ProximaNovaSemibold,
          }}>
          SUBMIT
        </Text>
      </TouchableOpacity>

      {docPicList && (
        <DoctorList
          modalVisible={modalVisible}
          Hidemodal={ListModal}
          data={props.doctorList}
          slectData={mark}
          chexkBoxFnc={ServiceData}
        />
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
    paddingVertical: 22,
    color: Colors.black,
    fontSize: Fontsize.fontFifteen,
    marginHorizontal: 24,

    fontFamily: Fonts.ProximaNovaSemibold,
  },
  imputHeader: {
    color: Colors.black,
    marginHorizontal: 24,
    fontFamily: Fonts.ProximaNovaSemibold,
  },
  dropdownView: {
    borderWidth: 1,
    borderColor: '#CECECE',
    fontSize: Fontsize.fontFifteen,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingLeft: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  dropdownText: { fontSize: Fontsize.fontFifteen, fontFamily: Fonts.ProximaNovaMedium },
  downArrow: { height: 8, width: 12, paddingRight: 50 },
  DropDownView: {
    elevation: 5,
    width: "90%",
    zIndex: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
    borderRadius: 5,
    position: 'absolute',
    top: height / 5.1,
    alignSelf: "center"
  },
  arrowDown: {
    tintColor: Colors.imputborderColor,
    height: 15,
    width: 15,

  },
});


const mapStateToProps = state => ({
  allDoctorlist: state.doctor.allDoctorlist
});

const ActionCreators = Object.assign(
  { postBravo },
  { getDoctorList }
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clinic);
