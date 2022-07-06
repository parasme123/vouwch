import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Header, imagepath, Fonts, String, Colors } from '@common';
import Clinic from './clinic';
import Patient from './patient';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postBravo, getDoctorList } from '../../../reduxStore/action/doctorAction';

const Rate = (props,{ navigation, route }) => {
  const [cliniceReview, setcliniceReview] = useState();
  const [patientReview, setpatientReview] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const doctorId = props.route.params ? props.route.params.doctorId : 0;
  const detail = props.route.params ? props.route.params.detail : 0;

  const ClinicianPage = () => {
    setcliniceReview(true);
    setpatientReview(false);
  };

  const PasientPage = () => {
    setcliniceReview(false);
    setpatientReview(true);
  };
  useEffect(() => {
    ClinicianPage();
    handelDoctorList();
  }, []);



  const Review_Validators = () => {
    if (
      Validators.checkNotNull('Name', 2, 20, name) &&
      Validators.checkNotNull('Department', 2, 20, department) &&
      Validators.checkNotNull('hospital', 2, 20, hospital) &&
      Validators.checkNotNull('City', 2, 20, city) &&
      Validators.checkNotNull('State', 2, 20, state) &&
      Validators.checkNotNull('Detail', 2, 200, detail)
    ) {
      Review();
    }
  };

  const Review = () => {
    let { actions } = props;
    let apiData = {
      business_id: doctorId,
      review_type: name,
      rate: department,
      review: hospital,
      is_anonym: city,
      friendness_rate: state,
      treatment_rate: detail,
      wait_rate: doctorId,
      experience_rate: name,
      money_rate: department,
      wait_period: hospital,
      is_recommend: city
    };
    // actions.postBravo(apiData, setloaderVisible, () => PageNavigation());
  };

  const PageNavigation = () => {
    handleNavigation({
      type: 'setRoot',
      page: 'bottomtab',
      navigation: props.navigation,
    });
  }

  // doctor list data

  const handelDoctorList = () => {
    let { actions } = props;
    actions.getDoctorList();
  };


  return (
    <ImageBackground source={imagepath.background} style={{ flex: 1 }}>
      <View style={{ height: 115, width: '100%', backgroundColor: Colors.appcolor }}>
        <Header title={String.RateAndReview} isback={'bottomtab'} />
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'center',
            fontFamily: Fonts.ProximaNovaSemibold,
          }}>
          <TouchableOpacity
            onPress={() => { ClinicianPage(), { detail: doctorId } }}
            style={[
              { backgroundColor: cliniceReview ? '#19428A' : null },
              styles.button,
            ]}>
            <Text style={{ color: Colors.white, fontSize: 13 }}>
              Clinician Review
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              PasientPage();
            }}
            style={[
              {
                backgroundColor: patientReview ? '#19428A' : null,
                fontFamily: Fonts.ProximaNovaSemibold,
              },
              styles.button,
            ]}>
            <Text style={{ color: Colors.white, fontSize: 13 }}>Patient Review</Text>
          </TouchableOpacity>
        </View>
      </View>

      {
        cliniceReview &&
        <Clinic
          doctorList={props.allDoctorlist}
        />
      }
      {
        patientReview &&
        <Patient
          doctorList={props.allDoctorlist}
        />
      }
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 168,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
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

export default connect(mapStateToProps, mapDispatchToProps)(Rate);
