import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
} from 'react-native';
import { imagepath } from '@common';
import styles from './pickercss';

const Picker = (props) => {



  const Datalist = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => props.chexkBoxFnc({ id: item.id, name: item.name })}
        key={item.id}
        style={styles.dataListView}>
        <Text style={styles.datalistText}>
          {item.name}</Text>
        <TouchableOpacity
          onPress={() => props.chexkBoxFnc(item.id)}
          style={{ paddingRight: 5 }}>
          <Image
            source={
              props.slectData.findIndex((data) => data.id == item.id) !== -1
                ? imagepath.yes
                : imagepath.check
            }
            style={styles.checkbox}
            resizeMode="cover"
          />
        </TouchableOpacity>

      </TouchableOpacity>
    )
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() =>
        // Alert.alert("Modal has been closed.");
        props.Hidemodal()
      }>
      <View style={styles.centeredView1}>
        <View style={styles.centeredView2}>
          <View style={styles.headerView}>
            <Text style={styles.headerText}>Services</Text>
            <TouchableOpacity
              onPress={() => props.Hidemodal()}
              style={styles.headerIcon}>
              <Image
                style={styles.headerIcon}
                resizeMode="contain"
                source={imagepath.crose}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={props.data}
            renderItem={Datalist}
            // style={{flex:1,borderWidth:1,borderColor:"red"}}
            keyExtractor={(item, index) => String(index)}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </Modal>
  );
}


export default Picker;

