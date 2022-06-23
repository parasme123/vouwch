import { DOCTORRECORD, HOMEDATA, BRAVOCARD, FOLLOW, LOGIN, REGISTER } from './types';
import Toast from 'react-native-simple-toast';
import { handleNavigation } from '../../navigator/Navigator';
import * as URL from './webApiUrl';
import{Constants,AsyncStorageHelper} from "@lib"
export const saveDoctorData = (data) => {
    return ({
        type: DOCTORRECORD,
        payload: data
    })
};


export const saveHomeData = (data) => {
    return ({
        type: HOMEDATA,
        payload: data
    })
};

export const saveBravoCard = (data) => {
    return ({
        type: BRAVOCARD,
        payload: data
    })
};

export const saveFollowPost = (data) => {
    return ({
        type: FOLLOW,
        payload: data
    })
};

export const saveLoginData = (data) => {
    return ({
        type: LOGIN,
        payload: data
    })
};


export const saveRegisterData = (data) => {
    return ({
        type: REGISTER,
        payload: data
    })
};



export const getDoctorData = () => {
    return async dispatch => {
        await fetch(`${URL.baseUrl}${URL.getAllDoctors}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            }
        }).then(async (res) => {
            let response = await res.json();
            dispatch(saveDoctorData(response.data.data))
        }).catch(err => {
            console.log("Unable to fetch!", err);
        })
    }
};




export const postDoctorSearch = (data) => {
    // console.log("keyword----------DoctorAction", data);
    return async dispatch => {
        await fetch(`${URL.baseUrl}${URL.postDoctorSearch}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(async (res) => {
            let response = await res.json();
            // console.log("data action------------------------------------------------response", response);
            dispatch(saveDoctorData(response.data.data))
        }).catch(err => {
            console.log("Unable to fetch!", err);
        })

    }
};


export const getHomeData = () => {
    return async dispatch => {
        await fetch(`${URL.baseUrl}${URL.getHomeData}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            }
        }).then(async (res) => {
            let response = await res.json();
            dispatch(saveHomeData(response.data))
            // console.log("log------------getHomeData-----",response)
        }).catch(err => {
            console.log("Unable to fetch!", err);
        })
    }
};



export const getBravoCardData = () => {
    return async dispatch => {
        await fetch(`${URL.baseUrl}${URL.getAllBravoCard}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            }
        }).then(async (res) => {
            let response = await res.json();
            dispatch(saveBravoCard(response.data.cards))
        }).catch(err => {
            console.log("Unable to fetch!", err);
        })
    }
};



export const postFollow = (data) => {
    // console.log("keyword----------DoctorAction", data);
    return async dispatch => {
        await fetch(`${URL.baseUrl}${URL.postFollow}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                // "Token":""
            },
            body: JSON.stringify(data)
        }).then(async (res) => {
            let response = await res.json();
            // console.log("data action-------------------------postFollow-----------------------response", response);
            dispatch(saveFollowPost(response.data))
        }).catch(err => {
            console.log("Unable to fetch!", err);
        })

    }
};

export const postLogin = (data, type, setloaderVisible, PageNavigation) => {
    return async dispatch => {
        setloaderVisible(true);
        await fetch(`${URL.baseUrl}${type == "personal" ? URL.getPersonalLogin : URL.getLoginBusiness}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(async (res) => {
            let response = await res.json();
            setloaderVisible(false);
            if (response.status) {
                AsyncStorageHelper.setData(Constants.USER_DATA, response.data);
                AsyncStorageHelper.setData(Constants.TOKEN, response.token);
                global.token=response.token
                PageNavigation(response)
                console.log("hello")
            } else {
                setloaderVisible(false);
                Toast.show(response.message);
            }
            dispatch(saveLoginData(response))
        }).catch(err => {
            console.log("Unable to fetch!", err);
            setloaderVisible(false);
            Toast.show(response.message);
        })
    }
};


export const postRegister = (data, setloaderVisible, PageNavigation) => {
    return async dispatch => {
        setloaderVisible(true);
        await fetch(`${URL.baseUrl}${URL.getRegistor}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(async (res) => {
            let response = await res.json();
            setloaderVisible(false);
            if (response.status) {
                PageNavigation(response)
                console.log("hello")
            } else {
                setloaderVisible(false);
                Toast.show(response.message);
            }
            dispatch(saveLoginData(response))
        }).catch(err => {
            console.log("Unable to fetch!", err);
            setloaderVisible(false);
            Toast.show(response.message);
        })
    }
};
