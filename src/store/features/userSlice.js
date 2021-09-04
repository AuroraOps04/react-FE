import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {getToken, setToken} from "@utils/auth";
import {loginApi} from "@api/user"

export const login = createAsyncThunk("user/login", async ({username, password}) => {
    return  await loginApi(username, password)

})

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isLogin: !!getToken(),
        userInfo: {}
    },
    reducers: {

    },
    extraReducers: {
        [login.fulfilled](state, {payload: {code, data: {Authorization}}}) {
            if (code === 200 && Authorization) {
                setToken(Authorization)
                state.isLogin = true
            }
        }

    }
})
// export const {} = userSlice.actions

export default userSlice.reducer
