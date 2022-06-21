import * as React from 'react';
import NetworkUtils from './Network';
import Constants from './Constants';
import AsyncStorageHelper from './AsyncStorageHelper';
import CommonApiMethods from './CommonApiMethods';

export default class ApiCall extends React.Component {
  static async ApiMethod(Url, Method, SendData, isImage) {
    let token = await AsyncStorageHelper.getData(Constants.TOKEN);
    return NetworkUtils.isNetworkAvailable()
      .then(isConnected => {
        if (isConnected == true) {
          let CompleteUrl = CommonApiMethods.BaseUrl(Url);
          console.log('token  : - ', token);
          var HeaderToken = {
            Accept: 'application/json',
            'Content-Type': isImage
              ? 'multipart/form-data;'
              : 'application/json',
            // 'Token':''
          };
          if (token) HeaderToken['Authorization'] = 'Bearer ' + token;
          let apiData;
          if (isImage) {
            apiData = SendData;
          } else {
            apiData = JSON.stringify(SendData);
          }
          console.log('HeaderToken  : - ', HeaderToken);
          console.log('Url  : - ', CompleteUrl);
          console.log('apiData  : - ', apiData);
          console.log('Method  : - ', Method);
          return fetch(CompleteUrl, {
            body: apiData,
            method: Method,
            headers: HeaderToken,
          })
            .then(response => {
              console.log('response  : - ', response);
              return response.json();
            })
            .then(responseJson => {
              console.log('responseJson  : - ', responseJson);
              return responseJson;
            })
            .catch(error => {
              console.log('---------------Api error' + error);
              return {message: Constants.SorryMessageError, status: 'false'};
            });
        } else {
          return {message: Constants.InternetError, status: 'false'};
        }
      })
      .catch(error => {
        console.log('---------------Network error: ' + error);
        return {message: Constants.SorryMessageError, status: 'false'};
      });
  }
}
