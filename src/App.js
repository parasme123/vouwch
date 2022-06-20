import React, { Component } from 'react';
import { SafeAreaView, Text, LogBox } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import Navigator from './navigator/Navigator';
import { Provider } from 'react-redux';
import configureStore from './reduxStore/store/configureStore';

const store = configureStore()
// store.subscribe(() => console.log(store.getState()));


export default function App() {
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
