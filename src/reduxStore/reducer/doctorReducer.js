import { BRAVOCARD, DOCTORRECORD, DOCTORRECORDCONCATE, HOMEDATA, FOLLOW, NOTIFICATION, CATEGORIES, USERDATA, DOCTORDETAILS, DOCTORLIST, SERVICESLIST } from '../action/types';
const initialState = {
    doctorList: [],
    allHomeData: {},
    allBravoCardDataLIst: [],
    allFollowPost: {},
    allCategories: {},
    allNotification: {},
    setData: {},
    allDetailsDoc: {},
    lastPage: 1,
    allDoctorlist: [],
    allServices: [],
};

const ChangeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case DOCTORRECORD:
            return { ...state, doctorList: action.payload, lastPage: 1 };
        case DOCTORRECORDCONCATE:
            return { ...state, doctorList: state.doctorList.concat(action.payload.data), lastPage: action.payload.last_page }
        case HOMEDATA:
            return { ...state, allHomeData: action.payload };
        case BRAVOCARD:
            return { ...state, allBravoCardDataLIst: action.payload };
        case FOLLOW:
            return { ...state, allFollowPost: action.payload };
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
        default:
            return state;
    }
}

export default ChangeTheNumber;