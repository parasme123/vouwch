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
import { CustomDropDown, Header, imagepath, Fonts, String, Colors, Fontsize } from '@common';
import { Validators } from '@lib';
import DoctorList from '../../../modal/DoctorList';
const { width, height } = Dimensions.get('window');



const Clinic = (props) => {
  const navigation = useNavigation();
  const doctorId = props.docId;
  const [DropDownSec, setDropDownSec] = useState(false);
  const [selectvalue, setselectvalue] = useState('Select');
  const [recomendation, setRecomendation] = useState();
  const [docPicList, setdocPicList] = useState();
  const [modalVisible, setModalVisible] = useState();
  const [mark, setMark] = useState(false);
  const [doctId, setdoctId] = useState({});
  const [id, setId] = useState();

  const [modalVisibleCountry, setModalVisibleCountry] = useState(false);
  const [modalVisibleState, setModalVisibleState] = useState(false);
  const [modalVisibleCity, setModalVisibleCity] = useState(false);

  const [countryItem, setCountryItem] = useState({})
  const [stateItem, setStateItem] = useState({})
  const [cityItem, setCityItem] = useState({})

  const onChangesecond = (item) => {
    setDropDownSec(!DropDownSec);
    setselectvalue(item.label);
    setId(item.SlectId)
  };
  const onPickersecond = () => {
    setDropDownSec(!DropDownSec);
  };
  const chexkBox = () => {
    setMark(!mark);
  };
  let DishesData = [
    { label: 'First Choice', value: '5 Star', SlectId: "5" },
    { label: 'Second Choice', value: '4 Star', SlectId: "4" },
    { label: 'Third Choice', value: '3 Star', SlectId: "3" },
    { label: 'Maybe', value: '2 Star', SlectId: "2" },
    { label: 'Emergency only', value: '1 Star', SlectId: "1" },
  ];

  const handleCountryItem = (item) => {
    setCountryItem(item);
    setStateItem({});
    setCityItem({});
    setModalVisibleCountry(!modalVisibleCountry);
    props.getStateCity(1, item.id);
  }

  const handleStateItem = (item) => {
    setStateItem(item);
    setCityItem({});
    setModalVisibleState(!modalVisibleState)
    props.getStateCity(2, item.id);
  }

  const handleCityItem = (item) => {
    setCityItem(item);
    setModalVisibleCity(!modalVisibleCity)
    props.handelDoctorList(countryItem.name, stateItem.name, item.name);
  }

  const handleCountryModal = () => {
    setModalVisibleCountry(!modalVisibleCountry)
  }

  const handleStateModal = () => {
    setModalVisibleState(!modalVisibleState)
  }

  const handleCityModal = () => {
    setModalVisibleCity(!modalVisibleCity)
  }

  const ListModal = () => {
    setdocPicList(!modalVisible);
    setModalVisible(!modalVisible);
  };

  const ServiceData = (item) => {
    setdoctId(item)
    setModalVisible(!modalVisible);
  };

  const Call_ClinicialApi = () => {
    let apiData = {
      business_id: doctorId ?? doctId.id,
      review_type: "Clinical",
      rate: id,
      review: recomendation,
      is_anonym: mark ? 1 : 0,
    }
    if (
      Validators.checkNotNull('Doctor Id', 1, 20, doctorId ?? doctId.id) &&
      Validators.checkNotNull('Recommendation', 2, 2000, recomendation)
    ) {
      props.Review_Validators(apiData)
    }
  }

  return (
    <ImageBackground source={Imagepath.background} style={styles.backgroundContainer}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <Text
          style={styles.headerText}>
          Should you, your family or friends seek care at this provider, what is
          your recommendation?
        </Text>
        {
          doctorId == null ?
            <>
              <Text style={styles.imputHeader}>Select Country</Text>
              <TouchableOpacity onPress={() => handleCountryModal()} style={[styles.dropdownView, { marginBottom: 15 }]}>
                <Text style={styles.dropdownText}>{countryItem.id ? countryItem.name : "Select Country"}</Text>
                <Image style={styles.downArrow} source={Imagepath.down} resizeMode="contain" />
              </TouchableOpacity>

              <Text style={styles.imputHeader}>Select State</Text>
              <TouchableOpacity onPress={() => handleStateModal()} style={[styles.dropdownView, { marginBottom: 15 }]}>
                <Text style={styles.dropdownText}>{stateItem.id ? stateItem.name : "Select State"}</Text>
                <Image style={styles.downArrow} source={Imagepath.down} resizeMode="contain" />
              </TouchableOpacity>

              <Text style={styles.imputHeader}>Select City</Text>
              <TouchableOpacity onPress={() => handleCityModal()} style={[styles.dropdownView, { marginBottom: 15 }]}>
                <Text style={styles.dropdownText}>{cityItem.id ? cityItem.name : "Select City"}</Text>
                <Image style={styles.downArrow} source={Imagepath.down} resizeMode="contain" />
              </TouchableOpacity>

              <Text style={styles.imputHeader}>Select Doctor</Text>
              <TouchableOpacity
                onPress={() => ListModal()}
                style={[styles.dropdownView, { marginBottom: 15 }]}>
                <Text style={styles.dropdownText}>{doctId.id ? doctId.business_name : "Select Doctor"}</Text>
                <Image style={styles.downArrow} source={Imagepath.down} resizeMode="contain" />
              </TouchableOpacity>
            </> : null
        }

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
              id={id}
              onChangeItem={item => onChangesecond(item)}
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
            borderColor: '#CECECE',
            borderWidth: 0.5,
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
            marginVertical: 15,
          }}>
          <TouchableOpacity
            onPress={() => chexkBox()}
            style={{ paddingRight: 15 }}>
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
            listTitle={"Doctor list"}
          />
        )}
        <DoctorList
          modalVisible={modalVisibleCountry}
          Hidemodal={handleCountryModal}
          data={props.allCountries}
          slectData={countryItem}
          chexkBoxFnc={handleCountryItem}
          listTitle={"Country list"}
          />
        <DoctorList
          modalVisible={modalVisibleState}
          Hidemodal={handleStateModal}
          data={props.allState}
          slectData={stateItem}
          chexkBoxFnc={handleStateItem}
          listTitle={"State list"}
          />
        <DoctorList
          modalVisible={modalVisibleCity}
          Hidemodal={handleCityModal}
          data={props.allCity}
          slectData={cityItem}
          chexkBoxFnc={handleCityItem}
          listTitle={"City list"}
          />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: { flex: 1, paddingHorizontal: 24 },
  headerText: {
    textAlign: 'center',
    paddingVertical: 22,
    color: Colors.black,
    fontSize: Fontsize.fontFifteen,
    // marginHorizontal: 24,
    fontFamily: Fonts.ProximaNovaSemibold,
  },
  imputHeader: {
    color: Colors.black,
    // marginHorizontal: 24,
    fontFamily: Fonts.ProximaNovaSemibold,
  },
  dropdownView: {
    borderWidth: 1,
    borderColor: '#CECECE',
    fontSize: Fontsize.fontFifteen,
    borderRadius: 10,
    // marginHorizontal: 20,
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
    width: "100%",
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


export default Clinic;
