import { BRAVOCARD, DOCTORRECORD, HOMEDATA } from '../action/types';
const initialState = {
    doctorList: [],
    allHomeData:{},
    allBravoCardDataLIst:[]
};

const ChangeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case DOCTORRECORD:
            return { ...state, doctorList: action.payload }
            case HOMEDATA:
                return {...state, allHomeData:action.payload }
                case BRAVOCARD:
                return {...state, allBravoCardDataLIst:action.payload }
        default:
            return state;
    }
}

export default ChangeTheNumber;