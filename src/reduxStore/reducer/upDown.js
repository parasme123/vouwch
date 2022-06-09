const initialState=0;

const ChangeTheNumber=(state= initialState, action)=>{
switch (action.type) {
    case "INCREANMENT":return state +1
    case "DECREANMENT":return state -1
    default : return state ;
}
} 

export default ChangeTheNumber;