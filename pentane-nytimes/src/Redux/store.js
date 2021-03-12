import {applyMiddleware, combineReducers, createStore} from "redux";
import { authReducer } from "./auth/reducer";
import { getReducer } from "./getData/reducer";
import { searchedReducer } from "./searchedData/reducer";
import thunk from "redux-thunk";

// const rootReducer=combineReducers({auth:authReducer,getData:getReducer});
const rootReducer=combineReducers({auth:authReducer,getData:getReducer, searchedData: searchedReducer});
export const store= createStore(rootReducer,applyMiddleware(thunk));