const { GET_REQUEST, GET_SUCCESS, GET_FAILURE } = require("./actionTypes")

const initState={
    searchedNews:[],
    isLoading:false,
    isError:false
}

const searchedReducer=(state=initState,{type,payload})=>{
    switch(type){
        case GET_REQUEST:{
            return {
                ...state,
                isError:false,
                isLoading:true
            }
        }
        case GET_SUCCESS:{
            return {
                ...state,
                isError:false,
                searchedNews:[...payload],
                isLoading:false
            }
        }
        case GET_FAILURE:{
            return {
                ...state,
                isError:true,
                isLoading:false
            }
        }
        default:{
            return state
        }
    }
}

export { searchedReducer };