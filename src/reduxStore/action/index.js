export const incNumber =() =>{
    return{
        type:"INCREANMENT"
    }
};

export const decNumber =() =>{
    return{
        type:"DECREANMENT"
    }
};

export const doctor_Details =()=>{
    return{
        type:"DETAILSAPI"
    }
};

export const user_type = ()=>{
    return{
        type:"USERTYPE"
    }
}


export const add_message =()=>{
    return{
        type:"ADDMESSAGE"
    } 
}

export const fechUser =()=>{
    return(dispatch) =>{
        dispatch(fetchUssersRequest)

    }
}

// Action Creator

export const addLastNameActionCreator = () => ( dispatch ) => {
    console.log( "[*** 2. inside addLastNameActionCreator]" );
    // Case1: Think returns Loading until receives response
    dispatch( { type: "LOADING" } );
    // Calling the server
    fetch( "https://apponedemo.top/vouwch/api/get-services")
        // Case2 Thunk received response
        .then( response => response.json() )
        .then( responseJson => {
            console.log( "3. received ", responseJson );
            dispatch( {
                type: "RECEIVED",
                payload: responseJson
            } );
        });
}



export const success = () =>({
    type:SUCCESS
})
export const fail = () =>({
    type:FAIL
})

export const datafetch=()=>(dispatch)=>{
    
    dispatch({type:DATAFETCH})
    const url = "https://jsonplaceholder.typicode.com/users"
    console.log(url)//working
    fetch(url)// not working
        .then((res)=>res.json())
        .then((data)=>{
            console.log("Redux",data)
            return dispatch({type:SUCCESS, payload:data})
        })
        .catch((e)=>dispatch({type:FAIL, payload:e}))
}


