import { 
    BRAVOCARD, 
    DOCTORRECORD, 
    HOMEDATA, 
    FOLLOW, 
    NOTIFICATION, 
    CATEGORIES,
     USERDATA, 
     DOCTORDETAILS,
     DOCTORLIST

} from '../action/types';
const initialState = {
    doctorList: [],
    allHomeData: {},
    allBravoCardDataLIst: [],
    allFollowPost: {},
    allCategories: {},
    allNotification: {},
    setData: {},
    allDetailsDoc: {},
    allDoctorlist:{}

};

const ChangeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case DOCTORRECORD:
            return { ...state, doctorList: action.payload };
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
        default:
            return state;
    }
}

export default ChangeTheNumber;