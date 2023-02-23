import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Auth {
    accessToken: string
    refreshToken: string
    myUserName: string
    myUid: number|null
    myName: string

}

export const auth = createSlice({
    name: "auth",
    initialState:{
        accessToken: "",
        refreshToken: "",
        myUserName: "",
        myUid: null,
        myName:""
    } as Auth,

    reducers: {
        setAccessToken(state, action:PayloadAction<Auth>) {
            return {
                ...state,
                accessToken: action.payload.accessToken
            }
        }
    }

})