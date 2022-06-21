import {DOCTORRECORD, HOMEDATA} from './types';
import * as URL from './webApiUrl';

export const saveDoctorData = data => {
  return {
    type: DOCTORRECORD,
    payload: data,
  };
};

export const getDoctorData = () => {
  return async dispatch => {
    await fetch(`${URL.baseUrl}${URL.getAllDoctors}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(async res => {
        let response = await res.json();
        dispatch(saveDoctorData(response.data.data));
      })
      .catch(err => {
        console.log('Unable to fetch!', err);
      });
  };
};

export const postDoctorSearch = data => {
  console.log('keyword----------DoctorAction', data);
  return async dispatch => {
    await fetch(`${URL.baseUrl}${URL.postDoctorSearch}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(async res => {
        let response = await res.json();
        console.log(
          'data action------------------------------------------------response',
          response,
        );
        dispatch(saveDoctorData(response.data.data));
      })
      .catch(err => {
        console.log('Unable to fetch!', err);
      });
  };
};

export const saveHomeData = data => {
  return {
    type: HOMEDATA,
    payload: data,
  };
};

export const getHomeData = () => {
  return async dispatch => {
    await fetch(`${URL.baseUrl}${URL.getHomeData}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(async res => {
        let response = await res.json();
        dispatch(saveHomeData(response));
      })
      .catch(err => {
        console.log('Unable to fetch!', err);
      });
  };
};
