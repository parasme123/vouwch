import { DOCTORRECORD, SAVEALLCOUNTRY, SAVEALLSTATE, SAVEALLCITY, SAVEFOLLOWDATA, FEEDBACKUSERDATA, LOGOUT, DOCTORRECORDCONCATE, HOMEDATA, BRAVOCARD, CATEGORIES, NOTIFICATION, DOCTORDETAILS, USERDATA, DOCTORLIST, SERVICESLIST, USERGETDATA, MESSAGEANDCOMMENT } from './types';
import Toast from 'react-native-simple-toast';
import * as URL from './webApiUrl';
import { Constants, AsyncStorageHelper } from "@lib";

export const postMessageReply = (data, typeOfData) => {
    return async dispatch => {
        await fetch(`${URL.baseUrl}${typeOfData == 1 ? URL.messageReply : URL.commentReply}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${global.token}`
            },
            body: JSON.stringify(data)
        }).then(async (res) => {
            let response = await res.json();
            dispatch(getMessageAndComment(typeOfData))
            Toast.show(response.message);
            // console.log("res", res);
        }).catch(err => {
            console.log("postMessageReply", err);
        })
    }
}

export const getAllCountry = () => {
    return async dispatch => {
        await fetch(`${URL.baseUrl}${URL.getAllCountry}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        }).then(async (res) => {
            let response = await res.json();
            dispatch(saveAllCountry(response.data))
        }).catch(err => {
            console.log("getAllCountry", err);
        })
    }
}

export const saveAllCountry = (data) => {
    return ({
        type: SAVEALLCOUNTRY,
        payload: data
    })
}

export const getStateAndCity = (data) => {
    return async dispatch => {
        await fetch(`${URL.baseUrl}${URL.getStateAndCity}?find_type=${data.find_type}&c_s_id=${data.c_s_id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        }).then(async (res) => {
            let response = await res.json();
            if (data.find_type == 1) {
                dispatch(saveAllState(response.data))
            } else {
                dispatch(saveAllCity(response.data))
            }
        }).catch(err => {
            console.log("getStateAndCity", err);
        })
    }
}

export const saveAllState = (data) => {
    return ({
        type: SAVEALLSTATE,
        payload: data
    })
}

export const saveAllCity = (data) => {
    return ({
        type: SAVEALLCITY,
        payload: data
    })
}

export const getFollowData = () => {
    return async dispatch => {
        await fetch(`${URL.baseUrl}${URL.getFollowData}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${global.token}`
            },
        }).then(async (res) => {
            let response = await res.json();
            dispatch(saveFollowData(response.data))
        }).catch(err => {
            console.log("getFollowData", err);
        })
    }
}

export const saveFollowData = (data) => {
    return ({
        type: SAVEFOLLOWDATA,
        payload: data
    })
}

export const logOut = () => {
    return ({
        type: LOGOUT,
    })
}

export const getMessageAndComment = (id) => {
    return async dispatch => {
        dispatch(saveMessageAndComment([]))
        await fetch(`${URL.baseUrl}${URL.getMessageAndComment}?typeOfDta=${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${global.token}`
            }
        }).then(async (res) => {
            let response = await res.json();
            // console.log("getMessageAndComment", response.data)
            // Toast.show(response.message);
            dispatch(saveMessageAndComment(response.data))
        }).catch(err => {
            console.log("getMessageAndComment", err);
            Toast.show(response.message);
        })
    }
}

export const saveMessageAndComment = (data) => {
    return ({
        type: MESSAGEANDCOMMENT,
        payload: data
    })
};

export const saveDoctorData = (data) => {
    return ({
        type: DOCTORRECORD,
        payload: data
    })
};

export const saveDoctorDataWithConcate = (data) => {
    return ({
        type: DOCTORRECORDCONCATE,
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

// export const getDoctorData = () => {
//     return async dispatch => {
//         await fetch(`${URL.baseUrl}${URL.getAllDoctors}`, {
//             method: "GET",
//             headers: {
//                 "Content-type": "application/json",
//             }
//         }).then(async (res) => {
//             let response = await res.json();
//             dispatch(saveDoctorData(response.data.data))
//         }).catch(err => {
//             console.log("getDoctorData", err);
//         })
//     }
// };

export const postDoctorSearch = (data, pageNo = 1,) => {
    return async dispatch => {
        if (pageNo == 1) {
            dispatch(saveDoctorData([]))
        }
        await fetch(`${URL.baseUrl}${data.keyword == null ? URL.getAllDoctors : URL.postDoctorSearch}?page=${pageNo}`,
            data.keyword == null ? {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                },
            } : {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data)
            }).then(async (res) => {
                let response = await res.json();
                dispatch(saveDoctorDataWithConcate(response.data))
            }).catch(err => {
                console.log("postDoctorSearch", err);
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
        }).catch(err => {
            console.log("getHomeData", err);
        })
    }
};

export const getBravoCardData = (setloaderVisible) => {
    return async dispatch => {
        setloaderVisible(true);
        await fetch(`${URL.baseUrl}${URL.getAllBravoCard}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            }
        }).then(async (res) => {
            setloaderVisible(false);
            let response = await res.json();
            dispatch(saveBravoCard(response.data.cards))
        }).catch(err => {
            setloaderVisible(false);
            console.log("getBravoCardData", err);
        })
    }
};

export const postFollow = (data) => {
    return async dispatch => {
        await fetch(`${URL.baseUrl}${URL.postFollow}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${global.token}`
            },
            body: JSON.stringify(data)
        }).then(async (res) => {
            let response = await res.json();
            if (response.status) {
                dispatch(getFollowData());
            }
            console.log(response);
        }).catch(err => {
            console.log("postFollow", err);
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
                dispatch(setUserData(response.data))
                dispatch(saveUserProfile(response.data))
                AsyncStorageHelper.setData(Constants.USER_DATA, response.data);
                AsyncStorageHelper.setData(Constants.TOKEN, response.token);
                global.token = response.token;
                dispatch(getFollowData());
                PageNavigation(response)
            } else {
                setloaderVisible(false);
                Toast.show(response.message);
            }
        }).catch(err => {
            console.log("postLogin", err);              //...............log..........remove please
            setloaderVisible(false);
            Toast.show("something went wrong");
        })
    }
};


export const setUserData = (data) => {
    return ({
        type: USERDATA,
        payload: data
    })
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
                AsyncStorageHelper.setData(Constants.USER_DATA, response.data);
                AsyncStorageHelper.setData(Constants.TOKEN, response.token);
                PageNavigation(response)
                Toast.show(response.message);
            } else {
                setloaderVisible(false);
                Toast.show(response.message);
            }
        }).catch(err => {
            console.log("postRegister", err);
            setloaderVisible(false);
            Toast.show("something went wrong");
        })
    }
};

export const getCategories = (setloaderVisible) => {
    return async dispatch => {
        // setloaderVisible(true);
        await fetch(`${URL.baseUrl}${URL.getCategoury}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${global.token}`
            }
        }).then(async (res) => {
            let response = await res.json();
            dispatch(saveCategories(response))
            // console.log("res===", response);           //console remove after use 
            // setloaderVisible(false);
        }).catch(err => {
            console.log("getCategories", err);
            // setloaderVisible(false);
        })
    }
};

export const saveCategories = (data) => {
    return ({
        type: CATEGORIES,
        payload: data
    })
};



export const postForgot = (data, setloaderVisible, PageNavigation) => {
    return async dispatch => {
        setloaderVisible(true);
        await fetch(`${URL.baseUrl}${URL.postForgotapi}`, {
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
                Toast.show(response.message);
            } else {
                setloaderVisible(false);
                Toast.show(response.message);
            }
        }).catch(err => {
            console.log("postForgot", err);
            setloaderVisible(false);
            Toast.show("something went wrong");
        })
    }
};

export const Handelotp = (data, setloaderVisible) => {
    return async dispatch => {
        // setloaderVisible(true);
        await fetch(`${URL.baseUrl}${URL.postotp}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(async (res) => {
            let response = await res.json();
            setloaderVisible(false);
            if (response.status) {
                // PageNavigation(response)
                // alert("hiii")
            } else {
                setloaderVisible(false);
                // alert('hello')
                Toast.show(response.message);
            }
        }).catch(err => {
            console.log("Handelotp", err);
            setloaderVisible(false);
            Toast.show("something went wrong");
        })
    }
};

export const handelresetPassword = (data, setloaderVisible, PageNavigation) => {
    return async dispatch => {
        setloaderVisible(true);
        // console.log("response=====data=======handelresetPassword", data);
        await fetch(`${URL.baseUrl}${URL.ResetPassword}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(async (res) => {
            let response = await res.json();
            setloaderVisible(false);
            if (response.status) {
                PageNavigation()
                Toast.show(response.message);
            } else {
                setloaderVisible(false);
                Toast.show(response.message);
            }
        }).catch(err => {
            console.log("handelresetPassword", err);
            setloaderVisible(false);
            Toast.show("something went wrong");
        })
    }
};

export const postAccountSetting = (data, setloaderVisible, PageNavigation) => {
    return async dispatch => {
        setloaderVisible(true);
        await fetch(`${URL.baseUrl}${URL.accountsetting}`, {
            method: "POST",
            headers: {
                "Content-type": "multipart/form-data",
                "Authorization": `Bearer ${global.token}`
            },
            body: data
        }).then(async (res) => {
            let response = await res.json();
            setloaderVisible(false);
            if (response.status) {
                AsyncStorageHelper.setData(Constants.USER_DATA, response.data);
                PageNavigation(response)
                Toast.show(response.message);
            } else {
                setloaderVisible(false);
                Toast.show(response.message);
            }
        }).catch(err => {
            console.log("postAccountSetting", err);
            setloaderVisible(false);
            Toast.show("something went wrong");
        })
    }
};

export const handelAddDoctor = (data, setloaderVisible, PageNavigation) => {
    return async dispatch => {
        setloaderVisible(true);
        await fetch(`${URL.baseUrl}${URL.addDoctor}`, {
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
                Toast.show(response.message);
            } else {
                setloaderVisible(false);
                Toast.show(response.message);
            }
        }).catch(err => {
            console.log("handelAddDoctor", err);
            setloaderVisible(false);
            Toast.show("something went wrong");
        })
    }
};

export const HandlDocProfil = (data, setloaderVisible, PageNavigation) => {
    return async dispatch => {
        setloaderVisible(true);
        await fetch(`${URL.baseUrl}${URL.DocProfile}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${global.token}`
            },
            body: JSON.stringify(data)
        }).then(async (res) => {
            let response = await res.json();
            setloaderVisible(false);
            if (response.status) {
                AsyncStorageHelper.setData(Constants.USER_DATA, response.data);
                PageNavigation(response)
                Toast.show(response.message);
            } else {
                setloaderVisible(false);
                Toast.show(response.message);
            }
        }).catch(err => {
            console.log("HandlDocProfil", err);
            setloaderVisible(false);
            Toast.show("something went wrong");
        })
    }
};

export const postMessge = (data, setloaderVisible, PageNavigation) => {
    return async dispatch => {
        setloaderVisible(true);

        await fetch(`${URL.baseUrl}${URL.messageApi}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${global.token}`
            },
            body: JSON.stringify(data)
        }).then(async (res) => {
            let response = await res.json();

            setloaderVisible(false);
            if (response.status) {
                PageNavigation(response)
                Toast.show(response.message);
            } else {
                setloaderVisible(false);
                Toast.show(response.message);
            }
        }).catch(err => {
            console.log("postComment", err);
            setloaderVisible(false);
            Toast.show("something went wrong");
        })
    }
};

export const postComment = (data, setloaderVisible, PageNavigation) => {
    return async dispatch => {
        setloaderVisible(true);
        await fetch(`${URL.baseUrl}${URL.commetApi}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${global.token}`
            },
            body: JSON.stringify(data)
        }).then(async (res) => {
            let response = await res.json();
            setloaderVisible(false);
            if (response.status) {
                PageNavigation(response)
                Toast.show(response.message);
            } else {
                setloaderVisible(false);
                Toast.show(response.message);
            }
        }).catch(err => {
            console.log("postComment", err);
            setloaderVisible(false);
            Toast.show("something went wrong");
        })
    }
};

export const getdoctordetails = (data, setloaderVisible) => {
    return async dispatch => {
        setloaderVisible(true);
        await fetch(`${URL.baseUrl}${URL.doctorDetails}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(async (res) => {
            let response = await res.json();
            setloaderVisible(false);
            if (response.status) {
                dispatch(savedoctordetails(response.data))
            } else {
                setloaderVisible(false);
                Toast.show(response.message);
            }
        }).catch(err => {
            console.log("postBravo", err);
            setloaderVisible(false);
            Toast.show("something went wrong");
        })
    }
};

export const savedoctordetails = (data) => {
    return ({
        type: DOCTORDETAILS,
        payload: data
    })
};

export const postBravo = (data, setloaderVisible, PageNavigation) => {
    return async dispatch => {
        setloaderVisible(true);
        await fetch(`${URL.baseUrl}${URL.bravoApi}`, {
            method: "POST",
            headers: {
                "Content-type": "multipart/form-data",
                "Authorization": `Bearer ${global.token}`
            },
            body: data
        }).then(async (res) => {
            let response = await res.json();
            console.log("response", response);
            setloaderVisible(false);
            if (response.status) {
                PageNavigation(response)
                Toast.show(response.message);
            } else {
                setloaderVisible(false);
                Toast.show(response.message);
            }
        }).catch(err => {
            console.log("postBravo", err);
            setloaderVisible(false);
            Toast.show("something went wrong");
        })
    }
};

export const getDoctorList = (country, state, city) => {
    return async dispatch => {
        // setloaderVisible(true);
        await fetch(`${URL.baseUrl}${URL.doctorlist}?country_name=${country}&state_name=${state}&city_name=${city}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${global.token}`
            }
        }).then(async (res) => {
            let response = await res.json();
            // setloaderVisible(false);
            if (response.status) {
                dispatch(savedoctorList(response.data))
            }
        }).catch(err => {
            console.log("getDoctorList", err);
            // setloaderVisible(false);
        })
    }
};

export const savedoctorList = (data) => {
    return ({
        type: DOCTORLIST,
        payload: data
    })
};

export const postReview = (data, setloaderVisible, PageNavigation) => {
    return async dispatch => {
        setloaderVisible(true);
        await fetch(`${URL.baseUrl}${URL.addReview}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${global.token}`
            },
            body: JSON.stringify(data)
        }).then(async (res) => {
            let response = await res.json();
            setloaderVisible(false);

            if (response.status) {
                PageNavigation(response)
            }
            Toast.show(response.message);
        }).catch(err => {
            console.log("postReview", err);
            setloaderVisible(false);
            Toast.show("something went wrong");
        })
    }
};


export const getServices = (setloaderVisible) => {
    return async dispatch => {
        setloaderVisible(true);
        await fetch(`${URL.baseUrl}${URL.servicesList}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${global.token}`
            },
        }).then(async (res) => {
            setloaderVisible(false);
            let response = await res.json();
            if (response.status) {
                dispatch(saveServices(response.data?.services));
            }
        }).catch(err => {
            setloaderVisible(false);
            console.log("getServices", err);
            Toast.show("something went wrong");
        })
    }
};

export const saveServices = (data) => {
    return ({
        type: SERVICESLIST,
        payload: data
    })
};

/// before using this please check data  
export const PostUserProfile = (data, setloaderVisible = () => { }, callForFeedback = false) => {
    // console.log("data+++++++++++++++++++++++++++++++++++", data);
    return async dispatch => {
        // setloaderVisible(true);
        await fetch(`${URL.baseUrl}${URL.getprofileuRL}?user_id=${data}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
            // body: JSON.stringify(data)
        }).then(async (res) => {
            // console.log("res+++++++++++++++++++++++++++++++++++", res);
            let response = await res.json();
            // console.log("response+++++++++++++++++++++++++++++++++++", response);
            // setloaderVisible(false);
            // Toast.show(response.message);
            if (response.status) {
                if (callForFeedback) {
                    dispatch(saveFeedBackUserProfile(response.data));
                } else {
                    dispatch(setUserData(response.data))
                    dispatch(saveUserProfile(response.data));
                }
            }
            // Toast.show(response.message);
        }).catch(err => {
            console.log("PostUserProfile", err);
            // setloaderVisible(false);
            Toast.show("something went wrong");
        })
    }
};

export const saveFeedBackUserProfile = (data) => {
    return ({
        type: FEEDBACKUSERDATA,
        payload: data
    })
};

export const saveUserProfile = (data) => {
    return ({
        type: USERGETDATA,
        payload: data
    })
};

export const handelNotification = () => {
    return async dispatch => {
        // setloaderVisible(true);
        await fetch(`${URL.baseUrl}${URL.notification}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${global.token}`
            }
        }).then(async (res) => {
            let response = await res.json();
            // setloaderVisible(false);
            if (response.status) {
                dispatch(savegetnotification(response.data))
            }
        }).catch(err => {
            console.log("getnotification", err);
            // setloaderVisible(false);
        })
    }
};

export const savegetnotification = (data) => {
    return ({
        type: NOTIFICATION,
        payload: data
    })
};

export const postLogout = (setloaderVisible, PageNavigation) => {
    return async dispatch => {
        setloaderVisible(true);
        await fetch(`${URL.baseUrl}${URL.userLogout}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${global.token}`
            },
            // body: JSON.stringify(d   ata)
        }).then(async (res) => {
            await AsyncStorageHelper.removeMultiItemValue([Constants.USER_DATA, Constants.TOKEN])
            let response = await res.json();
            console.log(response);
            PageNavigation()
            // await AsyncStorageHelper.removeItemValue(Constants.USER_DATA);
            // await AsyncStorageHelper.removeItemValue(Constants.TOKEN);
            dispatch(logOut())

            setloaderVisible(false);
            Toast.show(response.message);
        }).catch(async (err) => {
            await AsyncStorageHelper.removeMultiItemValue([Constants.USER_DATA, Constants.TOKEN])
            PageNavigation()
            console.log("postLogout", err);
            setloaderVisible(false);
            // Toast.show("something went wrong");
        })
    }
};
