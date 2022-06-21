import { DOCTORRECORD, HOMEDATA } from '../action/types';
const initialState = {
    doctorList: [],
    homeData:{}
};

const ChangeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case DOCTORRECORD:
            return { ...state, doctorList: action.payload }
            case HOMEDATA:
                return {...state, homeData:action.payload }
        default:
            return state;
    }
}

export default ChangeTheNumber;