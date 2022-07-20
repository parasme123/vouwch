import { BRAVOCARD, SAVEFOLLOWDATA, SAVEALLCOUNTRY, FEEDBACKUSERDATA, DOCTORRECORD, DOCTORRECORDCONCATE, HOMEDATA, NOTIFICATION, CATEGORIES, USERDATA, DOCTORDETAILS, DOCTORLIST, SERVICESLIST, USERGETDATA, MESSAGEANDCOMMENT } from '../action/types';

const initialState = {
    doctorList: [],
    followData: [],
    allCountries: [],
    allHomeData: {},
    allBravoCardDataLIst: [],
    allCategories: {},
    allNotification: [],
    setData: {},
    allDetailsDoc: {},
    lastPage: 1,
    allDoctorlist: [],
    allServices: [],
    allUserPostData: {},
    feedbackUserData: {},
    messageAndComment: [],
};

const ChangeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case DOCTORRECORD:
            return { ...state, doctorList: action.payload, lastPage: 1 };
        case SAVEFOLLOWDATA:
            return { ...state, followData: action.payload }
        case SAVEALLCOUNTRY:
            return { ...state, allCountries: action.payload }
        case MESSAGEANDCOMMENT:
            return { ...state, messageAndComment: action.payload }
        case DOCTORRECORDCONCATE:
            return { ...state, doctorList: state.doctorList.concat(action.payload.data), lastPage: action.payload.last_page }
        case HOMEDATA:
            return { ...state, allHomeData: action.payload };
        case BRAVOCARD:
            return { ...state, allBravoCardDataLIst: action.payload };
        case CATEGORIES:
            return { ...state, allCategories: action.payload };
        case NOTIFICATION:
            return { ...state, allNotification: action.payload };
        case USERDATA:
            return { ...state, setData: action.payload };
        case DOCTORDETAILS:
            return { ...state, allDetailsDoc: action.payload };
        case DOCTORLIST:
            return { ...state, allDoctorlist: action.payload };
        case SERVICESLIST:
            return { ...state, allServices: action.payload };
        case USERGETDATA:
            return { ...state, allUserPostData: action.payload };
        case FEEDBACKUSERDATA:
            return { ...state, feedbackUserData: action.payload };
        default:
            return state;
    }
}

export default ChangeTheNumber;