import React, { } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';
import { Fonts, Colors, Fontsize } from '@common';
import Modal from "react-native-modal";

const Dropdown = (props) => {
  const { isModalVisible, toggleModal, handleCatSelect, searchVal, searchCatList, CateList, handleSearchCategory, CateId } = props;
  return (
    <View>
      <TouchableOpacity
        onPress={toggleModal}
        style={{
          marginVertical: 10,
          marginHorizontal: 0,
          borderColor: '#CCC',
          borderRadius: 30,
        }}>
        <Text style={{
          fontSize: Fontsize.fontFifteen,
          color: CateId?.value ? Colors.black : Colors.imputborderColor,
          fontFamily: Fonts.ProximaNovaLight,
          paddingLeft: 15,
          flex: 1
        }}>{CateId?.value ? CateId.label : "Selecte Category"}</Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        onBackButtonPress={toggleModal}
      >
        <View style={{ flex: 1, backgroundColor: "white", padding: 12, borderRadius: 14 }}>
          <TextInput placeholder='Search Category' onChangeText={handleSearchCategory} value={searchVal} />
          <FlatList
            data={searchVal && searchVal != "" ? searchCatList : CateList}
            renderItem={({ item }) =>
              <TouchableOpacity
                style={{ paddingHorizontal: 6, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: "gray" }}
                onPress={() => handleCatSelect(item)}
              >
                <Text>{item.label}</Text>
              </TouchableOpacity>
            }
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.value}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Dropdown
