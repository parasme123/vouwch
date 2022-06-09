import { View } from "react-native";

const initialState=0;

export const Review =(state= initialState, action) =>{
    switch (action.type) {
        case "ADDREVIEW":return (
            <View></View>
        )


        
        default : return state ;
    }
}