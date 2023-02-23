import { combineReducers } from "@reduxjs/toolkit";

import todo from "../components/todo/reducers";
import userList from "../slices/users";


const rootReducer = combineReducers({
    userList,
    todo
})


export default rootReducer
export type RootState = ReturnType<typeof rootReducer>