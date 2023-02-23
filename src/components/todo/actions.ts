import {createAction} from "typesafe-actions"


// 액션 타입 지정
export const ADD_TODO = "todo/ADD_TODO"
export const DELETE_TODO = "todo/DELETE_TODO"


// 액션 생성 함수
export const addTodo = createAction<typeof ADD_TODO>(ADD_TODO)<{todo: string;}>()
export const deleteTodo = createAction<typeof DELETE_TODO>(DELETE_TODO)()