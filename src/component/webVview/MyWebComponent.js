// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { WebView } from 'react-native-webview';


// const MyWebComponent =(props) => {
//     return <WebView source={{ uri: "https://apponedemo.top/vouwch/api/contact-us-app" }} />
//   }

// export default MyWebComponent;




import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
export default class MyWebComponent extends Component {
  render() {
    return (
      <View style={{backgroundColor:"red", flex:1}}>
        <WebView source={{ uri: 'https://reactnative.dev/' }} />
      </View>
    );
  }
}
