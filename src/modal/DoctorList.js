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

const DoctorList = (props) => {

  const Datalist = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => props.chexkBoxFnc(item)}
        key={item.id}
        style={styles.dataListView}>
        <Text style={styles.datalistText}>
          {item.business_name}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() =>
        props.Hidemodal()
      }>
      <View style={styles.centeredView1}>
        <View style={styles.centeredView2}>
          <View style={styles.headerView}>
            <Text style={styles.headerText}>Doctor List</Text>
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
            keyExtractor={(item, index) => String(index)}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </Modal>
  );
}


export default DoctorList;

