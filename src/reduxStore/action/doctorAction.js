import { DOCTORRECORD, SEARCHDOCTORDATA } from './types';
import * as URL from './webApiUrl';

export const saveDoctorData = (data) => {
    return ({
        type: DOCTORRECORD,
        payload: data
    })
}

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
}




export const postDoctorSearch = (keyword) => {
    console.log("keyword----------DoctorAction",keyword);
    return async dispatch => {
        await fetch(`${URL.baseUrl}${URL.postDoctorSearch}``$keyword={keyword}`, {
            method: "POST",
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
}

// export const getDoctorData = () => {
//     return async dispatch => {
//         const response = await fetch(`${URL.baseUrl}${URL.getAllDoctors}`, {
//             method: "GET",
//             headers: {
//                 "Content-type": "application/json",
//             }
//         })
//         const json = await response.json();
//         if (json){
//             console.log(json)
//             dispatch(saveDoctorData(json.data.data))
//         }else{
//             console.log("Unable to fetch!");
//         }
//     }
// }

