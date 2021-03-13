const { default: axios } = require("axios")
const { GET_REQUEST, GET_SUCCESS, GET_FAILURE } = require("./actionTypes")

const getRequest=()=>{
    return {
        type:GET_REQUEST
    }
}

const getSuccess=(payload)=>{
    return {
        type:GET_SUCCESS,
        payload
    }
}

const getFailure=()=>{
    return {
        type:GET_FAILURE
    }
}

// Can be used to fetch data in any page, be it homepage, politics,sports,etc...

const fetchNewsData=(url)=>(dispatch)=>{
    
    dispatch(getRequest());
    axios.get(url).then( (res) =>{
        console.log(res.data.response.docs,"hi")
        let action= getSuccess(res.data.response.docs);       
        dispatch(action);
         
    })
    .catch(err=>{
        dispatch(getFailure());
    })
}

export {fetchNewsData};