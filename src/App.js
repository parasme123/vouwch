import React, {Component} from 'react';
import {SafeAreaView, StatusBar, LogBox} from 'react-native';
import Navigator from './navigator/Navigator';
import {Provider} from 'react-redux';
import configureStore from './reduxStore/store/configureStore';

const store = configureStore();
// store.subscribe(() => console.log(store.getState()));
export default function App() {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
      {/* <StatusBar
         backgroundColor="transparent"
         barStyle={"light-content"}
         translucent={true} /> */}
        <Navigator />
      </Provider>
    </SafeAreaView>
  );
}
