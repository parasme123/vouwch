import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
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
  Alert,
  Modal,
} from 'react-native';
import {Header} from '../../../common/Header';
import Imagepath from '../../../common/imagepath';
import Clinic from './clinic';
import Patient from './patient';
import String from '../../../common/String';
// import styles from './styles';
import Fonts from '../../../common/Fonts';
import onChangesecond from './clinic';
const Rate = ({navigation, route}) => {
  // const [mark, setMark] = useState();
  const [clinice, setclinic] = useState();
  const [patient, setpatient] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const doctorId = route.params ? route.params.doctorId : 0;
  // const  doctorId  = route.params?route.params.doctorId:0;
  const detail = route.params ? route.params.detail : 0;

  // const chexkBox = () => {
  //     setMark(!mark)
  // }
  const ClinicianPage = () => {
    setclinic(true);
    setpatient(false);
  };

  const PasientPage = () => {
    setclinic(false);
    setpatient(true);
  };
  useEffect(async () => {
    PasientPage();
    const userData = await AsyncStorageHelper.getData(Constants.USER_DATA);
    console.log(userData, 'userData------');
  }, []);

  const RateReview_CallApi = () => {
    let data = {
      id: doctorId.id,
      review_type: ClinicianPage()?.PasientPage(),
      rate: onChangesecond(),
      review: Email,
      is_anonym: Email,
      is_recommend: Email,
      wait_period: Email,
      friendness_rate: Email,
      treatment_rate: Email,
      wait_rate: Email,
      experience_rate: Email,
      money_rate: Email,
    };
    console.log(review_type);
    setloaderVisible(true);
    ApiCall.ApiMethod(SortUrl.UserLogin, Constants.POST, data)
      .then(response => {
        setloaderVisible(false);
        if (response.status == Constants.Success) {
          AsyncStorageHelper.setData(Constants.USER_DATA, response.data);
          AsyncStorageHelper.setData(Constants.TOKEN, response.token);
          handleNavigation({
            type: 'setRoot',
            page: 'bottomtab',
            navigation: navigation,
          });
        } else {
          setloaderVisible(false);
          Toast.show(response.message);
        }
      })
      .catch(err => {
        setloaderVisible(false);
      });
  };

  const Registernow = () => {
    if (route.params.UserType == 'PERSONAL') {
      navigation.navigate('signup');
    } else {
      navigation.navigate('business');
    }
  };

  const loginApiColl = () => {
    if (
      validators.checkEmail('Email', Email) &&
      validators.checkNotNull('Password', 2, 20, Password) &&
      validators.checkTickRequire(securepassword)
    ) {
      Call_LoginApi();
    }
  };

  const Call_LoginApi = () => {
    let data = {
      id: doctorId.id,
      review_type: ClinicianPage()?.PasientPage(),
      rate: onChangesecond(),
      review: Email,
      is_anonym: Email,
      is_recommend: Email,
      wait_period: Email,
      friendness_rate: Email,
      treatment_rate: Email,
      wait_rate: Email,
      experience_rate: Email,
      money_rate: Email,
    };
    // alert("message")

    ApiCall.ApiMethod(SortUrl.Login, 'POST', data).then(response => {
      // alert(JSON.stringify(response))
      console.log('Child  of appliances  are', response);
      if (response.status == true) {
        navigation.navigate('BottomTap');
        AsyncStorageHelper.setData('Userdata'.response.data);

        console.log('Child  of appliances  are', response);
      } else {
        alert('Please write correct Email or Password');
        // ToastMessage("Error in fetching child categories");
      }
    });
  };

  return (
    <ImageBackground source={Imagepath.background} style={{flex: 1}}>
      <View style={{height: 115, width: '100%', backgroundColor: '#245FC7'}}>
        <Header title={String.RateAndReview} isback={'bottomtab'} />
        <View
          style={{
            flexDirection: 'row',
            width: '85%',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'center',
            fontFamily: Fonts.ProximaNovaSemibold,
          }}>
          <TouchableOpacity
            onPress={() => {
              [ClinicianPage(), {detail: doctorId}];
            }}
            style={[
              {backgroundColor: clinice ? '#19428A' : null},
              styles.button,
            ]}>
            <Text style={{color: '#ffffff', fontSize: 13}}>
              Clinician Review
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              PasientPage();
            }}
            style={[
              {
                backgroundColor: patient ? '#19428A' : null,
                fontFamily: Fonts.ProximaNovaSemibold,
              },
              styles.button,
            ]}>
            <Text style={{color: '#ffffff', fontSize: 13}}>Patient Review</Text>
          </TouchableOpacity>
        </View>
      </View>

      {clinice && <Clinic />}
      {patient && <Patient />}
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

export default Rate;
