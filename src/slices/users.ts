import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    id: number
    name: string
}


export const userList = createSlice({
    name: "users",
    initialState: [
        {id: 0, name: "admin"},
        {id: 1, name: "User1"},
        {id: 2, name: "User2"},
    ] as User[],

    reducers: {
        addUser(state, action:PayloadAction<User>) {
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name
                }
                ]
        },
        deleteUser(state, action) {
            return state.filter(user => user.id !== action.payload)
        }
    }
})

export const { addUser,deleteUser } = userList.actions
export default userList.reducer