import { BRAVOCARD, DOCTORRECORD, HOMEDATA, FOLLOW, LOGIN, REGISTER } from '../action/types';
const initialState = {
    doctorList: [],
    allHomeData: {},
    allBravoCardDataLIst: [],
    allFollowPost: {},
    allLoginData: {},
    allRegisterData: {}
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
        case LOGIN:
            return { ...state, allLoginData: action.payload };
        case REGISTER:
            return { ...state, allRegisterData: action.payload };
        default:
            return state;
    }
}

export default ChangeTheNumber;