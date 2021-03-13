import axios from 'axios';
const { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE,LOGOUT, LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } = require("./actionTypes");

const authRequest=()=>{
    return {
        type:AUTH_REQUEST
    }
}

const authSuccess=(payload)=>{
    return {
        type:AUTH_SUCCESS,
        payload
    }
}

const authFailure=()=>{
    return {
        type:AUTH_FAILURE
    }
}

const loginRequest=()=>{
    return {
        type:LOGIN_REQUEST
    }
}

const loginSuccess=(payload)=>{
    return {
        type:LOGIN_SUCCESS,
        payload
    }
}

const loginFailure=()=>{
    return {
        type:LOGIN_FAILURE
    }
}
export const logout = () => {
    return ({
        type: LOGOUT
    })
}
const authentication=(payload)=>(dispatch)=>{
    dispatch(authRequest());
   axios.get("http://localhost:3000/users")
    .then(res=> dispatch(authSuccess(res.data)))
    .catch(err=> dispatch(authFailure()))
}

export {authentication,authRequest,authSuccess,authFailure, loginFailure,  loginSuccess, loginRequest}