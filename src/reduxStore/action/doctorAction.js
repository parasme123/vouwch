import { MESSAGEANDCOMMENT, DOCTORRECORD, DOCTORRECORDCONCATE, HOMEDATA, BRAVOCARD, FOLLOW, CATEGORIES, NOTIFICATION, DOCTORDETAILS, USERDATA, DOCTORLIST, SERVICESLIST } from './types';
import Toast from 'react-native-simple-toast';
import * as URL from './webApiUrl';
import { Constants, AsyncStorageHelper } from "@lib";

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
            console.log("getMessageAndComment", response.data)
            dispatch(saveMessageAndComment(response.data))
        }).catch(err => {
            console.log("getMessageAndComment", err);
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

export const saveFollowPost = (data) => {
    return ({
        type: FOLLOW,
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

export const postDoctorSearch = (data, pageNo = 1) => {
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
            dispatch(saveFollowPost(response.data))
            // console.log("responese===================", response);
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
                AsyncStorageHelper.setData(Constants.USER_DATA, response.data);
                AsyncStorageHelper.setData(Constants.TOKEN, response.token);
                global.token = response.token
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
            // console.log("apiData-------------dTa-----------", data);
            setloaderVisible(false);
            if (response.status) {
                // PageNavigation(response)
                alert("hiii")
            } else {
                setloaderVisible(false);
                alert('hello')
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

export const handelNotification = (setloaderVisible) => {
    return async dispatch => {
        // setloaderVisible(true);
        await fetch(`${URL.baseUrl}${URL.getCategoury}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            }

        }).then(async (res) => {
            let response = await res.json();
            dispatch(saveNotification(response))
            // console.log("res===", response);           //console remove after use 
            // setloaderVisible(false);
        }).catch(err => {
            console.log("getCategories", err);
            // setloaderVisible(false);
        })
    }
};

export const saveNotification = (data) => {
    return ({
        type: NOTIFICATION,
        payload: data
    })
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
            console.log("postBravo", err);
            setloaderVisible(false);
            Toast.show("something went wrong");
        })
    }
};

export const getDoctorList = () => {
    return async dispatch => {
        // setloaderVisible(true);
        await fetch(`${URL.baseUrl}${URL.doctorlist}`, {
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

export const saveServices = (data) => {
    return ({
        type: SERVICESLIST,
        payload: data
    })
};

export const getServices = () => {
    return async dispatch => {
        await fetch(`${URL.baseUrl}${URL.servicesList}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${global.token}`
            },
        }).then(async (res) => {
            let response = await res.json();
            if (response.status) {
                dispatch(saveServices(response.data?.services));
            }
        }).catch(err => {
            console.log("getServices", err);
            Toast.show("something went wrong");
        })
    }
};