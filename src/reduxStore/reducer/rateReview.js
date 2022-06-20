// import { View } from "react-native";


const initialState = {
    users:[],
    err:''
}

const mainReducer=(state=initialState, action)=>{
    switch (action.type) {

        case SUCCESS:
            return{...state, users:state.users.push(action.payload)}
        case FAIL:
            return{...state, err:'Data not found' }
      
        default:    
            return state
    }
}

export default mainReducer;