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
    let config={
        method:"",
        url:"",
        data:{

        }
    }
    axios(config)
    .then(res=>{

    })
    .catch(err=>{

    })
}

export {authentication,authRequest,authSuccess,authFailure}