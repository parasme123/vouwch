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
import CustomDropDown from '../../../common/CustomDropDown';
import { Header, imagepath, Fonts, String, Colors, Fontsize } from '@common';
const { width, height } = Dimensions.get('window');
export default Clinic = (props) => {
  const navigation = useNavigation();
  const [mark, setMark] = useState();
  const [DropDownSec, setDropDownSec] = useState(false);
  const [selectvalue, setselectvalue] = useState('Select');
  const [recomendation, setRecomendation] = useState();
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

  // useEffect(async () => {
  //   const UserData = await AsyncStorageHelper.getData(Constants.USER_DATA);
  //   console.log(UserData, 'anil_____________________++++++++++++++');
  // }, []);

  useEffect(() => {
    console.log("hsdflsdlf;===============", props.doctorList);
  }, []);

  return (
    <ImageBackground source={Imagepath.background} style={{ flex: 1 }}>
      <Text
        style={{
          textAlign: 'center',
          paddingVertical: 22,
          color: '#000000',
          fontSize: 15,
          marginHorizontal: 24,

          fontFamily: Fonts.ProximaNovaSemibold,
        }}>
        Should you, your family or friends seek care at this provider, what is
        your recommendation?
      </Text>
      <Text
        style={{
          color: '#000000',
          marginHorizontal: 24,

          fontFamily: Fonts.ProximaNovaSemibold,
        }}>
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
          color: '#000000',
          marginHorizontal: 24,

          marginTop: 28,
          fontSize: 15,
          fontFamily: Fonts.ProximaNovaSemibold,
        }}>
        Slect your recommendation
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
        numberOfLines={20}
        onChangeText={text => {
          setRecomendation(text);
        }}
      // onChangeText={(text) => { setemail(text) }}
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
            fontSize: 15,
            color: '#000000',
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
            fontSize: 16,
            color: '#FFFFFF',
            fontFamily: Fonts.ProximaNovaSemibold,
          }}>
          SUBMIT
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
});
