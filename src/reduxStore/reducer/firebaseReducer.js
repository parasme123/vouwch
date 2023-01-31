import { USERDATA, CHATLIST, ALL_MESSAGE, ALLUSERLIST, GROUPLIST, ALLADDEDUSERLIST, ALLPARTICIPIANTSLIST } from '../action/firebaseTypes';

const initialState = {
  userData: {},
  chatData: [],
  groupData: [],
  allUsers: [],
  messageUserList: {},
  addedUserList: [],
  participiantsList: []
};

const FirebaseReducer = (state = initialState, action) => {
  // console.log("action.payload", action.payload);
  switch (action.type) {
    case USERDATA:
      return { ...state, userData: action.payload };
    case CHATLIST:
      return { ...state, chatData: action.payload };
    case ALL_MESSAGE:
      return { ...state, messageUserList: action.payload };
    case ALLUSERLIST:
      return { ...state, allUsers: action.payload };
    case GROUPLIST:
      return { ...state, groupData: action.payload };
    case ALLADDEDUSERLIST:
      return { ...state, addedUserList: action.payload };
    case ALLPARTICIPIANTSLIST:
      return { ...state, participiantsList: action.payload };
    default:
      return state;
  }
}

export default FirebaseReducer;