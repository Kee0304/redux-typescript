import { combineReducers } from "redux";
import todo from "../components/todo/reducers";
import { Todo } from "../components/todo/types";

export type RootState = {
    todo : Todo;
}

const rootReducer = combineReducers({
    todo
})

export default rootReducer;