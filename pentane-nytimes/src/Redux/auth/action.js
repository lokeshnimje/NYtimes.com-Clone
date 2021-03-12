import axios from 'axios';
const { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } = require("./actionTypes");

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

const authentication=(payload)=>(dispatch)=>{
    dispatch(authRequest());
   axios.get("http://localhost:3000/users")
    .then(res=> dispatch(authSuccess(res.data)))
    .catch(err=> dispatch(authFailure()))
}

export {authentication,authRequest,authSuccess,authFailure}