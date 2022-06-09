import React, { Component } from 'react';
import { SafeAreaView, Text, LogBox } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import Navigator from './navigator/navigator';
import store from './reduxStore/store/Store'
store.subscribe(() => console.log(store.getState()));
import { Provider } from 'react-redux';


export default function App() {
  console.disableYellowBox = true;
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaView>
  );
}
