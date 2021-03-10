const { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } = require("./actionTypes")

const initState={
    isAuth:false,
    isLoading:false,
    isError:false
}

const authReducer=(state=initState,{type,payload})=>{
    switch(type){
        case AUTH_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case AUTH_SUCCESS:{
            return {
                ...state,
                isError:false,
                isAuth:true,
                isLoading:false,
            }
        }
        case AUTH_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }
        default:
            return state;
    }
}

export {authReducer};