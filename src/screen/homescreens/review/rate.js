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
import { postReview, getDoctorList, getAllCountry, getStateAndCity } from '../../../reduxStore/action/doctorAction';
import { handleNavigation } from '../../../navigator/Navigator';
import { CustomLoader } from '@lib';

const Rate = (props, { navigation, route }) => {
  const [cliniceReview, setcliniceReview] = useState();
  const [loaderVisible, setloaderVisible] = useState(false);
  const doctorId = props.route.params ? props.route.params.doctorid : null;

  const ClinicianPage = () => {
    setcliniceReview(true);
  };

  const PasientPage = () => {
    setcliniceReview(false);
  };
  useEffect(() => {
    ClinicianPage();
    let { actions } = props;
    actions.getAllCountry();
  }, []);

  const getStateCity = (findType, itemId) => {
    let { actions } = props;
    let apiData = {
      find_type: findType,
      c_s_id: itemId
    }
    actions.getStateAndCity(apiData);
  }

  const Review_Validators = (apiData) => {
    let { actions } = props;
    actions.postReview(apiData, setloaderVisible, () => PageNavigation());
  };

  const PageNavigation = () => {
    handleNavigation({
      type: 'setRoot',
      page: 'bottomtab',
      navigation: props.navigation,
    });
  }

  const handelDoctorList = (country, state, city) => {
    console.log("country, state, city", country, state, city);
    props.actions.getDoctorList(country, state, city);
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
            onPress={() => { ClinicianPage() }}
            style={[
              { backgroundColor: cliniceReview ? '#19428A' : null },
              styles.button,
            ]}>
            <Text style={{ color: Colors.white, fontSize: 13 }}>
              Clinician’s Feedback
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              PasientPage();
            }}
            style={[
              {
                backgroundColor: !cliniceReview ? '#19428A' : null,
                fontFamily: Fonts.ProximaNovaSemibold,
              },
              styles.button,
            ]}>
            <Text style={{ color: Colors.white, fontSize: 13 }}>Patient/family Feedback</Text>
          </TouchableOpacity>
        </View>
      </View>

      {
        cliniceReview &&
        <Clinic
          doctorList={props.allDoctorlist}
          docId={doctorId}
          Review_Validators={Review_Validators}
          getStateCity={getStateCity}
          allCountries={props.allCountries}
          allState={props.allState}
          allCity={props.allCity}
          handelDoctorList={handelDoctorList}
        />
      }
      {
        !cliniceReview &&
        <Patient
          doctorList={props.allDoctorlist}
          docId={doctorId}
          Review_Validators={Review_Validators}
          getStateCity={getStateCity}
          allCountries={props.allCountries}
          allState={props.allState}
          allCity={props.allCity}
          handelDoctorList={handelDoctorList}
        />
      }
      <CustomLoader loaderVisible={loaderVisible} />
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
  allDoctorlist: state.doctor.allDoctorlist,
  allCountries: state.doctor.allCountries,
  allState: state.doctor.allState,
  allCity: state.doctor.allCity
});

const ActionCreators = Object.assign(
  { postReview },
  { getDoctorList },
  { getAllCountry },
  { getStateAndCity }
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rate);
