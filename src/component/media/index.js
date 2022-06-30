import React from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

export function VideoImage() {
  const [modalVisible, setModalVisible] = useState(false);
  const MOdule = () => {
    return (
      <View>
        {/* <Image source={{ URL(SDFJKADJFKLAKDSLFJ) }} /> */}
        
      </View>
    )
  }
  return (
    <View style={styles.centeredView}>
          <Flatelist
            //  data={}
            horizontal={true}
            style={{}}
            renderItem={Module}
            keyExtractor={items => items}
          />
    </View>
  )
};



const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;

//  <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}
//             >