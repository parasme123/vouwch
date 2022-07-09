import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { Header, Fonts, String, Colors, Fontsize, imagepath } from '@common';
// ...
const MyWebComponent = (props, { route }) => {
  const urlPath = props?.route?.params?.url ? props.route.params.url : null;
  const HeaderTittle = props?.route?.params?.title ? props.route.params.title : null;
  return (
    <View style={{ flex: 1 }}>
       <Header title={HeaderTittle} isback={'bottomtab'} />
       {/* <Header title={String.menu} isback={'bottomtab'} /> */}
      <WebView source={{ uri: urlPath }} />
    </View>
  )
}


export default MyWebComponent;