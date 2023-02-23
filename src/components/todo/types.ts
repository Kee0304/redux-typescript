import {ActionType} from "typesafe-actions"
import * as actions from "./actions"

export type TodoAction = ActionType<typeof actions>;

// store에서 관리한 state에 대한 타입 정의
export type Todo = {
    todo: Array<string>
}
