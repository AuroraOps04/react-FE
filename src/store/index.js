import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import asideSlice from "./features/asideSlice";
export default  configureStore({
    reducer: {
        user: userSlice,
        aside: asideSlice
    }
})

