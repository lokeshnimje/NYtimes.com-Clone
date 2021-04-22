const { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE,LOGOUT,LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE } = require("./actionTypes")

const initState= {
    isAuth:false,
    isLoading:false,
    isError:false,
    data: [],
    user: {}
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
                isLoading:false,
                data: payload
            }
        }
        case AUTH_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }
        case LOGIN_REQUEST:{
            return {
                ...state,
            }
        }
        case LOGIN_SUCCESS:{
            return {
                ...state,
                isAuth:true,
                user: payload
            }
        }
        case LOGIN_FAILURE:{
            return {
                ...state,
                isError:true
            }
        }
        case LOGOUT:
            return {
                ...state,
                isError:false,
                isAuth:false,
                isLoading:false,
            }
        default:
            return state;
    }
}

export {authReducer};