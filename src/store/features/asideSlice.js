import {createSlice} from "@reduxjs/toolkit";
import {DEFAULT_SELECTED_ROUTE, DEFAULT_OPEN_KEY} from "@utils/constants";

export const asideSlice = createSlice({
    name: "aside",
    initialState: {
        defaultSelectedKeys: [ sessionStorage.getItem(DEFAULT_SELECTED_ROUTE) || "/admin/dashboard"],
        defaultOpenKeys: [sessionStorage.getItem(DEFAULT_OPEN_KEY)] || [],
        opened: true
    },
    reducers: {
        toggleOpened: (state) => {
            state.opened = !state.opened
        },
        setDefaultSelectedKeys: (state, action) => {
            sessionStorage.setItem(DEFAULT_SELECTED_ROUTE, action.payload)
            state.defaultSelectedKeys = action.payload
        },
        setDefaultOpenKeys: (state, action) => {
            sessionStorage.setItem(DEFAULT_OPEN_KEY, action.payload)
            state.defaultSelectedKeys = action.payload
        }
    }
})
export const { toggleOpened, setDefaultSelectedKeys, setDefaultOpenKeys } = asideSlice.actions

export default asideSlice.reducer
