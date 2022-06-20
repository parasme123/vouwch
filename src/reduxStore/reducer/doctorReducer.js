import { DOCTORRECORD } from '../action/types';
const initialState = {
    doctorList: []
};

const ChangeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case DOCTORRECORD:
            return { ...state, doctorList: action.payload }
        default:
            return state;
    }
}

export default ChangeTheNumber;